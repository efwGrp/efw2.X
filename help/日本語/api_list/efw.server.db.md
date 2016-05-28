<a href="../api_list.md">戻る</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/api_list/efw.server.db.md">日本語</a>
&nbsp;<a href="../../中文/api_list/efw.server.db.md">中文</a>
&nbsp;<a href="../../English/api_list/efw.server.db.md">English</a>
<H2>efw.server.dbの詳細</H2>

<H3><A NAME="open">open</A></H3>
<pre>
open ( <A href="#jdbcResourceName">jdbcResourceName</A> )</PRE>
<DL>
<DD>データベース接続を開く。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#jdbcResourceName">jdbcResourceName</A></CODE> - jdbcリソースの名称、文字列、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="getSingle">getSingle</A></H3>
<pre>
getSingle ( <A href="#executionParams">executionParams</A> )</PRE>
<DL>
<DD>SELECT文を実行して、１つ目のデータを戻す。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE>結果がある場合、<A href="#executionResult">executionResult</A></CODE> の１行目データ。
<DD><CODE>null</CODE> - 結果がない場合、null を戻す。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#executionParams">executionParams</A></CODE> - SQL実行用パラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="executeQuery">executeQuery</A></H3>
<pre>
executeQuery ( <A href="#executionParams">executionParams</A> )</PRE>
<DL>
<DD>SELECT文を実行する。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE><A href="#executionResult">executionResult</A></CODE> - SQL検索結果。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#executionParams">executionParams</A></CODE> - SQL実行用パラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="executeUpdate">executeUpdate</A></H3>
<pre>
executeUpdate ( <A href="#executionParams">executionParams</A> )</PRE>
<DL>
<DD>INSERT文、UPDATE文、DELETE文を実行する。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>実行された行数を戻す。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#executionParams">executionParams</A></CODE> - SQL実行用パラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="execute">execute</A></H3>
<pre>
execute ( <A href="#executionParams">executionParams</A> )</PRE>
<DL>
<DD>任意のSQL文を実行する。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#executionParams">executionParams</A></CODE> - SQL実行用パラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="commit">commit</A></H3>
<pre>
commit ( <A href="#jdbcResourceName">jdbcResourceName</A> )</PRE>
<DL>
<DD>データベースへの更新を有効とし、 データベース接続が保持するデータベースロックをすべて解除する。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#jdbcResourceName">jdbcResourceName</A></CODE> - jdbcリソースの名称、文字列、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="rollback">rollback</A></H3>
<pre>
rollback ( <A href="#jdbcResourceName">jdbcResourceName</A> )</PRE>
<DL>
<DD>データベースへの更新を無効とし、 データベース接続が保持するデータベースロックをすべて解除する。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#jdbcResourceName">jdbcResourceName</A></CODE> - jdbcリソースの名称、文字列、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="closeAll">closeAll</A></H3>
<pre>
closeAll ( ) </PRE>
<DL>
<DD>すべてのデータベース接続に対して、ステートメントを全部閉じて、データベース接続をコミットして閉じる。 
<P>
<DD><DL>
</DL></DD>
</DL></DD>
<HR>


<H3><A NAME="executionParams">executionParams</A></H3>
<pre>
executionParams = {
                      <a href="#jdbcResourceName">jdbcResourceName</a> : "jdbc/efw",                            //jdbcリソース名、オプション。
                      groupId          : "user",                                //sqlXMLファイル名、必須。
                      sqlId            : "selectusers",                         //SQLのId、必須。
                      params           : {                                      //SQLパラメータ、必須。
                                             sqlparam1 : value1 ,
                                             sqlparma2 : value2 ,
                                         },
                      mapping          : {                                      //マッピング、オプション。検索SQLの検索結果フィールドを画面項目またはマスクキーとマッピングする。
                                             selector1 : field1 ,
                                             selector2 : [ Datefield , <a href="efw.server.format.md#formatter">formatter</a> ] ,             //日付フィールドをフォーマットしてからマッピング。
                                             selector3 : [ Numberfield , <a href="efw.server.format.md#formatter">formatter</a> , <a href="efw.server.format.md#rounder">rounder</a> ] , //数字フィールドをフォーマットしてからマッピング。必要でされば丸みタイプを指定可能。
                                             selector4 : function(rs){ ... },   //検索結果のレコードから値を算出してマッピングする。
                                         },
                  };
</PRE>
<DL><DD>SQL実行用パラメーター。<br>
SQLを実行するため、XMLファイルに定義するSQLのパラメーターの値を設定可。また実行結果のマッピングも設定可。<br>
</DL></DD>
<table>
<tr>
	<th>属性</th><th>属性名</th><th>必須</th><th>説明</th>
</tr>
<tr>
	<td><A NAME="jdbcResourceName">jdbcResourceName</A></td>jdbcのリソース名<td></td><td>オプション</td><td>efwのディフォルトリソースは、jdbc/efw 。それ以外のリソースを利用したい場合、server.xmlに定義して、イベントjsファイルに、それを open して、トランザクションを管理する。</td>
</tr>
<tr>
	<td><A NAME="groupId">groupId</A></td>sqlXMLファイル名<td>SQLのグループId</td><td>必須</td><td>sqlXMLファイル名と同じ。英語の大文字小文字を区別。</td>
</tr>
<tr>
	<td><A NAME="sqlId">sqlId</A></td><td>SQLのId</td><td>必須</td><td>sqlXMLファイルのsqlタグのId。</td>
</tr>
<tr>
	<td><A NAME="params">params</A></td><td>SQLパラメータ</td><td>必須</td><td>sqlXMLファイルのsqlタグに定義される「:sqlparam」を代替する。</td>
</tr>
<tr>
	<td><A NAME="mapping">mapping</A></td><td>マッピング</td><td>オプション</td><td>検索SQLの検索結果フィールドを画面項目またはマスクキーとマッピングする。</td>
</tr>
</table>


<H3><A NAME="executionResult">executionResult</A></H3>
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


