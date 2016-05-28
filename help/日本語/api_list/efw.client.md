<a href="../api_list.md">戻る</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/api_list/efw.client.md">日本語</a>
&nbsp;<a href="../../中文/api_list/efw.client.md">中文</a>
&nbsp;<a href="../../English/api_list/efw.client.md">English</a>
<H2>efw.clientの詳細</H2>

<H3><A NAME="fire">fire</A></H3>
<pre>
fire ( <A href="#eventParams">eventParams</A> )</PRE>
<DL>
<DD>Ajaxを呼び出すための入り口関数。
 1回目Ajaxはパラメーターフォーマットを取得し、2回目Ajaxを実行する。
<P>
<DD><DL>
<B>パラメータ:</B>
<DD><CODE><A href="#eventParams">eventParams</A></CODE> - イベントパラメーター、必須。
</DL></DD>
<HR>

<H3><A NAME="pickup">pickup</A></H3>
<pre>
pickup ( <A href="#efw.event.paramsFormat">paramsFormat</A> , <A href="#manualParams">manualParams</A> )</PRE>
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
<DD><CODE><A href="#manualParams">manualParams</A></CODE> - 手動パラメーター 、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="show">show</A></H3>
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

<H3><A NAME="alert">alert</A></H3>
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
<HR>

<H3><A NAME="eventParams">eventParams</A></H3>
<pre>
eventParams = {
                  <A href="#server">server</A>       : "http://127.0.0.1:8080/efwTest",               //サーバURL、オプション。
                  <A href="#eventId">eventId</A>      : "myEvent",                                     //イベントId、必須。
                  <A href="#manualParams">manualParams</A> : {                                              //手動パラメーター、オプション。
                                     key1 : value1,
                                     key2 : value2,    
                                 },
                  <A href="#success">success</A>      : function ( <A href="#efw.event.fire.eventResult">eventResult</A> ) {                    //成功コールバック関数、オプション。
                                     ...
                                 },
              };
</PRE>
<DL><DD>イベントパラメーター。クライアントでイベントを実行時作成される。
<br>・イベントIdによりイベントを特定する。
<br>・パラメーターフォーマットによりイベントパラメーターを作成時、優先的にクライアント画面から値を取得する。画面項目ではない場合、手動パラメーターで渡す。
<br>・イベント実行成功後、さらに継続処理が必要な場合、成功コールバック関数を利用する。

</DL></DD>
<table>
<tr>
	<th>属性</th><th>属性名</th><th>必須</th><th>説明</th>
</tr>
<tr>
	<td><A NAME="server">server</A></td><td>サーバURL</td><td>オプション</td><td>cors方式で他のサーバアプリと接続する場合利用できる。</td>
</tr>
<tr>
	<td>eventId</td><td>イベントId</td><td>必須</td><td>WEB-INF/efw/event/myEvent.js のjsファイルとリンクする。英語の大文字小文字を区別。イベントの実装されるサーバーサイドJavascriptファイル名と同じ。</td>
</tr>
<tr>
	<td>manualParams</td><td>手動パラメータ</td><td>オプション</td><td>イベントに手動で渡したいパラメーターを設定する。</td>
</tr>
<tr>
	<td>success</td><td>成功コールバック関数</td><td>オプション</td><td>イベント処理が成功の場合、実行される。この段階で、eventResult はすでに画面に反映した。<br>つまり、success関数に eventResult に対して修正しても意味がない。</td>
</tr>
</table>

