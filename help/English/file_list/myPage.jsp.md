<a href="../file_list.md">return</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/file_list/myPage.jsp.md">日本語</a>
&nbsp;<a href="../../中文/file_list/myPage.jsp.md">中文</a>
&nbsp;<a href="../../English/file_list/myPage.jsp.md">English</a>
<H2><A NAME="efw.jsp">Jsp Program</A></H2>
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
        &lt;input id="txt_testdate" type="text" <b>data-format</b>="yyyy-MM-dd"&gt;
        ...
    &lt;/body&gt;
    &lt;/html&gt;
</pre>
<DL>
<DD>The jsp file.<br>
</DL></DD>
<HR>


<H3><A NAME="efw.jsp.taglib">Efw Tag</A></H3>
<pre>
    &lt;efw:Core/&gt;
    &lt;efw:JQueryUI/&gt;
    &lt;efw:InputBehavior/&gt;
</pre>

<DL>
<DD>
If you declare the tag library of efw and add the efw tag, you can use the function of efw.client.<br>

<table>
<tr>
	<th>Tag</th>
	<th>Description</th>
</tr>
<tr>
	<td>&lt;efw:Core/&gt;</td>
	<td>To include the function of efw core. Required. </td>
</tr>
<tr>
	<td>&lt;efw:JQueryUI/&gt;</td>
	<td>To include the function of JQueryUI. Optional. </td>
</tr>
<tr>
	<td>&lt;efw:InputBehavior/&gt;</td>
	<td>To include the function of input support. Optional. You can change the style sheet for input support by customizing efw.css .</td>
</tr>
</table>
</DL></DD>
<HR>


<H3><A NAME="efw.jsp.charset">Encode & Charset</A></H3>
<pre>
    &lt;%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%&gt;
    &lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/&gt;
</pre>
<DL>
<DD>
All files of Efw are UTF-8 encode. But you can change the encode and charset of jsp by you self. <br>

<table>
<tr>
	<th>File</th>
	<th>Encode & Charset</th>
	<th>Description</th>
</tr>
<tr>
	<td>efw/efw.client.messages.js</td>
	<td>UTF-8</td>
	<td>The encode of the client message file is fixed to UTF-8. </td>
</tr>
<tr>
	<td>efw/efw.server.messages.js</td>
	<td>UTF-8</td>
	<td>The encode of the server message file is fixed to UTF-8. </td>
</tr>
<tr>
	<td>jsp pageEncoding</td>
	<td>UTF-8 is recommended</td>
	<td>The encode and charset of jsp page is set to UTF-8. It can be changed as you like. </td>
</tr>
<tr>
	<td>jsp charset</td>
	<td>UTF-8 recommended</td>
	<td>The encode and charset of jsp page is set to UTF-8. It can be changed as you like. </td>
</tr>
<tr>
	<td>jsp meta charset</td>
	<td>same to jsp charset</td>
	<td>－</td>
</tr>
<tr>
	<td>event js</td>
	<td>UTF-8</td>
	<td>The encode of the server js file is fixed to UTF-8. </td>
</tr>
<tr>
	<td>sql xml</td>
	<td>UTF-8 is recommended</td>
	<td>The encode and charset of server xml is set to UTF-8. It can be changed as you like. </td>
</tr>

</table>
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.charset">Data Receipt And Delivery Between Two Pages</A></H3>
<pre>
    var param1="&lt;%=request.getParameter("param1")%&gt;";
    window.location="next.jsp?param1="+param1;
</pre>
<DL>
<DD>
The data receiving from another page is recommented to use request.getParameter. And the data sending is recommended to use URL paramter as usual.<br>
And the page transition is recommended to use URL calling as usual. Form post, session, cookie can be used if it is necessary.<br>
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.event">Data Receipt And Delivery Of Events</A></H3>
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
The data Receipt and delivery of events is written in the server side js files,  not the client js files.<br>
But if the success function is necessary to do with the Received data, you must know the eventResult. See the detail by API efw.client.fire .
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.dataFormat">Input Support</A></H3>
<pre>
    &lt;input id="txt_testnumber" type="text" data-format="#,##0.00"&gt;
    &lt;input id="txt_testdate" type="text" data-format="yyyy-MM-dd"&gt;
</pre>
<DL>
<DD>
Input support will work if you import efw:InputBehavior tag and set the data-format attribute of the input element.<br>
<table>
<tr>
	<th>data-format</th>
	<th>Dvent</th>
	<th>Description</th>
</tr>
<tr>
	<td>#,##0.00</td>
	<td>focus</td>
	<td>To change the value of text box to number without format. 1,234.00 ⇒ 1234</td>
</tr>
<tr>
	<td>#,##0.00</td>
	<td>blur</td>
	<td>To change the value of text box to number with format. The value will be blank iff it can not be formatted. 1234 ⇒ 1,234.00, ABCD ⇒ []</td>
</tr>
<tr>
	<td>yyyy-MM-dd</td>
	<td>focus</td>
	<td>To change the value of text box to number without format. 2015-12-31 ⇒ 20151231</td>
</tr>
<tr>
	<td>yyyy-MM-dd</td>
	<td>blur</td>
	<td>To change the value of text box to number with format. The value will be blank iff it can not be formatted. 20151231 ⇒ 2015-12-31, ABCD ⇒ []</td>
</tr>
</table>
フォーマットの書き方の詳細はAPIの formatter を参照。
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.shortCut">ショットカット</A></H3>
<pre>
    &lt;input id="btn_save" type="button" data-shortcut="CTRL+S"&gt;
    &lt;input id="btn_cancel" type="button" data-shortcut="F6"&gt;
</pre>
<DL>
<DD>
efw:InputBehavior をインクルードして、ボタンに data-shortcut を定義する場合、ショットカットの動きを行う。<br>
<table>
<tr>
	<th>data-shortcut</th>
	<th>説明</th>
</tr>
<tr>
	<td>F1～F12</td>
	<td>フォクションキー。</td>
</tr>
<tr>
	<td>CTRL+A～CTRL+Z</td>
	<td>コントロールキー。</td>
</tr>
<tr>
	<td>ALT+A～ALT+Z</td>
	<td>オルトキー。</td>
</tr>
</table>
</DL></DD>
