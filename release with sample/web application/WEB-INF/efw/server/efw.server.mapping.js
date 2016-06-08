/**
 * efw framework server session library
 * @author Chang Kejun
 */
var EfwServerMapping=function(){};
///////////////////////////////////////////////////////////////////////////////
EfwServerMapping.prototype={
	"searchSingle":function(rs,searchKeyValues,pickupKey){
		for(var i=0;i<rs.length;i++){
			var tf=true;
			for(var key in searchKeyValues){
				if(rs[i][key]!=searchKeyValues[key]){
					tf=false;
				}
			}
			if(tf){
				if(pickupKey==null){
					return rs[i];
				}else{
					return rs[i][pickupKey];
				}

			}
		}
		return null;
	},
	"convert":function(rs,mapping){
		var ret=[];
		for(var i=0;i<rs.length;i++){
			var rsdata=rs[i];
			ret.push(EfwServerMapping.prototype.doSingle(rsdata,mapping));
		}
		return ret;
	},
	"doSingle":function(rsdata,mapping){
		var itemfix=null;
		var item={};
		if (mapping!=null){
			for(var key in mapping){
				var mp=mapping[key];
				if(typeof mp =="string"){
					var vl=rsdata[mp];
					item[key]=vl;
				}else if(typeof mp =="function"){
					var vl=mp(rsdata,itemfix);
					item[key]=vl;
				}else if(typeof mp =="object" && mp instanceof Array){
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
		return item;
	},

};
///////////////////////////////////////////////////////////////////////////////
EfwServer.prototype.mapping=new EfwServerMapping();
