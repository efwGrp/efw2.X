/**
 * efw framework server properties library
 * @author Chang Kejun
 */
var EfwServerProperties=function(){};
///////////////////////////////////////////////////////////////////////////////
EfwServerProperties.prototype={
	"get":function(key,defaultValue){
		var dv;
		if (defaultValue==undefined){
			dv=null;
		}else{
			dv=defaultValue+"";
		}
		return Packages.efw.properties.PropertiesManager.getProperty(key,dv);
	},
	"getBoolean":function(key,defaultValue){
		var dv;
		if (defaultValue==undefined){
			dv=false;
		}else{
			dv=defaultValue && true;
		}
		return Packages.efw.properties.PropertiesManager.getBooleanProperty(key,dv);
	},
	"getInt":function(key,defaultValue){
		var dv;
		if (defaultValue==undefined){
			dv=0;
		}else{
			dv=defaultValue +0;
		}
		return Packages.efw.properties.PropertiesManager.getIntProperty(key,dv);
	},	
};
///////////////////////////////////////////////////////////////////////////////
EfwServer.prototype.properties=new EfwServerProperties();
