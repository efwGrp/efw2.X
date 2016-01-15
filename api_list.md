<H2>efw Javascript API</H2>
	
<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>APIの一覧</B></FONT></TH>
	</TR>
</TABLE>

<pre>
efw
├─client
│  ├─<a href="#efw.client.fire">fire</a> ( <a href="#efw.eventParams">eventParams</a> )                                                    <span style="color:yellow;">★★★</span>
│  ├─<a href="#efw.client.pickup">pickup</a> ( <a href="#efw.event.paramsFormat">paramsFormat</a> , <a href="#efw.eventParams.manualParams">manualParams</a> )</a>                                  <span style="color:yellow;">★</span>
│  ├─<a href="#efw.client.show">show</a> ( <a href="#efw.event.fire.eventResult">eventResult</a> )                                                    <span style="color:yellow;">★</span>
│  ├─<a href="#efw.client.alert">alert</a>( message , callback )                                             <span style="color:yellow;">★★★</span>
│  ├─messages
│  │  ├─<a href="#efw.client.messages.OtherErrorException">OtherErrorException</a>
│  │  ├─<a href="#efw.client.messages.CanNotContinueMessage">CanNotContinueMessage</a>
│  │  ├─<a href="#efw.client.messages.ParamsFormatErrorException">ParamsFormatErrorException</a>
│  │  ├─<a href="#efw.client.messages.ShowValuesErrorException">ShowValuesErrorException</a>
│  │  ├─<a href="#efw.client.messages.SuccessCallbackErrorException">SuccessCallbackErrorException</a>
│  │  └─<a href="#efw.client.messages.ReturnIsNotArrayErrorException">ReturnIsNotArrayErrorException</a>
│  └─format
│      ├─<a href="#efw.client.format.formatNumber">formatNumber</a>( value , <a href="#efw.format.formatter">formatter</a> , <a href="#efw.format.rounder">rounder</a> )                         <span style="color:yellow;">★★</span>
│      ├─<a href="#efw.client.format.parseNumber">parseNumber</a>( value , <a href="#efw.format.formatter">formatter</a> )                                    <span style="color:yellow;">★★</span>
│      ├─<a href="#efw.client.format.formatDate">formatDate</a>( value , <a href="#efw.format.formatter">formatter</a> )                                     <span style="color:yellow;">★★</span>
│      └─<a href="#efw.client.format.parseDate">parseDate</a>( value , <a href="#efw.format.formatter">formatter</a> )                                      <span style="color:yellow;">★★</span>
└─server
    ├─<a href="#efw.server.getParamsFormat">getParamsFormat</a> ( <a href="#efw.event">event</a> )
    ├─<a href="#efw.server.check">check</a> ( <a href="#efw.event">event</a> , <a href="#efw.event.fire.requestParams">requestParams</a> )
    ├─<a href="#efw.server.fire">fire</a> ( <a href="#efw.event">event</a> , <a href="#efw.event.fire.requestParams">requestParams</a> )
    ├─<a href="#efw.server.prepare">prepare</a> ( <a href="#efw.event">event</a> , <a href="#efw.event.fire.requestParams">requestParams</a> )                                      <span style="color:yellow;">★</span>
    ├─<a href="#efw.server.finish">finish</a> ( <a href="#efw.event">event</a> , <a href="#efw.event.fire.requestParams">requestParams</a> , <a href="#efw.event.fire.eventResult">eventResult</a> )                         <span style="color:yellow;">★</span>
    ├─messages
    │  ├─<a href="#efw.server.messages.SessionTimeoutException">SessionTimeoutException</a>
    │  ├─<a href="#efw.server.messages.NumberIsReuqiredMessage">NumberIsReuqiredMessage</a>
    │  ├─<a href="#efw.server.messages.DateIsReuqiredMessage">DateIsReuqiredMessage</a>
    │  ├─<a href="#efw.server.messages.IsRequiredMessage">IsRequiredMessage</a>
    │  ├─<a href="#efw.server.messages.MaxLengthOverMessage">MaxLengthOverMessage</a>
    │  ├─<a href="#efw.server.messages.MinOrMaxOverMessage">MinOrMaxOverMessage</a>
    │  ├─<a href="#efw.server.messages.MinOverMessage">MinOverMessage</a>
    │  └─<a href="#efw.server.messages.MaxOverMessage">MaxOverMessage</a>
    └─format
    │  ├─<a href="#efw.server.format.formatNumber">formatNumber</a>( value , <a href="#efw.format.formatter">formatter</a> , <a href="#efw.format.rounder">rounder</a> )                         <span style="color:yellow;">★★</span>
    │  ├─<a href="#efw.server.format.parseNumber">parseNumber</a>( value , <a href="#efw.format.formatter">formatter</a> )                                    <span style="color:yellow;">★★</span>
    │  ├─<a href="#efw.server.format.formatDate">formatDate</a>( value , <a href="#efw.format.formatter">formatter</a> )                                     <span style="color:yellow;">★★</span>
    │  └─<a href="#efw.server.format.parseDate">parseDate</a>( value , <a href="#efw.format.formatter">formatter</a> )                                      <span style="color:yellow;">★★</span>
    ├─properties
    │  ├─<a href="#efw.server.properties.get">get</a> ( key , defaultValue )                                          <span style="color:yellow;">★★</span>
    │  ├─<a href="#efw.server.properties.getBoolean">getBoolean</a> ( key , defaultValue )                                   <span style="color:yellow;">★★</span>
    │  └─<a href="#efw.server.properties.getInt">getInt</a> ( key , defaultValue )                                       <span style="color:yellow;">★★</span>
    ├─session
    │  ├─<a href="#efw.server.session.get">get</a> ( key )                                                         <span style="color:yellow;">★★</span>
    │  └─<a href="#efw.server.session.set">set</a> ( key , value )                                                 <span style="color:yellow;">★★</span>
    ├─db
    │  ├─<a href="#efw.server.db.open">open</a> ( <a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a> )                                           <span style="color:yellow;">★</span>
    │  ├─<a href="#efw.server.db.getSingle">getSingle</a> ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )                                       <span style="color:yellow;">★★★</span>
    │  ├─<a href="#efw.server.db.executeQuery">executeQuery</a> ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )                                    <span style="color:yellow;">★★★</span>
    │  ├─<a href="#efw.server.db.executeUpdate">executeUpdate</a> ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )                                   <span style="color:yellow;">★★</span>
    │  ├─<a href="#efw.server.db.execute">execute</a>( <A href="#efw.sqlExecution.executionParams">executionParams</A> )                                          <span style="color:yellow;">★★★</span>
    │  ├─<a href="#efw.server.db.commit">commit</a> ( <a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a> )                                         <span style="color:yellow;">★</span>
    │  ├─<a href="#efw.server.db.rollback">rollback</a> ( <a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a> )                                       <span style="color:yellow;">★</span>
    │  └─<a href="#efw.server.db.closeAll">closeAll</a> ( )                                                        <span style="color:yellow;">★</span>
    └─event
        └─<a href="#efw.server.event.load">load</a> ( <a href="#efw.eventParams.eventId">eventId</a> )


