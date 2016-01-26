/**
 * efw framework client input behavior library
 * @author Chang Kejun
 */
$(function(){
	$(document).ready(function() {
		window.onhelp = function() {return false;};//stop ie help
	    $(document).keydown(function(e) {
            var keyCode = parseInt(e.keyCode, 10);
            var ctrl=e.ctrlKey;
            var alt=e.altKey;
            var fcsElt=$(":focus");
            var doShortcut=false;
	        if (!isNaN(keyCode) && keyCode >= 112 && keyCode <= 123) {//function key
	        	var key="F"+(keyCode-111);
	            $("[data-shortcut]").each(function(){
	            	var btn=$(this);
	            	var shortcutKey=$(this).attr("data-shortcut");
	            	if(key==shortcutKey){
		            	this.focus();
		            	setTimeout(function(){btn.click();$(fcsElt).focus();},100);
		            	doShortcut=true;
	            	}
	            });
	        }else if(ctrl && !isNaN(keyCode)){
	        	if(keyCode!=17){
	        		var key="CTRL+"+String.fromCharCode(keyCode);
		            $("[data-shortcut]").each(function(){
		            	var btn=$(this);
		            	var shortcutKey=$(this).attr("data-shortcut");
		            	if(key==shortcutKey){
			            	this.focus();
			            	setTimeout(function(){btn.click();$(fcsElt).focus();},100);
			            	doShortcut=true;
		            	}
		            });
	        	}
	        }else if(alt && !isNaN(keyCode)){
	        	if(keyCode!=18){
	        		var key="ALT+"+String.fromCharCode(keyCode);
		            $("[data-shortcut]").each(function(){
		            	var btn=$(this);
		            	var shortcutKey=$(this).attr("data-shortcut");
		            	if(key==shortcutKey){
			            	this.focus();
			            	setTimeout(function(){btn.click();$(fcsElt).focus();},100);
			            	doShortcut=true;
		            	}
		            });
	        	}
	        }
	        if(doShortcut) return false;
	    });
	});

	///////////////////////////////////////////////////////////////////////////
	$(":text,:password,:radio,:checkbox,select,textarea")
	.focus(function(){
		$(this).addClass("efw_input_focus");
	})
	.blur(function(){
		$(this).removeClass("efw_input_focus");
	});
	///////////////////////////////////////////////////////////////////////////
	$("[data-format]")
	.focus(function(){
		var vl=$(this).val();
		if(vl!=""){
			var format=$(this).attr("data-format");
			if(format!=null&&format!=""){
				if(format.indexOf("0")>-1||format.indexOf("#")>-1){//if it is number format
					try{
						$(this).val(EfwClientFormat.prototype.parseNumber(vl,format));
					}catch(e){
						$(this).val("");
					}
				}else{//if it is date format
					try{
						var dt=EfwClientFormat.prototype.parseDate(vl,format);
						var dtstr=EfwClientFormat.prototype._formatDateToNumber(dt,format);
						$(this).val(dtstr);
					}catch(e){
						$(this).val("");
					}
				}
			}
		}
		if (this.selectionStart) {
			this.selectionStart = this.selectionEnd = this.value.length;
		} else {
			this.createTextRange().select();
		}			
	})
	.blur(function(){
		var vl=$(this).val();
		if(vl!=""){
			var format=$(this).attr("data-format");
			if(format!=null&&format!=""){
				if(format.indexOf("0")>-1||format.indexOf("#")>-1){//if it is number format
					try{
						$(this).val(EfwClientFormat.prototype.formatNumber(vl,format));
					}catch(e){$(this).val("");}
				}else{//it it is date format
					var dt=null;
					try{
						dt=EfwClientFormat.prototype._parseDateFromNumber(vl,format);
						if(dt==null){
							dt=EfwClientFormat.prototype.parseDate(vl,format);
						}
						if(dt!=null){
							var dtstr=EfwClientFormat.prototype.formatDate(dt,format);
							$(this).val(dtstr);
						}else{
							$(this).val("");
						}
					}catch(e){
						$(this).val("");
					}
				}
			}
		}
	});
});
