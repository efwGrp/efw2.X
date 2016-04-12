var mdclexam_showfiles={};
mdclexam_showfiles.outOfLogin=true;
mdclexam_showfiles.paramsFormat={};
mdclexam_showfiles.fire=function(params){
	var data=[];
	var data1=efw.server.file.listFiles("");//storageフォルダのファイルを全部リストする
	var data2=efw.server.file.listFolders("");//storageフォルダのファイルを全部リストする
	data =data.concat(data1).concat(data2);
	return [{
		"runat":"#cmb_download",
		"remove":"option",
		"append":"<option value=\"{name}\">{name}　{lastModified} {length}",
		"withdata":data,
	}];
};
