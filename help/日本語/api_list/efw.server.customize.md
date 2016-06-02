<a href="../api_list.md">戻る</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/api_list/efw.server.customize.md">日本語</a>
&nbsp;<a href="../../中文/api_list/efw.server.customize.md">中文</a>
&nbsp;<a href="../../English/api_list/efw.server.customize.md">English</a>
<H2>efw.server.customizeの詳細</H2>

<H3><A NAME="prepare">prepare</A></H3>
<pre>
prepare ( <A href="app.event.md#event">event</A> , <A href="app.event.md#requestParams">requestParams</A> )</PRE>
<DL>
<DD>2回目Ajax実行の前に、準備ステップとして実行する関数。
 <br>ログインチェックとデータベース接続処理とトランザクション開始を組み込んでいる。
 <br>必要に応じてカスタマイズ可能。
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE>null</CODE> - 成功の場合、ヌル。
<DD><CODE><A href="app.event.md#error">error</A></CODE> - 失敗の場合、エラーオブジェクト。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="app.event.md#event">event</A></CODE> - イベント、必須。
<DD><CODE><A href="app.event.md#requestParams">requestParams</A></CODE> - リクエストパラメーター、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="finish">finish</A></H3>
<pre>
finish ( <A href="app.event.md#event">event</A> , <A href="app.event.md#requestParams">requestParams</A> , <A href="app.event.md#eventResult">eventResult</A> )</PRE>
<DL>
<DD>2回目Ajax実行の後に、後処理として実行する関数。
 <br>データベースのトランザクション終了と切断処理を組み込んでいる。
 <br>必要に応じてカスタマイズ可能。
<P>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="app.event.md#event">event</A></CODE> - イベント、必須。
<DD><CODE><A href="app.event.md#requestParams">requestParams</A></CODE> - リクエストパラメーター、必須。
</DL></DD>
</DL></DD>