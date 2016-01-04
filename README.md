
	<STYLE>
		a:link {
			text-decoration: none;
		}

		a:visited {
			text-decoration: none;
		}

		a:hover {
			 text-decoration: underline;
		}

		a:active {
			text-decoration: underline;
		}
		
		pre{
			 font-family:ＭＳ ゴシック;
		}
		
		span.star{
			color:yellow;
		}

		span.prg{
			background-color:yellow;
		}

		span.ctms{
			background-color:pink;
		}


	</STYLE>
	
	<H2>efw ファイル リスト</H2>
<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>ファイルの一覧</B></FONT></TH>
	</TR>
</TABLE>
<pre>
web
├─<span class="prg">form1.jsp</span>
├─<span class="prg">form2.jsp</span>
├─<span class="prg">...</span>
│  
├─efw
│  ├─efw.client.format.js
│  ├─efw.client.inputbehavior.js
│  ├─efw.client.js
│  ├─<span class=ctms>efw.client.messages.js</span>
│  ├─<span class=ctms>efw.css</span>
│  ├─jquery-min.js
│  ├─jquery-ui.min.css
│  ├─jquery-ui.min.js
│  ├─jquery-ui.structure.css
│  ├─jquery-ui.structure.min.css
│  ├─jquery-ui.theme.css
│  ├─jquery-ui.theme.min.css
│  │  
│  └─images
│      ├─loading.gif
│      ├─ui-bg_flat_0_aaaaaa_40x100.png
│      ├─ui-bg_flat_55_fbec88_40x100.png
│      ├─ui-bg_flat_75_ffffff_40x100.png
│      ├─ui-bg_glass_55_fbf9ee_1x400.png
│      ├─ui-bg_glass_65_ffffff_1x400.png
│      ├─ui-bg_glass_75_d0e5f5_1x400.png
│      ├─ui-bg_glass_75_dadada_1x400.png
│      ├─ui-bg_glass_75_e6e6e6_1x400.png
│      ├─ui-bg_glass_85_dfeffc_1x400.png
│      ├─ui-bg_glass_95_fef1ec_1x400.png
│      ├─ui-bg_gloss-wave_55_5c9ccc_500x100.png
│      ├─ui-bg_highlight-soft_75_cccccc_1x100.png
│      ├─ui-bg_inset-hard_100_f5f8f9_1x100.png
│      ├─ui-bg_inset-hard_100_fcfdfd_1x100.png
│      ├─ui-icons_217bc0_256x240.png
│      ├─ui-icons_222222_256x240.png
│      ├─ui-icons_2e83ff_256x240.png
│      ├─ui-icons_454545_256x240.png
│      ├─ui-icons_469bdd_256x240.png
│      ├─ui-icons_6da8d5_256x240.png
│      ├─ui-icons_888888_256x240.png
│      ├─ui-icons_cd0a0a_256x240.png
│      ├─ui-icons_d8e7f3_256x240.png
│      └─ui-icons_f9bd01_256x240.png
│          
└─WEB-INF
    ├─efw.tld
    ├─web.xml
    │  
    ├─classes
    │  └─<span class=ctms>efw.properties</span>
    │  
    ├─efw
    │  ├─event
    │  │  ├─<span class="prg">form1_event1.js</span>
    │  │  ├─<span class="prg">form1_event2.js</span>
    │  │  ├─<span class="prg">form2_event3.js</span>
    │  │  ├─<span class="prg">form2_event4.js</span>
    │  │  └─<span class="prg">...</span>
    │  │        
    │  ├─server
    │  │  ├─<span class=ctms>efw.server.customize.js</span>
    │  │  ├─efw.server.db.js
    │  │  ├─efw.server.event.js
    │  │  ├─efw.server.format.js
    │  │  ├─efw.server.js
    │  │  ├─<span class=ctms>efw.server.messages.js</span>
    │  │  ├─efw.server.properties.js
    │  │  ├─efw.server.session.js
    │  │  └─json2.min.js
    │  │      
    │  └─sql
    │      ├─<span class="prg">sqlgroup1.xml</span>
    │      ├─<span class="prg">sqlgroup2.xml</span>
    │      └─<span class="prg">...</span>
    │          
    └─lib
        ├─efw-2.X.XXX.jar
        └─jdbc.XXXXXX.jar

