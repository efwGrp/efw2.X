var mdclexam_brmstest={};
mdclexam_brmstest.outOfLogin=true;
mdclexam_brmstest.paramsFormat={
		"#txt_param1":null,
		"#txt_param2":null,
};
mdclexam_brmstest.fire=function(params){
	var data=efw.server.brms.getSingle({
		ruleCode:"brmstest",//これはルール名、基準日はディフォルト
		//ruleDate:new Date(),//基準日のデフォルトはシステム日付
		params:{
			"param1":params["#txt_param1"],
			"param2":params["#txt_param2"],
		},
		mapping:{"#txt_result":"result1"}
	});
	var ret=[];
	ret.push({
			"withdata":data,
	});	
	return ret;
};
