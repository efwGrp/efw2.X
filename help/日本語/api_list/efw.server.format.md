<a href="../api_list.md">戻る</a>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="../../日本語/api_list/efw.server.format.md">日本語</a>
&nbsp;<a href="../../中文/api_list/efw.server.format.md">中文</a>
&nbsp;<a href="../../English/api_list/efw.server.format.md">English</a>
<H2>efw.server.formatの詳細</H2>

<H3><A NAME="formatNumber">formatNumber</A></H3>
<pre>
formatNumber (value , <A href="#formatter">formatter</A> , <A href="#rounder">rounder</A> )</PRE>
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
<DD><CODE><A href="#formatter">formatter</A></CODE> - フォーマット定義、必須。
<DD><CODE><A href="#rounder">rounder</A></CODE> - 丸み方法、オプション。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="parseNumber">parseNumber</A></H3>
<pre>
parseNumber ( value , <A href="#formatter">formatter</A> )</PRE>
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
<DD><CODE><A href="#formatter">formatter</A></CODE> - フォーマット定義、必須。
</DL></DD>
</DL></DD>
<HR>


<H3><A NAME="formatDate">formatDate</A></H3>
<pre>
formatDate ( value , <A href="#formatter">formatter</A> )</PRE>
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
<DD><CODE><A href="#formatter">formatter</A></CODE> - フォーマット定義、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="parseDate">parseDate</A></H3>
<pre>
parseDate ( value , <A href="#formatter">formatter</A> )</PRE>
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
<DD><CODE><A href="#formatter">formatter</A></CODE> - フォーマット定義、必須。
</DL></DD>
</DL></DD>
<HR>

<H3><A NAME="formatter">formatter</A></H3>
<pre>
formatter = "フォーマット定義";
</PRE>
<DL><DD>フォーマット定義。<br>
数字の場合利用できるシンボルは表にリストする。java.text.DecimalFormatを参考。<br>
<table>
<tr>
	<th>シンボル</th>
	<th>説明</th>
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
<table>
<tr>
	<th>シンボル</th>
	<th>説明</th>
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

<H3><A NAME="rounder">rounder</A></H3>
<pre>
rounder = "丸みタイプ";
</PRE>
<DL><DD>丸みタイプ。<br>
数字フォーマット時の丸みを設定する。設定できる値は、表にリストする。java.math.RoundingModeを参考。
<br>
<table>
<tr>
	<th rowspan=2>丸みタイプ</th>
	<th rowspan=2>説明</th>
	<th colspan=10>例</th>
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