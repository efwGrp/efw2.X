/**
 * efw framework client library
 * @author Chang Kejun
 */
///////////////////////////////////////////////////////////////////////////////
jQuery.support.cors = true;
///////////////////////////////////////////////////////////////////////////////
var Efw=function(){};
var EfwClient=function(){};
///////////////////////////////////////////////////////////////////////////////
EfwClient.prototype={
	//=========================================================================
	"fire":function(eventParams){
		var eventId=eventParams.eventId;
		var manualParams=eventParams.manualParams;
		var successCallback=eventParams.success;
		EfwClient.prototype._consoleLog("First calling parameters",eventParams);
		//define of the return object
		//---------------------------------------------------------------------
		//the first calling
		//---------------------------------------------------------------------
		EfwClient.prototype._displayLoading();
		var servletUrl="efwServlet";
		if(eventParams.server)servletUrl=eventParams.server+"/"+servletUrl;
		$.ajax({
			url: servletUrl,
			type: "POST",//post method
			cache: false,//don't use cache
			async: true,//don't use async
			dataType: "json",//send or get data by json type
			//first calling only send groupid and eventid
			data:{"data":JSON.stringify({"eventId":eventId})},
			
			success: function(data){
				EfwClient.prototype._consoleLog("First calling result",data);
				//if it is success,the data must be a json object.
				if (data.error){//if it is error from efw server side
					EfwClient.prototype._returnAlert(data.error,eventId);
				}else{//if no error, run the second fire
					EfwClient.prototype._fire2nd(eventId,data,manualParams,successCallback,servletUrl);
				}
			},
			error: function(errorResponse, errorType, errorMessage){
				var e={};
				e.errorResponse=errorResponse;
				e.errorType=errorType;
				e.errorMessage=errorMessage;
				EfwClient.prototype._consoleLog("First calling error",e);
				EfwClient.prototype._returnAlert(e,eventId);
			}
		});
	},
	//=========================================================================
	"pickup":function(paramsFormat,manualParams){
		try{
			return EfwClient.prototype._pickupParams(paramsFormat,document.body,manualParams);
		}catch(e){
			EfwClient.prototype._consoleLog("Params format error",e);
			EfwClient.prototype._returnAlert({errorType:"ParamsFormatErrorException",canNotContinue:true});
			throw e;//use it to break user program.
		}
	},
	//=========================================================================
	"show":function(eventResult){
		try{
			EfwClient.prototype._showValues(eventResult);
		}catch(e){
			EfwClient.prototype._consoleLog("Show values error",e);
			EfwClient.prototype._returnAlert({errorType:"ShowValuesErrorException",canNotContinue:true});
			throw e;//use it to break user program.
		}
	},
	//=========================================================================
	"alert":function(message,callback){
		if($("body").dialog){
			if($("#efw_client_alert").size()==0){
				$("body").append("<div id='efw_client_alert'><p></p></div>");
				$("#efw_client_alert")
				.dialog({
					modal: true,
					width:500,
					title:"メッセージ",
					buttons: {"OK":function(){
						$(this).dialog("close").remove();
						if(callback)callback();
					}}
				});
			}
			message=message.replace(/\n/g,"<br>");
			$("#efw_client_alert p").html(message);
			$("#efw_client_alert").dialog("open");
		}else{
			alert(message);
			if(callback)callback();
		}
	},
///////////////////////////////////////////////////////////////////////////////
	"_fire2nd":function(eventId,paramsFormat,manualParams,successCallback,servletUrl){
		//auto collect params
		//---------------------------------------------------------------------
		try{
			//the first calling return data is paramsformat,use it to get params
			var params=EfwClient.prototype._pickupParams(paramsFormat,document.body,manualParams);
		}catch(e){
			EfwClient.prototype._consoleLog("Params format error",e);
			//the params can not be pickup, it is program error.
			EfwClient.prototype._returnAlert({errorType:"ParamsFormatErrorException",canNotContinue:true},eventId);
			return;
		}
		this._consoleLog("Second calling parameters",params);
		//the second calling
		//---------------------------------------------------------------------
		$.ajax({
			url: servletUrl,
			type: "POST",//post method
			cache: false,//don't use cache
			async: true,//don't use async
			dataType: "json",//send or get data by json type
			//first calling only send groupid and eventid
			data:{"data":JSON.stringify({"eventId":eventId,"params":params})},
			success: function(data){
				EfwClient.prototype._consoleLog("Second calling result",data);
				if($.type(data)=="array"){
					try{
						EfwClient.prototype._showValues(data);
					}catch(e){
						EfwClient.prototype._consoleLog("Second calling error",e);
						EfwClient.prototype._returnAlert({errorType:"ShowValuesErrorException",canNotContinue:true},eventId);
						return;
					}
					try{
						if (successCallback)successCallback(data);
						EfwClient.prototype._removeLoading();
					}catch(msg){
						var e={};
						e.errorType="success function";
						e.errorMessage=msg;
						EfwClient.prototype._consoleLog("Success function error",e);
						EfwClient.prototype._returnAlert({errorType:"SuccessCallbackErrorException",canNotContinue:true},eventId);
					}
				}else{
					if (data.error){
						EfwClient.prototype._returnAlert(data.error);
						if(data.error.canNotContinue==undefined||data.error.canNotContinue==false){
							EfwClient.prototype._removeLoading();
						}
					}else{
						var e={};
						e.errorType="data type";
						e.errorMessage="The second calling return is not an array.";
						EfwClient.prototype._consoleLog("Second calling error",e);
						EfwClient.prototype._returnAlert({errorType:"ReturnIsNotArrayErrorException",canNotContinue:true},eventId);
					}
				}
			},
			error: function(errorResponse, errorType, errorMessage){
				var e={};
				e.errorResponse=errorResponse;
				e.errorType=errorType;
				e.errorMessage=errorMessage;
				EfwClient.prototype._consoleLog("Second calling error",e);
				EfwClient.prototype._returnAlert(e,eventId);
			}
		});	
	},
	//=========================================================================
	"_pickupParams":function(paramsFormat,context,manualParams){
		var data={};
		for(var key in paramsFormat){
			var format=paramsFormat[key];
			var element=$(key,$(context));
			var vl=null;
			//if format is null, it means the value should be a string.
			//if format is string exp 'yyyy/MM/dd', 
			//   it means the value should be parsed by the format in server.
			if (format==null||$.type(format)=="string"){
				if (element.length==1){
					var tgNm=element[0].tagName;
					if(tgNm=="INPUT"||tgNm=="SELECT"||tgNm=="TEXTAREA"){
						vl=element.val();
						if(element[0].type=="checkbox"){
							if(!element[0].checked){
								vl=null;
							}
						}
					}else{
						vl=element.text();
					}
				}else if (element.length==0){
					var isMatched=false;
					if(manualParams!=null){
						vl=manualParams[key];
						if (vl!=null){
							isMatched=true;
						}
					}
					if (!isMatched){
						var e={};
						e.errorType="not matched";
						e.errorMessage="'"+key+"' is not matched to any element.";
						throw e;
					}
				}else{
					var e={};
					e.errorType="not matched";
					e.errorMessage="'"+key+"' can not be matched to multiple elements.";
					throw e;
				}
			}else if($.type(format)=="array"){
				if ($.type(format[0])=="object"){
					var ary=[];
					$(element).each(
						function(idx,dom){
							ary.push(EfwClient.prototype._pickupParams(format[0],dom,manualParams));
						}
					);
					vl=ary;
				}else{
					var e={};
					e.errorType="not matched";
					e.errorMessage="'"+key+"' in params format should be an object.";
					throw e;
				}
			}else if($.type(format)=="object"){
				vl=EfwClient.prototype._pickupParams(format,element,manualParams);
			}else{
				var e={};
				e.errorType="not matched";
				e.errorMessage="'"+key+"' in params format can not be a simple data.";
				throw e;
			}
			data[key]=vl;
		}
		return data;
	},
	//=========================================================================
	"_showValues":function(eventResult){
		//return value to html
		//---------------------------------------------------------------------
		//ret.data is array of running data
		//sample 
		for(var running_idx=0;running_idx<eventResult.length;running_idx++){
			var running=eventResult[running_idx];
			//"runat" must match only one html object.
			var attr_runat=running["runat"];
			if(attr_runat==null||attr_runat=="")attr_runat="body";
			var runat=$(attr_runat);

			var attr_removeeach=running["remove"];
			if(attr_removeeach!=""&&attr_removeeach!=null){
				$(attr_removeeach,$(runat)).remove();
			}
			
			var withdata=running["withdata"];
			var attr_appendmask=running["append"];
			
			//if appendmask is nothing the withdata must be object
			//-----------------------------------------------------------------
			if(attr_appendmask==""||attr_appendmask==null){
				//if return data is nothing, then do nothing
				if (withdata==null){
					continue;
				//if return data is not object, then error
				}else if($.type(withdata)!="object"){
					var e={};
					e.errorType="not matched";
					e.errorMessage="If without appendmask,the withdata for [runat="+attr_runat +"] should be an object.";
					throw e;
				}else{
					//try to set the data in withdata by the key.
					for(var withdata_key in withdata){
						var data=withdata[withdata_key];
						if (data==null)data="";//if data isnull then change it to blank
						if($.type(data)!="string"&&$.type(data)!="number"&&$.type(data)!="date"){
							var e={};
							e.errorType="not matched";
							e.errorMessage="The data "+ data +" in withdata of [runat="+attr_runat +"] should be a simple type.";
							throw e;
						}
						//you can only set data to the html range of runat
						//you can not set data both in and out of runat
						$(withdata_key,$(runat)).each(function(){
							if(	//set data to value 
								  (this.tagName=="INPUT"&&this.type=="text")
								||(this.tagName=="INPUT"&&this.type=="password")
								||(this.tagName=="INPUT"&&this.type=="button")
								||(this.tagName=="INPUT"&&this.type=="hidden")
								||(this.tagName=="INPUT"&&this.type=="file")
								||(this.tagName=="TEXTAREA")
							){
								$(this).val(data);
							}else if(//set data with checked attribute
								  (this.tagName=="INPUT"&&this.type=="checkbox")
								||(this.tagName=="INPUT"&&this.type=="radio")
							){
								if (withdata[withdata_key]==$(this).val()){
									$(this).attr("checked",true); 
								}else{
									$(this).removeAttr("checked"); 
								}
							}else if(this.tagName=="SELECT"){//set data with selected attribute
								var dataAry=(""+data).split(",");
								$("option",$(this)).removeAttr("selected");
								for(var dataAry_idx=0;dataAry_idx<dataAry.length;dataAry_idx++){
									$("option",$(this)).each(function(){
										if(this.value==dataAry[dataAry_idx]){
											this.selected=true;
										}
									});
								}
							}else{//set data to text
								$(this).text(data);
							}
						});
					}
				}
			//-----------------------------------------------------------------
			}else{
				if($.type(attr_appendmask)!="string"){
					var e={};
					e.errorType="not matched";
					e.errorMessage="Appendmask should be a string.";
					throw e;
				}				
				//if return data is nothing, then do nothing
				if (withdata==null){
					continue;
				//if return data is not array, then error
				}else if($.type(withdata)!="array"){
					var e={};
					e.errorType="not matched";
					e.errorMessage="If with appendmask,the withdata for [runat="+attr_runat +"] should be an array of object.";
					throw e;
				}else{
					$(runat).each(function(){
						for(var withdata_idx=0;withdata_idx<withdata.length;withdata_idx++){
							var dataRow=withdata[withdata_idx];
							if($.type(dataRow)!="object"){
								var e={};
								e.errorType="not matched";
								e.errorMessage="The withdata for [runat="+attr_runat +"] should be an array of object.";
								throw e;
							}
							var temp_appendmask=attr_appendmask;
							for(var dataRow_key in dataRow){
								var data=dataRow[dataRow_key];
								if (data==null){data="";}else{data=""+data;}//if data isnull then change it to blank
								temp_appendmask=temp_appendmask.split("{{"+dataRow_key+"}}").join(data);
								data=data.replace(/&/g,'&amp;').replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
								temp_appendmask=temp_appendmask.split("{"+dataRow_key+"}").join(data);
							}
							$(this).append(temp_appendmask);
						}
					});
				}
			}
		}
	},
	//=========================================================================
	"_consoleLog":function(msg,data){
		if (window.console){
			var date =new Date();
			var format = 'YYYY-MM-DD hh:mm:ss.SSS';
			format = format.replace(/YYYY/g, date.getFullYear());
			format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
			format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
			format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
			format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
			format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
			if (format.match(/S/g)) {
				var milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
				var length = format.match(/S/g).length;
				for (var i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1));
			}
			console.log(format+" "+msg+" = "+JSON.stringify(data));
		}
	},
	//=========================================================================
	"_displayLoading":function(){
		if($("#loading").size()==0){
			$("body").append("<div id='loading' class='ui-widget-overlay ui-front'></div>");
		}
	},
	//=========================================================================
	"_removeLoading":function(){
		$("#loading").remove();
	},
	//=========================================================================
	"_returnAlert":function(error,eventId){
		var msg=EfwClient.prototype.messages[error.errorType];
		if (msg==null){
			if (error.errorMessage){
				msg=error.errorMessage;
			}else{
				msg=EfwClient.prototype.messages.OtherErrorException;
			}
		}
		if (error.canNotContinue){
			msg+="\n"+EfwClient.prototype.messages.CanNotContinueMessage;
		}
		if (eventId){
			msg+="\n"+"eventId="+eventId;
		}
		this.alert(
			msg,
			function(){
				if(error.focusTo){
					try{$(error.focusTo).focus();}catch(e){}
				}
				$(".efw_input_error").removeClass("efw_input_error");
				if(error.elements){
					$(error.elements).addClass("efw_input_error");
				}
			}
		);
	},
};
///////////////////////////////////////////////////////////////////////////////
Efw.prototype.client=new EfwClient();
///////////////////////////////////////////////////////////////////////////////
var efw=new Efw();

