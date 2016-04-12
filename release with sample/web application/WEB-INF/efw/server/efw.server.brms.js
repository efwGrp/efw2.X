///////////////////////////////////////////////////////////////////////////////
var EfwServerBRMS=function(){};
///////////////////////////////////////////////////////////////////////////////
EfwServerBRMS.prototype={
	"getSingle":function(executionParams){
		var ret=EfwServerBRMS.prototype.executeQuery(executionParams);
		if(ret.length>0) return ret[0];
		else return null;
	},
	"executeQuery":function(executionParams){
		var ruleCode = executionParams.ruleCode;
		var ruleDate;
		var mapping=executionParams.mapping;
		var aryParam=executionParams.params;
		var params=new java.util.HashMap();
		if(executionParams.ruleDate != null&&executionParams.ruleDate != ""){
			ruleDate = executionParams.ruleDate;	
		}else{
			ruleDate = efw.server.format.formatDate(new Date(),"yyyy-MM-dd");
		}
		for(var key in aryParam){
			var vl=aryParam[key];
			
			if(vl==null||vl=="")vl=null;
			params.put(key,vl);
		}
   
		var rs= Packages.efw.brms.BrmsManager.execute(ruleCode,ruleDate,params);
		var ret=[];
		var meta=rs.getMetaData();
		var iColCnt = meta.getColumnCount();
		//change recordset to java array
		while (rs.next()) {
			var item={};
			var rsdata={};
			for( var i = 1; i <= iColCnt; i++ ){
				var key= "" + meta.getColumnName(i);
                	 if( meta.getColumnType(i) == new Number(com.innoexpert.rulesclient.Constants.TYPE_NUMBER)){
					rsdata[key] = 0+new Number(rs.getDouble( i ));
                	 } else if( meta.getColumnType(i) == new Number(com.innoexpert.rulesclient.Constants.TYPE_STRING)){
	            		 rsdata[key]="" + rs.getString(i);
	     		} else if( meta.getColumnType(i) == new Number(com.innoexpert.rulesclient.Constants.TYPE_BOOLEAN)){
					rsdata[key] = (true && rs.getBoolean( i ));
				}

			}	
			if (mapping!=null){
				for(var key in mapping){
					var mp=mapping[key];
					if(typeof mp =="string"){
						var vl=rsdata[mp];
						item[key]=vl;
					}else if(typeof mp =="function"){
						var vl=mp(rsdata);
						item[key]=vl;
					}else if(typeof mp =="object" && Array.isArray(mp)){
						var vl=rsdata[mp[0]];
						var ft=mp[1];
						if(vl!=null&&ft!=null){
							if(vl.toFixed){//if vl is number #,##0.00
								var round=""+mp[2];
								vl=EfwServerFormat.prototype.formatNumber(vl,ft,round);
							}else if(vl.getTime){//if vl is date yyyyMMdd
								vl=EfwServerFormat.prototype.formatDate(vl,ft);
							}
							//if vl is not date or number, it should not have format
						}
						item[key]=vl;
					}
				}
			}else{
				item=rsdata;
			}
			ret.push(item);
		}
		return ret;		
	},
};
///////////////////////////////////////////////////////////////////////////////
EfwServer.prototype.brms=new EfwServerBRMS();
