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
    ├─prepare ( <a href="#efw.event">event</a> , requestParams )               //サーバイベントの準備処理関数、サーバ処理カスタマイズ用
    │            ├─outOfLogin                         //イベントの ログインチェック不要フラグ
    │            ├─include                            //          サブイベントを取り込むためのインクルード
    │            │  ├─eventId                         //          サブイベントId
    │            │  └─mergeParamsFormat               //          サブとメインのパラメータフォーマットをマージするフラグ
    │            ├─paramsFormat                       //★★★
    │            │  └─checkStyle                      //★★★
    │            └─<a href="#efw.event.fire">fire</a> ( <a href="#efw.event.fire.requestParams">requestParams</a> )                              //★★★
    │               ├─<a href="#efw.event.fire.eventResult">eventResult</a>                     //★★★
    │               └─<a href="#efw.event.fire.error">error</a>                           //★★★
    ├─finish ( event , requestParams , eventResult )  //サーバイベントの後処理関数、サーバ処理カスタマイズ用
    ├─<a href="api_list/efw.server.format.md">format</a>
    │  ├─formatNumber ( value , formatter , rounder ) //数字値を指定フォーマットにより文字列に変換する関数
    │  ├─parseNumber ( value , formatter )            //文字列値を指定フォーマットにより数字に変換する関数
    │  ├─formatDate ( value , formatter )             //日付値を指定フォーマットにより文字列に変換する関数
    │  └─parseDate ( value , formatter )              //文字列値を指定フォーマットにより日付に変換する関数
    ├─<a href="api_list/efw.server.properties.md">properties</a>
    │  ├─<a href="api_list/efw.server.properties.md#get">get</a> ( key , defaultValue )                   //文字列のプロパティを取得する関数
    │  ├─<a href="api_list/efw.server.properties.md#getBoolean">getBoolean</a> ( key , defaultValue )            //ブルーのプロパティを取得する関数
    │  └─<a href="api_list/efw.server.properties.md#getInt">getInt</a> ( key , defaultValue )                //数字のプロパティを取得する関数
    ├─<a href="api_list/efw.server.session.md">session</a>
    │  ├─<a href="api_list/efw.server.session.md#get">get</a> ( key )                                  //セッションから情報を取得する関数
    │  └─<a href="api_list/efw.server.session.md#set">set</a> ( key , value )                          //セッションに情報を格納する関数
    └─<a href="api_list/efw.server.db.md">db</a>
       ├─<a href="api_list/efw.server.db.md#open">open</a> ( <a href="api_list/efw.server.db.md#jdbcResourceName">jdbcResourceName</a> )                    //データベース接続を開く関数
       ├─<a href="api_list/efw.server.db.md#getSingle">getSingle</a> ( <a href="api_list/efw.server.db.md#executionParams">executionParams</a> )                //SELECT文を実行して１つ目のデータを戻す関数
       ├─<a href="api_list/efw.server.db.md#executeQuery">executeQuery</a> ( <a href="api_list/efw.server.db.md#executionParams">executionParams</a> )             //SELECT文を実行する関数
       ├─<a href="api_list/efw.server.db.md#executeUpdate">executeUpdate</a> ( <a href="api_list/efw.server.db.md#executionParams">executionParams</a> )            //INSERT文、UPDATE文、DELETE文を実行する関数
       ├─<a href="api_list/efw.server.db.md#execute">execute</a> ( <a href="api_list/efw.server.db.md#jdbcResourceName">executionParams</a> )                  //任意のSQL文を実行する関数
       ├─<a href="api_list/efw.server.db.md#commit">commit</a> ( <a href="api_list/efw.server.db.md#jdbcResourceName">jdbcResourceName</a> )                  //データベースへの更新を有効とする関数
       ├─<a href="api_list/efw.server.db.md#rollback">rollback</a> ( <a href="api_list/efw.server.db.md#jdbcResourceName">jdbcResourceName</a> )                //データベースへの更新を無効とする関数
       └─<a href="api_list/efw.server.db.md#closeAll">closeAll</a> ( )                                 //すべてのデータベース接続をコミットして閉じる関数

</pre>