</pre>

<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>jspのプログラム</B></FONT></TH>
	</TR>
</TABLE>
<H3><A NAME="efw.jsp">jsp</A></H3>
<pre>
web/form1.jsp
--------------------------------------------------------------------------------
    &lt;%@ page language="java" contentType="text/html; <b>charset</b>=UTF-8" <b>pageEncoding</b>="UTF-8"%&gt;
    &lt;%@ <b>taglib</b> prefix="efw" uri="efw" %&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;meta http-equiv="Content-Type" content="text/html; <b>charset</b>=UTF-8"/&gt;
        &lt;<b>efw:Core</b>/&gt;
        &lt;<b>efw:JQueryUI</b>/&gt;
        &lt;<b>efw:InputBehavior</b>/&gt;
        &lt;script&gt;
            var param1="&lt;%=<b>request.getParameter("param1")</b>%&gt;";
            function bodyLoad(){
                efw.client.fire({
                   eventId:"form1_event1",
                   ...
                   success:function(data){
                       <b>window.location="next.jsp?param1="+param1</b>;
                   },
                });
                ...
            }
        &lt;/script&gt;
    &lt;/head&gt;
    &lt;body onload="bodyLoad()"&gt;
        &lt;input id="txt_testnumber" type="text" <b>data-format</b>="#,##0.00"&gt;
        &lt;input id="txt_testdate" type="text" <b>data-format</b>="yyyy年MM月dd日"&gt;
        ...
    &lt;/body&gt;
    &lt;/html&gt;
</pre>
<DL>
<DD>jspファイル。<br>
</DL></DD>
<HR>


<H3><A NAME="efw.jsp.taglib">efwタグ利用</A></H3>
<pre>
    &lt;efw:Core/&gt;
    &lt;efw:JQueryUI/&gt;
    &lt;efw:InputBehavior/&gt;
</pre>

<DL>
<DD>
efw の taglib を宣言して、efwのタグを取り込み、efw.client の各機能を利用できる。<br>

<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">タグ</th>
	<th style="width:850px">説明</th>
</tr>
<tr>
	<td>&lt;efw:Core/&gt;</td>
	<td>efwの基本機能をインクルードする。必須。</td>
</tr>
<tr>
	<td>&lt;efw:JQueryUI/&gt;</td>
	<td>JQueryUI 機能をインクルードする。オプション。</td>
</tr>
<tr>
	<td>&lt;efw:InputBehavior/&gt;</td>
	<td>入力支援機能をインクルードする。オプション。入力支援のカスタマイズは、efw.css 。</td>
</tr>
</table>
</DL></DD>
<HR>


<H3><A NAME="efw.jsp.charset">encode & charset</A></H3>
<pre>
    &lt;%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%&gt;
    &lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/&gt;
</pre>
<DL>
<DD>
efwの各jsファイルは、UTF-8 でエンコードする。ただし、jsp画面は用途によりencodeとcharsetは、自由に設定できる。<br>

<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">ファイル</th>
	<th style="width:200px">encode & charset</th>
	<th style="width:650px">説明</th>
</tr>
<tr>
	<td>efw/efw.client.messages.js</td>
	<td>UTF-8</td>
	<td>クライアントのメッセージファイルは、UTF-8でencodeを固定にする。</td>
</tr>
<tr>
	<td>efw/efw.server.messages.js</td>
	<td>UTF-8</td>
	<td>サーバーのメッセージファイルは、UTF-8でencodeを固定にする。</td>
</tr>
<tr>
	<td>jsp pageEncoding</td>
	<td>UTF-8 推薦</td>
	<td>jsp画面は用途によりencodeとcharsetは、UTF-8を推薦。自由に設定できる。</td>
</tr>
<tr>
	<td>jsp charset</td>
	<td>UTF-8 推薦</td>
	<td>jsp画面は用途によりencodeとcharsetは、UTF-8を推薦。自由に設定できる。</td>
</tr>
<tr>
	<td>jsp meta charset</td>
	<td>jsp charset と同じ</td>
	<td>－</td>
</tr>
<tr>
	<td>event js</td>
	<td>UTF-8</td>
	<td>サーバーサイドのjsファイルのencodeは、UTF-8でencodeを固定にする。</td>
