<a href="../api_list.md">戻る</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/api_list/efw.server.session.md">日本語</a>
&nbsp;<a href="../../中文/api_list/efw.server.session.md">中文</a>
&nbsp;<a href="../../English/api_list/efw.server.session.md">English</a>
<H3>efw.server.sessionの詳細</H3>
<HR>

<H3><A NAME="get">get</A></H3>
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

<H3><A NAME="set">set</A></H3>
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