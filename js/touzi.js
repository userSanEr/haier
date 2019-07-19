window.onload = function(){
//	--------------------导航选项卡-------------------------
	var oUl = document.getElementsByClassName('hg_nav_list')[0];
	var oLi = oUl.getElementsByTagName('li');
	console.log(oLi);
	var oA=oUl.getElementsByTagName('a')
	console.log(oA)
	var oDiv = document.getElementsByClassName('hg_second_menu');
	console.log(oDiv);
	var oSpan = document.getElementsByClassName('hg_arrow');
	for(var i=0;i<oLi.length;i++){
		oLi[i].index=[i];
		oLi[i].onmouseover=function(){
			// alert(this.index);
			for(var i=0;i<oLi.length;i++){
				oA[i].style.color='#4c4949';
				oA[i].style.fontWeight='normal';
				oDiv[i].style.display='none';
				oSpan[i].style.display='none';
				// this.className='active';
			}
			// alert(this);
			// this   当前发生事件的元素
//			this.className='active';
			oA[this.index].style.color='#005aab';
			oA[this.index].style.fontWeight='800';
			oDiv[this.index].style.display='block';
			oSpan[this.index].style.display='block';
		}
	}
	for(var i=0;i<oLi.length;i++){
		oLi[i].index=[i];
		oLi[i].onmouseout=function(){
			// alert(this.index);
			for(var i=0;i<oLi.length;i++){
				oLi[i].className='';
				oDiv[i].style.display='';
				oSpan[i].style.display='';
				// this.className='active';
			}
			// alert(this);
			// this   当前发生事件的元素
			// this.className='acive';
			oDiv[this.index].style.display='none';
			oSpan[this.index].style.display='none';
		}
	}
	
//	------------------跳转页面---------------------
	var gw=document.getElementsByClassName('hg_logo')[0];
	gw.onclick=function(){
		location.href='index.html';
	}
	var sy=document.getElementsByClassName('sy')[0];
	sy.onclick=function(){
		location.href='Home.html';
	}
	var zj=document.getElementsByClassName('zj')[0];
	zj.onclick=function(){
		location.href='HPlan.html';
	}
	var zx=document.getElementsByClassName('zx')[0];
	zx.onclick=function(){
		location.href='touzi.html';
	}
	
//	-----------------------中英文选择框----------------
	var openK=document.getElementsByClassName('hg_country')[0];
	console.log(openK);
	var open=openK.getElementsByTagName('dt')[0];
	console.log(open);
	var co=openK.getElementsByTagName('dd')[0];
	console.log(co);
	open.onclick=function(){
		open.style.background='url(img/touziimg/37d6cd8c4d678e6c80f58f364075f84b_hg_country_select.png) no-repeat'
		co.style.display='block'
		
	}
	co.onmouseover=function(){
		open.style.background='url(img/touziimg/37d6cd8c4d678e6c80f58f364075f84b_hg_country_select.png) no-repeat'
		co.style.display='block'
		
	}
	co.onmouseout=function(){
			open.style.background=''
			co.style.display='none'
		}
	
//	-----------------邮箱格式验证------------------
	var storage=window.localStorage;
	var input=document.getElementsByClassName('inputbox')[0];
	console.log(input);
	var inputK=input.getElementsByTagName('input')[0];
	console.log(inputK);
	var msg=document.getElementsByClassName('msg')[0];
	console.log(msg);
	var sub=document.getElementsByClassName('subscribe')[0];
	console.log(sub);
	var reg=/^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/
	msg.onclick=function(){
		this.style.display='none';
		inputK.focus();
	}
	inputK.onblur=function(){
		if(inputK.value!==''){
			msg.style.display='none';
			if(reg.test(inputK.value)==true){
				sub.onclick=function(){
					location.href='index.html';
					storage.setItem('c',inputK.value);
					
					
					
				}
			}else{
				inputK.value='';
				msg.style.display='block';
				
				msg.innerHTML='请输入正确的格式';
				msg.style.color='red'
			}
		}else{
			msg.style.display='block';
			msg.innerHTML='请输入您的邮箱'
			msg.style.color='red'
		}
	}
	var mm=storage.getItem('c');
	console.log(mm)
	inputK.value=mm;
	console.log(storage);
	if(inputK.value!==' '){
		msg.innerText='';
	}
	if(inputK.value!==true){
		sub.onclick=function(){
			location.href='index.html';
			storage.setItem('c',inputK.value);
		}
	}
}