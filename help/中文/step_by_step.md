&nbsp;&nbsp;&nbsp;&nbsp;<a href="../日本語/step_by_step.md">日本語</a>
&nbsp;<a href="../中文/step_by_step.md">中文</a>
&nbsp;<a href="../English/step_by_step.md">English</a>
<H1>Step By Step 环境搭建</H1>

<h2>前提条件</h2>
<table>
<tr>
	<th>项目</th><th>说明</th><th>注意事项</th>
</tr>
<tr>
	<td>JDK</td><td>java JDK 1.7 or java JDK 1.8</td><td>Java JDK和Open JDK是有区别的。<br>使用Open JDK 1.7，efw会发生错误。<br>没有试验过Open JDK 1.8。</td>
</tr>
<tr>
	<td>应用服务器</td><td>推荐使用 Tomcat 1.7 or Tomcat 1.8<br>需要是支持 Servlet 3.0的java应用服务器。<br>http://tomcat.apache.org/whichversion.html</td><td>如果在不支持Servlet 3的应用服务器里设置efw，需要调整web.xml。</td>
</tr>
<tr>
	<td>浏览器</td><td>IE8以上，FireFox、Chrome等</td><td>可以使用jQuery1.12的浏览器都可以。<br>cors功能有特别要求。</td>
</tr>
</table>
<h2>例子应用程序的环境搭建</h2>
<table>
<tr>
	<th>步骤</th><th>说明</th><th>注意事项</th>
</tr>
<tr>
	<td>JDK和Tomcat</td><td>参照前提条件。</td><td>参照前提条件。</td>
</tr>
<tr>
	<td>PostgreSQL</td><td>下载安装9.3以后版本。新建efwSample数据库。<br>https://www.postgresql.org/download/</td><td>因为例子DB是9.3版。</td>
</tr>
<tr>
	<td>例子DB</td><td>下载例子DB。还原到efwSample。<br>https://github.com/changkejun/efw2.X/<br>efw2.X/release with sample/sample database/</td><td></td>
</tr>
<tr>
	<td>例子App</td><td>下载例子App。拷贝到Tomcat/webapps/efw路径。<br>https://github.com/changkejun/efw2.X/<br>efw2.X/release with sample/web application/</td><td></td>
</tr>
<tr>
	<td>DB链接</td><td>打开efw/META-INF/context.xml，修改用户名和密码等链接信息。</td><td>postgres的JDBC驱动程序，已经包含到例子应用程序里了。</td>
</tr>
<tr>
	<td>属性文件设置</td><td>打开efw/WEB-INF/classes/efw.properties，修改属性文件。<br>把efw.isdebug设置为true。<br>把efw.logging.level设置为ALL。</td><td></td>
</tr>
<tr>
	<td>确认动作</td><td>启动Tomcat，用http://localhost:8080/efw/login.jsp 来确认efw例子画面。</td><td></td>
</tr>
</table>




