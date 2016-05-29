<a href="../api_list.md">戻る</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/api_list/efw.server.event.md">日本語</a>
&nbsp;<a href="../../中文/api_list/efw.server.event.md">中文</a>
&nbsp;<a href="../../English/api_list/efw.server.event.md">English</a>
<H2>eventの詳細</H2>

<H3><A NAME="event">event</A></H3>
<pre>
WEB-INF/efw/event/myEvent.js
----------
var myEvent          = { };                                                     //イベントのオブジェクト、必須。
myEvent.<A href="#outOfLogin">outOfLogin</A>   = true;                                                    //ログインチェック不要フラグ、オプション。
myEvent.<A href="#include">include</A>      = [                                                        //インクルード、オプション、複数のサブイベントを含める。
                           {                                                    //サブイベント。
                             <A href="efw.client.md#eventId">eventId</A>           : "anotherEvent",                //イベントId、サブイベントにとって必須、eventParams.eventIdを参照。
                             <A href="#mergeParamsFormat">mergeParamsFormat</A> : true,                          //サブとメインのパラメーターフォーマットをマージするフラグ、オプション。
                            }, 
                       ];
myEvent.<A href="#paramsFormat">paramsFormat</A> = {                                                        //パラメーターフォーマット、必須、以下種類の要素の組合せ。
                             selector1 : null,                                  //入力チェックなしの選択キー。選択キーの規則はJQueryを参照。
                             selector2 : "<A href="#checkStyle">checkStyle</A>",                          //チェックスタイルの選択キー。
                             selector3 : function(){ return "<A href="#checkStyle">checkStyle</A>"; },    //チェックスタイルの選択キー。イベントには関数で作成する可。
                           { selector4 : ... , },                               //サブフォーマット。パラメーターフォーマットと同じ種類の要素の組合せ。
                         [ { selector5 : ... , } ],                             //サブフォーマットの配列。１種類のサブフォーマットのみを格納する。
                       };
myEvent.<A href="#fire">fire</A> = function ( <A href="#requestParams">requestParams</A> ) {                                     //イベント実行関数、必須。
	                                     return <A href="#eventResult">eventResult</A>;                                                     //イベント実行結果。
}
</PRE>
<DL><DD>イベント。同名のサーバーサイドJavascriptファイルで実装する。
</DL></DD>
<HR>

<H3><A NAME="outOfLogin">outOfLogin</A></H3>
<pre>
myEvent.outOfLogin = true;
</PRE>
<DL><DD>ログインチェック不要フラグ。<br>
未設定の場合、ログインチェック要と見なし、未ログイン時 SessionTimeoutException エラーが発生する。<br>
該当機能は、カスタマイズ用 <A href="#efw.server.prepare">prepare</A> 関数に実装される。
</DL></DD>
<HR>

<H3><A NAME="include">include</A></H3>
<pre>
myEvent.include = [
            {                                                                   //サブイベント。
              <A href="efw.client.md#eventId">eventId</A>           : "anotherEvent",                               //イベントId、サブイベントにとって必須、eventParams.eventIdを参照。
              <A href="#mergeParamsFormat">mergeParamsFormat</A> : true,                                         //サブとメインのパラメーターフォーマットをマージするフラグ、オプション。
            }, 
          ];
</PRE>
<DL><DD>インクルード。<br>
ひとつのイベント（メイン）に他のイベント（サブ）を実行したい場合、メインの中にサブをインクルードと定義する。<br>
複数のサブをインクルードできる。

</DL></DD>
<HR>

<H3><A NAME="mergeParamsFormat">mergeParamsFormat</A></H3>
<pre>
mergeParamsFormat : true,
</PRE>
<DL><DD>サブとメインのパラメーターフォーマットをマージするフラグ。<br>
未設定の場合、サブイベントに必要なパラメータは、メインイベントにも定義する必要、または、サブを呼び出す時プログラムで渡す必要。<br>
定義される場合、メインイベントの <A href="#requestParams">requestParams</A> にサブイベントの必要なパラメータも含む。

</DL></DD>
<HR>

<H3><A NAME="paramsFormat">paramsFormat</A></H3>
<pre>
myEvent.paramsFormat = {
                     selector1 : null,                                          //入力チェックなしの選択キー。選択キーの規則はJQueryを参照。
                     selector2 : "<A href="#checkStyle">checkStyle</A>",                                  //チェックスタイルの選択キー。
                     selector3 : function(){ return "<A href="#checkStyle">checkStyle</A>"; },            //チェックスタイルの選択キー。イベントには関数で作成する可。
                   { selector4 : ... , },                                       //サブフォーマット。パラメーターフォーマットと同じ種類の要素の組合せ。
                 [ { selector5 : ... , } ],                                     //サブフォーマットの配列。１種類のサブフォーマットのみを格納する。
             };
</PRE>
<DL><DD>パラメーターフォーマット。<br>
選択キー、選択キー組合せのサブフォーマット、またその配列で、定義される。<br>
パラメーターフォーマットによりイベント実行時、表のように、<A href="#requestParams">requestParams</A> が自動的に作成される。<br>

<table>
<tr>
	<th>属性種類</th>
	<th>用途</th>
	<th>正常ケース</th>
	<th>異常ケース</th>
</tr>
<tr>
	<td>selector : null</td>
	<td>単独な入力データを識別する。</td>
	<td>属性名称をセレクタとしてHTMLタグを１つ取得する。<br>タグのvalue，textなどの属性は入力データと利用する。</td>
	<td>タグを複数取得する場合エラー。</td>
</tr>
<tr>
	<td>selector : "<A href="#checkStyle">checkStyle</A>"</td>
	<td>単独な入力データを識別する。</td>
	<td>checkStyleに満足する場合、属性名称をセレクタとしてHTMLタグを１つ取得する。<br>タグのvalue，textなどの属性は入力データと利用する。<br>
	checkStyle で数字・日付の format の場合、数字・日付に変換してから取得する。
	</td>
	<td>タグを複数取得する場合エラー。<br>
	checkStyle に満足できない場合エラー。
	</td>
</tr>
<tr>
	<td>selector : function(){ return "<A href="#checkStyle">checkStyle</A>"; } </td>
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

<H3><A NAME="checkStyle">checkStyle</A></H3>
<pre>
selector : "required:true; format:###,##0;display-name:登録日;max-length:10;min:0,max:9,999;" , //チェックスタイル。
</PRE>
<DL><DD>チェックスタイル。<br>
クライアントで入力された値に対して、いくつかの単純チェックを自動的に行うため、チェックスタイルを設ける。<br>
エラーがある場合、複数のエラーメッセージをまとめて <A href="#error">error</A> でクライアントに送信する。
<table>
<tr>
	<th>属性</th>
	<th>属性名</th>
	<th>正常ケース</th>
	<th>異常ケース</th>
</tr>
<tr>
	<td><a name="required">required</a> : true</td>
	<td>必須入力</td>
	<td>取得された値が空白ではない場合、正しい。</td>
	<td>空白の場合、IsRequiredMessage エラー。</td>
</tr>
<tr>
	<td><a name="format">format</a> : <br>
	<DD>定義方法は <a href="efw.server.format.md#formatter">formatter</a> を参照</DD>
	</td>
	<td>フォーマット</td>
	<td>取得された値がフォーマットに合う場合、正しい。</td>
	<td>合わないの場合、<br>
	NumberIsReuqiredMessage エラー。
	DateIsReuqiredMessage エラー。
	</td>
</tr>
<tr>
	<td><a name="display-name">display-name</a> : "表示名"</td>
	<td>表示名</td>
	<td>－</td>
	<td>エラーメッセージに代入するエラー項目の名前。</td>
</tr>
<tr>
	<td><a name="max-length">max-length</a> : 文字数</td>
	<td>最大サイズ</td>
	<td>入力値のサイズは最大サイズ以内の場合、正しい。</td>
	<td>オーバーの場合、MaxLengthOverMessage エラー。</td>
</tr>
<tr>
	<td><a name="min">min</a> : <br>
	<DD>formatに従う文字列</DD>
	</td>
	<td>最小値</td>
	<td>入力値は最小値より大きい場合、正しい。</td>
	<td>小さい場合、<br>
	MinOrMaxOverMessage エラー。<br>
	MinOverMessage エラー。<br>
	</td>
</tr>
<tr>
	<td><a name="max">max</a> : <br>
	<DD>formatに従う文字列</DD>
	</td>
	<td>最大値</td>
	<td>入力値は最大値より小さい場合、正しい。</td>
	<td>大きい場合、<br>
	MinOrMaxOverMessage エラー。<br>
	MaxOverMessage エラー。<br>
	</td>
</tr>

</table>

</DL></DD>
<HR>

<H3><A NAME="fire">fire</A></H3>
<pre>
myEvent.fire = function( <a href="#requestParams">requestParams</a> ){
    return <a href="#eventResult">eventResult</a>;
};
</PRE>
<DL><DD>イベントの実行関数。<br>
メインイベントとサブイベントは、同じトランザクションに管理される。Exception発生の場合、自動的にロールバック。エラーなし場合、自動的にコミット。<br>
<P>
<DD><DL>
<DT><B>戻り値:</B>
<DD><CODE><A href="#eventResult">eventResult</A></CODE> - イベント実行成功の場合、イベント実行結果。
<DD><CODE><A href="#error">error</A></CODE> - 失敗の場合、エラーオブジェクト。
</DL></DD>
<DD><DL>
<DT><B>パラメータ:</B>
<DD><CODE><A href="#requestParams">requestParams</A></CODE> - リクエストパラメーター、必須。
</DL></DD>
</DL></DD>
<HR>


<H3><A NAME="requestParams">requestParams</A></H3>
<pre>
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

<H3><A NAME="eventResult">eventResult</A></H3>
<pre>
var ret = [                                                                     //イベント実行結果、複数の表示結果を含める。
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
                                                                                //追加内容のマスク、オプション。
                  append   : "&lt;tr&gt;&lt;td&gt;&lt;input value='{maskKey1}'&gt;&lt;/td&gt;&lt;td&gt;&lt;span&gt;{{maskKey2}}&lt;/span&gt;&lt;/td&gt;&lt;/tr&gt;" ,
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
ret = ret.concat(subEvent.fire(requestParams));                                 //メインイベントとサブイベントの実行結果は、配列結合で連結。
</PRE>
<DL><DD>イベント実行結果。<br>
イベントの実行結果をクライアントに渡すため。<br>
<table>
<tr>
	<th>属性</th>
	<th>属性名</th>
	<th>説明</th>
</tr>
<tr>
	<td><a name="runat">runat</a> : selector</td>
	<td>表示場所、オプション。</td>
	<td>属性値をセレクタとして、HTMLタグを取得する。そのタグは出力定義の他の属性処理時のコンテキストとする。
	定義されない場合、"body"とみなす。
	</td>
</tr>
<tr>
	<td><a name="withdata">withdata</a> : {}</td>
	<td>表示データ、オプション。</td>
	<td>runatの範囲にいくつの個別タグとマッピングするセレクタと値のセットを格納する。タグのvalueあるいはtextを値で置換する。</td>
</tr>
<tr>
	<td><a name="remove">remove</a> : selector</td>
	<td>削除内容、オプション。</td>
	<td>runatの範囲に属性値をセレクタとして、複数のタグを取得する。取得するタグを削除する。</td>
</tr>
<tr>
	<td><a name="append">append</a> : ""</td>
	<td>htmlマスク、オプション。</td>
	<td>runatの範囲に配列のwithdata件数毎にhtmlマスクの置換項目を置換して画面パーツとして、runatの後ろに追加する。
	HTMLエンコード処理をしたい場合、{maskKey} で書く。したくない場合、{{maskKey}}で書く。</td>
</tr>
<tr>
	<td><a name="withdata">withdata</a> : [{}]</td>
	<td>表示データ、オプション。</td>
	<td>appendと連携する。htmlマスクの置換項目と値のセットの配列を格納する。</td>
</tr>
</table>

</DL></DD>
<HR>


<H3><A NAME="download">download</A></H3>
<pre>
return {
            "download" : {
                file                : "filePathName"                            //単独ファイル。
                zip                 : ["filePathName1","filePathName2",...],    //複数ファイル。
                saveas              : "filename",                               //保存名称。
                deleteafterdownload : true/false,                               //ダウンロード後元ファイル削除フラグ。
            }
       };
</PRE>
<DL><DD>ダウンロードオブジェクト。<br>
ファイルをダウンロードするためのイベント戻り値。<br>
<table>
<tr>
	<th>属性</th>
	<th>属性の名称</th>
	<th>説明</th>
</tr>
<tr>
	<td><a name="file">file</a></td>
	<td>ダウンロード対象の単独ファイル、オプション。</td>
	<td>単独ファイルをダウンロードする場合利用する。fileとzipはどちらひとつを設定する必要。</td>
</tr>
<tr>
	<td><a name="zip">zip</a></td>
	<td>圧縮対象の複数ファイル、オプション。</td>
	<td>複数ファイルをダウンロードする場合利用する。fileとzipはどちらひとつを設定する必要。</td>
</tr>
<tr>
	<td><a name="saveas">saveas</a></td>
	<td>保存名称、オプション。</td>
	<td>ファイル保存時のファイル名。設定しない場合元ファイル名が利用される。</td>
</tr>
<tr>
	<td><a name="deleteafterdownload">deleteafterdownload</a></td>
	<td>ダウンロード後元ファイル削除フラグ、オプション。</td>
	<td>ダウンロードした後、元ファイルを削除するか否かのフラグ。デフォルトはfalse。</td>
</tr>
</table>

</DL></DD>


<H3><A NAME="error">error</A></H3>
<pre>
return { 
            error : {
                        errorType      : "XXXXX",                               //エラータイプ。
                        errorMessage   : "任意のエラーメッセージ内容",          //エラーメッセージ。
                        focusTo        : "selector1",                           //カーソル位置、オプション。
                        elements       : "selector1,selector2,...",             //複数のエラー項目、オプション。
                        canNotContinue : true,                                  //継続処理不可フラグ、オプション。
                    }
       };
</PRE>
<DL><DD>エラーオブジェクト。<br>
イベントの実行エラーをクライアントに渡すため。<br>
<table>
<tr>
	<th>属性</th>
	<th>属性の名称</th>
	<th>説明</th>
</tr>
<tr>
	<td><a name="errorType">errorType</a></td>
	<td>エラータイプ、オプション。</td>
	<td>efw.client.messagesに定義されたメッセージを利用したい場合、そのIdを設定する。</td>
</tr>
<tr>
	<td><a name="errorMessage">errorMessage</a></td>
	<td>エラーメッセージ、オプション。</td>
	<td>errorTypeが未定義の場合必須になる。「\n」区切りで複数メッセージ可。</td>
</tr>
<tr>
	<td><a name="focusTo">focusTo</a></td>
	<td>カーソル位置、オプション。</td>
	<td>アラートを閉じた後のカーソル位置を定義する。オプション。</td>
</tr>
<tr>
	<td><a name="elements">elements</a></td>
	<td>複数のエラー項目、オプション。</td>
	<td>エラー項目を定義する。アラートを閉じた後、背景色などでエラー項目を表示する。オプション。「,」区切りで複数エラー項目可。</td>
</tr>
<tr>
	<td><a name="canNotContinue">canNotContinue</a></td>
	<td>継続処理不可フラグ、オプション。</td>
	<td>true と設定される場合、アラートの後灰色のマスクを解除しない。オプション。</td>
</tr>
</table>

</DL></DD>

