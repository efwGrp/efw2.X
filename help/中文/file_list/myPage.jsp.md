<a href="../file_list.md">返回</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/file_list/myPage.jsp.md">日本語</a>
&nbsp;<a href="../../中文/file_list/myPage.jsp.md">中文</a>
&nbsp;<a href="../../English/file_list/myPage.jsp.md">English</a>
<H2><A NAME="efw.jsp">jsp程序</A></H2>
<pre>
web/myPage.jsp
--------------------------------------------------------------------------------
    &lt;%@ page language="java" contentType="text/html; <b>charset</b>=UTF-8" <b>pageEncoding</b>="UTF-8"%&gt;
    &lt;%@ <b>taglib</b> prefix="efw" uri="efw" %&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;meta http-equiv="Content-Type" content="text/html; <b>charset</b>=UTF-8"/&gt;
        &lt;<b>efw:Core</b>/&gt;
        &lt;<b>efw:JQueryUI</b>/&gt;
        &lt;<b>efw:InputBehavior</b>/&gt;
        &lt;script&gt;
            var param1="&lt;%=<b>request.getParameter("param1")</b>%&gt;";
            function bodyLoad(){
                efw.client.fire({
                   eventId:"form1_event1",
                   ...
                   success:function(data){
                       <b>window.location="next.jsp?param1="+param1</b>;
                   },
                });
                ...
            }
        &lt;/script&gt;
    &lt;/head&gt;
    &lt;body onload="bodyLoad()"&gt;
        &lt;input id="txt_testnumber" type="text" <b>data-format</b>="#,##0.00"&gt;
        &lt;input id="txt_testdate" type="text" <b>data-format</b>="yyyy年MM月dd日"&gt;
        ...
    &lt;/body&gt;
    &lt;/html&gt;
</pre>
<DL>
<DD>jsp文件。<br>
</DL></DD>
<HR>


<H3><A NAME="efw.jsp.taglib">efw标签的使用</A></H3>
<pre>
    &lt;efw:Core/&gt;
    &lt;efw:JQueryUI/&gt;
    &lt;efw:InputBehavior/&gt;
</pre>

<DL>
<DD>
设置efw的taglib宣言，然后在程序里加入efw标签，就可以使用efw.client的各种功能了。<br>

<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">标签</th>
	<th style="width:850px">说明</th>
</tr>
<tr>
	<td>&lt;efw:Core/&gt;</td>
	<td>引入efw的基本功能。必须。</td>
</tr>
<tr>
	<td>&lt;efw:JQueryUI/&gt;</td>
	<td>引入JQueryUI的功能。可选。</td>
</tr>
<tr>
	<td>&lt;efw:InputBehavior/&gt;</td>
	<td>引入输入支援功能。可选输入支援的样式定制化使用efw。css文件。</td>
</tr>
</table>
</DL></DD>
<HR>


<H3><A NAME="efw.jsp.charset">encode & charset</A></H3>
<pre>
    &lt;%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%&gt;
    &lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/&gt;
</pre>
<DL>
<DD>
efw的各个文件使用UTF-8编码。但是jsp画面根据用途可以自由设置encode和charset。<br>

<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">文件</th>
	<th style="width:200px">encode & charset</th>
	<th style="width:650px">说明</th>
</tr>
<tr>
	<td>efw/efw.client.messages.js</td>
	<td>UTF-8</td>
	<td>客户端信息文件，固定为UTF-8编码。</td>
</tr>
<tr>
	<td>efw/efw.server.messages.js</td>
	<td>UTF-8</td>
	<td>服务端信息文件，固定为UTF-8编码。</td>
</tr>
<tr>
	<td>jsp pageEncoding</td>
	<td>推荐 UTF-8</td>
	<td>jsp画面的encode和charset推荐使用UTF-8。根据用途可以自由设置。</td>