</tr>
<tr>
	<td>sql xml</td>
	<td>UTF-8 推薦</td>
	<td>サーバーサイドのxmlファイルのencodeは、UTF-8を推薦。自由に設定できる。</td>
</tr>

</table>
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.charset">画面間のデータ受取り引渡し</A></H3>
<pre>
    var param1="&lt;%=request.getParameter("param1")%&gt;";
    window.location="next.jsp?param1="+param1;
</pre>
<DL>
<DD>
画面間のデータ受取りは、request.getParameter方式を推薦。画面間のデータ引渡しは、jsp従来どおりのURLパラメーター方式を推薦。<br>
また、画面遷移は、jsp従来どおりのURL呼び出す方式を推薦。必要に応じて、フォームポスト、セッション、クッキーなども利用可能。<br>

</DL></DD>
<HR>

<H3><A NAME="efw.jsp.event">イベントのデータ受取り引渡し</A></H3>
<pre>
    efw.client.fire({
       eventId:"form1_event1",
           ...
       success:function(eventResult){
           ...
       },
    });
</pre>
<DL>
<DD>
イベントのデータ受取り引渡しは、サーバーサイドのイベントjsファイルに記載する。クライアントjsに記載不要。<br>
ただし、success 関数に受取りデータに対して処理があれば、eventResult を意識する必要。詳細はAPIの efw.client.fire を参照。
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.dataFormat">入力支援</A></H3>
<pre>
    &lt;input id="txt_testnumber" type="text" data-format="#,##0.00"&gt;
    &lt;input id="txt_testdate" type="text" data-format="yyyy年MM月dd日"&gt;
</pre>
<DL>
<DD>
efw:InputBehavior をインクルードして、入力枠に data-format を定義する場合、入力支援の動きを行う。<br>
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">data-format</th>
	<th style="width:100px">イベント</th>
	<th style="width:750px">説明</th>
</tr>
<tr>
	<td>#,##0.00</td>
	<td>focus</td>
	<td>フォーマットなしの数字で表す。1,234.00 ⇒ 1234</td>
</tr>
<tr>
	<td>#,##0.00</td>
	<td>blur</td>
	<td>フォーマット後の文字列で表す。フォーマットできない場合空白。1234 ⇒ 1,234.00、ABCD ⇒ 「」</td>
</tr>
<tr>
	<td>yyyy年MM月dd日</td>
	<td>focus</td>
	<td>フォーマットなしの数字で表す。2015年12月31日 ⇒ 20151231</td>
</tr>
<tr>
	<td>yyyy年MM月dd日</td>
	<td>blur</td>
	<td>フォーマット後の文字列で表す。フォーマットできない場合空白。20151231 ⇒ 2015年12月31日、ABCD ⇒ 「」</td>
</tr>
</table>
フォーマットの書き方は、詳細はAPIの formatter を参照。
</DL></DD>



<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>eventのプログラム</B></FONT></TH>
	</TR>
</TABLE>
<H3><A NAME="efw.event">event</A></H3>
<pre>
web/WEB-INF/efw/event/form1_event1.js
--------------------------------------------------------------------------------
var form1_event1={};
form1_event1.<b>outOfLogin</b>   = false;
form1_event1.<b>include</b>      = [ { eventId : "form1_event2" } ];
form1_event1.<b>paramsFormat</b> = { 
                                "#user_id"        : "<b>display-name</b>:ユーザId;<b>max-length</b>:10;",
                                "#txt_testnumber" : "<b>format</b>:#,##0.00;<b>required</b>:true;<b>display-name</b>:テスト数字;<b>min</b>:-10.00;<b>max</b>:1,000.00",
                                "#txt_testdate"   : function(){
                                                        var date1=new Date();
                                                        var date2=new Date();
                                                        date2.setDate(date1.getDate()+Number(6));
                                                        return "<b>format</b>:yyyy年MM月dd日;<b>required</b>:true;<b>display-name</b>:テスト日付;"
                                                               +"<b>min</b>:"+efw.server.format.formatDate(date1,"yyyy年MM月dd日")+";"
                                                               +"<b>max</b>:"+efw.server.format.formatDate(date2,"yyyy年MM月dd日")+";" ;
                                                    },
                                ... 
                            };
