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
	
	public static String getStorageFolder(){
		return storageFolder;
	}
	
	public static void zip(String filename, String base, String[] paths) throws IOException{
		
		ZipOutputStream zos = new ZipOutputStream(new BufferedOutputStream(new FileOutputStream(new File(base+"/"+filename))));
		try{
			byte[] buf = new byte[1024];
			for (String path : paths) {
	            InputStream is = new BufferedInputStream(new FileInputStream(base+"/"+path));
	            zos.putNextEntry(new ZipEntry(path));
	            int len = 0;
	            while ((len = is.read(buf)) != -1) {
	            	zos.write(buf, 0, len);
	            }
	            zos.closeEntry();
	            is.close();
	        }
		}catch(IOException e){
			throw e;
		}finally{
			zos.close();
		}
	}
	
}
