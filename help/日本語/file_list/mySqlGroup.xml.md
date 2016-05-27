<a href="../file_list.md">戻る</a>&bnsp;&nbsp;&nbsp;&nbsp;<a href="mySqlGroup.xml.md">日本語</a>&nbsp;<a href="mySqlGroup.xml.md">中文</a>&nbsp;<a href="mySqlGroup.xml.md">English</a>
<H3><A NAME="efw.sql">sqlのプログラム</A></H3>
<pre>
web/WEB-INF/efw/sql/mySqlGroup.xml
--------------------------------------------------------------------------------
&lt;?<b>xml version="1.0" encoding="UTF-8"</b>?&gt;
&lt;<b>sqls</b>&gt;
    &lt;<b>sql id="sql_1"</b>&gt;
<I>&lt;!-- 
 コメント１
--&gt;
/**
*コメント２
**/
//コメント３
--コメント４</I>

        
        SELECT user_id FROM usermaster
        WHERE validateDateFrom <b style="color:red">&amp;gt;</b> now() and validateDateTo <b style="color:red">&amp;lt;</b> now() 
        &lt;<b>if exists="user_id"</b>&gt; and user_id = :user_id &lt;<b>/if</b>&gt;
        &lt;<b>if notexists="user_id"</b>&gt; order by user_id desc &lt;<b>/if</b>&gt;

        
    &lt;<b>/sql</b>&gt;
        ...
&lt;<b>/sqls</b>&gt;
</pre>
<DL>
<DD>sqlファイル。<br>
</DL></DD>
<HR>


<H3><A NAME="efw.sql.groupidandsqlid">groupIdとsqlId</A></H3>
<pre>
</pre>
<DL>
<DD>
sql XMLファイルの名称は、groupId になる。その中に定義される sqlタグの id は、sqlId になる。
</DL></DD>
<HR>

<H3><A NAME="efw.sql.comment">コメントの書き方</A></H3>
<pre>
<I>&lt;!-- 
 コメント１
--&gt;
/**
*コメント２
**/
//コメント３
--コメント４</I>
</pre>
<DL>
<DD>
sql XMLファイルにコメントは４種類の書き方を利用できる。
</DL></DD>
<HR>

<H3><A NAME="efw.sql.param">変数の書き方</A></H3>
<pre>
    :user_id
</pre>
<DL>
<DD>
「 : 」＋変数識別子 で命名する。識別子は、java変数命名を参照。
</DL></DD>
<HR>

<H3><A NAME="efw.sql.stbt">比較条件の書き方</A></H3>
<pre>
    WHERE validateDateFrom <b style="color:red">&amp;gt;</b> now() and validateDateTo <b style="color:red">&amp;lt;</b> now() 
</pre>
<DL>
<DD>
XMLファイルの制限により、「 &lt; 」⇒「 &amp;lt; 」、「 &gt; 」⇒「 &amp;gt; 」で記載する必要。
</DL></DD>
<HR>

<H3><A NAME="efw.sql.if">if 条件の書き方</A></H3>
<pre>
    &lt;if <b>exists</b> = "user_id" &gt; and user_id = :user_id &lt;/if&gt;
    &lt;if <b>notexists</b> = "user_id" &gt; order by user_id desc &lt;/if&gt;
</pre>
<DL>
<DD>
sqlパラメーターの有無により、sqlを変化したい場合、if タグを利用できる。<br>
exists 属性は、指定されたsqlパラメーターが null または 空白ではない場合、trueと判断される。<br>
notexists 属性は、指定されたsqlパラメーターが null または 空白の場合、trueと判断される。
</DL></DD>