form1_event1.<b>fire</b>         = function ( requestParams ) {
                                var ret=[];
                                    ...
                                var retsub=form1_event2.<b>fire</b>({ ... });
                                if(retsub.error) return {<b>error</b>:{...}};
                                ret=ret.<b>concat</b>(retsub);
                                return ret;
                            };
</pre>
<DL>
<DD>eventファイル。<br>
</DL></DD>
<HR>

<H3><A NAME="efw.event.outOfLogin">ログインチェック</A></H3>
<pre>
    form1_event1.outOfLogin = true/false;
</pre>
<DL>
<DD>
ログインチェック不要フラグが、未設定またはfalseの場合、ログインチェック要。trueの場合、ログインチェック不要。<br>
ログインチェックの対象は、efw.properties の efw.login.key を参照。
</DL></DD>
<HR>

<H3><A NAME="efw.event.inputCheck">単純入力チェック</A></H3>
<pre>
form1_event1.paramsFormat = { 
                                "#user_id"        : "<b>display-name</b>:ユーザId;<b>max-length</b>:10;",
                                "#txt_testnumber" : "<b>format</b>:#,##0.00;<b>required</b>:true;<b>display-name</b>:テスト数字;<b>min</b>:-10.00;<b>max</b>:1,000.00",
                                "#txt_testdate"   : function(){
                                                        var date1=new Date();
                                                        var date2=new Date();
                                                        date2.setDate(date1.getDate()+Number(6));
                                                        return "<b>format</b>:yyyy年MM月dd日;<b>required</b>:true;<b>display-name</b>:テスト日付;"
                                                               +"<b>min</b>:"+efw.server.format.formatDate(date1,"yyyy年MM月dd日")+";"
                                                               +"<b>max</b>:"+efw.server.format.formatDate(date2,"yyyy年MM月dd日")+";" ;
                                                    },
                                ... 
                            };

</pre>
<DL>
<DD>
単純入力チェックを自動的に行うため、paramsFormatにチェックスタイルで定義する。<br>
詳細はAPIの event.paramsFormat.checkStyle を参照。
</DL></DD>
<HR>

<H3><A NAME="efw.event.workCheck">業務チェック</A></H3>
<pre>
    return {error:{...}};
</pre>
<DL>
<DD>
業務チェックエラーの場合、イベント処理は、error オブジェクトを戻す。詳細はAPIの event.fire.error を参照。<br>
業務チェックエラーを一括管理したい場合、メッセージのカスタマイズは、efw.client.messages.js または efw.server.messages.js。

</DL></DD>
<HR>

<H3><A NAME="efw.event.include">サブイベント実行</A></H3>
<pre>
    form1_event1.include = [ { eventId : "form1_event2" } ];
    ...
    var retsub = form1_event2.fire( { ... } );
    ret = ret.concat( retsub );
</pre>
<DL>
<DD>
メインイベントにサブイベントを実行したい場合、include 属性に定義する必要。<br>
サブの paramsFormat をメインに取り込みたい場合、include の mergeParamsFormat を利用できる。 詳細はAPIの event.include を参照。<br>
メインイベントとサブイベントの実行結果は、配列結合で連結。詳細はAPIの event.fire.eventResult を参照。
</DL></DD>
<HR>

<H3><A NAME="efw.event.fire">イベントのデータ受取り引渡し</A></H3>
<pre>
    form1_event1.paramsFormat = { ... };
    ...
    form1_event1.fire         = function ( requestParams ) {
                                    var ret=[];
                                        ...
                                    return ret;
                                };
</pre>
<DL>
<DD>
イベントのデータ受取り引渡しは、サーバーサイドのイベントjsファイルに記載する。クライアントjsに記載不要。<br>
詳細はAPIの efw.server.fire を参照。
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.event">トランザクション管理</A></H3>
<pre>
</pre>
<DL>
<DD>
event.fireが実行するたび、トランザクションが発行される。<br>
fireイベントが成功の場合、トランザクションがcommit。失敗の場合、トランザクションがrollback。<br>
詳細はAPIの efw.server.prepare と efw.server.finish を参照。<br>
トランザクションのカスタマイズは、efw.server.customize.js。
</DL></DD>




