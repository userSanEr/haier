/*ajax    请求网络接口的函数封装
options   封装参数的对象
options   请求方式get/post
options.dataType 请求的数据类型json数据*/

function ajax(options){
	//调用函数传递对象
	options=options||{}
	options.type=(options.type || 'GET').toUpperCase();
	options.datatype=options.datatype || "json";
	//定义参数
	var params=formatParams(options.data);
	var xhr;
	//第一步 创建ajax对象
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else if(window.ActiveXObject){
		xhr=new ActiveXObject('MicroSoft.XMLHttp')
	}
	//第二步，第三步：连接服务器，发送请求
	if(options.type=='GET'){
		//open(type,http:www.cc.com?name=lufei&pass=1234,异步请求)
		xhr.open('GET',options.url+'?'+params,true);
		xhr.send();
	}else if(options.type=='POST'){
		//Post请求较为安全，不会在地址栏中拼接数据
		xhr.open('POST',options.url,true);
		//设置提交内容的类型 post请求必须设置请求头
		//客户端提交给服务器的文本内容编码时URI编码
		//除了标准的字符之外，以16进制前加'%'来表示
		//setRequestHeader请求头有很多
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.send(params);
	}
	//第四步 ：接受返回值
	xhr.onreadystatechange=function(){
		//浏览器和服务器，进行到哪一步了
		if(xhr.readyState==4){//读取完成
			if(xhr.status==200){
				//成功
				var data= xhr.responseText;
				if(options.dataType==="json"){
					data=JSON.parse(data);
//					console.log(11);
				}
//				console.log(data);
				options.success && options.success(data);
				
			}else{
				//失败
				options.fail && options.fail(xhr.status);
			}
		}
	}
}


//用于格式化参数的函数
function formatParams(data){
	var arr=[];
	for(var name in data){
		arr.push(encodeURIComponent(name)+'='
		+encodeURIComponent(data[name]));
	}
	//实时更新缓存
	arr.push(('v='+Math.random()).replace('.',''));
	return arr.join('&');
}


