<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>efw.server.dbの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.server.db.open">open</A></H3>
<pre>
open ( <A href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</A> )</PRE>
<DL>
<DD>データベース接続を開く。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</A></CODE> - jdbcリソースの名称、文字列、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.getSingle">getSingle</A></H3>
<pre>
getSingle ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )</PRE>
<DL>
<DD>SELECT文を実行して、１つ目のデータを戻す。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE>結果がある場合、<A href="#efw.sqlExecution.executionResult">executionResult</A></CODE> の１行目データ。
<DD><CODE>null</CODE> - 結果がない場合、null を戻す。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.executionParams">executionParams</A></CODE> - SQL実行用パラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.executeQuery">executeQuery</A></H3>
<pre>
executeQuery ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )</PRE>
<DL>
<DD>SELECT文を実行する。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE><A href="#efw.sqlExecution.executionResult">executionResult</A></CODE> - SQL検索結果。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.executionParams">executionParams</A></CODE> - SQL実行用パラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.executeUpdate">executeUpdate</A></H3>
<pre>
executeUpdate ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )</PRE>
<DL>
<DD>INSERT文、UPDATE文、DELETE文を実行する。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>実行された行数を戻す。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.executionParams">executionParams</A></CODE> - SQL実行用パラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.execute">execute</A></H3>
<pre>
execute ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )</PRE>
<DL>
<DD>任意のSQL文を実行する。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.executionParams">executionParams</A></CODE> - SQL実行用パラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.commit">commit</A></H3>
<pre>
commit ( <A href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</A> )</PRE>
<DL>
<DD>データベースへの更新を有効とし、 データベース接続が保持するデータベースロックをすべて解除する。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</A></CODE> - jdbcリソースの名称、文字列、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.rollback">rollback</A></H3>
<pre>
rollback ( <A href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</A> )</PRE>
<DL>
<DD>データベースへの更新を無効とし、 データベース接続が保持するデータベースロックをすべて解除する。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</A></CODE> - jdbcリソースの名称、文字列、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.closeAll">closeAll</A></H3>
<pre>
closeAll ( ) </PRE>
<DL>
<DD>すべてのデータベース接続に対して、ステートメントを全部閉じて、データベース接続をコミットして閉じる。 
<P>
<DD><DL>
</DL></DD>
</DL></DD>

<H3><A NAME="efw.sqlExecution.jdbcResourceName">jdbcResourceName</A></H3>
<pre>
jdbcResourceName = "jdbc/efw" ;                                                 //server.xmlに定義されるリソース

&lt;Resource auth="Container" driverClassName="org.postgresql.Driver" 
maxActive="100" maxIdle="20" maxWait="10" name="jdbc/efw" password="postgres" 
type="javax.sql.DataSource" url="jdbc:postgresql://127.0.0.1:5432/efwSample" 
username="postgres"/&gt;
</PRE>
<DL><DD>jdbcのリソース名。<br>
efwのディフォルトリソースは、jdbc/efw 。それ以外のリソースを利用したい場合、<br>
server.xmlに定義して、イベントjsファイルに、それを open して、トランザクションを管理する。

</DL></DD>

<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>SQL executionの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.sqlExecution.executionParams">executionParams</A></H3>
<pre>
executionParams = {
                      <a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a> : "jdbc/efw",                            //jdbcリソース名、オプション。
                      groupId          : "user",                                //sqlXMLファイル名、必須。
                      sqlId            : "selectusers",                         //SQLのId、必須。
                      params           : {                                      //SQLパラメーター、必須。
                                             sqlparam1 : value1 ,
                                             sqlparma2 : value2 ,
                                         },
                      mapping          : {                                      //マッピング、オプション。検索SQLの検索結果フィールドを画面項目またはマスクキーとマッピングする。
                                             selector1 : field1 ,
                                             selector2 : [ Datefield , formatter ] ,             //日付フィールドをフォーマットしてからマッピング。
                                             selector3 : [ Numberfield , formatter , rounder ] , //数字フィールドをフォーマットしてからマッピング。必要でされば丸みタイプを指定可能。
                                             selector4 : function(rs){ ... },   //検索結果のレコードから値を算出してマッピングする。
                                         },
                  };
</PRE>
<DL><DD>SQL実行用パラメーター。<br>
SQLを実行するため、XMLファイルに定義するSQLのパラメーターの値を設定可。また実行結果のマッピングも設定可。<br>

</DL></DD>
<HR>

<H3><A NAME="efw.sqlExecution.executionResult">executionResult</A></H3>
<pre>
executionResult = [                                                             //マッピングなしの実行結果、field項目と値のセットの配列。
                    {                                                           //ひとつのレコード。
                      field1 : value1 ,
                      field2 : value2 ,
                    },
                  ];
                  
executionResult = [                                                             //selectorとマッピングする実行結果、selector項目と値のセットの配列。
                    {                                                           //ひとつのレコード。
                      selector1 : value1 ,
                      selector2 : value2 ,
                    },
                  ];

executionResult = [                                                             //maskKeyとマッピングする実行結果、maskKey項目と値のセットの配列。
                    {                                                           //ひとつのレコード。
                      maskKey1 : value1 ,
                      maskKey2 : value2 ,
                    },
                  ];
</PRE>
<DL><DD>SQL検索結果。<br>
executeQueryの実行結果。レコードセットの配列。検索結果がない場合、空の配列になる。<br>
マッピングの有無により、変化が可能。

</DL></DD>
<HR>


<H3><A NAME="efw.sqlExecution.jdbcResourceName">jdbcResourceName</A></H3>
<pre>
jdbcResourceName = "jdbc/efw" ;                                                 //server.xmlに定義されるリソース

&lt;Resource auth="Container" driverClassName="org.postgresql.Driver" 
maxActive="100" maxIdle="20" maxWait="10" name="jdbc/efw" password="postgres" 
type="javax.sql.DataSource" url="jdbc:postgresql://127.0.0.1:5432/efwSample" 
username="postgres"/&gt;
</PRE>
<DL><DD>jdbcのリソース名。<br>
efwのディフォルトリソースは、jdbc/efw 。それ以外のリソースを利用したい場合、<br>
server.xmlに定義して、イベントjsファイルに、それを open して、トランザクションを管理する。

</DL></DD>