<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>sqlのプログラム</B></FONT></TH>
	</TR>
</TABLE>
<H3><A NAME="efw.sql">sql</A></H3>
<pre>
web/WEB-INF/efw/sql/sqlgroup1.xml
--------------------------------------------------------------------------------
&lt;?<b>xml version="1.0" encoding="UTF-8"</b>?&gt;
&lt;<b>sqls</b>&gt;
    &lt;<b>sql id="sql_1"</b>&gt;
<I style="color:green">&lt;!-- 
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
sql XMLファイルの名称は、グループId になる。その中に定義される sqlタグの id は、sqlId になる。
</DL></DD>
<HR>

<H3><A NAME="efw.sql.comment">コメントの書き方</A></H3>
<pre>
<I style="color:green">&lt;!-- 
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


<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>プロパティの設定</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.properties">プロパティ</A></H3>
<pre>
web/WEB-INF/classes/efw.properties
</pre>
<DL>
<DD>
デフォルトで利用する場合、プロパティファイルは不要。
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:200px">キー</th>
	<th style="width:200px">初期値</th>
	<th style="width:650px">説明</th>
</tr>
<tr>
	<td>efw.isdebug</td>
	<td>false</td>
	<td>trueの場合、プログラムの編集はメモリにリロードされる。</td>
</tr>
<tr>
	<td>efw.jdbc.resource</td>
	<td>jdbc/efw</td>
	<td>デフォルトjdbcリソース名。server.xmlに定義する必要。</td>
</tr>
<tr>
	<td>efw.server.folder</td>
	<td>/WEB-INF/efw/server</td>
	<td>サーバーソースのフォルダ。webアプリの相対パス。</td>
</tr>
<tr>
	<td>efw.event.folder</td>
	<td>/WEB-INF/efw/event</td>
	<td>イベントソースのフォルダ。webアプリの相対パス。</td>
</tr>
<tr>
	<td>efw.event.sql</td>
	<td>/WEB-INF/efw/sql</td>
	<td>sql XMLファイルのフォルダ。webアプリの相対パス。</td>
</tr>
<tr>
	<td>efw.login.check</td>
	<td>false</td>
	<td>システムのログインチェック要否フラグ。</td>
</tr>
<tr>
	<td>efw.login.key</td>
	<td>null</td>
	<td>ログインチェック対象のセッションキー。</td>
</tr>
<tr>
	<td>efw.logging.path</td>
	<td>/logs</td>
	<td>efwログ出力パス。絶対パス。</td>
</tr>
<tr>
	<td>efw.logging.name</td>
	<td>efwlog%g.txt</td>
	<td>efwログファイル名。</td>
</tr>
<tr>
	<td>efw.logging.limit</td>
	<td>10485760</td>
	<td>efwログファイルのサイズ制限。</td>
</tr>
<tr>
	<td>efw.logging.num</td>
	<td>5</td>
	<td>efwログファイルの数。</td>
</tr>
<tr>
	<td>efw.logging.level</td>
	<td>OFF</td>
	<td>efwログファイルの出力レベル。</td>
</tr>
</table>
</DL></DD>




<H2>efw Javascript API</H2>
	
<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>APIの一覧</B></FONT></TH>
	</TR>
</TABLE>

