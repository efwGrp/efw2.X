<a href="../file_list.md">返回</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/file_list/mySqlGroup.xml.md">日本語</a>
&nbsp;<a href="../../中文/file_list/mySqlGroup.xml.md">中文</a>
&nbsp;<a href="../../English/file_list/mySqlGroup.xml.md">English</a>
<H3><A NAME="efw.sql">sql程序</A></H3>
<pre>
web/WEB-INF/efw/sql/mySqlGroup.xml
--------------------------------------------------------------------------------
&lt;?<b>xml version="1.0" encoding="UTF-8"</b>?&gt;
&lt;<b>sqls</b>&gt;
    &lt;<b>sql id="sql_1"</b>&gt;
<I>&lt;!-- 
 注释１
--&gt;
/**
*注释２
**/
//注释３
--注释４</I>

        
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


<H3><A NAME="efw.sql.groupidandsqlid">groupId和sqlId</A></H3>
<pre>
</pre>
<DL>
<DD>
sql XML文件的名称就是groupId。sql标签的id就是sqlId。
</DL></DD>
<HR>

<H3><A NAME="efw.sql.comment">注释的写法</A></H3>
<pre>
<I>&lt;!-- 
 注释１
--&gt;
/**
*注释２
**/
//注释３
--注释４</I>
</pre>
<DL>
<DD>
sql XML文件的注释有4种写法。
</DL></DD>
<HR>

<H3><A NAME="efw.sql.param">参数的写法</A></H3>
<pre>
    :user_id
</pre>
<DL>
<DD>
「 : 」＋变量识别码来命名。识别码参照java的变量命名。
</DL></DD>
<HR>

<H3><A NAME="efw.sql.stbt">比较条件的写法</A></H3>
<pre>
    WHERE validateDateFrom <b style="color:red">&amp;gt;</b> now() and validateDateTo <b style="color:red">&amp;lt;</b> now() 
</pre>
<DL>
<DD>
由于XML文件的限制，需要进行转换「 &lt; 」⇒「 &amp;lt; 」，「 &gt; 」⇒「 &amp;gt; 」。
</DL></DD>
<HR>

<H3><A NAME="efw.sql.if">if 条件的写法</A></H3>
<pre>
    &lt;if <b>exists</b> = "user_id" &gt; and user_id = :user_id &lt;/if&gt;
    &lt;if <b>notexists</b> = "user_id" &gt; order by user_id desc &lt;/if&gt;
</pre>
<DL>
<DD>
如果想根据sql参数有无改变sql内容，可以使用if标签。<br>
指定的sql参数如果不是null和空白的话，exists属性判断为true。<br>
指定的sql参数如果是null或空白的话，notexists属性判断为true。
</DL></DD>