<a href="#efw.eventParams">eventParams</a>                                                                  <span style="color:yellow;">★★★</span>
├─<a href="#efw.eventParams.server">server</a>                                                                     <span style="color:yellow;">★</span>
├─<a href="#efw.eventParams.eventId">eventId</a>                                                                    <span style="color:yellow;">★★★</span>
├─<a href="#efw.eventParams.manualParams">manualParams</a>                                                               <span style="color:yellow;">★★</span>
└─<a href="#efw.eventParams.success">success</a>                                                                    <span style="color:yellow;">★★★</span>

<a href="#efw.event">event</a>                                                                        <span style="color:yellow;">★★★</span>
├─<a href="#efw.event.outOfLogin">outOfLogin</a>                                                                 <span style="color:yellow;">★★</span>
├─<a href="#efw.event.include">include</a>                                                                    <span style="color:yellow;">★★</span>
│  ├─<a href="#efw.eventParams.eventId">eventId</a>                                                                 <span style="color:yellow;">★★</span>
│  └─<a href="#efw.event.mergeParamsFormat">mergeParamsFormat</a>                                                       <span style="color:yellow;">★★</span>
├─<a href="#efw.event.paramsFormat">paramsFormat</a>                                                               <span style="color:yellow;">★★★</span>
│  └─<a href="#efw.event.paramsFormat.checkStyle">checkStyle</a>                                                              <span style="color:yellow;">★★★</span>
└─<a href="#efw.event.fire">fire</a>                                                                       <span style="color:yellow;">★★★</span>
    ├─<a href="#efw.event.fire.requestParams">requestParams</a>                                                          <span style="color:yellow;">★★★</span>
    ├─<a href="#efw.event.fire.eventResult">eventResult</a>                                                            <span style="color:yellow;">★★★</span>
    │  └─<a href="#efw.event.fire.eventResult.appendMask">appendMask</a>                                                          <span style="color:yellow;">★★★</span>
    └─<a href="#efw.event.fire.error">error</a>                                                                  <span style="color:yellow;">★★★</span>

<a href="#efw.format.formatter">formatter</a>                                         	                         <span style="color:yellow;">★★★</span>
<a href="#efw.format.rounder">rounder</a>                                                                      <span style="color:yellow;">★★</span>

<A href="#efw.sqlExecution.executionParams">executionParams</A>                                                              <span style="color:yellow;">★★★</span>
<a href="#efw.sqlExecution.executionResult">executionResult</a>                                                              <span style="color:yellow;">★★★</span>
<a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a>                                                             <span style="color:yellow;">★</span>

</pre>

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

<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>efw.client.messagesの詳細</B></FONT></TH>
	</TR>
</TABLE>


<H3><A NAME="efw.client.messages.OtherErrorException">OtherErrorException</A></H3>
<pre>
OtherErrorException</PRE>
<DL>
<DD>予想外エラーが発生しました。
</DL>
<HR>

<H3><A NAME="efw.client.messages.CanNotContinueMessage">CanNotContinueMessage</A></H3>
<pre>
CanNotContinueMessage</PRE>
<DL>
<DD>継続処理はできません。
</DL>
<HR>

<H3><A NAME="efw.client.messages.ParamsFormatErrorException">ParamsFormatErrorException</A></H3>
<pre>
ParamsFormatErrorException</PRE>
<DL>
<DD>イベントのパラメーター定義が正しくありません。
</DL>
<HR>

<H3><A NAME="efw.client.messages.ShowValuesErrorException">ShowValuesErrorException</A></H3>
<pre>
ShowValuesErrorException</PRE>
<DL>
<DD>描画用のデータは正しくありません。
</DL>
<HR>

<H3><A NAME="efw.client.messages.SuccessCallbackErrorException">SuccessCallbackErrorException</A></H3>
<pre>
SuccessCallbackErrorException</PRE>
<DL>
<DD>成功時コールバックは正しくありません。
</DL>
<HR>

<H3><A NAME="efw.client.messages.ReturnIsNotArrayErrorException">ReturnIsNotArrayErrorException</A></H3>
<pre>
ReturnIsNotArrayErrorException</PRE>
<DL>
<DD>サーバー処理の戻り値は配列ではありません。
</DL>


<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>efw.client.formatの詳細</B></FONT></TH>
	</TR>
</TABLE>


<H3><A NAME="efw.client.format.formatNumber">formatNumber</A></H3>
<pre>
formatNumber ( value , <A href="#efw.format.formatter">formatter</A> , <A href="#efw.format.rounder">rounder</A> )</PRE>
<DL>
<DD>数字値を指定フォーマットにより文字列に変換する関数。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>文字列。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>value</CODE> - 変換対象、数字、必須。
<DD><CODE><A href="#efw.format.formatter">formatter</A></CODE> - フォーマット定義、必須。
<DD><CODE><A href="#efw.format.rounder">rounder</A></CODE> - 丸み方法、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.client.format.parseNumber">parseNumber</A></H3>
<pre>
parseNumber ( value , <A href="#efw.format.formatter">formatter</A> )</PRE>
<DL>
<DD>文字列値を指定フォーマットにより数字に変換する関数。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>数字。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>value</CODE> - 変換対象、文字列、必須。
<DD><CODE><A href="#efw.format.formatter">formatter</A></CODE> - フォーマット定義、必須。
</DL></DD>
</DL></DD>
<HR>


<H3><A NAME="efw.client.format.formatDate">formatDate</A></H3>
<pre>
formatDate ( value , <A href="#efw.format.formatter">formatter</A> )</PRE>
<DL>
<DD>日付値を指定フォーマットにより文字列に変換する関数。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>文字列。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>value</CODE> - 変換対象、日付、必須。
<DD><CODE><A href="#efw.format.formatter">formatter</A></CODE> - フォーマット定義、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.client.format.parseDate">parseDate</A></H3>
<pre>
parseDate ( value , <A href="#efw.format.formatter">formatter</A> )</PRE>
<DL>
<DD>文字列値を指定フォーマットにより日付に変換する関数。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>日付。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>value</CODE> - 変換対象、文字列、必須。
<DD><CODE><A href="#efw.format.formatter">formatter</A></CODE> - フォーマット定義、必須。
</DL></DD>
</DL></DD>

