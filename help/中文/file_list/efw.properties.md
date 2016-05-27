<a href="../file_list.md">返回</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/file_list/efw.properties.md">日本語</a>
&nbsp;<a href="../../中文/file_list/efw.properties.md">中文</a>
&nbsp;<a href="../../English/file_list/efw.properties.md">English</a>
<H3><A NAME="efw.properties">配置文件</A></H3>
<pre>
web/WEB-INF/classes/efw.properties
</pre>
<DL>
<DD>
如果完全使用默认配置的话，不需要配置文件。
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">键</th>
	<th style="width:200px">默认值</th>
	<th style="width:650px">说明</th>
</tr>
<tr>
	<td>efw.isdebug</td>
	<td>false</td>
	<td>如果是true的话，运行时修改的程序会被加载入内存。</td>
</tr>
<tr>
	<td>efw.jdbc.resource</td>
	<td>jdbc/efw</td>
	<td>默认的jdbc资源名。需要在context.xml里定义。如果应用服务器不是tomcat的话，可以直接写jndi名。例：　　java:xxx/yyy/zzz　　or　　[java:comp/env/]jdbc/efw</td>
</tr>
<tr>
	<td>efw.server.folder</td>
	<td>/WEB-INF/efw/server</td>
	<td>efw服务端程序的路径。可以设置web应用下的相对路径，也可以设置绝对路径。</td>
</tr>
<tr>
	<td>efw.event.folder</td>
	<td>/WEB-INF/efw/event</td>
	<td>web应用事件程序的路径。可以设置web应用下的相对路径，也可以设置绝对路径。</td>
</tr>
<tr>
	<td>efw.sql.folder</td>
	<td>/WEB-INF/efw/sql</td>
	<td>web应用外置Sql文件的路径。可以设置web应用下的相对路径，也可以设置绝对路径。</td>
</tr>
<tr>
	<td>efw.storage.folder</td>
	<td>/WEB-INF/efw/storage</td>
	<td>web应用操作文件的路径。可以设置web应用下的相对路径，也可以设置绝对路径。</td>
</tr>
<tr>
	<td>efw.login.check</td>
	<td>false</td>
	<td>web应用需不需要登陆校验的控制标识。</td>
</tr>
<tr>
	<td>efw.login.key</td>
	<td>null</td>
	<td>登陆校验用的session键。</td>
</tr>
<tr>
	<td>efw.logging.path</td>
	<td>/logs</td>
	<td>efw日志输出路径。绝对路径。</td>
</tr>
<tr>
	<td>efw.logging.name</td>
	<td>efwlog%g.txt</td>
	<td>efw日志文件名。</td>
</tr>
<tr>
	<td>efw.logging.limit</td>
	<td>10485760</td>
	<td>efw日志文件大小限制。</td>
</tr>
<tr>
	<td>efw.logging.num</td>
	<td>5</td>
	<td>efw日志文件数目。</td>
</tr>
<tr>
	<td>efw.logging.level</td>
	<td>WARNING</td>
	<td>efw日志文件的输出级别。ALL,FINEST,FINER,FINE,CONFIG,INFO,WARNING,SEVERE,OFF</td>
</tr>
<tr>
	<td>efw.cors</td>
	<td>*</td>
	<td>跨域通信设置，管理其他网站是否可以利用本网站的事件。<br>
	* : 全部许可, null : 全部拒绝, http://0.0.0.0:8080,http://9.9.9.9 : 许可指定网站。</td>
</tr>
</table>
</DL></DD>
