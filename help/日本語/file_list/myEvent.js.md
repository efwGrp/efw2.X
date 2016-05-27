<a href="../file_list.md">戻る</a>
<H3><A NAME="efw.event">eventのプログラム</A></H3>
<pre>
web/WEB-INF/efw/event/myEvent.js
--------------------------------------------------------------------------------
var form1_event1={};
form1_event1.<b>outOfLogin</b>   = false;
form1_event1.<b>include</b>      = [ { eventId : "form1_event2" } ];
form1_event1.<b>paramsFormat</b> = { 
                                "#txt_teststring" : "<b>display-name</b>:テスト文字;<b>max-length</b>:10;",
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
ログインチェック不要フラグが、未設定またはfalseの場合、ログインチェックを実行する。trueの場合、ログインチェックを実行しない。<br>
ログインチェックの確認対象について、efw.properties の efw.login.key を参照。
</DL></DD>
<HR>

<H3><A NAME="efw.event.inputCheck">単純入力チェック</A></H3>
<pre>
form1_event1.paramsFormat = { 
                                "#txt_teststring" : "<b>display-name</b>:テスト文字;<b>max-length</b>:10;",
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
業務チェックエラーメッセージを管理したい場合、メッセージファイル efw.client.messages.js または efw.server.messages.jsをカスタマイズできる。

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
サブイベントの paramsFormat をメインイベントに取り込みたい場合、include の mergeParamsFormat を利用できる。 詳細はAPIの event.include を参照。<br>
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
イベントのfireが成功の場合、トランザクションがcommit。失敗の場合、トランザクションがrollback。<br>
詳細はAPIの efw.server.prepare と efw.server.finish を参照。<br>
トランザクションのカスタマイズは、efw.server.customize.js。
</DL></DD>