<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>efw.serverの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.server.getParamsFormat">getParamsFormat</A></H3>
<pre>
getParamsFormat ( <A href="#efw.event">event</A> )</PRE>
<DL>
<DD>イベントのパラメーターフォーマットを取得する関数。
 <br>インクロードイベントが存在する場合、パラメーターマットをマージする。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE><A href="#efw.event.paramsFormat">paramsFormat</A></CODE> - パラメーターフォーマット。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.event">event</A></CODE> - イベント、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.check">check</A></H3>
<pre>
check ( <A href="#efw.event">event</A> , <A href="#efw.event.fire.requestParams">requestParams</A> )</PRE>
<DL>
<DD>リクエストパラメーターをチェックする関数。
 <br>イベントのパラメーターフォーマットに従ってチェックを行う。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE>null</CODE> - 成功の場合、ヌル。
<DD><CODE><A href="#efw.event.fire.error">error</A></CODE> - 失敗の場合、エラーオブジェクト。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.event">event</A></CODE> - イベント、必須。
<DD><CODE><A href="#efw.event.fire.requestParams">requestParams</A></CODE> - リクエストパラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.fire">fire</A></H3>
<pre>
fire ( <A href="#efw.event">event</A> , <A href="#efw.event.fire.requestParams">requestParams</A> )</PRE>
<DL>
<DD>イベントを実行する関数。
 <br>リクエストパラメーターを受け取って以下の順番でイベント処理を行う。
 <br><a href="#efw.server.prepare">prepare</a>
 <br><a href="#efw.event.fire">event.fire</a>
 <br><a href="#efw.server.finish">finish</a>
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE><A href="#efw.event.fire.error">error</A></CODE> - 準備失敗の場合、エラーオブジェクト。
<DD><CODE><A href="#efw.event.fire.eventResult">eventResult</A></CODE> - イベント実行成功の場合、イベント実行結果。
<DD><CODE>Exception</CODE> - 例外の場合、Exceptionを投げる。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.event">event</A></CODE> - イベント、必須。
<DD><CODE><A href="#efw.event.fire.requestParams">requestParams</A></CODE> - リクエストパラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.prepare">prepare</A></H3>
<pre>
prepare ( <A href="#efw.event">event</A> , <A href="#efw.event.fire.requestParams">requestParams</A> )</PRE>
<DL>
<DD>2回目Ajax実行の前に、準備ステップとして実行する関数。
 <br>ログインチェックとデータベース接続処理とトランザクション開始を組み込んでいる。
 <br>必要に応じてカスタマイズ可能。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE>null</CODE> - 成功の場合、ヌル。
<DD><CODE><A href="#efw.event.fire.error">error</A></CODE> - 失敗の場合、エラーオブジェクト。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.event">event</A></CODE> - イベント、必須。
<DD><CODE><A href="#efw.event.fire.requestParams">requestParams</A></CODE> - リクエストパラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.finish">finish</A></H3>
<pre>
finish ( <A href="#efw.event">event</A> , <A href="#efw.event.fire.requestParams">requestParams</A> , <A href="#efw.event.fire.eventResult">eventResult</A> )</PRE>
<DL>
<DD>2回目Ajax実行の後に、後処理として実行する関数。
 <br>データベースのトランザクション終了と切断処理を組み込んでいる。
 <br>必要に応じてカスタマイズ可能。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.event">event</A></CODE> - イベント、必須。
<DD><CODE><A href="#efw.event.fire.requestParams">requestParams</A></CODE> - リクエストパラメーター、必須。
</DL></DD>
</DL></DD>

<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>efw.server.messagesの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.server.messages.SessionTimeoutException">SessionTimeoutException</A></H3>
<pre>
SessionTimeoutException</PRE>
<DL>
<DD>セッションタイムアウトになりました。再ログインしてください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.NumberIsReuqiredMessage">NumberIsReuqiredMessage</A></H3>
<pre>
NumberIsReuqiredMessage</PRE>
<DL>
<DD>{display-name}を数字で正しく入力してください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.DateIsReuqiredMessage">DateIsReuqiredMessage</A></H3>
<pre>
DateIsReuqiredMessage</PRE>
<DL>
<DD>{display-name}を日付で正しく入力してください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.IsRequiredMessage">IsRequiredMessage</A></H3>
<pre>
IsRequiredMessage</PRE>
<DL>
<DD>{display-name}を入力してください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.MaxLengthOverMessage">MaxLengthOverMessage</A></H3>
<pre>
MaxLengthOverMessage</PRE>
<DL>
<DD>{display-name}を{max-length}文字以内で入力してください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.MinOrMaxOverMessage">MinOrMaxOverMessage</A></H3>
<pre>
MinOrMaxOverMessage</PRE>
<DL>
<DD>{display-name}を{min}以上{max}以内の{data-type}で入力してください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.MinOverMessage">MinOverMessage</A></H3>
<pre>
MinOverMessage</PRE>
<DL>
<DD>{display-name}を{min}以上の{data-type}で入力してください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.MaxOverMessage">MaxOverMessage</A></H3>
<pre>
MaxOverMessage</PRE>
<DL>
<DD>{display-name}を{max}以内の{data-type}で入力してください。
</DL>


<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>efw.server.formatの詳細</B></FONT></TH>
	</TR>
</TABLE>


<H3><A NAME="efw.server.format.formatNumber">formatNumber</A></H3>
<pre>
formatNumber (value , <A href="#efw.format.formatter">formatter</A> , <A href="#efw.format.rounder">rounder</A> )</PRE>
<DL>
<DD>数字値を指定フォーマットにより文字列に変換する関数。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>文字列。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>value</CODE> - 変換対象、数字、必須。
<DD><CODE><A href="#efw.format.formatter">formatter</A></CODE> - フォーマット定義、必須。
<DD><CODE><A href="#efw.format.rounder">rounder</A></CODE> - 丸み方法、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.format.parseNumber">parseNumber</A></H3>
<pre>
parseNumber ( value , <A href="#efw.format.formatter">formatter</A> )</PRE>
<DL>
<DD>文字列値を指定フォーマットにより数字に変換する関数。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>数字。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>value</CODE> - 変換対象、文字列、必須。
<DD><CODE><A href="#efw.format.formatter">formatter</A></CODE> - フォーマット定義、必須。
</DL></DD>
</DL></DD>
<HR>


