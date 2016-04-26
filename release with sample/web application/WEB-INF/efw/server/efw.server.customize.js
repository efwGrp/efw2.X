/**
 * efw framework server plugins for customize
 * @author Chang Kejun
 */
///////////////////////////////////////////////////////////////////////////////
EfwServer.prototype.prepare=function(event,requestParams){
	//the login check
	//-------------------------------------------------------------------------
	var needlogincheck=EfwServerProperties.prototype.getBoolean("efw.login.check");
	var loginkey=EfwServerProperties.prototype.get("efw.login.key");
	if (needlogincheck && !event.outOfLogin){
		var vl=EfwServerSession.prototype.get(loginkey);
		if (vl==null||vl==""){
			var loginUrl=EfwServerProperties.prototype.get("efw.login.url");
			if (loginUrl==""){
				return {error:{errorMessage:EfwServerMessages.prototype.SessionTimeoutException,}};
			}else{
				return {error:{errorMessage:EfwServerMessages.prototype.SessionTimeoutException,nextUrl:loginUrl}};
			}
		}
	}
	//open database
	//-------------------------------------------------------------------------
	EfwServerDb.prototype.open();

	//add your program here
	//-------------------------------------------------------------------------
	//TODO
	return null;
};
///////////////////////////////////////////////////////////////////////////////
EfwServer.prototype.finish=function(event,requestParams,eventResult){
	//close database
	//-------------------------------------------------------------------------
	if (eventResult){
		EfwServerDb.prototype.commit();
	}else{
		EfwServerDb.prototype.rollback();
	}
	EfwServerDb.prototype.closeAll();
	
	//add your program here
	//-------------------------------------------------------------------------
	//TODO
	
};
