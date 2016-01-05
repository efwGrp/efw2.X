/**
 * efw framework server format library
 * @author Chang Kejun
 * the value of rounder:  UP,DOWN,CEILING,FLOOR,HALF_UP,HALF_DOWN,HALF_EVEN
 */
///////////////////////////////////////////////////////////////////////////////
var EfwServerFormat=function(){};
///////////////////////////////////////////////////////////////////////////////
EfwServerFormat.prototype={
	"formatNumber":function(value,formatter,rounder){
		value = Number(value);
		if(isNaN(value)) return "";//if it is not number return ""
		return ""+Packages.efw.format.FormatManager.formatNumber(value,formatter,rounder);
	},
//=============================================================================
	"parseNumber":function(value,formatter){
		value += ""; //change value to string if it is a number
		if (!value) return null; //if value is blank return null
		return 0+new Number(Packages.efw.format.FormatManager.parseNumber(value,formatter));
	},
///////////////////////////////////////////////////////////////////////////////
	"formatDate":function(value,formatter){
		if(value==null) return "";//it value is not null, return ""
		if(!value.getTime) return "";//if value is not date, return ""
		return ""+Packages.efw.format.FormatManager.formatDate(value.getTime(),formatter);
	},
//=============================================================================
	"parseDate":function(value,formatter){
		value += ""; //change value to string if it is not string
		if (!value) return null; //if value is blank return null
		var dt=new Date();
		dt.setTime(Packages.efw.format.FormatManager.parseDate(value,formatter).getTime());
		return dt;
	},
};
///////////////////////////////////////////////////////////////////////////////
EfwServer.prototype.format=new EfwServerFormat();