<pre>
efw
├─client
│  ├─<a href="#efw.client.fire">fire</a> ( <a href="#efw.eventParams">eventParams</a> )                                                    <span class="star">★★★</span>
│  ├─<a href="#efw.client.pickup">pickup</a> ( <a href="#efw.event.paramsFormat">paramsFormat</a> , <a href="#efw.eventParams.manualParams">manualParams</a> )</a>                                  <span class="star">★</span>
│  ├─<a href="#efw.client.show">show</a> ( <a href="#efw.event.fire.eventResult">eventResult</a> )                                                    <span class="star">★</span>
│  ├─<a href="#efw.client.alert">alert</a>( message , callback )                                             <span class="star">★★★</span>
│  ├─messages
│  │  ├─<a href="#efw.client.messages.OtherErrorException">OtherErrorException</a>
│  │  ├─<a href="#efw.client.messages.CanNotContinueMessage">CanNotContinueMessage</a>
│  │  ├─<a href="#efw.client.messages.ParamsFormatErrorException">ParamsFormatErrorException</a>
│  │  ├─<a href="#efw.client.messages.ShowValuesErrorException">ShowValuesErrorException</a>
│  │  ├─<a href="#efw.client.messages.SuccessCallbackErrorException">SuccessCallbackErrorException</a>
│  │  └─<a href="#efw.client.messages.ReturnIsNotArrayErrorException">ReturnIsNotArrayErrorException</a>
│  └─format
│      ├─<a href="#efw.client.format.formatNumber">formatNumber</a>( value , <a href="#efw.format.formatter">formatter</a> , <a href="#efw.format.rounder">rounder</a> )                         <span class="star">★★</span>
│      ├─<a href="#efw.client.format.parseNumber">parseNumber</a>( value , <a href="#efw.format.formatter">formatter</a> )                                    <span class="star">★★</span>
│      ├─<a href="#efw.client.format.formatDate">formatDate</a>( value , <a href="#efw.format.formatter">formatter</a> )                                     <span class="star">★★</span>
│      └─<a href="#efw.client.format.parseDate">parseDate</a>( value , <a href="#efw.format.formatter">formatter</a> )                                      <span class="star">★★</span>
└─server
    ├─<a href="#efw.server.getParamsFormat">getParamsFormat</a> ( <a href="#efw.event">event</a> )
    ├─<a href="#efw.server.check">check</a> ( <a href="#efw.event">event</a> , <a href="#efw.event.fire.requestParams">requestParams</a> )
    ├─<a href="#efw.server.fire">fire</a> ( <a href="#efw.event">event</a> , <a href="#efw.event.fire.requestParams">requestParams</a> )
    ├─<a href="#efw.server.prepare">prepare</a> ( <a href="#efw.event">event</a> , <a href="#efw.event.fire.requestParams">requestParams</a> )                                       <span class="star">★</span>
    ├─<a href="#efw.server.finish">finish</a> ( <a href="#efw.event">event</a> , <a href="#efw.event.fire.requestParams">requestParams</a> , <a href="#efw.event.fire.eventResult">eventResult</a> )                          <span class="star">★</span>
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
    │  ├─<a href="#efw.server.format.formatNumber">formatNumber</a>( value , <a href="#efw.format.formatter">formatter</a> , <a href="#efw.format.rounder">rounder</a> )                         <span class="star">★★</span>
    │  ├─<a href="#efw.server.format.parseNumber">parseNumber</a>( value , <a href="#efw.format.formatter">formatter</a> )                                    <span class="star">★★</span>
    │  ├─<a href="#efw.server.format.formatDate">formatDate</a>( value , <a href="#efw.format.formatter">formatter</a> )                                     <span class="star">★★</span>
    │  └─<a href="#efw.server.format.parseDate">parseDate</a>( value , <a href="#efw.format.formatter">formatter</a> )                                      <span class="star">★★</span>
    ├─properties
    │  ├─<a href="#efw.server.properties.get">get</a> ( key , defaultValue )                                          <span class="star">★★</span>
    │  ├─<a href="#efw.server.properties.getBoolean">getBoolean</a> ( key , defaultValue )                                   <span class="star">★★</span>
    │  └─<a href="#efw.server.properties.getInt">getInt</a> ( key , defaultValue )                                       <span class="star">★★</span>
    ├─session
    │  ├─<a href="#efw.server.session.get">get</a> ( key )                                                         <span class="star">★★</span>
    │  └─<a href="#efw.server.session.set">set</a> ( key , value )                                                 <span class="star">★★</span>
    ├─db
    │  ├─<a href="#efw.server.db.open">open</a> ( <a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a> )                                           <span class="star">★</span>
    │  ├─<a href="#efw.server.db.getSingle">getSingle</a> ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )                                       <span class="star">★★★</span>
    │  ├─<a href="#efw.server.db.executeQuery">executeQuery</a> ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )                                    <span class="star">★★★</span>
    │  ├─<a href="#efw.server.db.executeUpdate">executeUpdate</a> ( <A href="#efw.sqlExecution.executionParams">executionParams</A> )                                   <span class="star">★★</span>
    │  ├─<a href="#efw.server.db.execute">execute</a>( <A href="#efw.sqlExecution.executionParams">executionParams</A> )                                          <span class="star">★★★</span>
    │  ├─<a href="#efw.server.db.commit">commit</a> ( <a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a> )                                         <span class="star">★</span>
    │  ├─<a href="#efw.server.db.rollback">rollback</a> ( <a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a> )                                       <span class="star">★</span>
    │  └─<a href="#efw.server.db.closeAll">closeAll</a> ( )                                                        <span class="star">★</span>
    └─event
        └─<a href="#efw.server.event.load">load</a> ( <a href="#efw.eventParams.eventId">eventId</a> )


