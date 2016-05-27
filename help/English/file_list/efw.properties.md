<a href="../file_list.md">return</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/file_list/efw.properties.md">日本語</a>
&nbsp;<a href="../../中文/file_list/efw.properties.md">中文</a>
&nbsp;<a href="../../English/file_list/efw.properties.md">English</a>
<H3><A NAME="efw.properties">the Properties File</A></H3>
<pre>
web/WEB-INF/classes/efw.properties
</pre>
<DL>
<DD>
If everything is default, the properties file is not needed.
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">Key</th>
	<th style="width:200px">Default Value</th>
	<th style="width:650px">Description</th>
</tr>
<tr>
	<td>efw.isdebug</td>
	<td>false</td>
	<td>If the value is true, changing of the program will be loaded into memory at run time. </td>
</tr>
<tr>
	<td>efw.jdbc.resource</td>
	<td>jdbc/efw</td>
	<td>The default jdbc resource name, which must be defined in context.xml. If your server is not tomcat, you can define it by jndi name. Example: java:xxx/yyy/zzz  or  [java:comp/env/]jdbc/efw</td>
</tr>
<tr>
	<td>efw.server.folder</td>
	<td>/WEB-INF/efw/server</td>
	<td>The folder for efw server program. It can be set in a relative or absolute path of the web application.</td>
</tr>
<tr>
	<td>efw.event.folder</td>
	<td>/WEB-INF/efw/event</td>
	<td>The folder for web application events program. It can be set in a relative or absolute path of the web application.</td>
</tr>
<tr>
	<td>efw.sql.folder</td>
	<td>/WEB-INF/efw/sql</td>
	<td>The folder for web application outside sql. It can be set in a relative or absolute path of the web application.</td>
</tr>
<tr>
	<td>efw.storage.folder</td>
	<td>/WEB-INF/efw/storage</td>
	<td>The forlder for Web application IO. It can be set in a relative or absolute path of the web application.</td>
</tr>
<tr>
	<td>efw.login.check</td>
	<td>false</td>
	<td>The flag indicating whether or not the web application does the login check.</td>
</tr>
<tr>
	<td>efw.login.key</td>
	<td>null</td>
	<td>The session key for login check. </td>
</tr>
<tr>
	<td>efw.logging.path</td>
	<td>/logs</td>
	<td>The path of efw log. Absolute path.</td>
</tr>
<tr>
	<td>efw.logging.name</td>
	<td>efwlog%g.txt</td>
	<td>The file name of efw log. </td>
</tr>
<tr>
	<td>efw.logging.limit</td>
	<td>10485760</td>
	<td>The limit of efw log. </td>
</tr>
<tr>
	<td>efw.logging.num</td>
	<td>5</td>
	<td>The file count of efw log. </td>
</tr>
<tr>
	<td>efw.logging.level</td>
	<td>WARNING</td>
	<td>The output level of efw log. ALL,FINEST,FINER,FINE,CONFIG,INFO,WARNING,SEVERE,OFF</td>
</tr>
<tr>
	<td>efw.cors</td>
	<td>*</td>
	<td>Cross-domain communication settings. It controls whether the events of this site can be used from the Web page of the other sites.<br>
	* : Allow all, null : Reject all, http://0.0.0.0:8080,http://9.9.9.9 : Specified permission. </td>
</tr>
</table>
</DL></DD>