<H3><A NAME="efw.server.format.formatDate">formatDate</A></H3>
<pre>
formatDate ( value , <A href="#efw.format.formatter">formatter</A> )</PRE>
<DL>
<DD>日付値を指定フォーマットにより文字列に変換する関数。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>文字列。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>value</CODE> - 変換対象、日付、必須。
<DD><CODE><A href="#efw.format.formatter">formatter</A></CODE> - フォーマット定義、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.format.parseDate">parseDate</A></H3>
<pre>
parseDate ( value , <A href="#efw.format.formatter">formatter</A> )</PRE>
<DL>
<DD>文字列値を指定フォーマットにより日付に変換する関数。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>日付。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>value</CODE> - 変換対象、文字列、必須。
<DD><CODE><A href="#efw.format.formatter">formatter</A></CODE> - フォーマット定義、必須。
</DL></DD>
</DL></DD>

<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>efw.server.propertiesの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.server.properties.get">get</A></H3>
<pre>
get ( key , defaultValue )</PRE>
<DL>
<DD>文字列のプロパティを取得する。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>文字列。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>key</CODE> - プロパティの識別キー、文字列、必須。
<DD><CODE>defaultValue</CODE> - プロパティファイルから取得できない場合の代替値、文字列、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.properties.getBoolean">getBoolean</A></H3>
<pre>
getBoolean ( key , defaultValue )</PRE>
<DL>
<DD>ブルーのプロパティを取得する。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>ブルー。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>key</CODE> - プロパティの識別キー、文字列、必須。
<DD><CODE>defaultValue</CODE> - プロパティファイルから取得できない場合の代替値、ブルー、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.properties.getInt">getInt</A></H3>
<pre>
getInt ( key , defaultValue )</PRE>
<DL>
<DD>数字のプロパティを取得する。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>数字。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>key</CODE> - プロパティの識別キー、文字列、必須。
<DD><CODE>defaultValue</CODE> - プロパティファイルから取得できない場合の代替値、数字、オプション。
</DL></DD>
</DL></DD>

<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>efw.server.sessionの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.server.session.get">get</A></H3>
<pre>
get ( key )</PRE>
<DL>
<DD>セッションから情報を取得する。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>セッションに格納するデータ。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>key</CODE> - セッション情報を識別するキー、文字列、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.session.set">set</A></H3>
<pre>
set ( key , value )</PRE>
<DL>
<DD>セッションに情報を格納する。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE>key</CODE> - セッション情報を識別するキー、文字列、必須。
<DD><CODE>value</CODE> - セッションに格納したいデータ、必須。
</DL></DD>
</DL></DD>

<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>efw.server.dbの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.server.db.open">open</A></H3>
<pre>
open ( <A href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</A> )</PRE>
<DL>
<DD>データベース接続を開く。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</A></CODE> - jdbcリソースの名称、文字列、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.getSingle">getSingle</A></H3>
<pre>
getSingle ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )</PRE>
<DL>
<DD>SELECT文を実行して、１つ目のデータを戻す。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE>結果がある場合、<A href="#efw.sqlExecution.executionResult">executionResult</A></CODE> の１行目データ。
<DD><CODE>null</CODE> - 結果がない場合、null を戻す。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.executionParams">executionParams</A></CODE> - SQL実行用パラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.executeQuery">executeQuery</A></H3>
<pre>
executeQuery ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )</PRE>
<DL>
<DD>SELECT文を実行する。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE><A href="#efw.sqlExecution.executionResult">executionResult</A></CODE> - SQL検索結果。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.executionParams">executionParams</A></CODE> - SQL実行用パラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.executeUpdate">executeUpdate</A></H3>
<pre>
executeUpdate ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )</PRE>
<DL>
<DD>INSERT文、UPDATE文、DELETE文を実行する。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD>実行された行数を戻す。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.executionParams">executionParams</A></CODE> - SQL実行用パラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.execute">execute</A></H3>
<pre>
execute ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )</PRE>
<DL>
<DD>任意のSQL文を実行する。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.executionParams">executionParams</A></CODE> - SQL実行用パラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.commit">commit</A></H3>
<pre>
commit ( <A href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</A> )</PRE>
<DL>
<DD>データベースへの更新を有効とし、 データベース接続が保持するデータベースロックをすべて解除する。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</A></CODE> - jdbcリソースの名称、文字列、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.rollback">rollback</A></H3>
<pre>
rollback ( <A href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</A> )</PRE>
<DL>
<DD>データベースへの更新を無効とし、 データベース接続が保持するデータベースロックをすべて解除する。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</A></CODE> - jdbcリソースの名称、文字列、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="efw.server.db.closeAll">closeAll</A></H3>
<pre>
closeAll ( ) </PRE>
<DL>
<DD>すべてのデータベース接続に対して、ステートメントを全部閉じて、データベース接続をコミットして閉じる。 
<P>
<DD><DL>
</DL></DD>
</DL></DD>

<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>efw.server.eventの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.server.event.load">load</A></H3>
<pre>
load ( <A href="#efw.eventParams.eventId">eventId</A> )</PRE>
<DL>
<DD>イベントをメモリにロードする。Debugモードの場合、再ロードを行う。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE><A href="#efw.event">event</A></CODE> - ロードしたイベントを戻す。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.eventParams.eventId">eventId</A></CODE> - イベントId、必須。
</DL></DD>
</DL></DD>


<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>eventParamsの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.eventParams">eventParams</A></H3>
<pre>
eventParams = {
                  <A href="#efw.eventParams.server">server</A>       : "http://127.0.0.1:8080/efwTest",               //サーバURL、オプション。
                  <A href="#efw.eventParams.eventId">eventId</A>      : "myEvent",                                     //イベントId、必須。
                  <A href="#efw.eventParams.manualParams">manualParams</A> : {                                              //手動パラメーター、オプション。
                                     key1 : value1,
                                     key2 : value2,    
                                 },
                  <A href="#efw.eventParams.success">success</A>      : function ( <A href="#efw.event.fire.eventResult">eventResult</A> ) {                    //成功コールバック関数、オプション。
                                     ...
                                 },
              };
</PRE>
<DL><DD>イベントパラメーター。クライアントでイベントを実行時作成される。
<br>・イベントIdによりイベントを特定する。
<br>・パラメーターフォーマットによりイベントパラメーターを作成時、優先的にクライアント画面から値を取得する。画面項目ではない場合、手動パラメーターで渡す。
<br>・イベント実行成功後、さらに継続処理が必要な場合、成功コールバック関数を利用する。

</DL></DD>
<HR>

