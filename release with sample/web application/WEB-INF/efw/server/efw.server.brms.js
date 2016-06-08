/**
 * efw framework server brms library
 * @author Lin He,Liang Tian
 */
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
		var parseValue=function(rs,idx){
			var value=null;
			if( meta.getColumnType(idx) == com.innoexpert.rulesclient.Constants.TYPE_NUMBER){
				value= 0+new Number(rs.getDouble( idx ));
			} else if( meta.getColumnType(idx) == com.innoexpert.rulesclient.Constants.TYPE_STRING){
				value= "" + rs.getString(idx);
			} else if( meta.getColumnType(idx) == com.innoexpert.rulesclient.Constants.TYPE_BOOLEAN){
				value= true && rs.getBoolean(idx);
			}
			return value;
		};
		//change recordset to java array
		while (rs.next()) {
			var rsdata={};
			var maxColumnCount=meta.getColumnCount();
			for (var j=1;j<=maxColumnCount;j++){
				var key=meta.getColumnName(j);
				rsdata[key]=parseValue(rs,j);
			}
			ret.push(EfwServerMapping.prototype.doSingle(rsdata,mapping));
		}
		return ret;		
	},
};
///////////////////////////////////////////////////////////////////////////////
EfwServer.prototype.brms=new EfwServerBRMS();
