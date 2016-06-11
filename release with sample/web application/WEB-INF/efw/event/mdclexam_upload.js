var mdclexam_upload={};
mdclexam_upload.outOfLogin=true;
mdclexam_upload.paramsFormat={
	"#txt_file1":null,//"max-size:10;extension-filter:jpg,gif;",
	"#txt_file2":null,//"max-size:10;extension-filter:jpg,gif;",
};
mdclexam_upload.fire=function(params){
	efw.server.file.saveUploadFiles("");
	return [{
		"withdata":
			{"#txt_file1":"",
			"#txt_file2":"",}
	}];
};
