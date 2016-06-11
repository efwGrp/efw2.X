/**
 * efw framework server file
 * @author Chang Kejun
 */
///////////////////////////////////////////////////////////////////////////////
var EfwServerFile=function(){};
///////////////////////////////////////////////////////////////////////////////
EfwServerFile.prototype={//この機能は、javaのfileを参考すればと思う　
	"listFiles":function(path){
		var lst=Packages.efw.file.FileManager.getList(path);
		var ret=[];
		for(var i=0;i<lst.length;i++){
			var fl=lst[i];
			if(true && fl.isFile()){
				var lastModified=new Date();lastModified.setTime(fl.lastModified());
				var data={
						"name":"" + fl.getName(),
						"length": 0 + fl.length(),
						"lastModified": lastModified,
						"absolutePath":"" + fl.getAbsolutePath(),
					};
				ret.push(data);
			}
		}
		return ret;
	},
	"listFolders":function(path){
		var lst=Packages.efw.file.FileManager.getList(path);
		var ret=[];
		for(var i=0;i<lst.length;i++){
			var fl=lst[i];
			if(true && fl.isDirectory()){
				var lastModified=new Date();lastModified.setTime(fl.lastModified());
				var data={
						"name":"" + fl.getName(),
						"length":0+Packages.efw.file.FileManager.getFolderSize(fl),
						"lastModified": lastModified,
						"absolutePath":"" + fl.getAbsolutePath(),
					};
				ret.push(data);
			}
		}
		return ret;
	},
	"getFileInfo":function(path){
		var fl=Packages.efw.file.FileManager.get(path);
		if(true && fl.isFile()){
			var lastModified=new Date();lastModified.setTime(fl.lastModified());
			var data={
					"name":"" + fl.getName(),
					"length": 0 + fl.length(),
					"lastModified": lastModified,
					"absolutePath":"" + fl.getAbsolutePath(),
				};
			return data;
		}else{
			return null;
		}
	},
	"getFolderInfo":function(path){
		var fl=Packages.efw.file.FileManager.get(path);
		if(true && fl.isDirectory()){
			var lastModified=new Date();lastModified.setTime(fl.lastModified());
			var data={
					"name":"" + fl.getName(),
					"length":0+Packages.efw.file.FileManager.getFolderSize(fl),
					"lastModified": lastModified,
					"absolutePath":"" + fl.getAbsolutePath(),
				};
			return data;
		}else{
			return null;
		}
	},
	"remove":function(path){
		Packages.efw.file.FileManager.remove(path);
	},
	"getStorageFolder":function(){
		return ""+Packages.efw.file.FileManager.getStorageFolder();
	},
	"saveUploadFiles":function(path){
		if(path==undefined)path=null;
		Packages.efw.file.FileManager.saveUploadFiles(path);
	},
};
///////////////////////////////////////////////////////////////////////////////
EfwServer.prototype.file=new EfwServerFile();