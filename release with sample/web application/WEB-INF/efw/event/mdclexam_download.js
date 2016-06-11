var mdclexam_download={};
mdclexam_download.outOfLogin=true;
mdclexam_download.paramsFormat={"#cmb_download":"required:true;display-name:ダウンロードファイル"};
mdclexam_download.fire=function(params){
	var str_fl=params["#cmb_download"];
	var ary_fl=(""+str_fl).split(",");
//	return {"download":{"file":str_fl}};
//	return {"download":{"file":"错误的文件信息.xls"}};
//	return {"download":{"file":"あ.xls","saveas":"abc.xls","deleteafterdownload":true}};
	return {"download":{"zip":ary_fl,"deleteafterdownload":true}};
//	return {"download":{"zip":["あ.xls","い.xls",],"saveas":"abc.zip","deleteafterdownload":true}};
};
