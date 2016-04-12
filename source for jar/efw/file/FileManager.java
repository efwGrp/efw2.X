package efw.file;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;
/**
 * アップロードとダウンロードファイルを管理するクラス。
 * @author Chang Kejun
 */
public final class FileManager {
	/**
	 * ファイルの格納パス。
	 * サーブレットから渡される。
	 */
    private static String storageFolder;
    /**
     * サーブレットから設定情報を受け取る。
     * @param uploadFolder　アップロードファイルの格納パス。
     * @param downloadFolder　ダウンロードファイルの格納パス。
     */
	public static synchronized void init(String storageFolder){
		FileManager.storageFolder=storageFolder;
	}
	/**
	 * ファイルの格納パスを取得する。
	 * @return　 ファイルの格納パス。
	 */
	public static String getStorageFolder(){
		return storageFolder;
	}
	/**
	 * 指定相対パス内のファイル＆フォルダのリストを取得する
	 * @param path　ファイルの格納パスからの相対パス
	 * @return　ファイルとサブフォルダのリスト
	 */
	public static File[] getList(String path){
		File fl=get(path);
		return fl.listFiles();
	}
	
	public static File get(String path){
		File fl=new File(storageFolder+"/"+path);
		return fl;
	}
	
	public static long getFolderSize(File dir) {
	    long size = 0;
	    for (File file : dir.listFiles()) {
	        if (file.isFile()) {
	            System.out.println(file.getName() + " " + file.length());
	            size += file.length();
	        }
	        else
	            size += getFolderSize(file);
	    }
	    return size;
	}
	/**
	 * 
	 * @param path
	 */
	public static void remove(String path){
		_delete(get(path));
	}
    private static void _delete(File f){
        if(!f.exists()) return;	//ファイルまたはディレクトリが存在しない場合は何もしない
        else if(f.isFile()) f.delete();//ファイルの場合は削除する
        else if(f.isDirectory()){//ディレクトリの場合は、すべてのファイルを削除する
            File[] files = f.listFiles();//対象ディレクトリ内のファイルおよびディレクトリの一覧を取得
            for(int i=0; i<files.length; i++) FileManager._delete( files[i] );//ファイルおよびディレクトリをすべて削除  自身をコールし、再帰的に削除する
            f.delete();//自ディレクトリを削除する
        }
    }
    
    /**
	 * ファイルを圧縮する。
	 * @param filename 圧縮後のファイル名。
	 * @param paths 圧縮対象のファイル配列。
	 * @throws IOException ファイルアクセスエラー。
	 */
	public static void zip(String filename, String[] paths) throws IOException{
		ZipOutputStream zos = new ZipOutputStream(new BufferedOutputStream(new FileOutputStream(get(filename))));
		try{
			_zip(zos,paths);
		}finally{
			zos.close();
		}
	}
	
	private static void _zip(ZipOutputStream zos,String[] paths) throws IOException {
		for (String path : paths) {
			File fl=get(path);
			if(fl.isDirectory()){
				File[] f = getList(path);
				String[] paths2=new String[f.length];
			    for(int i=0;i<f.length;i++){
			    	paths2[i] = path +"/" + f[i].getName();
			    }
			    _zip(zos,paths2);
			}else{
				byte[] buf = new byte[1024];
	            InputStream is = new BufferedInputStream(new FileInputStream(fl));
	            try{
		            zos.putNextEntry(new ZipEntry(path));
		            int len = 0;
		            while ((len = is.read(buf)) != -1) {
		            	zos.write(buf, 0, len);
		            }
		            zos.closeEntry();
	            }finally{
		            is.close();
	            }
			}
        }	
	}	

	
}
