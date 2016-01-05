/**
 * efw framework server event library
 * @author Chang Kejun
 */
var EfwServerEvent=function(){};
///////////////////////////////////////////////////////////////////////////////
EfwServerEvent.prototype={
	"_loadedEvents":{},
	//-----------------------------------------------------
	"load":function(eventId){
		//load event
		var needLoad=false;
		if (_isdebug){//if it is debug, load it again every time.
			needLoad=true;
		}else{
			//if the event has not loaded, load it.
			if (!EfwServerEvent.prototype._loadedEvents.hasOwnProperty(eventId)){
				needLoad=true;
			}
		}
		if(needLoad){//do load
			(function doInclude(eventId,_loadedEvents){
				load(_eventfolder+"/"+eventId+".js");
				var event=eval("("+eventId+")");
				_loadedEvents[eventId]=event;
				var include=event.include;
				if (include!=null) for(var i=0;i<include.length;i++) doInclude(include[i].eventId,_loadedEvents);
			})(eventId,EfwServerEvent.prototype._loadedEvents);
		}
		return EfwServerEvent.prototype._loadedEvents[eventId];
	},
};
///////////////////////////////////////////////////////////////////////////////
EfwServer.prototype.event=new EfwServerEvent();

