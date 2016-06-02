<a href="../file_list.md">戻る</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/file_list/efw.properties.md">日本語</a>
&nbsp;<a href="../../中文/file_list/efw.properties.md">中文</a>
&nbsp;<a href="../../English/file_list/efw.properties.md">English</a>
<H2><A NAME="efw.properties">プロパティファイル</A></H2>
<pre>
web/WEB-INF/classes/efw.properties
</pre>
<DL>
<DD>
デフォルトで利用する場合、プロパティファイルは不要。
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">キー</th>
	<th style="width:200px">初期値</th>
	<th style="width:650px">説明</th>
</tr>
<tr>
	<td>efw.isdebug</td>
	<td>false</td>
	<td>trueの場合、ランタイム時プログラムの編集はメモリにリロードされる。</td>
</tr>
<tr>
	<td>efw.jdbc.resource</td>
	<td>jdbc/efw</td>
	<td>デフォルトjdbcリソース名。context.xmlに定義する必要。もし、tomcat以外のアプリケーションサーバの場合、直接jndi名を書いてもよい。サンプル：　　java:xxx/yyy/zzz　　or　　[java:comp/env/]jdbc/efw</td>
</tr>
<tr>
	<td>efw.server.folder</td>
	<td>/WEB-INF/efw/server</td>
	<td>efwサーバーソースのフォルダ。webアプリの相対パスで設定する。あるいは絶対パスで設定する。</td>
</tr>
<tr>
	<td>efw.event.folder</td>
	<td>/WEB-INF/efw/event</td>
	<td>webアプリのイベントソースのフォルダ。webアプリの相対パスで設定する。あるいは絶対パスで設定する。</td>
</tr>
<tr>
	<td>efw.sql.folder</td>
	<td>/WEB-INF/efw/sql</td>
	<td>webアプリの外出しsqlファイルのフォルダ。webアプリの相対パスで設定する。あるいは絶対パスで設定する。</td>
</tr>
<tr>
	<td>efw.storage.folder</td>
	<td>/WEB-INF/efw/storage</td>
	<td>webアプリの取り扱うファイルのフォルダ。webアプリの相対パスで設定する。あるいは絶対パスで設定する。</td>
</tr>
<tr>
	<td>efw.login.check</td>
	<td>false</td>
	<td>webアプリのログインチェック要否フラグ。</td>
</tr>
<tr>
	<td>efw.login.key</td>
	<td>null</td>
	<td>ログインチェック用のセッションキー。</td>
</tr>
<tr>
	<td>efw.login.url</td>
	<td>login.jsp</td>
	<td>ログインチェック用のセッションキー。</td>
</tr>
<tr>
	<td>efw.logging.path</td>
	<td>/logs</td>
	<td>efwログ出力パス。絶対パス。</td>
</tr>
<tr>
	<td>efw.logging.name</td>
	<td>efwlog%g.txt</td>
	<td>efwログファイル名。</td>
</tr>
<tr>
	<td>efw.logging.limit</td>
	<td>10485760</td>
	<td>efwログファイルのサイズ制限。</td>
</tr>
<tr>
	<td>efw.logging.num</td>
	<td>5</td>
	<td>efwログファイルの数。</td>
</tr>
<tr>
	<td>efw.logging.level</td>
	<td>WARNING</td>
	<td>efwログファイルの出力レベル。ALL,FINEST,FINER,FINE,CONFIG,INFO,WARNING,SEVERE,OFF</td>
</tr>
<tr>
	<td>efw.cors</td>
	<td>*</td>
	<td>クロスドメイン通信設定、他のサーバーのウェブページから本サイトのイベントを利用する可否を管理する。<br>
	* : 全部許可, null : 全部拒否, http://0.0.0.0:8080,http://9.9.9.9 : 指定サイト許可。</td>
</tr>
</table>
</DL></DD>
