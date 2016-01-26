
<H2>efw ファイル リスト</H2>

<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>ファイルの一覧</B></FONT></TH>
	</TR>
</TABLE>
<pre>
web
├─<b>form1.jsp</b>
├─<b>form2.jsp</b>
├─<b>...</b>
│  
├─efw
│  ├─efw.client.format.js
│  ├─efw.client.inputbehavior.js
│  ├─efw.client.js
│  ├─<b>efw.client.messages.js</b>
│  ├─<b>efw.css</b>
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
    │  └─<b>efw.properties</b>
    │  
    ├─efw
    │  ├─event
    │  │  ├─<b>form1_event1.js</b>
    │  │  ├─<b>form1_event2.js</b>
    │  │  ├─<b>form2_event3.js</b>
    │  │  ├─<b>form2_event4.js</b>
    │  │  └─<b>...</b>
    │  │        
    │  ├─server
    │  │  ├─<b>efw.server.customize.js</b>
    │  │  ├─efw.server.db.js
    │  │  ├─efw.server.event.js
    │  │  ├─efw.server.format.js
    │  │  ├─efw.server.js
    │  │  ├─<b>efw.server.messages.js</b>
    │  │  ├─efw.server.properties.js
    │  │  ├─efw.server.session.js
    │  │  └─json2.min.js
    │  │      
    │  └─sql
    │      ├─<b>sqlgroup1.xml</b>
    │      ├─<b>sqlgroup2.xml</b>
    │      └─<b>...</b>
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


<H3><A NAME="efw.jsp.shortCut">ショットカット</A></H3>
<pre>
    &lt;input id="btn_save" type="button" data-shortcut="CTRL+S"&gt;
    &lt;input id="btn_cancel" type="button" data-shortcut="F6"&gt;
</pre>
<DL>
<DD>
efw:InputBehavior をインクルードして、ボタンに data-shortcut を定義する場合、ショットカットの動きを行う。<br>
<table BORDER="1"  CELLPADDING="3" CELLSPACING="0" SUMMARY="">
<tr BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
	<th style="width:300px">data-shortcut</th>
	<th style="width:750px">説明</th>
</tr>
<tr>
	<td>F1～F12</td>
	<td>フォクションキー。</td>
</tr>
<tr>
	<td>CTRL+A～CTRL+Z</td>
	<td>コントロールキー。</td>
</tr>
<tr>
	<td>ALT+A～ALT+Z</td>
	<td>オルトキー。</td>
</tr>
</table>
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
sql XMLファイルの名称は、グループId になる。その中に定義される sqlタグの id は、sqlId になる。
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
<tr>
	<td>efw.cors</td>
	<td>*</td>
	<td>クロスドメイン通信設定、他のサーバーのウェブページから本サイトのイベントを利用する可否を管理する。<br>
	* : 全部許可, null : 全部拒否, http://0.0.0.0:8080,http://9.9.9.9 : 指定サイト許可。</td>
</tr>
</table>
</DL></DD>


