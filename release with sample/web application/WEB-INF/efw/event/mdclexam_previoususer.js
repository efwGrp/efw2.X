var mdclexam_previoususer={};
mdclexam_previoususer.include=[{eventId:"mdclexam_seekuser"}];
mdclexam_previoususer.paramsFormat={"#the_id":null};
mdclexam_previoususer.fire=function(params){
	var ret=[];
	//個人情報 の取得
	//-------------------------------------------------------------------------
	var usercd=params["#the_id"];
	if (usercd=="")nextusercd="9999999";
	var rsUserinfo=efw.server.db.getSingle({
		groupId:"mdclexam_user",
		sqlId:"previous",
		params:{"user_id":usercd},
		mapping:{"#the_id":"個人コード"}
	});
	if (rsUserinfo){
		//前の個人情報 の取得
		//---------------------------------------------------------------------
		ret.push({"runat":"#userinfo","withdata":rsUserinfo});
		ret=ret.concat(mdclexam_seekuser.fire(rsUserinfo));
	}else{
		return {error:{errorMessage:"前のユーザはありません。"}};
	}
	return ret;
};