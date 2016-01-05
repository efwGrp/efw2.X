/**
 * efw framework server library
 * @author Chang Kejun
 */
///////////////////////////////////////////////////////////////////////////////
var _serverfolder;
var _eventfolder;
var _isdebug;
var _engine;// Mozilla Rhino 1.6 1.7 / Oracle Nashorn 1.8
///////////////////////////////////////////////////////////////////////////////
if (_engine.getFactory().getEngineName()=="Mozilla Rhino"){//java 1.6 1.7
	function load(filename) { Packages.efw.script.ScriptManager.load(filename);}
	if(_engine.getFactory().getEngineVersion()<"1.7"){//java 1.6
		load(_serverfolder+"/json2.min.js");
	}
}
///////////////////////////////////////////////////////////////////////////////
function doPost(req){
	reqJson=JSON.parse(req);
	var eventId=reqJson.eventId;
	var params=reqJson.params;
	var event=efw.server.event.load(eventId);
	//return it
	//-----------------------------------------------------
	if (params==null){
		return JSON.stringify(efw.server.getParamsFormat(event));
	}else{
		var errors=efw.server.check(event,params);
		if(errors==null){
			return JSON.stringify(efw.server.fire(event,params));
		}else{
			return JSON.stringify(errors);
		}
	}
};
///////////////////////////////////////////////////////////////////////////////
var Efw=function(){};
var EfwServer=function(){};

