package efw.db;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map.Entry;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import efw.efwException;
import efw.log.LogManager;
import efw.properties.PropertiesManager;

/**
 * データベース接続を管理するクラス。
 * @author Chang Kejun
 *
 */
public final class DatabaseManager {
	/**
	 * ネーミング操作の開始コンテキストの名称。
	 * 「java:comp/env」に固定。
	 */
	private static final String JAVA_INITCONTEXT_NAME="java:comp/env";
	/**
	 * フレームワークに利用するjdbcリソースの名称。
	 * <br>efw.propertiesのefw.jdbc.resourceで設定、
	 * デフォルトは「jdbc/efw」。
	 */
	private static String jdbcResourceName="jdbc/efw";
	/**
	 * フレームワークに利用するデータソース。
	 */
	private static DataSource dataSource;
	
    /**
     * データベースオブジェクト。
     * スレッドローカルにデータベースオブジェクトを格納する。サーバーサイトJavascriptに利用される。
     */
	private static ThreadLocal<HashMap<String,Database>> database=new ThreadLocal<HashMap<String,Database>>();
	
    public static Database getDatabase(){
    	return (DatabaseManager.database.get()).get(DatabaseManager.jdbcResourceName);
    }
    public static Database getDatabase(String jdbcResourceName){
    	if(jdbcResourceName==null||"".equals(jdbcResourceName)){
    		return DatabaseManager.getDatabase();
    	}
    	return (DatabaseManager.database.get()).get(jdbcResourceName);
    }
    
	/**
	 * フレームワークに利用するデータソースを初期化する。
	 * @throws efwException データソース初期化失敗のエラー。
	 */
	public static synchronized void init() throws efwException{
		try {
	        Context envContext = (Context) new InitialContext().lookup(JAVA_INITCONTEXT_NAME);
	        jdbcResourceName=PropertiesManager.getProperty(PropertiesManager.EFW_JDBC_RESOURCE,jdbcResourceName);
	        dataSource=(DataSource) envContext.lookup(jdbcResourceName);
		} catch (NamingException e) {
			e.printStackTrace();
    		throw new efwException(efwException.DataSourceInitFailedException,jdbcResourceName);
		}
	}
    ///////////////////////////////////////////////////////////////////////////
	/**
	 * フレームワーク用データソースからデータベース接続を取得する。
	 * @return データベース接続を戻す。
	 * @throws SQLException データベースアクセスエラー。
	 */
    public static void open() throws SQLException{
		if(DatabaseManager.database.get()==null)
			DatabaseManager.database.set(new HashMap<String,Database>());

		DatabaseManager.database.get()
		.put(DatabaseManager.jdbcResourceName, new Database(dataSource.getConnection()));
        LogManager.CommDebug("DatabaseManager.open");
    }
    /**
     * jdbcリソース名称によりデータベース接続を取得する。
     * @param jdbcResourceName jdbcリソース名称
     * @return　データベース接続を戻す。
     * @throws NamingException　名称不正のエラー。　
     * @throws SQLException　データベースアクセスエラー。
     */
    public static void open(String jdbcResourceName) throws NamingException, SQLException{
    	if (jdbcResourceName==null||"".equals(jdbcResourceName)){
    		DatabaseManager.open();
    		return;
    	}
        Database otherdb = null; 
        Context initContext = new InitialContext();
        Context envContext = (Context) initContext.lookup(JAVA_INITCONTEXT_NAME);
        DataSource ds = (DataSource) envContext.lookup(jdbcResourceName);
        otherdb = new Database(ds.getConnection());
		if(DatabaseManager.database.get()==null)
			DatabaseManager.database.set(new HashMap<String,Database>());
		DatabaseManager.database.get()
		.put(jdbcResourceName, otherdb);
        LogManager.CommDebug("DatabaseManager.open",jdbcResourceName);
    }
    /**
     * すべてのデータベースを閉じる。
     */
    public static void closeAll(){
		if(DatabaseManager.database.get()==null)
			DatabaseManager.database.set(new HashMap<String,Database>());

		HashMap<String,Database> map=DatabaseManager.database.get();
		for(Entry<String, Database> e : map.entrySet()) {
			Database db=e.getValue();
			db.close();
		}
		DatabaseManager.database.remove();
        LogManager.CommDebug("DatabaseManager.closeAll");
    }

}