<a href="#efw.eventParams">eventParams</a>                                                                     <span class="star">★★★</span>
├─<a href="#efw.eventParams.eventId">eventId</a>                                                                     <span class="star">★★★</span>
├─<a href="#efw.eventParams.manualParams">manualParams</a>                                                                <span class="star">★★</span>
└─<a href="#efw.eventParams.success">success</a>                                                                     <span class="star">★★★</span>

<a href="#efw.event">event</a>                                                                           <span class="star">★★★</span>
├─<a href="#efw.event.outOfLogin">outOfLogin</a>                                                                  <span class="star">★★</span>
├─<a href="#efw.event.include">include</a>                                                                     <span class="star">★★</span>
│  ├─<a href="#efw.eventParams.eventId">eventId</a>                                                                 <span class="star">★★</span>
│  └─<a href="#efw.event.mergeParamsFormat">mergeParamsFormat</a>                                                       <span class="star">★★</span>
├─<a href="#efw.event.paramsFormat">paramsFormat</a>                                                                <span class="star">★★★</span>
│  └─<a href="#efw.event.paramsFormat.checkStyle">checkStyle</a>                                                              <span class="star">★★★</span>
└─<a href="#efw.event.fire">fire</a>                                                                        <span class="star">★★★</span>
    ├─<a href="#efw.event.fire.requestParams">requestParams</a>                                                           <span class="star">★★★</span>
    ├─<a href="#efw.event.fire.eventResult">eventResult</a>                                                             <span class="star">★★★</span>
    │  └─<a href="#efw.event.fire.eventResult.appendMask">appendMask</a>                                                          <span class="star">★★★</span>
    └─<a href="#efw.event.fire.error">error</a>                                                                   <span class="star">★★★</span>

<a href="#efw.format.formatter">formatter</a>                                                                       <span class="star">★★★</span>
<a href="#efw.format.rounder">rounder</a>                                                                         <span class="star">★★</span>

<A href="#efw.sqlExecution.executionParams">executionParams</A>                                                                 <span class="star">★★★</span>
<a href="#efw.sqlExecution.executionResult">executionResult</a>                                                                 <span class="star">★★★</span>
<a href="#efw.sqlExecution.jdbcResourceName">jdbcResourceName</a>                                                                <span class="star">★</span>

</pre>

<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>efw.clientの詳細</B></FONT></TH>
	</TR>
</TABLE>

<H3><A NAME="efw.client.fire">fire</A></H3>
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
OtherErrorException</PRE>
<DL>
<DD>予想外エラーが発生しました。
</DL>
<HR>

<H3><A NAME="efw.client.messages.CanNotContinueMessage">CanNotContinueMessage</A></H3>
<PRE>
CanNotContinueMessage</PRE>
<DL>
<DD>継続処理はできません。
</DL>
<HR>

<H3><A NAME="efw.client.messages.ParamsFormatErrorException">ParamsFormatErrorException</A></H3>
<PRE>
ParamsFormatErrorException</PRE>
<DL>
<DD>イベントのパラメーター定義が正しくありません。
</DL>
<HR>

<H3><A NAME="efw.client.messages.ShowValuesErrorException">ShowValuesErrorException</A></H3>
<PRE>
ShowValuesErrorException</PRE>
<DL>
<DD>描画用のデータは正しくありません。
</DL>
<HR>

<H3><A NAME="efw.client.messages.SuccessCallbackErrorException">SuccessCallbackErrorException</A></H3>
<PRE>
SuccessCallbackErrorException</PRE>
<DL>
<DD>成功時コールバックは正しくありません。
</DL>
<HR>

