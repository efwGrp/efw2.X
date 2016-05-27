<a href="../file_list.md">return</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/file_list/myPage.jsp.md">日本語</a>
&nbsp;<a href="../../中文/file_list/myPage.jsp.md">中文</a>
&nbsp;<a href="../../English/file_list/myPage.jsp.md">English</a>
<H3><A NAME="efw.jsp">jspのプログラム</A></H3>
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
<DD>jspファイル。<br>
</DL></DD>
<HR>


<H3><A NAME="efw.jsp.taglib">efwタグ利用</A></H3>
<pre>
    &lt;efw:Core/&gt;
    &lt;efw:JQueryUI/&gt;
    &lt;efw:InputBehavior/&gt;
</pre>

<DL>
<DD>
efw の taglib を宣言して、efwのタグを取り込み、efw.client の各機能を利用できる。<br>

<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">タグ</th>
	<th style="width:850px">説明</th>
</tr>
<tr>
	<td>&lt;efw:Core/&gt;</td>
	<td>efwの基本機能をインクルードする。必須。</td>
</tr>
<tr>
	<td>&lt;efw:JQueryUI/&gt;</td>
	<td>JQueryUI 機能をインクルードする。オプション。</td>
</tr>
<tr>
	<td>&lt;efw:InputBehavior/&gt;</td>
	<td>入力支援機能をインクルードする。オプション。入力支援のカスタマイズは、efw.css 。</td>
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
efwの各jsファイルは、UTF-8 でエンコードする。ただし、jsp画面は用途によりencodeとcharsetは、自由に設定できる。<br>

<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">ファイル</th>
	<th style="width:200px">encode & charset</th>
	<th style="width:650px">説明</th>
</tr>
<tr>
	<td>efw/efw.client.messages.js</td>
	<td>UTF-8</td>
	<td>クライアントのメッセージファイルは、UTF-8でencodeを固定にする。</td>
</tr>
<tr>
	<td>efw/efw.server.messages.js</td>
	<td>UTF-8</td>
	<td>サーバーのメッセージファイルは、UTF-8でencodeを固定にする。</td>
</tr>
<tr>
	<td>jsp pageEncoding</td>
	<td>UTF-8 推薦</td>
	<td>jsp画面は用途によりencodeとcharsetは、UTF-8を推薦。自由に設定できる。</td>
</tr>
<tr>
	<td>jsp charset</td>
	<td>UTF-8 推薦</td>
	<td>jsp画面は用途によりencodeとcharsetは、UTF-8を推薦。自由に設定できる。</td>
</tr>
<tr>
	<td>jsp meta charset</td>
	<td>jsp charset と同じ</td>
	<td>－</td>
</tr>
<tr>
	<td>event js</td>
	<td>UTF-8</td>
	<td>サーバーサイドのjsファイルのencodeは、UTF-8でencodeを固定にする。</td>
</tr>
<tr>
	<td>sql xml</td>
	<td>UTF-8 推薦</td>
	<td>サーバーサイドのxmlファイルのencodeは、UTF-8を推薦。自由に設定できる。</td>
</tr>

</table>
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.charset">画面間のデータ受取り引渡し</A></H3>
<pre>
    var param1="&lt;%=request.getParameter("param1")%&gt;";
    window.location="next.jsp?param1="+param1;
</pre>
<DL>
<DD>
画面間のデータ受取りは、request.getParameter方式を推薦。画面間のデータ引渡しは、jsp従来どおりのURLパラメーター方式を推薦。<br>
また、画面遷移は、jsp従来どおりのURL呼び出す方式を推薦。必要に応じて、フォームポスト、セッション、クッキーなども利用可能。<br>

</DL></DD>
<HR>

<H3><A NAME="efw.jsp.event">イベントのデータ受取り引渡し</A></H3>
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
イベントのデータ受取り引渡しは、サーバーサイドのイベントjsファイルに記載する。クライアントjsに記載不要。<br>
ただし、success 関数に受取りデータに対して処理があれば、eventResult を意識する必要。詳細はAPIの efw.client.fire を参照。
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.dataFormat">入力支援</A></H3>
<pre>
    &lt;input id="txt_testnumber" type="text" data-format="#,##0.00"&gt;
    &lt;input id="txt_testdate" type="text" data-format="yyyy年MM月dd日"&gt;
</pre>
<DL>
<DD>
efw:InputBehavior をインクルードして、入力枠に data-format を定義する場合、入力支援の動きを行う。<br>
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">data-format</th>
	<th style="width:100px">イベント</th>
	<th style="width:750px">説明</th>
</tr>
<tr>
	<td>#,##0.00</td>
	<td>focus</td>
	<td>フォーマットなしの数字で表す。1,234.00 ⇒ 1234</td>
</tr>
<tr>
	<td>#,##0.00</td>
	<td>blur</td>
	<td>フォーマット後の文字列で表す。フォーマットできない場合空白。1234 ⇒ 1,234.00、ABCD ⇒ 「」</td>
</tr>
<tr>
	<td>yyyy年MM月dd日</td>
	<td>focus</td>
	<td>フォーマットなしの数字で表す。2015年12月31日 ⇒ 20151231</td>
</tr>
<tr>
	<td>yyyy年MM月dd日</td>
	<td>blur</td>
	<td>フォーマット後の文字列で表す。フォーマットできない場合空白。20151231 ⇒ 2015年12月31日、ABCD ⇒ 「」</td>
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
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:300px">data-shortcut</th>
	<th style="width:750px">説明</th>
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
