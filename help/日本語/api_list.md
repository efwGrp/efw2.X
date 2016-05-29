&nbsp;&nbsp;&nbsp;&nbsp;<a href="../日本語/api_list.md">日本語</a>
&nbsp;<a href="../中文/api_list.md">中文</a>
&nbsp;<a href="../English/api_list.md">English</a>
<H1>efw Javascript API</H1>
<pre>efw
├─client
│  ├─<a href="api_list/efw.client.md#fire">fire</a> ( <a href="api_list/efw.client.md#eventParams">eventParams</a> )                             //クライアントからサーバイベントを実行する関数
│  │         ├─<a href="api_list/efw.client.md#server">server</a>                                 //    サーバURL
│  │         ├─<a href="api_list/efw.client.md#eventId">eventId</a>                                //    イベントId
│  │         ├─<a href="api_list/efw.client.md#manualParams">manualParams</a>                           //    手動パラメータ
│  │         └─<a href="api_list/efw.client.md#success">success</a> ( <a href="api_list/app.event.md#eventResult">eventResult</a> )                //    成功コールバック関数
│  ├─<a href="api_list/efw.client.md#pickup">pickup</a> ( <a href="api_list/app.event.md#paramsFormat">paramsFormat</a> , <a href="api_list/efw.client.md#manualParams">manualParams</a> )           //パラメータ値を取得する関数（fire関数機能の一部分）
│  ├─<a href="api_list/efw.client.md#show">show</a> ( <a href="api_list/app.event.md#eventResult">eventResult</a> )                             //値を画面に表示する関数（fire関数機能の一部分）
│  ├─<a href="api_list/efw.client.md#alert">alert</a> ( message , callback )                     //クライアントでアラートメッセージを表示する関数
│  └─format
│      └─...                                          //後続のefw.server.formatとほぼ同じ機能、その説明をご参照。
└─server
    ├─prepare ( <a href="api_list/app.event.md">event</a> , <a href="api_list/app.event.md#requestParams">requestParams</a> )               //サーバイベントの準備処理関数、サーバ処理カスタマイズ用
    │            ├─<a href="api_list/app.event.md#outOfLogin">outOfLogin</a>                         //ログインチェック不要フラグ
    │            ├─<a href="api_list/app.event.md#include">include</a>                            //サブイベントを取り込むためのインクルード
    │            │  ├─<a href="api_list/efw.client.md#eventId">eventId</a>                         //    サブイベントId
    │            │  └─<a href="api_list/app.event.md#mergeParamsFormat">mergeParamsFormat</a>               //    サブとメインのパラメータフォーマットをマージするフラグ
    │            ├─<a href="api_list/app.event.md#paramsFormat">paramsFormat</a>                       //パラメーターフォーマット
    │            │  └─<a href="api_list/app.event.md#checkStyle">checkStyle</a>                      //チェックスタイル
    │            │     ├─<a href="api_list/app.event.md#required">required</a>                     //    必須入力
    │            │     ├─<a href="api_list/app.event.md#format">format</a>                       //    フォーマット
    │            │     ├─<a href="api_list/app.event.md#display-name">display-name</a>                 //    表示名
    │            │     ├─<a href="api_list/app.event.md#max-length">max-length</a>                   //    最大サイズ
    │            │     ├─<a href="api_list/app.event.md#min">min</a>                          //    最小値
    │            │     └─<a href="api_list/app.event.md#max">max</a>                          //    最大値
    │            └─<a href="api_list/app.event.md#fire">fire</a> ( <a href="api_list/app.event.md#requestParams">requestParams</a> )             //イベント実行関数
    │               ├─<a href="api_list/app.event.md#eventResult">eventResult</a>                     //イベント実行結果
    │               │  ├─<a href="api_list/app.event.md#runat">runat</a>                        //    表示場所
    │               │  ├─<a href="api_list/app.event.md#withdata">withdata</a>                     //    表示データ
    │               │  ├─<a href="api_list/app.event.md#remove">remove</a>                       //    削除内容
    │               │  └─<a href="api_list/app.event.md#append">append</a>                       //    htmlマスク
    │               ├─<a href="api_list/app.event.md#download">download</a>                        //ダウンロード
    │               │  ├─<a href="api_list/app.event.md#file">file</a>                         //    単独ファイル
    │               │  ├─<a href="api_list/app.event.md#zip">zip</a>                          //    複数ファイル
    │               │  ├─<a href="api_list/app.event.md#saveas">saveas</a>                       //    保存名称
    │               │  └─<a href="api_list/app.event.md#deleteafterdownload">deleteafterdownload</a>          //    ダウンロード後元ファイル削除フラグ
    │               └─<a href="api_list/app.event.md#error">error</a>                           //エラーオブジェクト
    │                   ├─<a href="api_list/app.event.md#errorType">errorType</a>                   //    エラータイプ
    │                   ├─<a href="api_list/app.event.md#errorMessage">errorMessage</a>                //    エラーメッセージ
    │                   ├─<a href="api_list/app.event.md#focusTo">focusTo</a>                     //    カーソル位置
    │                   ├─<a href="api_list/app.event.md#elements">elements</a>                    //    複数のエラー項目
    │                   └─<a href="api_list/app.event.md#canNotContinue">canNotContinue</a>              //    継続処理不可フラグ
    ├─finish ( <a href="api_list/app.event.md">event</a> , <a href="api_list/app.event.md#requestParams">requestParams</a> , <a href="api_list/app.event.md#eventResult">eventResult</a> )  //サーバイベントの後処理関数、サーバ処理カスタマイズ用
    ├─format
    │  ├─<a href="api_list/efw.server.format.md#formatNumber">formatNumber</a> ( value , <a href="api_list/efw.server.format.md#formatter">formatter</a> , <a href="api_list/efw.server.format.md#rounder">rounder</a> ) //数字値を指定フォーマットにより文字列に変換する関数
    │  ├─<a href="api_list/efw.server.format.md#parseNumber">parseNumber</a> ( value , <a href="api_list/efw.server.format.md#formatter">formatter</a> )            //文字列値を指定フォーマットにより数字に変換する関数
    │  ├─<a href="api_list/efw.server.format.md#formatDate">formatDate</a> ( value , <a href="api_list/efw.server.format.md#formatter">formatter</a> )             //日付値を指定フォーマットにより文字列に変換する関数
    │  └─<a href="api_list/efw.server.format.md#parseDate">parseDate</a> ( value , <a href="api_list/efw.server.format.md#formatter">formatter</a> )              //文字列値を指定フォーマットにより日付に変換する関数
    ├─properties
    │  ├─<a href="api_list/efw.server.properties.md#get">get</a> ( key , defaultValue )                   //文字列のプロパティを取得する関数
    │  ├─<a href="api_list/efw.server.properties.md#getBoolean">getBoolean</a> ( key , defaultValue )            //ブルーのプロパティを取得する関数
    │  └─<a href="api_list/efw.server.properties.md#getInt">getInt</a> ( key , defaultValue )                //数字のプロパティを取得する関数
    ├─session
    │  ├─<a href="api_list/efw.server.session.md#get">get</a> ( key )                                  //セッションから情報を取得する関数
    │  └─<a href="api_list/efw.server.session.md#set">set</a> ( key , value )                          //セッションに情報を格納する関数
    └─db
       ├─<a href="api_list/efw.server.db.md#open">open</a> ( <a href="api_list/efw.server.db.md#jdbcResourceName">jdbcResourceName</a> )                    //データベース接続を開く関数
       ├─<a href="api_list/efw.server.db.md#getSingle">getSingle</a> ( <a href="api_list/efw.server.db.md#executionParams">executionParams</a> )                //SELECT文を実行して１つ目のデータを戻す関数
       │              ├─<a href="api_list/efw.server.db.md#jdbcResourceName">jdbcResourceName</a>              //    jdbcのリソース名
       │              ├─<a href="api_list/efw.server.db.md#groupId">groupId</a>                       //    SQLのグループId
       │              ├─<a href="api_list/efw.server.db.md#sqlId">sqlId</a>                         //    SQLのId
       │              ├─<a href="api_list/efw.server.db.md#params">params</a>                        //    SQLパラメータ
       │              └─<a href="api_list/efw.server.db.md#mapping">mapping</a>                       //    マッピング
       ├─<a href="api_list/efw.server.db.md#executeQuery">executeQuery</a> ( <a href="api_list/efw.server.db.md#executionParams">executionParams</a> )             //SELECT文を実行する関数
       │   └─<a href="api_list/efw.server.db.md#executionResult">executionResult</a>                           //SQL検索結果
       ├─<a href="api_list/efw.server.db.md#executeUpdate">executeUpdate</a> ( <a href="api_list/efw.server.db.md#executionParams">executionParams</a> )            //INSERT文、UPDATE文、DELETE文を実行する関数
       ├─<a href="api_list/efw.server.db.md#execute">execute</a> ( <a href="api_list/efw.server.db.md#jdbcResourceName">executionParams</a> )                  //任意のSQL文を実行する関数
       ├─<a href="api_list/efw.server.db.md#commit">commit</a> ( <a href="api_list/efw.server.db.md#jdbcResourceName">jdbcResourceName</a> )                  //データベースへの更新を有効とする関数
       ├─<a href="api_list/efw.server.db.md#rollback">rollback</a> ( <a href="api_list/efw.server.db.md#jdbcResourceName">jdbcResourceName</a> )                //データベースへの更新を無効とする関数
       └─<a href="api_list/efw.server.db.md#closeAll">closeAll</a> ( )                                 //すべてのデータベース接続をコミットして閉じる関数

</pre>
