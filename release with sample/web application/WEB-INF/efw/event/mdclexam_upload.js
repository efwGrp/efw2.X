var mdclexam_upload={};
mdclexam_upload.outOfLogin=true;
mdclexam_upload.paramsFormat={
	"#txt_file1":"required:true;display-name:ファイル１;accept:xls;",//"extension-filter:jpg,gif;",
	"#txt_file2":"display-name:ファイル２;accept:XLS,xlsx;",//"extension-filter:jpg,gif;",
};
mdclexam_upload.fire=function(params){
	efw.server.file.saveUploadFiles("");
	return [{
		"withdata":
			{"#txt_file1":"",
			"#txt_file2":"",}
	}];
};