<H3><A NAME="efw.eventParams.server">server</A></H3>
<pre>
server = "http://127.0.0.1:8080/efwTest",                                       //サーバURL、オプション。
</PRE>
<DL><DD>サーバURL。cors方式で他のサーバアプリと接続する場合利用できる。
</DL></DD>
<HR>


<H3><A NAME="efw.eventParams.eventId">eventId</A></H3>
<pre>
eventId = "myEvent";                                                            // WEB-INF/efw/event/myEvent.js のjsファイルとリンクする。英語の大文字小文字を区別。
</PRE>
<DL><DD>イベントId。イベントの実装されるサーバーサイドJavascriptファイル名と同じ。
</DL></DD>
<HR>


<H3><A NAME="efw.eventParams.manualParams">manualParams</A></H3>
<pre>
manualParams = {
                   key1 : value1,
                   key2 : value2,
               };
</PRE>
<DL><DD>手動パラメーター。イベントに手動で渡したいパラメーターを設定する。
</DL></DD>
<HR>


<H3><A NAME="efw.eventParams.success">success</A></H3>
<pre>
success = function ( <A href="#efw.event.fire.eventResult">eventResult</A> ) { ... };
</PRE>
<DL><DD>成功コールバック関数。<br>
イベント処理が成功の場合、実行される。この段階で、eventResult はすでに画面に反映した。<br>つまり、success関数に eventResult に対して修正しても意味がない。
</DL></DD>



<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>eventの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.event">event</A></H3>
<pre>
WEB-INF/efw/event/myEvent.js
----------
var myEvent          = { };                                                     //イベントのオブジェクト、必須。
myEvent.<A href="#efw.event.outOfLogin">outOfLogin</A>   = true;                                                    //ログインチェック不要フラグ、オプション。
myEvent.<A href="#efw.event.include">include</A>      = [                                                        //インクルード、オプション、複数のサブイベントを含める。
                           {                                                    //サブイベント。
                             <A href="#efw.eventParams.eventId">eventId</A>           : "anotherEvent",                //イベントId、サブイベントにとって必須、eventParams.eventIdを参照。
                             <A href="#efw.event.mergeParamsFormat">mergeParamsFormat</A> : true,                          //サブとメインのパラメーターフォーマットをマージするフラグ、オプション。
                            }, 
                       ];
