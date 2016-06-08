&nbsp;&nbsp;&nbsp;&nbsp;<a href="../日本語/step_by_step.md">日本語</a>
&nbsp;<a href="../中文/step_by_step.md">中文</a>
&nbsp;<a href="../English/step_by_step.md">English</a>
<H1>Step By Step Running Environment Building</H1>

<h2>The Prerequisites</h2>
<table>
<tr>
	<th>Items</th><th>Directions</th><th>Attention</th>
</tr>
<tr>
	<td>JDK</td><td>java JDK 1.7 or java JDK 1.8</td><td>There're some differences between Java JDK and Open JDK.<br>Some errors will be raised when run efw on Open JDK 1.7.<br>Have'nt tried to run efw on Open JDK 1.8.</td>
</tr>
<tr>
	<td>Application Server</td><td>Recommend to use Tomcat 1.7 or Tomcat 1.8<br>The java application server you use must support Servlet 3.0 .<br>http://tomcat.apache.org/whichversion.html</td><td>You have to modify the settings in web.xml if your application server doesn't support Servlet 3.0.</td>
</tr>
<tr>
	<td>Browser</td><td>IE8+,FireFox,Chrome and so on.</td><td>可以使用jQuery1.12的浏览器都可以。<br>cors功能有特别要求。</td>
</tr>
</table>
<h2>Build Running Environment For Sample App</h2>
<table>
<tr>
	<th>Steps</th><th>Directions</th><th>Attention</th>
</tr>
<tr>
	<td>JDK & Tomcat</td><td>Refer to the prerequisites please.</td><td>Refer to the prerequisites please.</td>
</tr>
<tr>
	<td>PostgreSQL</td><td>Download and install PostgreSQL 9.3 or later version.Create efwSample database.<br>https://www.postgresql.org/download/</td><td>Beacuse the version used by the sample App is 9.3.</td>
</tr>
<tr>
	<td>Sample DB</td><td>Download sample DB.还原到efwSample。<br>https://github.com/changkejun/efw2.X/<br>efw2.X/release with sample/sample database/</td><td></td>
</tr>
<tr>
	<td>Sample App</td><td>Download sample App and copy to the path: Tomcat/webapps/efw/.<br>https://github.com/changkejun/efw2.X/<br>efw2.X/release with sample/web application/</td><td></td>
</tr>
<tr>
	<td>DB Connection</td><td>Open the file efw/META-INF/context.xml，modify the username,password and the other configuration information of DB connection.</td><td>The JDBC driver program to postgres has been included into the sample App.</td>
</tr>
<tr>
	<td>Settings In Property File</td><td>Open the file  efw/WEB-INF/classes/efw.properties,modify the settings.<br>Set efw.isdebug to true.<br>Set efw.logging.level to ALL.</td><td></td>
</tr>
<tr>
	<td>确认动作</td><td>启动Tomcat，用http://localhost:8080/efw/login.jsp 来确认efw例子画面。</td><td></td>
</tr>
</table>




