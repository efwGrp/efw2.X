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