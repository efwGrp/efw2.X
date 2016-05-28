<H2>efw Javascript API</H2>
	
<TABLE BORDER="1" WIDTH="100%" CELLPADDING="3" CELLSPACING="0" SUMMARY="">
	<TR BGCOLOR="#CCCCFF" CLASS="TableHeadingColor">
		<TH ALIGN="left" COLSPAN="1"><FONT SIZE="+2"><B>APIの一覧</B></FONT></TH>
	</TR>
</TABLE>

<pre>efw
├─<a href="api_list/efw.client.md">client</a>
│  ├─<a href="api_list/efw.client.md#fire">fire</a> ( <a href="api_list/efw.client.md#eventParams">eventParams</a> )                             //クライアントからサーバイベントを実行する関数
│  │         ├─<a href="api_list/efw.client.md#server">server</a>                                 //イベントパラメータの サーバURL
│  │         ├─<a href="api_list/efw.client.md#eventId">eventId</a>                                //                   イベントId
│  │         ├─<a href="api_list/efw.client.md#manualParams">manualParams</a>                           //                   手動パラメータ
│  │         └─<a href="api_list/efw.client.md#success">success</a> ( <a href="api_list/app.event.md#eventResult">eventResult</a> )                //                   成功コールバック関数
│  ├─<a href="api_list/efw.client.md#pickup">pickup</a> ( <a href="api_list/app.event.md#paramsFormat">paramsFormat</a> , <a href="api_list/efw.client.md#manualParams">manualParams</a> )           //パラメータ値を取得する関数（fire関数機能の一部分）
│  ├─<a href="api_list/efw.client.md#show">show</a> ( <a href="api_list/app.event.md#eventResult">eventResult</a> )                             //値を画面に表示する関数（fire関数機能の一部分）
│  ├─<a href="api_list/efw.client.md#alert">alert</a> ( message , callback )                     //クライアントでアラートメッセージを表示する関数
│  └─format
│      └─...                                          //後続のefw.server.formatとほぼ同じ機能、その説明をご参照。
└─server
    ├─prepare ( <a href="api_list/app.event.md">event</a> , <a href="api_list/app.event.md#requestParams">requestParams</a> )               //サーバイベントの準備処理関数、サーバ処理カスタマイズ用
    │            ├─<a href="api_list/app.event.md#outOfLogin">outOfLogin</a>                         //イベントの ログインチェック不要フラグ
    │            ├─<a href="api_list/app.event.md#include">include</a>                            //          サブイベントを取り込むためのインクルード
    │            │  ├─<a href="api_list/efw.client.md#eventId">eventId</a>                         //          サブイベントId
    │            │  └─<a href="api_list/app.event.md#mergeParamsFormat">mergeParamsFormat</a>               //          サブとメインのパラメータフォーマットをマージするフラグ
    │            ├─<a href="api_list/app.event.md#paramsFormat">paramsFormat</a>                       //★★★
    │            │  └─<a href="api_list/app.event.md#checkStyle">checkStyle</a>                      //★★★
    │            └─<a href="api_list/app.event.md#fire">fire</a> ( <a href="api_list/app.event.md#requestParams">requestParams</a> )                              //★★★
    │               ├─<a href="api_list/app.event.md#eventResult">eventResult</a>                     //★★★
    │               │     ├─runat                     //                   イベント実行結果の 表示場所
    │               │     ├─withdata                  //                                     表示データ
    │               │     ├─remove                    //                                     削除内容
    │               │     └─append                    //                                     htmlマスク
    │               └─<a href="api_list/app.event.md#error">error</a>                           //★★★
    ├─finish ( <a href="api_list/app.event.md">event</a> , <a href="api_list/app.event.md#requestParams">requestParams</a> , <a href="api_list/app.event.md#eventResult">eventResult</a> )  //サーバイベントの後処理関数、サーバ処理カスタマイズ用
    ├─<a href="api_list/efw.server.format.md">format</a>
    │  ├─<a href="api_list/efw.server.format.md#formatNumber">formatNumber</a> ( value , <a href="api_list/efw.server.format.md#formatter">formatter</a> , <a href="api_list/efw.server.format.md#rounder">rounder</a> ) //数字値を指定フォーマットにより文字列に変換する関数
    │  ├─<a href="api_list/efw.server.format.md#parseNumber">parseNumber</a> ( value , <a href="api_list/efw.server.format.md#formatter">formatter</a> )            //文字列値を指定フォーマットにより数字に変換する関数
    │  ├─<a href="api_list/efw.server.format.md#formatDate">formatDate</a> ( value , <a href="api_list/efw.server.format.md#formatter">formatter</a> )             //日付値を指定フォーマットにより文字列に変換する関数
    │  └─<a href="api_list/efw.server.format.md#parseDate">parseDate</a> ( value , <a href="api_list/efw.server.format.md#formatter">formatter</a> )              //文字列値を指定フォーマットにより日付に変換する関数
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
       │              ├─<a href="api_list/efw.server.db.md#jdbcResourceName">jdbcResourceName</a>              //SQL実行用パラメータの jdbcのリソース名
       │              ├─<a href="api_list/efw.server.db.md#groupId">groupId</a>                       //                     sqlXMLファイル名
       │              ├─<a href="api_list/efw.server.db.md#sqlId">sqlId</a>                         //                     SQLのId
       │              ├─<a href="api_list/efw.server.db.md#params">params</a>                        //                     SQLパラメータ
       │              └─<a href="api_list/efw.server.db.md#mapping">mapping</a>                       //                     マッピング
       ├─<a href="api_list/efw.server.db.md#executeQuery">executeQuery</a> ( <a href="api_list/efw.server.db.md#executionParams">executionParams</a> )             //SELECT文を実行する関数
       ├─<a href="api_list/efw.server.db.md#executeUpdate">executeUpdate</a> ( <a href="api_list/efw.server.db.md#executionParams">executionParams</a> )            //INSERT文、UPDATE文、DELETE文を実行する関数
       ├─<a href="api_list/efw.server.db.md#execute">execute</a> ( <a href="api_list/efw.server.db.md#jdbcResourceName">executionParams</a> )                  //任意のSQL文を実行する関数
       ├─<a href="api_list/efw.server.db.md#commit">commit</a> ( <a href="api_list/efw.server.db.md#jdbcResourceName">jdbcResourceName</a> )                  //データベースへの更新を有効とする関数
       ├─<a href="api_list/efw.server.db.md#rollback">rollback</a> ( <a href="api_list/efw.server.db.md#jdbcResourceName">jdbcResourceName</a> )                //データベースへの更新を無効とする関数
       └─<a href="api_list/efw.server.db.md#closeAll">closeAll</a> ( )                                 //すべてのデータベース接続をコミットして閉じる関数

</pre>
