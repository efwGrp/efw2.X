var mdclexam_login={};
mdclexam_login.outOfLogin=true;
mdclexam_login.paramsFormat={
	"#txt_uid":"required:true;display-name:アカウント;max-length:5",
	"#txt_pwd":"required:true;display-name:パスワード",
	"#txt_testnumber":"format:#,##0.00;required:true;display-name:テスト数字;min:-10.00;max:1,000.00",
	"#txt_testdate":
		function(){
			var date1=new Date();
			var date2=new Date();
			date2.setDate(date1.getDate()+Number(6));
			return "format:yyyy年MM月dd日;required:true;display-name:テスト日付;"
				+"min:"+efw.server.format.formatDate(date1,"yyyy年MM月dd日")+";"
				+"max:"+efw.server.format.formatDate(date2,"yyyy年MM月dd日")+";"
			;
		},
};
mdclexam_login.fire=function(params){
	if (params["#txt_uid"]=="admin"&&params["#txt_pwd"]=="password"){
		efw.server.session.set("USER_ID", params["#txt_uid"]);
		return [];
	}else{
		return {error:{errorMessage:"ログインできません。ユーザIDとパスワードを確認してください。"}};
	}
};
