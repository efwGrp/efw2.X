var batch_helloworld={};
batch_helloworld.outOfLogin=true;//必須、falseになるとログインチェックを行うからエラーになる
batch_helloworld.paramsFormat={};//
batch_helloworld.fire=function(params){
	//これは直接SQLを実行するサンプルです。
	var users=efw.server.db.getSingleSql({
		sql:"select count(*) as cnt from 個人情報",
	});
	var cnt=users["cnt"];
	
	return "hello world! user count="+cnt;
};
