package efw.file;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import efw.log.LogManager;

@SuppressWarnings("serial")
@WebServlet(name="downloadServlet",urlPatterns={"/downloadServlet"})
public final class downloadServlet extends HttpServlet {
    /**
     * レスポンスの文字セット定数、XMLHttpRequestのデフォルトに合わせ、「UTF-8」に固定。
     */
    private static final String RESPONSE_CHAR_SET="UTF-8";

    protected void doGet(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
    	request.setCharacterEncoding(RESPONSE_CHAR_SET);
		OutputStream os = response.getOutputStream();
		String attr_file=request.getParameter("file");
		String attr_zip=request.getParameter("zip");
		String attr_saveas=request.getParameter("saveas");
		String attr_deleteafterdownload=request.getParameter("deleteafterdownload");
		LogManager.CommDebug(request.getQueryString());

		String tmp_zip=null;
		String[] tmp_files=null;
		try {
			response.reset();
			if(attr_zip!=null&&!"".equals(attr_zip)){
				tmp_files=attr_zip.split("\\|");
				File zipFile=File.createTempFile("tmp", "zip",new File(FileManager.getStorageFolder()));
				tmp_zip=zipFile.getName();
				attr_file=zipFile.getName();
				FileManager.zip(tmp_zip, FileManager.getStorageFolder(), tmp_files);
				
				if(attr_saveas==null||"".equals(attr_saveas)){
					attr_saveas="attachment.zip";
				}
			}else if(attr_file!=null&&!"".equals(attr_file)){
				if(attr_saveas==null||"".equals(attr_saveas)){
					attr_saveas=attr_file;
				}
			}else{
				//do nothing in this case because it is an error in client js.
				return;
			}
			FileInputStream hFile = new FileInputStream(FileManager.getStorageFolder()+"/"+attr_file);
			BufferedInputStream bis = new BufferedInputStream(hFile);
			int len = 0;
			byte[] buffer = new byte[1024];
			response.setContentType("application/octet-stream");
			response.setHeader("Content-Disposition","attachment; filename=\""+attr_saveas+"\"");
			while ((len = bis.read(buffer)) >= 0) os.write(buffer, 0, len);
			bis.close();
			if("true".equals(attr_deleteafterdownload)){
				if(attr_zip!=null&&!"".equals(attr_zip)){
					for(int i=0;i<tmp_files.length;i++){
						(new File(FileManager.getStorageFolder()+"/"+tmp_files[i])).delete();
					}
				}else if(attr_file!=null&&!"".equals(attr_file)){
					(new File(FileManager.getStorageFolder()+"/"+attr_file)).delete();
				}
			}

		} catch (IOException e) {
			LogManager.ErrorDebug(e.getMessage());
			response.reset();
			response.setCharacterEncoding(RESPONSE_CHAR_SET);
			response.getWriter().print("<html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"></head><body>");
			response.getWriter().print(e.getMessage());
			response.getWriter().print("</body></html>");
			throw e;
		} finally {
			if (os != null) {
				try {
					os.close();
				}catch (Exception e){
				} finally {
					os = null;
				}
			}
			if(tmp_zip!=null){
				try {
					(new File(FileManager.getStorageFolder()+"/"+tmp_zip)).delete();
				}catch (Exception e){
				} finally {
				}
				
			}
		}
	}
	
}
