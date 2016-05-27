<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>efw.clientの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.client.fire">fire</A></H3>
<pre>
fire ( <A href="#efw.eventParams">eventParams</A> )</PRE>
<DL>
<DD>Ajaxを呼び出すための入り口関数。
 1回目Ajaxはパラメーターフォーマットを取得し、2回目Ajaxを実行する。
<P>
<DD><DL>
<B>パラメータ:</B>
<DD><CODE><A href="#efw.eventParams">eventParams</A></CODE> - イベントパラメーター、必須。
</DL></DD>
<HR>

<H3><A NAME="efw.client.pickup">pickup</A></H3>
<pre>
pickup ( <A href="#efw.event.paramsFormat">paramsFormat</A> , <A href="#efw.eventParams.manualParams">manualParams</A> )</PRE>
<DL>
<DD>パラメータ値を取得する関数。（fire関数機能の一部分）

<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE><A href="#efw.event.fire.requestParams">requestParams</A></CODE> - リクエストパラメーターまたはその基準に従うデータ。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.event.paramsFormat">paramsFormat</A></CODE> - パラメーターフォーマット、必須。
<DD><CODE><A href="#efw.eventParams.manualParams">manualParams</A></CODE> - 手動パラメーター 、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.client.show">show</A></H3>
<pre>
show ( <A href="#efw.event.fire.eventResult">eventResult</A> )</PRE>
<DL>
<DD>値を画面に表示する関数。（fire関数機能の一部分）
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.event.fire.eventResult">eventResult</A></CODE> - 2回目Ajaxの実行結果またはその基準に従うデータ、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.client.alert">alert</A></H3>
<pre>
alert ( message , callback );                                                   //callback = function () { ... };
</PRE>
<DL>
<DD>Jquery UIのAlertメッセージボックスを呼び出す関数。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>message</CODE> - 表示するメッセージ、文字列、必須。
<DD><CODE>callback</CODE> - OKボタン押す場合のコールバック関数、オプション。
</DL></DD>
</DL></DD>