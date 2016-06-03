&nbsp;&nbsp;&nbsp;&nbsp;<a href="../日本語/step_by_step.md">日本語</a>
&nbsp;<a href="../中文/step_by_step.md">中文</a>
&nbsp;<a href="../English/step_by_step.md">English</a>
<H1>Step By Step 環境を構築</H1>

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
	<td>サンプルDB</td><td>https://github.com/changkejun/efw2.X/ にてサンプルDBをダウンロードしてください。efwSampleのデータベースにリストアしてください。<br>efw2.X/release with sample/sample database/</td><td></td>
</tr>
</table>

<h2>開発環境構築</h2>
<table>
<tr>
	<th>ステップ</th><th>説明</th><th>注意事項</th>
</tr>
<tr>
	<td></td><td></td><td></td>
</tr>
<tr>
	<td></td><td></td><td></td>
</tr>
<tr>
	<td></td><td></td><td></td>
</tr>
</table>

<h2>実行環境構築</h2>

1.ダウンロードする
2.DBをリスドアする
3.アプリをtomcatにいれる
4.ＤＢ設定を修正する
5.Debugモードに設定する


