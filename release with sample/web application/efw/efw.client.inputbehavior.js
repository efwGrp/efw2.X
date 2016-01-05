/**
 * efw framework client input behavior library
 * @author Chang Kejun
 */
$(function(){
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
