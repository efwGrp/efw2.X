var mdclexam_showfielddef={};
mdclexam_showfielddef.paramsFormat={"fieldindex":null};
mdclexam_showfielddef.fire=function(params){
	var ret=[];
	var fieldindex=params["fieldindex"];
	//項目定義情報
	//-------------------------------------------------------------------------
	var field=efw.server.db.getSingle({
		groupId:"mdclexam_fielddef",
		sqlId:"seek",
		params:{"field_index":fieldindex},
		mapping:{
			"td:eq(0)":"項目コード",//これはmapping functionのテスト
			"td:eq(1)":"項目名称"
		}
	});
	ret.push({	"runat":"#fielddefinfo","withdata":field});
	//項目定義リスト
	//-------------------------------------------------------------------------
	var rsFieldlist=efw.server.db.executeQuery({
		groupId:"mdclexam_fielddef",
		sqlId:"list",
		params:{"field_index":fieldindex},
		mapping:{
			"td1":"男性・下限",
			"td2":"男性・上限",
			"td3":"女性・下限",
			"td4":"女性・上限",
			"td5":"判定区分",
			"td6":"コメント",
			"td7":"指示コメント"
		}
	});
	ret.push({"runat":"#fielddeflist",
		"remove":"tr",
		"append":"<tr><td>{td1}</td><td>{td2}</td><td>{td3}</td><td>{td4}</td><td>{td5}</td><td>{td6}</td><td>{td7}</td></tr>",
		"withdata":rsFieldlist});

	return ret;
};