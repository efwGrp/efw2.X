var mdclexam_seekuser={};
mdclexam_seekuser.include=[{eventId:"mdclexam_seekvisit"}];
mdclexam_seekuser.paramsFormat={"#the_id":null};
mdclexam_seekuser.fire=function(params){
	var ret=[];
	//個人情報 の取得
	//-------------------------------------------------------------------------
	var userinfo=efw.server.db.getSingle({
		groupId:"mdclexam_user",
		sqlId:"seek",
		params:{
			"user_id":params["#the_id"]
		},
		mapping:{
			"td:eq(1)":"個人カナ氏名",
			"td:eq(2)":"個人漢字氏名",
			"td:eq(3)":function(rs){
				var s=rs["性別"];
				if(s=="M") return "男";
				else if(s=="F") return "女";
				else return s;
			},
			"td:eq(4)":"生年元号",
			"td:eq(5)":["生年月日","GGGGy年MM月dd日"],
			"td:eq(6)":"郵便番号",
			"td:eq(7)":"住所",
			"td:eq(8)":"自宅TEL",
			"td:eq(9)":"連絡先TEL",
			"td:eq(10)":"保険記号",
			"td:eq(11)":"保険番号",
			"td:eq(12)":function(rs){
				var h=rs["保険区分"];
				if(h==1) return "本人";
				else if(h==2) return "家族(配偶者)";
				else return ""+h;
			},
			"td:eq(13)":"保険事務所",
			"td:eq(14)":"その他コード１",
			"td:eq(15)":"その他コード2",
			"td:eq(16)":"その他コード3",
			"td:eq(17)":"備考(※)"			
		}
	});
	ret.push({"runat":"#userinfo","withdata":userinfo});
	//受診情報一覧の取得
	//-------------------------------------------------------------------------
	var rsVisitlist=efw.server.db.executeQuery({
		groupId:"mdclexam_visit",
		sqlId:"select",
		params:{
			"user_id":params["#the_id"]
		},
		mapping:{
			"受診日":"受診日",
			"td1":["受診日","yyyy/MM/dd"],
			"td2":"コース名",
			"td3":function(rs){
				var j=rs["状態"];
				if(j==0) return "予約";
				else if(j==1) return "受付";
				else if(j==2) return "入力途中";
				else if(j==3) return "入力完了";
				else return "";
			},
		}
	});
	ret.push({"runat":"#visitlist",
		"remove":"tr",
		"append":"<tr style='cursor:pointer' onclick='selectVisit(this)'><td>{td1}</td><td>{td2}</td><td>{td3}</td></tr>",
		"withdata":rsVisitlist});

	var visitdate=null;
	if (rsVisitlist.length>0){visitdate=rsVisitlist[0]["受診日"];}
	//visitinfoseekを呼び出す
	//-------------------------------------------------------------------------
	var retVisitInfoSeek=mdclexam_seekvisit.fire({
		"#the_id":params["#the_id"],
		"visitdate":visitdate
	});
	ret=ret.concat(retVisitInfoSeek);
	//-------------------------------------------------------------------------
	return ret;
};