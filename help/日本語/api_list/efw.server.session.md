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