myEvent.<A href="#efw.event.paramsFormat">paramsFormat</A> = {                                                        //パラメーターフォーマット、必須、以下種類の要素の組合せ。
                             selector1 : null,                                  //入力チェックなしの選択キー。選択キーの規則はJQueryを参照。
                             selector2 : "<A href="#efw.event.paramsFormat.checkStyle">checkStyle</A>",                          //チェックスタイルの選択キー。
                             selector3 : function(){ return "<A href="#efw.event.paramsFormat.checkStyle">checkStyle</A>"; },    //チェックスタイルの選択キー。イベントには関数で作成する可。
                           { selector4 : ... , },                               //サブフォーマット。パラメーターフォーマットと同じ種類の要素の組合せ。
                         [ { selector5 : ... , } ],                             //サブフォーマットの配列。１種類のサブフォーマットのみを格納する。
                       };
myEvent.fire = function ( <A href="#efw.event.fire.requestParams">requestParams</A> ) {                                     //イベント実行関数、必須。
	                                     return <A href="#efw.event.fire.eventResult">eventResult</A>;                                                     //イベント実行結果。
}
</PRE>
<DL><DD>イベント。同名のサーバーサイドJavascriptファイルで実装する。
</DL></DD>
<HR>

<H3><A NAME="efw.event.outOfLogin">outOfLogin</A></H3>
<pre>
outOfLogin = true;
</PRE>
<DL><DD>ログインチェック不要フラグ。<br>
未設定の場合、ログインチェック要と見なし、未ログイン時 <A href="#efw.server.messages.SessionTimeoutException">SessionTimeoutException</A> エラーが発生する。<br>
該当機能は、カスタマイズ用 <A href="#efw.server.prepare">prepare</A> 関数に実装される。
</DL></DD>
<HR>

<H3><A NAME="efw.event.include">include</A></H3>
<pre>
include = [
            {                                                                   //サブイベント。
              <A href="#efw.eventParams.eventId">eventId</A>           : "anotherEvent",                               //イベントId、サブイベントにとって必須、eventParams.eventIdを参照。
              <A href="#efw.event.mergeParamsFormat">mergeParamsFormat</A> : true,                                         //サブとメインのパラメーターフォーマットをマージするフラグ、オプション。
            }, 
          ];
</PRE>
<DL><DD>インクルード。<br>
ひとつのイベント（メイン）に他のイベント（サブ）を実行したい場合、メインの中にサブをインクルードと定義する。<br>
複数のサブをインクルードできる。

</DL></DD>
<HR>

<H3><A NAME="efw.event.mergeParamsFormat">mergeParamsFormat</A></H3>
<pre>
mergeParamsFormat = true;
</PRE>
<DL><DD>サブとメインのパラメーターフォーマットをマージするフラグ。<br>
未設定の場合、サブイベントに必要なパラメータは、メインイベントにも定義する必要、または、サブを呼び出す時プログラムで渡す必要。<br>
定義される場合、メインイベントの <A href="#efw.event.fire.requestParams">requestParams</A> にサブイベントの必要なパラメータも含む。

</DL></DD>
<HR>

<H3><A NAME="efw.event.paramsFormat">paramsFormat</A></H3>
<pre>
paramsFormat = {
                     selector1 : null,                                          //入力チェックなしの選択キー。選択キーの規則はJQueryを参照。
                     selector2 : "<A href="#efw.event.paramsFormat.checkStyle">checkStyle</A>",                                  //チェックスタイルの選択キー。
                     selector3 : function(){ return "<A href="#efw.event.paramsFormat.checkStyle">checkStyle</A>"; },            //チェックスタイルの選択キー。イベントには関数で作成する可。
                   { selector4 : ... , },                                       //サブフォーマット。パラメーターフォーマットと同じ種類の要素の組合せ。
                 [ { selector5 : ... , } ],                                     //サブフォーマットの配列。１種類のサブフォーマットのみを格納する。
             };
</PRE>
<DL><DD>パラメーターフォーマット。<br>
選択キー、選択キー組合せのサブフォーマット、またその配列で、定義される。<br>
パラメーターフォーマットによりイベント実行時、表のように、<A href="#efw.event.fire.requestParams">requestParams</A> が自動的に作成される。<br>

<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:150px">属性種類</th>
	<th style="width:250px">属性名称の用途</th>
	<th style="width:400px">正常ケース</th>
	<th style="width:250px">異常ケース</th>
</tr>
<tr>
	<td>selector : null</td>
	<td>単独な入力データを識別する。</td>
	<td>属性名称をセレクタとしてHTMLタグを１つ取得する。<br>タグのvalue，textなどの属性は入力データと利用する。</td>
	<td>タグを複数取得する場合エラー。</td>
</tr>
<tr>
	<td>selector : "<A href="#efw.event.paramsFormat.checkStyle">checkStyle</A>"</td>
	<td>単独な入力データを識別する。</td>
	<td>checkStyleに満足する場合、属性名称をセレクタとしてHTMLタグを１つ取得する。<br>タグのvalue，textなどの属性は入力データと利用する。<br>
	checkStyle で数字・日付の format の場合、数字・日付に変換してから取得する。
	</td>
	<td>タグを複数取得する場合エラー。<br>
	checkStyle に満足できない場合エラー。
	</td>
</tr>
<tr>
	<td>selector : function(){ return "<A href="#efw.event.paramsFormat.checkStyle">checkStyle</A>"; } </td>
	<td>単独な入力データを識別する。</td>
	<td>関数戻り値のcheckStyleに満足する場合、属性名称をセレクタとしてHTMLタグを１つ取得する。<br>タグのvalue，textなどの属性は入力データと利用する。<br>
	checkStyle で数字・日付の format の場合、数字・日付に変換してから取得する。
	</td>
	<td>タグを複数取得する場合エラー。<br>
	checkStyle に満足できない場合エラー。
	</td>
</tr>
<tr>
	<td>selector : {…}</td>
	<td>サブ入力オブジェクトを識別する。</td>
	<td>属性名称をセレクタとして，HTMLタグを１つ取得する。<br>そのタグをサブ定義処理時のコンテキストにする。</td>
	<td>タグを複数取得する場合エラー。</td>
</tr>
<tr>
	<td>selector : [{…}]</td>
	<td>サブ入力オブジェクトの配列を識別する。</td>
	<td>属性名称をセレクタとして，HTMLタグを取得する。<br>そのタグをサブ定義配列処理時のコンテキストにする。</td>
	<td>－</td>
</tr>
</table>
※selectorの書き方はJQueryのセレクターの語法に従う。


</DL></DD>
<HR>

<H3><A NAME="efw.event.paramsFormat.checkStyle">checkStyle</A></H3>
<pre>
selector = "required:true; format:###,##0;display-name:登録日;max-length:10;min:0,max:9,999;" ; //チェックスタイル。
</PRE>
<DL><DD>チェックスタイル。<br>
クライアントで入力された値に対して、いくつかの単純チェックを自動的に行うため、チェックスタイルを設ける。<br>
エラーがある場合、複数のエラーメッセージをまとめて <A href="#efw.event.fire.error">error</A> でクライアントに送信する。
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:250px">属性種類</th>
	<th style="width:100px">属性の用途</th>
	<th style="width:350px">正常ケース</th>
	<th style="width:350px">異常ケース</th>
</tr>
<tr>
	<td>required : true</td>
	<td>必須入力。</td>
	<td>取得された値が空白ではない場合、正しい。</td>
	<td>空白の場合、<A href="#efw.server.messages.IsRequiredMessage">IsRequiredMessage</A> エラー。</td>
</tr>
<tr>
	<td>format : <br>
	<DD>定義方法は <a href="#efw.format.formatter">formatter</a> を参照</DD>
	</td>
	<td>フォーマット。</td>
	<td>取得された値がフォーマットに合う場合、正しい。</td>
	<td>合わないの場合、<br>
	<A href="#efw.server.messages.NumberIsReuqiredMessage">NumberIsReuqiredMessage</A> エラー。
	<A href="#efw.server.messages.DateIsReuqiredMessage">DateIsReuqiredMessage</A> エラー。
	</td>
</tr>
<tr>
	<td>display-name : "表示名"</td>
	<td>表示名。</td>
	<td>－</td>
	<td>エラーメッセージに代入するエラー項目の名前。</td>
</tr>
<tr>
	<td>max-length : 文字数</td>
	<td>最大サイズ。</td>
	<td>入力値のサイズは最大サイズ以内の場合、正しい。</td>
	<td>オーバーの場合、<A href="#efw.server.messages.MaxLengthOverMessage">MaxLengthOverMessage</A> エラー。</td>
</tr>
<tr>
	<td>min : <br>
	<DD>formatに従う文字列</DD>
	</td>
	<td>最小値。</td>
	<td>入力値は最小値より大きい場合、正しい。</td>
	<td>小さい場合、<br>
	<A href="#efw.server.messages.MinOrMaxOverMessage">MinOrMaxOverMessage</A> エラー。<br>
	<A href="#efw.server.messages.MinOverMessage">MinOverMessage</A> エラー。<br>
	</td>
</tr>
<tr>
	<td>max : <br>
	<DD>formatに従う文字列</DD>
	</td>
	<td>最大値。</td>
	<td>入力値は最大値より小さい場合、正しい。</td>
	<td>大きい場合、<br>
	<A href="#efw.server.messages.MinOrMaxOverMessage">MinOrMaxOverMessage</A> エラー。<br>
	<A href="#efw.server.messages.MaxOverMessage">MaxOverMessage</A> エラー。<br>
	</td>
</tr>

</table>

</DL></DD>
<HR>

<H3><A NAME="efw.event.fire">fire</A></H3>
<pre>
fire = function( <a href="#efw.event.fire.requestParams">requestParams</a> ){
    return <a href="#efw.event.fire.eventResult">eventResult</a>;
};
</PRE>
<DL><DD>イベントの実行関数。<br>
メインイベントとサブイベントは、同じトランザクションに管理される。Exception発生の場合、自動的にロールバック。エラーなし場合、自動的にコミット。<br>
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE><A href="#efw.event.fire.eventResult">eventResult</A></CODE> - イベント実行成功の場合、イベント実行結果。
<DD><CODE><A href="#efw.event.fire.error">error</A></CODE> - 失敗の場合、エラーオブジェクト。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#efw.event.fire.requestParams">requestParams</A></CODE> - リクエストパラメーター、必須。
</DL></DD>
</DL></DD>
<HR>


<H3><A NAME="efw.event.fire.requestParams">requestParams</A></H3>
<pre>
requestParams = {
                     selector1 : "value1",
                     selector2 : "value2",
                     selector3 : "value3",
                   { selector4 : "value4" , ... },
                 [ { selector5 : "value5-1" , ... },{ selector5 : "value5-2" , ... } ],
             };
</PRE>
<DL><DD>リクエストパラメーター。<br>
パラメーターフォーマットにより、システムが、クライアント画面から自動的にデータを収集して作成する。<br>

</DL></DD>
<HR>

<H3><A NAME="efw.event.fire.eventResult">eventResult</A></H3>
<pre>
eventResult = [                                                                 //イベント実行結果、複数の表示結果を含める。
                {                                                               //表示結果、データオブジェクトタイプ。
                  runat    : "runatSelector1",                                  //表示場所、オプション。
                  withdata : {                                                  //表示データ、オプション、データオブジェクトタイプ。
                                 selector1 : "value1",                           //項目とデータのセット。
                                 selector2 : "value2",
                             },
                },
                {                                                               //表示結果、データオブジェクト配列タイプ。
                  runat    : "runatSelector2",                                  //表示場所、オプション。
                  remove   : "removeSelector",                                  //削除内容、オプション。
                  append   : "<a href="#efw.event.fire.eventResult.appendMask">appendMask</a>",                                      //追加内容のマスク、必須。
                  withdata : [                                                  //表示データ、オプション、データオブジェクト配列タイプ。
                               {                                                //データオブジェクト。
                                 maskKey1  : "value11",                         //項目とデータのセット。
                                 maskKey2  : "value12",
                               },
                               {                                                //データオブジェクト。
                                 maskKey1  : "value21",
                                 maskKey2  : "value22",
                               }
                             ], 
                },
];


...
eventResult=eventResult.concat(subEvent.fire(requestParams));                   //メインイベントとサブイベントの実行結果は、配列結合で連結。
</PRE>
<DL><DD>イベント実行結果。<br>
イベントの実行結果をクライアントに渡すため。<br>
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:150px">属性</th>
	<th style="width:250px">属性の名称</th>
	<th style="width:650px">説明</th>
</tr>
<tr>
	<td>runat : selector</td>
	<td>表示場所、オプション。</td>
	<td>属性値をセレクタとして、HTMLタグを取得する。そのタグは出力定義の他の属性処理時のコンテキストとする。
	定義されない場合、"body"とみなす。
	</td>
</tr>
<tr>
	<td>withdata : {}</td>
	<td>表示データ、オプション。</td>
	<td>runatの範囲にいくつの個別タグとマッピングするセレクタと値のセットを格納する。タグのvalueあるいはtextを値で置換する。</td>
</tr>
<tr>
	<td>remove : selector</td>
	<td>削除内容、オプション。</td>
	<td>runatの範囲に属性値をセレクタとして、複数のタグを取得する。取得するタグを削除する。</td>
</tr>
<tr>
	<td>append : <a href="#efw.event.fire.eventResult.appendMask">appendMask</a></td>
	<td>htmlマスク、オプション。</td>
	<td>runatの範囲に配列のwithdata件数毎にhtmlマスクの置換項目を置換して画面パーツとして、runatの後ろに追加する。</td>
</tr>
<tr>
	<td>withdata : [{}]</td>
	<td>表示データ、オプション。</td>
	<td>appendと連携する。htmlマスクの置換項目と値のセットの配列を格納する。</td>
</tr>
</table>

</DL></DD>
<HR>

<H3><A NAME="efw.event.fire.eventResult.appendMask">appendMask</A></H3>
<pre>
appendMask = "&lt;tr&gt;&lt;td&gt;&lt;input value='{maskKey1}'&gt;&lt;/td&gt;&lt;td&gt;&lt;span&gt;{{maskKey2}}&lt;/span&gt;&lt;/td&gt;&lt;/tr&gt;";
</PRE>
<DL><DD>追加内容のマスク。<br>
HTMLエンコード処理をしたい場合、{maskKey} で書く。したくない場合、{{maskKey}}で書く。
</DL></DD>
<HR>

<H3><A NAME="efw.event.fire.error">error</A></H3>
<pre>
error = {
            errorType      : "XXXXX",                                           //エラータイプ。
            errorMessage   : "任意のエラーメッセージ内容",                      //エラーメッセージ。
            focusTo        : "selector1",                                       //カーソル位置、オプション。
            elements       : "selector1,selector2,...",                         //複数のエラー項目、オプション。
            canNotContinue : true,                                              //継続処理不可フラグ、オプション。
};
</PRE>
<DL><DD>エラーオブジェクト。<br>
イベントの実行エラーをクライアントに渡すため。<br>
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:100px">属性</th>
	<th style="width:300px">属性の名称</th>
	<th style="width:650px">説明</th>
</tr>
<tr>
	<td>errorType</td>
	<td>エラータイプ、オプション。</td>
	<td>efw.client.messagesに定義されたメッセージを利用したい場合、そのIdを設定する。</td>
</tr>
<tr>
	<td>errorMessage</td>
	<td>エラーメッセージ、オプション。</td>
	<td>errorTypeが未定義の場合必須になる。「\n」区切りで複数メッセージ可。</td>
</tr>
<tr>
	<td>focusTo</td>
	<td>カーソル位置、オプション。</td>
	<td>アラートを閉じた後のカーソル位置を定義する。オプション。</td>
</tr>
<tr>
	<td>elements</td>
	<td>複数のエラー項目、オプション。</td>
	<td>エラー項目を定義する。アラートを閉じた後、背景色などでエラー項目を表示する。オプション。「,」区切りで複数エラー項目可。</td>
</tr>
<tr>
	<td>canNotContinue</td>
	<td>継続処理不可フラグ、オプション。</td>
	<td>true と設定される場合、アラートの後灰色のマスクを解除しない。オプション。</td>
</tr>
</table>

</DL></DD>



<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>formatの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.format.formatter">formatter</A></H3>
<pre>
formatter = "フォーマット定義";
</PRE>
<DL><DD>フォーマット定義。<br>
数字の場合利用できるシンボルは表にリストする。java.text.DecimalFormatを参考。<br>
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:100px">シンボル</th>
	<th style="width:950px">説明</th>
</tr>
<tr>
	<td>0</td>
	<td>数字。</td>
</tr>
<tr>
	<td>#</td>
	<td>数字。ゼロだと表示されない。</td>
</tr>
<tr>
	<td>.</td>
	<td>数値桁区切り子または通貨桁区切り子。</td>
</tr>
<tr>
	<td>%</td>
	<td>100 倍してパーセントを表す。</td>
</tr>
</table>
<br>
日付の場合利用できるシンボルは表にリストする。java.text.SimpleDateFormatを参考。<br>
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:100px">シンボル</th>
	<th style="width:950px">説明</th>
</tr>
<tr>
	<td>G</td>
	<td>和暦。<a href="#efw.server.format.formatDate">efw.server.format.formatDate</a> と
	<a href="#efw.server.format.parseDate">efw.server.format.parseDate</a> に利用できる。入力支援機能に利用できない。<br>例：GGGG = 平成、G = H</td>
</tr>
<tr>
	<td>y</td>
	<td>年。</td>
</tr>
<tr>
	<td>M</td>
	<td>月。</td>
</tr>
<tr>
	<td>d</td>
	<td>月における日。</td>
</tr>
<tr>
	<td>H</td>
	<td>一日における時 (0 〜 23)。</td>
</tr>
<tr>
	<td>m</td>
	<td>分。</td>
</tr>
<tr>
	<td>s</td>
	<td>秒。</td>
</tr>
<tr>
	<td>S</td>
	<td>ミリ秒。</td>
</tr>
</table>
</DL></DD>
<HR>



<H3><A NAME="efw.format.rounder">rounder</A></H3>
<pre>
rounder = "丸みタイプ";
</PRE>
<DL><DD>丸みタイプ。<br>
数字フォーマット時の丸みを設定する。設定できる値は、表にリストする。java.math.RoundingModeを参考。
<br>
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:100px" rowspan=2>丸みタイプ</th>
	<th style="width:450px" rowspan=2>説明</th>
	<th style="width:500px" colspan=10>例</th>
</tr>
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<td>5.5</td><td>2.5</td><td>1.6</td><td>1.1</td><td>1.0</td><td>-1.0</td><td>-1.1</td><td>-1.6</td><td>-2.5</td><td>-5.5</td>
</tr>
<tr>
	<td>UP</td>
	<td>
	 0 から離れるように丸める。
	</td>
	<td>6</td><td>3</td><td>2</td><td>2</td><td>1</td><td>-1</td><td>-2</td><td>-2</td><td>-3</td><td>-6</td>
</tr>
<tr>
	<td>DOWN</td>
	<td>0 に近づくように丸める。</td>
	<td>5</td><td>2</td><td>1</td><td>1</td><td>1</td><td>-1</td><td>-1</td><td>-1</td><td>-2</td><td>-5</td>
</tr>
<tr>
	<td>CEILING</td>
	<td>正の無限大に近づくように丸める。</td>
	<td>6</td><td>3</td><td>2</td><td>2</td><td>1</td><td>-1</td><td>-1</td><td>-1</td><td>-2</td><td>-5</td>
</tr>
<tr>
	<td>FLOOR</td>
	<td>負の無限大に近づくように丸める。</td>
	<td>5</td><td>2</td><td>1</td><td>1</td><td>1</td><td>-1</td><td>-2</td><td>-2</td><td>-3</td><td>-6</td>
</tr>
<tr>
	<td>HALF_UP</td>
	<td>「もっとも近い数字」に丸める。四捨五入。</td>
	<td>6</td><td>3</td><td>2</td><td>1</td><td>1</td><td>-1</td><td>-1</td><td>-2</td><td>-3</td><td>-6</td>
</tr>
<tr>
	<td>HALF_DOWN</td>
	<td>「もっとも近い数字」に丸める。</td>
	<td>5</td><td>2</td><td>2</td><td>1</td><td>1</td><td>-1</td><td>-1</td><td>-2</td><td>-2</td><td>-5</td>
</tr>
<tr>
	<td>HALF_EVEN</td>
	<td>「もっとも近い数字」に丸める。</td>
	<td>6</td><td>2</td><td>2</td><td>1</td><td>1</td><td>-1</td><td>-1</td><td>-2</td><td>-2</td><td>-6</td>
</tr>
</table>
</DL></DD>


<BR><TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>SQL executionの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.sqlExecution.executionParams">executionParams</A></H3>
<pre>
executionParams = {
                      <a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a> : "jdbc/efw",                            //jdbcリソース名、オプション。
                      groupId          : "user",                                //sqlXMLファイル名、必須。
                      sqlId            : "selectusers",                         //SQLのId、必須。
                      params           : {                                      //SQLパラメーター、必須。
                                             sqlparam1 : value1 ,
                                             sqlparma2 : value2 ,
                                         },
                      mapping          : {                                      //マッピング、オプション。検索SQLの検索結果フィールドを画面項目またはマスクキーとマッピングする。
                                             selector1 : field1 ,
                                             selector2 : [ Datefield , formatter ] ,             //日付フィールドをフォーマットしてからマッピング。
                                             selector3 : [ Numberfield , formatter , rounder ] , //数字フィールドをフォーマットしてからマッピング。必要でされば丸みタイプを指定可能。
                                             selector4 : function(rs){ ... },   //検索結果のレコードから値を算出してマッピングする。
                                         },
                  };
</PRE>
<DL><DD>SQL実行用パラメーター。<br>
SQLを実行するため、XMLファイルに定義するSQLのパラメーターの値を設定可。また実行結果のマッピングも設定可。<br>

</DL></DD>
<HR>

<H3><A NAME="efw.sqlExecution.executionResult">executionResult</A></H3>
<pre>
executionResult = [                                                             //マッピングなしの実行結果、field項目と値のセットの配列。
                    {                                                           //ひとつのレコード。
                      field1 : value1 ,
                      field2 : value2 ,
                    },
                  ];
                  
executionResult = [                                                             //selectorとマッピングする実行結果、selector項目と値のセットの配列。
                    {                                                           //ひとつのレコード。
                      selector1 : value1 ,
                      selector2 : value2 ,
                    },
                  ];

executionResult = [                                                             //maskKeyとマッピングする実行結果、maskKey項目と値のセットの配列。
                    {                                                           //ひとつのレコード。
                      maskKey1 : value1 ,
                      maskKey2 : value2 ,
                    },
                  ];
</PRE>
<DL><DD>SQL検索結果。<br>
executeQueryの実行結果。レコードセットの配列。検索結果がない場合、空の配列になる。<br>
マッピングの有無により、変化が可能。

</DL></DD>
<HR>


<H3><A NAME="efw.sqlExecution.jdbcResourceName">jdbcResourceName</A></H3>
<pre>
jdbcResourceName = "jdbc/efw" ;                                                 //server.xmlに定義されるリソース

&lt;Resource auth="Container" driverClassName="org.postgresql.Driver" 
maxActive="100" maxIdle="20" maxWait="10" name="jdbc/efw" password="postgres" 
type="javax.sql.DataSource" url="jdbc:postgresql://127.0.0.1:5432/efwSample" 
username="postgres"/&gt;
</PRE>
<DL><DD>jdbcのリソース名。<br>
efwのディフォルトリソースは、jdbc/efw 。それ以外のリソースを利用したい場合、<br>
server.xmlに定義して、イベントjsファイルに、それを open して、トランザクションを管理する。

</DL></DD>


