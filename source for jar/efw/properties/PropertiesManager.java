package efw.properties;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import efw.efwException;
/**
 * プロパティ読み取りを管理するクラス。
 * @author Chang Kejun
 *
 */
public final class PropertiesManager {
	/**
	 * フレームワークに利用するプロパティファイルの名称。
	 * 「efw.properties」に固定。
	 */
    public static final String EFW_PROPERTIES_FILE_NAME = "efw.properties";
    /**
     * デバッグモードを制御するフラグのプロパティキー。
     * 「efw.isdebug」の定数。
     */
    public static final String EFW_ISDEBUG ="efw.isdebug";
    /**
     * クロスドメイン通信設定のプロパティキー。
     * 「efw.cors」の定数。
     */
    public static final String EFW_CORS ="efw.cors";
    /**
     * フレームワークに利用するjdbcリソースの名称のプロパティキー。
     * 「efw.jdbc.resource」の定数。
     */
    public static final String EFW_JDBC_RESOURCE ="efw.jdbc.resource";
    public static final String EFW_JDBC_RESOURCE_URL ="efw.jdbc.resource.url";
    public static final String EFW_JDBC_RESOURCE_USERNAME ="efw.jdbc.resource.username";
    public static final String EFW_JDBC_RESOURCE_PASSWORD ="efw.jdbc.resource.password";
    
    /**
     * フレームワークに利用するmailリソースの名称のプロパティキー。
     * 「efw.mail.resource」の定数。
     */
    public static final String EFW_MAIL_RESOURCE ="efw.mail.resource";
    /**
     * 「efw.brms.import」の定数。
     */
    public static final String EFW_BRMS_IMPORT="efw.brms.import";    
    /**
	 * 「efw.brms.codetype」の定数。
	 */
    public static final String EFW_BRMS_CODETYPE="efw.brms.codetype";    
    /**
     * サーバー部品JavaScriptファイルの格納パスのプロパティキー。
     * 「efw.server.folder」の定数。
     */
    public static final String EFW_SEVER_FOLDER ="efw.server.folder";
    /**
     * イベントJavaScriptファイルの格納パスのプロパティキー。
     * 「efw.event.folder」の定数。
     */
    public static final String EFW_EVENT_FOLDER ="efw.event.folder";
    /**
     * Sqlを外部化するXMLファイルの格納パスのプロパティキー。
     * 「efw.sql.folder」の定数。
     */
	public static final String EFW_SQL_FOLDER="efw.sql.folder";
    /**
     * ファイルの格納パスのプロパティキー。
     * 「efw.upload.folder」の定数。
     */
	public static final String EFW_STORAGE_FOLDER="efw.storage.folder";
	/**
	 * ログの保存パスのプロパティキー。
	 * 「efw.logging.path」の定数。
	 */
	public static final String EFW_LOG_FILE_PATH = "efw.logging.path";
	/**
	 * ログファイルの名称のプロパティキー。
	 *  「efw.logging.name」の定数。
	 */
	public static final String EFW_LOG_FILE_NAME = "efw.logging.name";
	/**
	 * ログ出力レベルのプロパティキー。
	 *  「efw.logging.level」の定数。
	 */
	public static final String EFW_LOG_OUPUT_LEVEL = "efw.logging.level";
	/**
	 * ログファイルのサイズのプロパティキー。
	 *  「efw.logging.limit」の定数。
	 */
	public static final String EFW_LOG_OUPUT_LIMIT = "efw.logging.limit";
	/**
	 * ログファイルの数のプロパティキー。
	 *  「efw.logging.num」の定数。
	 */
	public static final String EFW_LOG_OUPUT_NUM = "efw.logging.num";
	/**
	 * ログインチェックフラグのプロパティキー。
	 *  「efw.login.check」の定数。
	 */
	public static final String EFW_LOGIN_CHECK = "efw.login.check";
	/**
	 * ログインセッション情報のプロパティキー。
	 *  「efw.login.key」の定数。
	 */
	public static final String EFW_LOGIN_KEY = "efw.login.key";
	/**
	 * セッションタイムアウト遷移画面のURL。
	 *  「efw.login.url」の定数。
	 */
	public static final String EFW_LOGIN_URL="efw.login.url";
	/**
	 * システムエラー遷移画面のURL。
	 *  「efw.system.error.url」の定数。
	 */
	public static final String EFW_SYSTEM_ERROR_URL="efw.system.error.url";

	/**
	 * プロパティ値を格納するプロパティオブジェクト。
	 */
    private static Properties prop = new Properties();
    /**
     * フレームワークに利用するプロパティファイルから、プロパティ値をプロパティオブジェクトにロードする。
     * @throws IOException　プロパティファイルの読み取りエラー。
     */
    public static synchronized void init()throws efwException{
    	try {
			prop.load(Thread.currentThread().getContextClassLoader().getResourceAsStream(PropertiesManager.EFW_PROPERTIES_FILE_NAME));
		} catch (IOException e) {
			e.printStackTrace();
			throw new efwException(efwException.PropertiesInitFailedException);
		}
    }
    public static synchronized void initBatch(String propertiesFileName)throws efwException{
    	try {
			prop.load(new FileInputStream(propertiesFileName));
		} catch (IOException e) {
			e.printStackTrace();
			throw new efwException(efwException.PropertiesInitFailedException);
		}
    }
    /**
     * 文字列のプロパティを取得する。
     * @param key プロパティキー。
     * @param defaultValue デフォルト値。
     * @return　プロパティ値を返す。
     */
    public static String getProperty(String key,String defaultValue) {
    	String vl=prop.getProperty(key);
    	if (vl==null) vl=defaultValue;
        return vl;
    }
    /**
     * ブールのプロパティを取得する。
     * @param key プロパティキー。
     * @param defaultValue デフォルト値。
     * @return　プロパティ値を返す。
     */
    public static boolean getBooleanProperty(String key,boolean defaultValue) {
    	String vl=prop.getProperty(key);
    	if (vl==null){
    		return defaultValue;
    	}else{
            return Boolean.parseBoolean(vl);
    	}
    }

    /**
     * 数字のプロパティを取得する。
     * @param key プロパティキー。
     * @param defaultValue デフォルト値。
     * @return　プロパティ値を返す。
     */
    public static int getIntProperty(String key,int defaultValue) {
    	String vl=prop.getProperty(key);
    	if (vl==null){
    		return defaultValue;
    	}else{
            int iValue = 0;
            if(null!=vl && !"".equals(vl)){
                iValue = Integer.parseInt(vl);
            }
            return iValue;
    	}
    }
}
