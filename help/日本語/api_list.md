<H2>efw Javascript API</H2>
	
<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>APIの一覧</B></FONT></TH>
	</TR>
</TABLE>

<pre>efw
├─<a href="#efw.client">client</a>
│  ├─fire ( <a href="#efw.eventParams">eventParams</a> )                             //クライアントからサーバイベントを実行する関数
│  │         ├─server                                 //イベントパラメータの サーバURL
│  │         ├─eventId                                //                   イベントId
│  │         ├─manualParams                           //                   手動パラメータ
│  │         └─success ( <a href="#efw.event.fire.eventResult">eventResult</a> )                //                   成功コールバック関数
│  │                      ├─runat                     //                   イベント実行結果の 表示場所
│  │                      ├─withdata                  //                                     表示データ
│  │                      ├─remove                    //                                     削除内容
│  │                      └─append                    //                                     htmlマスク
│  ├─alert ( message , callback )                     //クライアントでアラートメッセージを表示する関数
│  └─format
│      └─...                                          //後続のefw.server.formatとほぼ同じ機能、その説明をご参照。
└─server
    ├─<a href="#efw.server.prepare">prepare</a> ( <a href="#efw.event">event</a> , <a href="#efw.event.fire.requestParams">requestParams</a> )               //サーバイベントの準備処理関数
    │            ├─outOfLogin                         //イベントの ログインチェック不要フラグ
    │            ├─include                            //          サブイベントを取り込むためのインクルード
    │            │  ├─eventId                         //          サブイベントId
    │            │  └─mergeParamsFormat               //          サブとメインのパラメータフォーマットをマージするフラグ
    │            ├─paramsFormat                       //★★★
    │            │  └─checkStyle                      //★★★
    │            └─<a href="#efw.event.fire">fire</a> ( <a href="#efw.event.fire.requestParams">requestParams</a> )                              //★★★
    │               ├─<a href="#efw.event.fire.eventResult">eventResult</a>                     //★★★
    │               └─<a href="#efw.event.fire.error">error</a>                           //★★★
    ├─<a href="#efw.server.finish">finish</a> ( <a href="#efw.event">event</a> , <a href="#efw.event.fire.requestParams">requestParams</a> , <a href="#efw.event.fire.eventResult">eventResult</a> )  //★
    ├─<a href="#efw.server.format">format</a>
    │  ├─formatNumber ( value , formatter , rounder )                         ★★
    │  ├─parseNumber ( value , formatter )                                    ★★
    │  ├─formatDate ( value , formatter )                                     ★★
    │  └─parseDate ( value , formatter )                                      ★★
    ├─properties
    │  ├─<a href="#efw.server.properties.get">get</a> ( key , defaultValue )                                          ★★
    │  ├─<a href="#efw.server.properties.getBoolean">getBoolean</a> ( key , defaultValue )                                   ★★
    │  └─<a href="#efw.server.properties.getInt">getInt</a> ( key , defaultValue )                                       ★★
    ├─<a href="api_list/efw.server.session.md">session</a>
    │  ├─get ( key )                                                         ★★
    │  └─set ( key , value )                                                 ★★
    └─<a href="api_list/efw.server.db.md">db</a>
        ├─open ( jdbcResourceName )                                           ★
        ├─getSingle ( executionParams )                                       ★★★
        ├─executeQuery ( executionParams )                                    ★★★
        ├─executeUpdate ( executionParams )                                   ★★
        ├─execute( executionParams )                                          ★★★
        ├─commit ( jdbcResourceName )                                         ★
        ├─rollback ( jdbcResourceName )                                       ★
        └─closeAll ( )                                                        ★

</pre>