</tr>
<tr>
	<td>jsp charset</td>
	<td>推荐 UTF-8</td>
	<td>jsp画面的encode和charset推荐使用UTF-8。根据用途可以自由设置。</td>
</tr>
<tr>
	<td>jsp meta charset</td>
	<td>和 jsp charset 一致</td>
	<td>－</td>
</tr>
<tr>
	<td>event js</td>
	<td>UTF-8</td>
	<td>服务端js文件，固定为UTF-8编码。</td>
</tr>
<tr>
	<td>sql xml</td>
	<td>推荐 UTF-8</td>
	<td>服务端xml文件推荐使用UTF-8编码。可以自由设置。</td>
</tr>

</table>
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.charset">画面间数据传递</A></H3>
<pre>
    var param1="&lt;%=request.getParameter("param1")%&gt;";
    window.location="next.jsp?param1="+param1;
</pre>
<DL>
<DD>
画面间收取数据，推荐使用request.getParameter方式。画面间发送数据，推荐使用jsp常规的URL参数方式。<br>
另外，画面迁移推荐使用jsp常规的URL调用方式。如有必要，画面提交，session，cookies也可以使用。<br>

</DL></DD>
<HR>

<H3><A NAME="efw.jsp.event">事件的数据传递</A></H3>
<pre>
    efw.client.fire({
       eventId:"form1_event1",
           ...
       success:function(eventResult){
           ...
       },
    });
</pre>
<DL>
<DD>
事件的数据传递记述是在服务端js文件，而不是客户端js文件。<br>
但是，如果在success函数里处理收到的数据的话，需意识到eventResult的存在。詳細内容参照efw.client.fire的API。
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.dataFormat">输入支援</A></H3>
<pre>
    &lt;input id="txt_testnumber" type="text" data-format="#,##0.00"&gt;
    &lt;input id="txt_testdate" type="text" data-format="yyyy年MM月dd日"&gt;
</pre>
<DL>
<DD>
引入efw:InputBehavior标签后，如果定义输入框的data-format属性，就可以触发输入支援的画面动作。<br>
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">data-format</th>
	<th style="width:100px">事件</th>
	<th style="width:750px">说明</th>
</tr>
<tr>
	<td>#,##0.00</td>
	<td>focus</td>
	<td>显示无格式数字。1,234.00 ⇒ 1234</td>
</tr>
<tr>
	<td>#,##0.00</td>
	<td>blur</td>
	<td>显示有格式字符串。如果输入数据无法格式的话显示空白。1234 ⇒ 1,234.00 ，ABCD ⇒ 「」</td>
</tr>
<tr>
	<td>yyyy年MM月dd日</td>
	<td>focus</td>
	<td>显示无格式数字。2015年12月31日 ⇒ 20151231</td>
</tr>
<tr>
	<td>yyyy年MM月dd日</td>
	<td>blur</td>
	<td>显示有格式字符串。如果输入数据无法格式的话显示空白。20151231 ⇒ 2015年12月31日、ABCD ⇒ 「」</td>
</tr>
</table>
格式化定义的详细内容参照formatter的API。
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.shortCut">快捷键</A></H3>
<pre>
    &lt;input id="btn_save" type="button" data-shortcut="CTRL+S"&gt;
    &lt;input id="btn_cancel" type="button" data-shortcut="F6"&gt;
</pre>
<DL>
<DD>
引入efw:InputBehavior标签后，如果定义按钮的data-shortcut属性，就可以触发快捷键的画面动作。<br>
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:300px">data-shortcut</th>
	<th style="width:750px">说明</th>
</tr>
<tr>
	<td>F1～F12</td>
	<td>功能键。</td>
</tr>
<tr>
	<td>CTRL+A～CTRL+Z</td>
	<td>控制键。</td>
</tr>
<tr>
	<td>ALT+A～ALT+Z</td>
	<td>代用键。</td>
</tr>
</table>
</DL></DD>