EfwServer.prototype={
	//-----------------------------------------------------
	"getParamsFormat":function(event){
		//the function to clone JSON　and run requestParams format function 
		function cloneJSON(obj) {
		    // basic type deep copy
		    if (obj===null||obj===undefined){
		    	return obj;
		    }else if(typeof obj=="function"){
		    	return obj();
		    }else if(typeof obj!=="object"){
		    	return obj;
		    }if (obj instanceof Array) {
		    // array deep copy
		        var cloneA=[];
		        for (var i=0;i<obj.length;++i)cloneA[i] = cloneJSON(obj[i]);
		        return cloneA;
		    }else{
			    // object deep copy
			    var cloneO = {};
			    for (var i in obj) cloneO[i] = cloneJSON(obj[i]);
			    return cloneO;
		    }
		}
		//if(event.prepare)event.prepare();//
		var paramsFormat=cloneJSON(event.paramsFormat);//get the paramsFormat info
		var include=event.include;//get the include info
		if (include!=null){//it the include is not null,merge paramsFormat of sub events to main event
			for(var i=0;i<include.length;i++){
				if (include[i].mergeParamsFormat){
					var eventsub=EfwServerEvent.prototype.load(include[i].eventId);
					var subparamsFormat=cloneJSON(eventsub.paramsFormat);
					for (var key in subparamsFormat){
						paramsFormat[key]=subparamsFormat[key];//only the top layer,not into sub layer.
					}
				}
			}
		}
		return paramsFormat;
	},

	
	//-----------------------------------------------------
	"check":function(event,requestParams){
		//create message
		function _createMessage(msg,pattern,value){
			var regex = new RegExp(pattern,"g");
			return msg.replace(regex,value);
		}
		//required,format,display-name,max-length,min,max,
		function _check(pms,fts,parentkey){
			var ret=[];
			if(parentkey!=null&&parentkey!="")parentkey+=" ";//splitted by [ ]
			//check requestParams by every format define
			for(var key in fts){
				var paramdef=fts[key];
				var param=pms[key];
				
				if(paramdef==null){//if format define is null
					//do nothing
				}else if(Array.isArray(paramdef)){//if format define is array
					if(param!=null){
						for(var i=0;i<paramdef.length;i++){//loop it to validate items in the array
							ret=ret.concat(_check(param[i],paramdef[0],parentkey+key+":eq("+i+")"));
						}
					}
				}else if(typeof paramdef ==="object"){//if format define is object
					if(param!=null){//validate attributes in the object
						ret=ret.concat(_check(param,paramdef,parentkey+key));
					}
				//=================================================
				//if paramdef is string ,it means validators
				//=================================================
				}else if(typeof paramdef =="string"){
					var validators={};
					//split with [;] then split with fist [:] to get
					var tempAry=paramdef.split(";");
					for(var i=0;i<tempAry.length;i++){
						 var vdtr=tempAry[i];
						 var point=vdtr.indexOf(":");
						 if(point>0) validators[vdtr.substring(0,point)]=vdtr.substring(point+1);
					}

					var required=validators["required"];
					var format=validators["format"];
					var displayName=validators["display-name"];
					var maxLength=validators["max-length"];
					var min=validators["min"];
					var max=validators["max"];
					var minv=null;
					var maxv=null;
					var value=null;
					var errorElementKey=parentkey+key;//splitted by [ ] 
					//if data is not inputed
					//---------------------------------------------
					if (param==null||param==""){
						//check required
						//-----------------------------------------
						if(required=="true"){
							var message=EfwServerMessages.prototype.IsRequiredMessage;
							message=_createMessage(message,"{display-name}",displayName);
							ret.push({errorMessage:message,element:errorElementKey});
							continue;
						}
					}else{
						//check format and convert data type
						//---------------------------------------------
						if(format!=null && format!=""){
							if(format.indexOf("#")>-1||format.indexOf("0")>-1){//number #,##0.0
								var num=null;
								try{
									num=EfwServerFormat.prototype.parseNumber(param,format);
									pms[key]=num;
								}catch(e){
									var message=EfwServerMessages.prototype.NumberIsReuqiredMessage;
									message=_createMessage(message,"{display-name}",displayName);
									ret.push({errorMessage:message,element:errorElementKey});
									continue;
								}
								if(num!=null){
									try{minv=EfwServerFormat.prototype.parseNumber(min,format);}catch(e){}
									try{maxv=EfwServerFormat.prototype.parseNumber(max,format);}catch(e){}
								}
								value=num;
							}else{//date yyyy/MM/dd
								var dt=null;
								try{
									dt=EfwServerFormat.prototype.parseDate(param,format);
									pms[key]=dt;
								}catch(e){
									var message=EfwServerMessages.prototype.DateIsReuqiredMessage;
									message=_createMessage(message,"{display-name}",displayName);
									ret.push({errorMessage:message,element:errorElementKey});
									continue;
								}
								if(dt!=null){
									try{minv=EfwServerFormat.prototype.parseDate(min,format);}catch(e){}
									try{maxv=EfwServerFormat.prototype.parseDate(max,format);}catch(e){}
								}
								value=dt;
							}
						}else{//if the data is string,check maxlength
							var maxLengthv=new Number(maxLength);if(isNaN(maxLengthv))maxLengthv=null;
							if (maxLengthv!=null){
								if(param.length>maxLengthv){
									var message=EfwServerMessages.prototype.MaxLengthOverMessage;
									message=_createMessage(message,"{display-name}",displayName);
									message=_createMessage(message,"{max-length}",maxLength);
									ret.push({errorMessage:message,element:errorElementKey});
									continue;
								}
							}
							if(min==null||min==undefined)minv=null;else minv=min;
							if(max==null||max==undefined)maxv=null;else maxv=max;
							value=param;
						}
						var message=null;
						if(minv!=null&&maxv!=null){
							if(value<minv||value>maxv){
								message=EfwServerMessages.prototype.MinOrMaxOverMessage;
							}
						}else if(minv!=null){
							if(value<minv){
								message=EfwServerMessages.prototype.MinOverMessage;
							}
						}else if(maxv!=null){
							if(value<maxv){
								message=EfwServerMessages.prototype.MaxOverMessage;
							}
						}
						if(message!=null){
							message=_createMessage(message,"{display-name}",displayName);
							message=_createMessage(message,"{min}",min);
							message=_createMessage(message,"{max}",max);
							if(value.toFixed)message=_createMessage(message,"{data-type}","数字");
							else if(value.getTime)message=_createMessage(message,"{data-type}","日付");
							else message=_createMessage(message,"{data-type}","文字");
							ret.push({errorMessage:message,element:errorElementKey});
							continue;
						}
					}
				}
			}
			return ret;
		}		
		var paramsFormat=EfwServer.prototype.getParamsFormat(event);
		var validateError=_check(requestParams,paramsFormat,"");
		if(validateError.length>0){
			var errmsg="";
			var elements="";
			for(var i=0;i<validateError.length;i++){
				errmsg+=validateError[i].errorMessage+"\n";
				if(i>0){elements+=",";}
				elements+=validateError[i].element;
			}
			var fcsto=validateError[0].element;
			return {error:{errorMessage:errmsg,focusTo:fcsto,elements:elements}};
		}else{
			return null;
		}
	},

	//-----------------------------------------------------
	"fire":function(event,requestParams){
		var result=EfwServer.prototype.prepare(event,requestParams);
		if(result!=null){
			return result;
		}else{
			try{
				result=event.fire(requestParams);
				EfwServer.prototype.finish(event,requestParams,result);
				return result;
			}catch(e){
				EfwServer.prototype.finish(event,requestParams,null);
				throw e;
			}
		}
	},
};
///////////////////////////////////////////////////////////////////////////////
load(_serverfolder+"/efw.server.messages.js");
load(_serverfolder+"/efw.server.format.js");
load(_serverfolder+"/efw.server.properties.js");
load(_serverfolder+"/efw.server.session.js");
load(_serverfolder+"/efw.server.db.js");
load(_serverfolder+"/efw.server.event.js");
load(_serverfolder+"/efw.server.customize.js");
///////////////////////////////////////////////////////////////////////////////
Efw.prototype.server=new EfwServer();
///////////////////////////////////////////////////////////////////////////////
var efw=new Efw();
