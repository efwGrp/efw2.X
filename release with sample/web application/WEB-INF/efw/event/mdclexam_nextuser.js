var mdclexam_nextuser={};
mdclexam_nextuser.include=[{eventId:"mdclexam_seekuser"}];
mdclexam_nextuser.paramsFormat={"#the_id":null};
mdclexam_nextuser.fire=function(params){
	var ret=[];
	//個人情報 の取得
	//-------------------------------------------------------------------------
	var usercd=params["#the_id"];
	if (usercd=="")nextusercd="0000000";
	var rsUserinfo=efw.server.db.getSingle({
		groupId:"mdclexam_user",
		sqlId:"next",
		params:{"user_id":usercd},
		mapping:{"#the_id":"個人コード"}
	});
	if (rsUserinfo){
		//次の個人情報 の取得
		//---------------------------------------------------------------------
		ret.push({"runat":"#userinfo","withdata":rsUserinfo});
		ret=ret.concat(mdclexam_seekuser.fire(rsUserinfo));
		return ret;
	}else{
		return {error:{errorMessage:"次のユーザはありません。"}};
	}
};