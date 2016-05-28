<a href="../file_list.md">返回</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/file_list/myEvent.js.md">日本語</a>
&nbsp;<a href="../../中文/file_list/myEvent.js.md">中文</a>
&nbsp;<a href="../../English/file_list/myEvent.js.md">English</a>
<H2><A NAME="efw.event">事件程序</A></H2>
<pre>
web/WEB-INF/efw/event/myEvent.js
--------------------------------------------------------------------------------
var form1_event1={};
form1_event1.<b>outOfLogin</b>   = false;
form1_event1.<b>include</b>      = [ { eventId : "form1_event2" } ];
form1_event1.<b>paramsFormat</b> = { 
                                "#txt_teststring" : "<b>display-name</b>:测试文字;<b>max-length</b>:10;",
                                "#txt_testnumber" : "<b>format</b>:#,##0.00;<b>required</b>:true;<b>display-name</b>:测试数字;<b>min</b>:-10.00;<b>max</b>:1,000.00",
                                "#txt_testdate"   : function(){
                                                        var date1=new Date();
                                                        var date2=new Date();
                                                        date2.setDate(date1.getDate()+Number(6));
                                                        return "<b>format</b>:yyyy年MM月dd日;<b>required</b>:true;<b>display-name</b>:测试日期;"
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
<DD>event文件。<br>
</DL></DD>
<HR>

<H3><A NAME="efw.event.outOfLogin">登陆校验</A></H3>
<pre>
    form1_event1.outOfLogin = true/false;
</pre>
<DL>
<DD>
免除登陆校验标识，如果未设置或是false的话，进行登陆校验。如果设置true的话，不进行登陆校验。<br>
关于登陆校验的确认对象，请参照efw.properties 的 efw.login.key 。
</DL></DD>
<HR>

<H3><A NAME="efw.event.inputCheck">单纯输入校验</A></H3>
<pre>
form1_event1.paramsFormat = { 
                                "#txt_teststring" : "<b>display-name</b>:测试文字;<b>max-length</b>:10;",
                                "#txt_testnumber" : "<b>format</b>:#,##0.00;<b>required</b>:true;<b>display-name</b>:测试数字;<b>min</b>:-10.00;<b>max</b>:1,000.00",
                                "#txt_testdate"   : function(){
                                                        var date1=new Date();
                                                        var date2=new Date();
                                                        date2.setDate(date1.getDate()+Number(6));
                                                        return "<b>format</b>:yyyy年MM月dd日;<b>required</b>:true;<b>display-name</b>:测试日期;"
                                                               +"<b>min</b>:"+efw.server.format.formatDate(date1,"yyyy年MM月dd日")+";"
                                                               +"<b>max</b>:"+efw.server.format.formatDate(date2,"yyyy年MM月dd日")+";" ;
                                                    },
                                ... 
                            };

</pre>
<DL>
<DD>
为了自动进行单纯输入校验，在paramsFormat里定义校验样式。<br>
详细内容参照event.paramsFormat.checkStyle的API。
</DL></DD>
<HR>

<H3><A NAME="efw.event.workCheck">业务校验</A></H3>
<pre>
    return {error:{...}};
</pre>
<DL>
<DD>
如果业务校验发现错误，事件处理中返回error对象。详细内容参照event.fire.error的API。<br>
如果想要管理业务校验错误信息，可以定制化efw.client.messages.js或efw.server.messages.js文件。

</DL></DD>
<HR>

<H3><A NAME="efw.event.include">执行子事件</A></H3>
<pre>
    form1_event1.include = [ { eventId : "form1_event2" } ];
    ...
    var retsub = form1_event2.fire( { ... } );
    ret = ret.concat( retsub );
</pre>
<DL>
<DD>
如果想在主事件里执行子事件，需要定义include属性。<br>
如果想要把子事件的paramsFormat加入主事件里，可以利用include的mergeParamsFormat。详细内容参照event.include的API。<br>
主事件和子事件的执行结果，可以用数组结合的方式连接。详细内容参照event.fire.eventResult的API。
</DL></DD>
<HR>

<H3><A NAME="efw.event.fire">事件的数据传递</A></H3>
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
事件的数据传递记述是在服务端js文件，而不是客户端js文件。<br>
詳細内容参照efw.client.fire的API。
</DL></DD>
<HR>

<H3><A NAME="efw.jsp.event">事务处理管理</A></H3>
<pre>
</pre>
<DL>
<DD>
每次执行event.fire时，进行事务处理。<br>
如果事件的fire成功的话，事务处理执行commit。如果失败的话，事务处理执行rollback。<br>
詳細内容参照efw.server.prepare和efw.server.finish的API。<br>
事务处理的定制化可以在efw.server.customize.js里进行。
</DL></DD>