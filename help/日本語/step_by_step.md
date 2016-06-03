&nbsp;&nbsp;&nbsp;&nbsp;<a href="../日本語/step_by_step.md">日本語</a>
&nbsp;<a href="../中文/step_by_step.md">中文</a>
&nbsp;<a href="../English/step_by_step.md">English</a>
<H1>Step By Step 環境構築</H1>

<h2>要求事項</h2>
<table>
<tr>
	<th>項目</th><th>説明</th><th>注意事項</th>
</tr>
<tr>
	<td>JDK</td><td>java JDK 1.7 or java JDK 1.8</td><td>Java JDKとOpen JDKの違いを注意する必要。<br>Open JDK 1.7でエラーが発生する。<br>Open JDK 1.8は試したことがない。</td>
</tr>
<tr>
	<td>アプリサーバ</td><td>Tomcat 1.7 or Tomcat 1.8 を推薦<br>Servlet 3.0をサポートするバージョンが必要。<br>http://tomcat.apache.org/whichversion.html</td><td>Servlet 3をサポートしないアプリサーバに設置する場合、web.xmlの調整が必要。</td>
</tr>
<tr>
	<td>ブラウザ</td><td>IE8以上、FireFox、Chromeなど</td><td>jQuery1.12を利用できるブラウザ。<br>cors機能は特別な要求がある。</td>
</tr>
</table>
<h2>サンプル環境構築</h2>
<table>
<tr>
	<th>ステップ</th><th>説明</th><th>注意事項</th>
</tr>
<tr>
	<td>JDKとTomcat</td><td>要求事項を参照。</td><td>要求事項を参照。</td>
</tr>
<tr>
	<td>PostgreSQL</td><td>9.3以降バージョンをダウンロード＆インストールしてください。efwSampleのデータベースを作ってください。<br>https://www.postgresql.org/download/</td><td>サンプルDBのバージョンは9.3だから。</td>
</tr>
<tr>
	<td>サンプルDB</td><td>サンプルDBをダウンロードしてください。efwSampleのデータベースにリストアしてください。<br>https://github.com/changkejun/efw2.X/<br>efw2.X/release with sample/sample database/</td><td></td>
</tr>
<tr>
	<td>サンプルApp</td><td>サンプルAppをダウンロードしてください。Tomcat/webapps/efwフォルダにコピーしてください。<br>https://github.com/changkejun/efw2.X/<br>efw2.X/release with sample/web application/</td><td></td>
</tr>
<tr>
	<td>DB接続</td><td>efw/META-INF/context.xmlを開いて、ユーザ名とパスワードなどの接続情報を修正する。</td><td>postgresのJDBCドライブは、サンプルアプリに含んでいる。</td>
</tr>
<tr>
	<td>プロパティ設定</td><td>efw/WEB-INF/classes/efw.propertiesを開いて、プロパティファイルを修正する。<br>efw.isdebugをtrueに設定してください。<br>efw.logging.levelをALLに設定してください。</td><td></td>
</tr>
<tr>
	<td>動作確認</td><td>Tomcatを起動して、http://localhost:8080/efw/login.jsp でefwサンプル画面を開いてください。</td><td></td>
</tr>
</table>