<H3><A NAME="efw.client.messages.ReturnIsNotArrayErrorException">ReturnIsNotArrayErrorException</A></H3>
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
SessionTimeoutException</PRE>
<DL>
<DD>セッションタイムアウトになりました。再ログインしてください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.NumberIsReuqiredMessage">NumberIsReuqiredMessage</A></H3>
<PRE>
NumberIsReuqiredMessage</PRE>
<DL>
<DD>{display-name}を数字で正しく入力してください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.DateIsReuqiredMessage">DateIsReuqiredMessage</A></H3>
<PRE>
DateIsReuqiredMessage</PRE>
<DL>
<DD>{display-name}を日付で正しく入力してください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.IsRequiredMessage">IsRequiredMessage</A></H3>
<PRE>
IsRequiredMessage</PRE>
<DL>
<DD>{display-name}を入力してください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.MaxLengthOverMessage">MaxLengthOverMessage</A></H3>
<PRE>
MaxLengthOverMessage</PRE>
<DL>
<DD>{display-name}を{max-length}文字以内で入力してください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.MinOrMaxOverMessage">MinOrMaxOverMessage</A></H3>
<PRE>
MinOrMaxOverMessage</PRE>
<DL>
<DD>{display-name}を{min}以上{max}以内の{data-type}で入力してください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.MinOverMessage">MinOverMessage</A></H3>
<PRE>
MinOverMessage</PRE>
<DL>
<DD>{display-name}を{min}以上の{data-type}で入力してください。
</DL>
<HR>

<H3><A NAME="efw.server.messages.MaxOverMessage">MaxOverMessage</A></H3>
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
eventParams = {
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


<H3><A NAME="efw.eventParams.eventId">eventId</A></H3>
<PRE>
eventId = "myEvent";                                                            // WEB-INF/efw/event/myEvent.js のjsファイルとリンクする。英語の大文字小文字を区別。
</PRE>
<DL><DD>イベントId。イベントの実装されるサーバーサイドJavascriptファイル名と同じ。
</DL></DD>
<HR>


<H3><A NAME="efw.eventParams.manualParams">manualParams</A></H3>
<PRE>
manualParams = {
                   key1 : value1,
                   key2 : value2,
               };
</PRE>
<DL><DD>手動パラメーター。イベントに手動で渡したいパラメーターを設定する。
</DL></DD>
<HR>


<H3><A NAME="efw.eventParams.success">success</A></H3>
<PRE>
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
<PRE>
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
<PRE>
outOfLogin = true;
</PRE>
<DL><DD>ログインチェック不要フラグ。<br>
未設定の場合、ログインチェック要と見なし、未ログイン時 <A href="#efw.server.messages.SessionTimeoutException">SessionTimeoutException</A> エラーが発生する。<br>
該当機能は、カスタマイズ用 <A href="#efw.server.prepare">prepare</A> 関数に実装される。
</DL></DD>
<HR>

<H3><A NAME="efw.event.include">include</A></H3>
<PRE>
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
<PRE>
mergeParamsFormat = true;
</PRE>
<DL><DD>サブとメインのパラメーターフォーマットをマージするフラグ。<br>
未設定の場合、サブイベントに必要なパラメータは、メインイベントにも定義する必要、または、サブを呼び出す時プログラムで渡す必要。<br>
定義される場合、メインイベントの <A href="#efw.event.fire.requestParams">requestParams</A> にサブイベントの必要なパラメータも含む。

</DL></DD>
<HR>

<H3><A NAME="efw.event.paramsFormat">paramsFormat</A></H3>
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
appendMask = "&lt;tr&gt;&lt;td&gt;&lt;input value='{maskKey1}'&gt;&lt;/td&gt;&lt;td&gt;&lt;span&gt;{{maskKey2}}&lt;/span&gt;&lt;/td&gt;&lt;/tr&gt;";
</PRE>
<DL><DD>追加内容のマスク。<br>
HTMLエンコード処理をしたい場合、{maskKey} で書く。したくない場合、{{maskKey}}で書く。
</DL></DD>
<HR>

<H3><A NAME="efw.event.fire.error">error</A></H3>
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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
<PRE>
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


