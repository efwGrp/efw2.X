<a href="../file_list.md">return</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/file_list/mySqlGroup.xml.md">日本語</a>
&nbsp;<a href="../../中文/file_list/mySqlGroup.xml.md">中文</a>
&nbsp;<a href="../../English/file_list/mySqlGroup.xml.md">English</a>
<H2><A NAME="efw.sql">sql program</A></H2>
<pre>
web/WEB-INF/efw/sql/mySqlGroup.xml
--------------------------------------------------------------------------------
&lt;?<b>xml version="1.0" encoding="UTF-8"</b>?&gt;
&lt;<b>sqls</b>&gt;
    &lt;<b>sql id="sql_1"</b>&gt;
<I>&lt;!-- 
 comment1
--&gt;
/**
*comment2
**/
//comment3
--comment4</I>

        
        SELECT user_id FROM usermaster
        WHERE validateDateFrom <b style="color:red">&amp;gt;</b> now() and validateDateTo <b style="color:red">&amp;lt;</b> now() 
        &lt;<b>if exists="user_id"</b>&gt; and user_id = :user_id &lt;<b>/if</b>&gt;
        &lt;<b>if notexists="user_id"</b>&gt; order by user_id desc &lt;<b>/if</b>&gt;

        
    &lt;<b>/sql</b>&gt;
        ...
&lt;<b>/sqls</b>&gt;
</pre>
<DL>
<DD>sql file.<br>
</DL></DD>
<HR>


<H3><A NAME="efw.sql.groupidandsqlid">groupId and sqlId</A></H3>
<pre>
</pre>
<DL>
<DD>
The name of the sql XML file is groupId. In the file, the value of "id" in "sql" tag is sqlId.
</DL></DD>
<HR>

<H3><A NAME="efw.sql.comment">how to write comment</A></H3>
<pre>
<I>&lt;!-- 
 comment1
--&gt;
/**
*comment2
**/
//comment3
--comment4</I>
</pre>
<DL>
<DD>
In sql XML file, you can write your comments through these 4 ways.
</DL></DD>
<HR>

<H3><A NAME="efw.sql.param">how to use parameters</A></H3>
<pre>
    :user_id
</pre>
<DL>
<DD>
Named by 「 : 」＋変数識別子. 識別子は、java変数命名を参照。
</DL></DD>
<HR>

<H3><A NAME="efw.sql.stbt">how to write comparison condition</A></H3>
<pre>
    WHERE validateDateFrom <b style="color:red">&amp;gt;</b> now() and validateDateTo <b style="color:red">&amp;lt;</b> now() 
</pre>
<DL>
<DD>
Because of the restrictions in XML file,you have to transform 「 &lt; 」into「 &amp;lt; 」,and 「 &gt; 」into「 &amp;gt; 」.
</DL></DD>
<HR>

<H3><A NAME="efw.sql.if">how to write a "if" condition</A></H3>
<pre>
    &lt;if <b>exists</b> = "user_id" &gt; and user_id = :user_id &lt;/if&gt;
    &lt;if <b>notexists</b> = "user_id" &gt; order by user_id desc &lt;/if&gt;
</pre>
<DL>
<DD>
If you want to change the sql string according to the presence or absence of the sql parameters,you can use "if" tag.<br>
exists 属性は、指定されたsqlパラメーターが null または 空白ではない場合、trueと判断される。<br>
notexists 属性は、指定されたsqlパラメーターが null または 空白の場合、trueと判断される。
</DL></DD>
