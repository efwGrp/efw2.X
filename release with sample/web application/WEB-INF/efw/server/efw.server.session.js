/**
 * efw framework server session library
 * @author Chang Kejun
 */
var EfwServerSession=function(){};
///////////////////////////////////////////////////////////////////////////////
EfwServerSession.prototype={
	"get":function(key){
		return Packages.efw.efwServlet.getRequest().getSession().getAttribute(key);
	},
	"set":function(key,value){
		Packages.efw.efwServlet.getRequest().getSession().setAttribute(key,value);
	},

};
///////////////////////////////////////////////////////////////////////////////
EfwServer.prototype.session=new EfwServerSession();
