<%@ page language="java" contentType="text/html; charsetUTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="efw" uri="efw" %>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>健康診断</title>

	<efw:Core/>
	<efw:JQueryUI/>
	<efw:InputBehavior/>

	<link href="mdclexam.css" rel="stylesheet">
	<script>
		function btnLogin_onclick(){
			efw.client.fire({
//				server:"http://127.0.0.1:8080/efwTest",  //cors　test
				eventId:"mdclexam_login",
				success:function(){
					window.location="mdclexam.jsp";
				}
			});
		}
		function btnClear_onclick(){
			$("#txt_uid").val("");
			$("#txt_pwd").val("");
		}
		
		$(function(){
			$("#btnLogin,#btnClear").button();
		});
  	</script>
</head>
<body style="background-color:ghostwhite;">

<table style="width:100%">
<tr style="height:20px">
	<td></td>
	<td style="width:200px"></td>
	<td style="width:300px"></td>
	<td></td>
</tr>
<tr>
	<td></td>
	<td colspan="2">
	<div class="ui-helper-reset ui-widget-header ui-corner-all mytitle" style="width:500px">健康診断閲覧へようこそ</div>
	<br>
	</td>
	<td></td>
</tr>
<tr>
	<td></td>
	<td style="text-align:right;">アカウント</td><td><input id="txt_uid" type="text"></td>
	<td></td>
</tr>
<tr>
	<td></td>
	<td style="text-align:right">パスワード</td><td><input id="txt_pwd" type="password"></td>
	<td></td>
</tr>
<tr>
	<td></td>
	<td colspan="2" style="text-align:center">
	<p>テストのため、「admin、password」を入力してください。</p>
	<input type="button" value="ログイン" id="btnLogin" onclick="btnLogin_onclick()">
	<input type="button" value="リセット" id="btnClear" onclick="btnClear_onclick()">
	</td>
	<td></td>
</tr>
</table>
<br>
テスト数字<input id="txt_testnumber" type="text" data-format="#,##0.00">-10.00～1,000.00の数字を入力してください。<br>
テスト日付<input id="txt_testdate" type="text" data-format="yyyy年MM月dd日">今日から一週間以内の日付をyyyyMMddで入力してください。<br>


</body>
</html>