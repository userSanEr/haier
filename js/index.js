window.onload=function(){
//	---------------------输入框的事件-----------------
	var search=document.getElementsByClassName('top_search')[0];
//	console.log(search);
	var input=search.getElementsByTagName('input')[0];
//	console.log(input);
	var xia=document.getElementsByClassName('js_listbox_new')[0];
//	console.log(xia);
	input.onfocus=function(){
		this.style.width='218px';
		xia.style.display='block'
	}
	input.onblur=function(){
		this.style.width='90px';
		xia.style.display='none'
	}
	
//	-------------------banner图轮播------------------
	function lbxx(tupian,anniu,event,kuang){
		var timer = null;//每次进来时先清空指针，然后就不会覆盖
		//手动添加一个元素来获取当前要显示图片的下标
		var index=0;
		//通过下方按钮控制图片
		for(var i=0;i<anniu.length;i++){
			anniu[i].index=i;
			anniu[i][event]=function(){
				for(var j=0;j<anniu.length;j++){
					anniu[j].classList.remove('active');
                	tupian[j].classList.remove('active');
				}
				tupian[this.index].classList.add('active');
                this.classList.add('active');
			}
		}
		//图片轮播效果
		function lb(){
			index++;
			for(var j=0;j<tupian.length;j++){
				tupian[j].classList.remove('active');
                anniu[j].classList.remove('active');
			}
			if(index>tupian.length-1){
				index=0;
			}
			tupian[index].classList.add('active');
            anniu[index].classList.add('active');
		}
		timer=setInterval(lb,3000)
		kuang.onmouseover= function(){
			clearInterval(timer);
		}
		kuang.onmouseout = function(){
			timer=setInterval(lb,3000);
		}
	}
	var banner=document.getElementsByClassName('banner')[0];
//	console.log(banner);
	var ul=banner.getElementsByTagName('ul')[0];
//	console.log(ul);
	var ullist=ul.getElementsByTagName('li');
//	console.log(ullist);
	var ol=banner.getElementsByTagName('ol')[0];
//	console.log(ol);
	var ollist=banner.getElementsByTagName('a');
//	console.log(ollist);
	lbxx(ullist,ollist,'onmouseover',banner)
	
//	-------------------------产品线区域的选项卡-----------------
	var Xa=document.getElementsByClassName('js_interaction_tab')[0];
//	console.log(Xa);
	var Xalist=Xa.getElementsByTagName('li');
//	console.log(Xalist);
	var Xtlist=document.getElementsByClassName('hn_interaction_content');
//	console.log(Xtlist);
	var Ai=Xa.getElementsByTagName('i');
//	console.log(Ai);
	var Aspan=Xa.getElementsByTagName('span');
//	console.log(Aspan);
	var Ahang=document.getElementsByClassName('js_line')[0];
//	console.log(Ahang);
	var arr=['-77px -40px','-77px -120px','-77px -80px','-77px -200px','-115px -720px','-77px -915px','left -150px']
	var Newarr=['-117px -40px','-117px -120px',' -117px -80px','-117px -200px','-115px -764px','-117px -915px','-25px -150px'];
	for(let i=0;i<Xalist.length;i++){
		Xalist[i].onmouseover=function(){
			for(var j=0;j<Xalist.length;j++){
				Xalist[j].style.background='';
				Ai[j].style.backgroundPosition=arr[j];
				Aspan[j].style.color='#666666';
				Xtlist[j].style.display='none';
				
			}
			Xalist[i].style.background='#F6F6F6';
			Ai[i].style.backgroundPosition=Newarr[i];
			Aspan[i].style.color='#32beff';
			Xtlist[i].style.display='block'
//			console.log(Ahang);
			Ahang.style.left=i*13.98+'%';
		}
	}
//	--------------------------产品线下面的轮播图调用---------------------

	var play1=new Play('pictwo', 2000, 'anniu1',function(point,points){
		for(var i=0;i<points.length;i++){
			points[i].style.background='#c6cacb';
		}
		points[point].style.background='#32beff';
	})
	play1.init();
	
	var play2=new Play('picthree', 2000, 'anniu2',function(point,points){
		for(var i=0;i<points.length;i++){
			points[i].style.background='#c6cacb';
		}
		points[point].style.background='#32beff';
	})
	play2.init();
	
	var play3=new Play('picfour', 2000, 'anniu3',function(point,points){
		for(var i=0;i<points.length;i++){
			points[i].style.background='#c6cacb';
		}
		points[point].style.background='#32beff';
	})
	play3.init();
	
	var play4=new Play('picfive', 2000, 'anniu4',function(point,points){
		for(var i=0;i<points.length;i++){
			points[i].style.background='#c6cacb';
		}
		points[point].style.background='#32beff';
	})
	play4.init();
	
//	----------------------------家电排行上面的点击选项卡封装-----------------------------
	function tab(tits, conts, ev) {
		for(let i = 0; i < tits.length; i++) {
			tits[i][ev] = function() {
				for(var j = 0; j < conts.length; j++) {
					conts[j].classList.remove('active');
					tits[j].classList.remove('active');
				}
				conts[i].classList.add('active');
				this.classList.add('active');
				index = i;
			}
		}
	}
	
//	--------------------------家电排行上面的点击选项卡调用----------------------------------------
	var tit1=document.getElementsByClassName('hn_listCategory')[0];
	var tits1=tit1.getElementsByTagName('li');
//	console.log(tits1)
	var conts1=document.getElementsByClassName('hn_rankingContent');
//	console.log(conts1);
	tab(tits1, conts1, 'onclick');
	
	
//	-----------------------------家电排行下面的hover选项卡封装-----------------
    function tabhover(arr,list,imgsrc){
		var qinlis1=list.getElementsByTagName('li');
    	var qin=list.getElementsByClassName('list');
    	var newqin=list.getElementsByClassName('newlist');
    	var img=imgsrc.getElementsByTagName('img')[0];
    	for(let i = 0; i < qinlis1.length; i++) {
			qinlis1[i].onmouseover = function() {
				for(var j = 0; j < qinlis1.length; j++) {
					qin[j].style.display='block';
					newqin[j].style.display='none';
				}
				qin[i].style.display='none';
				newqin[i].style.display='block';
				img.src=arr[i];
//				console.log(img.src);
			}
		}
    }
    
//  ----------------------------家电排行下面的hover选项卡调用-----------------
	var arrImg1=[
			"img/indeximg/xuan1.jpg",
			"img/indeximg/xuan2.jpg",
			"img/indeximg/xuan3.jpg",
			"img/indeximg/xuan4.jpg",
			"img/indeximg/xuan5.jpg"
		];
	var imgz1=document.getElementsByClassName('hn_productImg')[0];
	var qinli1=document.getElementsByClassName('js_rankingList_ul')[0];
	tabhover(arrImg1,qinli1,imgz1);
	
	var arrImg2=[
			"img/indeximg/xuan6.jpg",
			"img/indeximg/xuan6.jpg",
			"img/indeximg/xuan3.jpg",
			"img/indeximg/xuan8.jpg",
			"img/indeximg/xuan1.jpg"
		];
	var imgz2=document.getElementsByClassName('hn_productImg')[1];
	var qinli2=document.getElementsByClassName('js_rankingList_ul')[1];
	tabhover(arrImg2,qinli2,imgz2);
	
	var arrImg3=[
			"img/indeximg/xuan1.jpg",
			"img/indeximg/xuan1.jpg",
			"img/indeximg/xuan5.jpg",
			"img/indeximg/xuan4.jpg",
			"img/indeximg/xuan6.jpg"
		];
	var imgz3=document.getElementsByClassName('hn_productImg')[2];
	var qinli3=document.getElementsByClassName('js_rankingList_ul')[2];
	tabhover(arrImg3,qinli3,imgz3);
	
	var arrImg4=[
			"img/indeximg/bing1.jpg",
			"img/indeximg/bing2.jpg",
			"img/indeximg/bing3.jpg",
			"img/indeximg/bing4.jpg",
			"img/indeximg/bing5.jpg"
		];
	var imgz4=document.getElementsByClassName('hn_productImg')[3];
	var qinli4=document.getElementsByClassName('js_rankingList_ul')[3];
	tabhover(arrImg4,qinli4,imgz4);
	
	var arrImg5=[
			"img/indeximg/bing6.jpg",
			"img/indeximg/bing7.jpg",
			"img/indeximg/bing8.jpg",
			"img/indeximg/bing9.jpg",
			"img/indeximg/bing10.jpg"
		];
	var imgz5=document.getElementsByClassName('hn_productImg')[4];
	var qinli5=document.getElementsByClassName('js_rankingList_ul')[4];
	tabhover(arrImg5,qinli5,imgz5);
	
	var arrImg6=[
			"img/indeximg/bing11.jpg",
			"img/indeximg/bing12.jpg",
			"img/indeximg/bing13.jpg",
			"img/indeximg/bing14.jpg",
			"img/indeximg/bing15.jpg"
		];
	var imgz6=document.getElementsByClassName('hn_productImg')[5];
	var qinli6=document.getElementsByClassName('js_rankingList_ul')[5];
	tabhover(arrImg6,qinli6,imgz6);
	
	var arrImg7=[
			"img/indeximg/kong1.jpg",
			"img/indeximg/kong1.jpg",
			"img/indeximg/kong2.jpg",
			"img/indeximg/kong3.jpg",
			"img/indeximg/kong4.jpg"
		];
	var imgz7=document.getElementsByClassName('hn_productImg')[6];
	var qinli7=document.getElementsByClassName('js_rankingList_ul')[6];
	tabhover(arrImg7,qinli7,imgz7);
	
	var arrImg8=[
			"img/indeximg/kong5.jpg",
			"img/indeximg/kong6.jpg",
			"img/indeximg/kong7.jpg",
			"img/indeximg/kong8.jpg",
			"img/indeximg/kong9.jpg"
		];
	var imgz8=document.getElementsByClassName('hn_productImg')[7];
	var qinli8=document.getElementsByClassName('js_rankingList_ul')[7];
	tabhover(arrImg8,qinli8,imgz8);
	
	var arrImg9=[
			"img/indeximg/kong10.jpg",
			"img/indeximg/kong2.jpg",
			"img/indeximg/kong4.jpg",
			"img/indeximg/kong11.jpg",
			"img/indeximg/kong12.jpg"
		];
	var imgz9=document.getElementsByClassName('hn_productImg')[8];
	var qinli9=document.getElementsByClassName('js_rankingList_ul')[8];
	tabhover(arrImg9,qinli9,imgz9);
	
	var arrImg10=[
			"img/indeximg/re1.jpg",
			"img/indeximg/re2.jpg",
			"img/indeximg/re3.jpg",
			"img/indeximg/re4.jpg",
			"img/indeximg/re5.jpg"
		];
	var imgz10=document.getElementsByClassName('hn_productImg')[9];
	var qinli10=document.getElementsByClassName('js_rankingList_ul')[9];
	tabhover(arrImg10,qinli10,imgz10);
	
	var arrImg11=[
			"img/indeximg/re6.jpg",
			"img/indeximg/re7.jpg",
			"img/indeximg/re8.jpg",
			"img/indeximg/re9.jpg",
			"img/indeximg/re10.jpg"
		];
	var imgz11=document.getElementsByClassName('hn_productImg')[10];
	var qinli11=document.getElementsByClassName('js_rankingList_ul')[10];
	tabhover(arrImg11,qinli11,imgz11);
	
	var arrImg12=[
			"img/indeximg/re12.jpg",
			"img/indeximg/re11.jpg",
			"img/indeximg/re13.jpg",
			"img/indeximg/re14.jpg",
			"img/indeximg/re15.jpg"
		];
	var imgz12=document.getElementsByClassName('hn_productImg')[11];
	var qinli12=document.getElementsByClassName('js_rankingList_ul')[11];
	tabhover(arrImg12,qinli12,imgz12);
	
	var arrImg13=[
			"img/indeximg/dian1.jpg",
			"img/indeximg/dian2.jpg",
			"img/indeximg/dian3.jpg",
			"img/indeximg/dian4.jpg",
			"img/indeximg/dian5.jpg"
		];
	var imgz13=document.getElementsByClassName('hn_productImg')[12];
	var qinli13=document.getElementsByClassName('js_rankingList_ul')[12];
	tabhover(arrImg13,qinli13,imgz13);
	
	var arrImg14=[
			"img/indeximg/dian6.jpg",
			"img/indeximg/dian7.jpg",
			"img/indeximg/dian8.jpg",
			"img/indeximg/dian9.jpg",
			"img/indeximg/dian10.jpg"
		];
	var imgz14=document.getElementsByClassName('hn_productImg')[13];
	var qinli14=document.getElementsByClassName('js_rankingList_ul')[13];
	tabhover(arrImg14,qinli14,imgz14);
	
	
	var arrImg15=[
			"img/indeximg/dian6.jpg",
			"img/indeximg/dian11.jpg",
			"img/indeximg/dian2.jpg",
			"img/indeximg/dian12.jpg",
			"img/indeximg/dian13.jpg"
		];
	var imgz15=document.getElementsByClassName('hn_productImg')[14];
	var qinli15=document.getElementsByClassName('js_rankingList_ul')[14];
	tabhover(arrImg15,qinli15,imgz15);
	
	
	var arrImg16=[
			"img/indeximg/chou1.jpg",
			"img/indeximg/chou2.jpg",
			"img/indeximg/chou3.jpg",
			"img/indeximg/chou4.jpg",
			"img/indeximg/chou5.jpg"
		];
	var imgz16=document.getElementsByClassName('hn_productImg')[15];
	var qinli16=document.getElementsByClassName('js_rankingList_ul')[15];
	tabhover(arrImg16,qinli16,imgz16);
	
	
	var arrImg17=[
			"img/indeximg/chou6.jpg",
			"img/indeximg/chou7.jpg",
			"img/indeximg/chou8.jpg",
			"img/indeximg/chou3.jpg",
			"img/indeximg/chou9.jpg"
		];
	var imgz17=document.getElementsByClassName('hn_productImg')[16];
	var qinli17=document.getElementsByClassName('js_rankingList_ul')[16];
	tabhover(arrImg17,qinli17,imgz17);
	
	var arrImg18=[
			"img/indeximg/chou4.jpg",
			"img/indeximg/chou10.jpg",
			"img/indeximg/chou11.jpg",
			"img/indeximg/chou12.jpg",
			"img/indeximg/chou13.jpg"
		];
	var imgz18=document.getElementsByClassName('hn_productImg')[17];
	var qinli18=document.getElementsByClassName('js_rankingList_ul')[17];
	tabhover(arrImg18,qinli18,imgz18);
	
	var arrImg19=[
			"img/indeximg/mei1.jpg",
			"img/indeximg/mei1.jpg",
			"img/indeximg/mei2.jpg",
			"img/indeximg/mei3.png",
			"img/indeximg/mei4.png"
		];
	var imgz19=document.getElementsByClassName('hn_productImg')[18];
	var qinli19=document.getElementsByClassName('js_rankingList_ul')[18];
	tabhover(arrImg19,qinli19,imgz19);
	
	var arrImg20=[
			"img/indeximg/mei5.jpg",
			"img/indeximg/mei6.jpg",
			"img/indeximg/mei7.jpg",
			"img/indeximg/mei8.jpg",
			"img/indeximg/mei9.jpg"
		];
	var imgz20=document.getElementsByClassName('hn_productImg')[19];
	var qinli20=document.getElementsByClassName('js_rankingList_ul')[19];
	tabhover(arrImg20,qinli20,imgz20);
	
	var arrImg21=[
			"img/indeximg/mei1.jpg",
			"img/indeximg/mei6.jpg",
			"img/indeximg/mei10.jpg",
			"img/indeximg/mei11.jpg",
			"img/indeximg/mei12.jpg"
		];
	var imgz21=document.getElementsByClassName('hn_productImg')[20];
	var qinli21=document.getElementsByClassName('js_rankingList_ul')[20];
	tabhover(arrImg21,qinli21,imgz21);
	
	
//	---------------------------心选新品左侧选项卡------------------
	var xinxuan=document.getElementsByClassName('showbox')[0];
//	console.log(xinxuan);
	var xinxuanAs=xinxuan.getElementsByTagName('li');
//	console.log(xinxuanAs);
	var imgs=xinxuan.getElementsByTagName('img');
//	console.log(imgs);
	var ps=xinxuan.getElementsByTagName('P');
//	console.log(ps);
	var xinxuanTs=document.getElementsByClassName('js_xinpro_showbox')
//	console.log(xinxuanTs);
	var Tsarr=[
		"img/indeximg/冰箱1.png",
		"img/indeximg/热水器1.png",
		"img/indeximg/空调1.png",
		"img/indeximg/洗衣机1.png",
		"img/indeximg/厨电1.png",
		"img/indeximg/智慧家电1.png",
		"img/indeximg/电视机1.png",
		"img/indeximg/电脑1.png"
	]
	var NewTsarr=[
		"img/indeximg/冰箱.png",
		"img/indeximg/热水器.png",
		"img/indeximg/空调.png",
		"img/indeximg/洗衣机.png",
		"img/indeximg/厨电.png",
		"img/indeximg/智慧家电.png",
		"img/indeximg/电视机.png",
		"img/indeximg/电脑.png"
	]
	for(let m=0;m<xinxuanAs.length;m++){
		xinxuanAs[m].onclick=function(){
			for(var n=0;n<xinxuanAs.length;n++){
				xinxuanAs[n].style.background='#333333';
				imgs[n].src=Tsarr[n];
				ps[n].style.color='#b5b5b5';
				xinxuanTs[n].style.display='none';
			}
			imgs[m].src=NewTsarr[m];
			ps[m].style.color='white';
			xinxuanAs[m].style.background='#484848';
			xinxuanTs[m].style.display='block';
		}
	}
	
//	---------------------------心选新品左侧选项卡点击事件---------------
	var ulbox=document.getElementsByClassName('leftbar')[0];
//	console.log(ulbox);
	var ulboxs=ulbox.getElementsByTagName('ul')[0];
//	console.log(ulboxs);
	var pre=document.getElementsByClassName('btn_turn_up')[0];
//	console.log(pre);
	var next=document.getElementsByClassName('btn_turn_down')[0];
//	console.log(next);
	var count=0;
	pre.onclick=function(){
		count++;
		var length=count*97;
		if(ulboxs.style.top=='0px'){
			ulboxs.style.top='0px';
		}else{
			ulboxs.style.top=length+'px';
		}
	}
	next.onclick=function(){
		count--;
		var length=count*97;
		if(ulboxs.style.top=='-291px'){
			ulboxs.style.top='-291px';
		}else{
			ulboxs.style.top=length+'px';
		}
	}
	


//--------------------------心选新品右侧手风琴事件-------------------------
	
//	console.log(xinpin,kuan);
	function sfq(xinpin,kuan){
		var xinpins=xinpin.getElementsByTagName('li');
//		console.log(xinpins);
		var small=xinpin.getElementsByClassName('small_img');
//		console.log(small);
		var big=xinpin.getElementsByTagName('a');
//		console.log(big);
		for(let x=0;x<xinpins.length;x++){
			xinpins[x].onmousemove=function(){
				for(var y=0;y<xinpins.length;y++){
					xinpins[y].style.width='144px';
					small[y].style.display='block';
					big[y].style.display='none';
				}
				small[x].style.display='none';
				big[x].style.display='block';
				xinpins[x].style.width=kuan;
			}
		}
	}
	var xinpin=document.getElementsByClassName('hn_xinpin_list')[0];
	sfq(xinpin,'740px');
	var xinpin1=document.getElementsByClassName('hn_xinpin_list')[1];
	sfq(xinpin1,'884px');
	var xinpin2=document.getElementsByClassName('hn_xinpin_list')[2];
	sfq(xinpin2,'884px');
	var xinpin3=document.getElementsByClassName('hn_xinpin_list')[3];
	sfq(xinpin3,'740px');
	var xinpin4=document.getElementsByClassName('hn_xinpin_list')[4];
	sfq(xinpin4,'884px');
	var xinpin5=document.getElementsByClassName('hn_xinpin_list')[5];
	sfq(xinpin5,'740px');
	

//---------------------------产品线下面的轮播图封装-------------------------
	function Play(name, time, point, fun) {
	        this.name = name;
	        this.time = time;
	        this.obj = document.getElementsByClassName(this.name);
	        this.index = parseInt(this.obj.length / 2)+1;
	        point && (this.point = document.getElementsByClassName(point));
	        this.init = function () {
	            !(this.wait = false) && !(this.dir = false) && (this.timer = setInterval(this.oncemove.bind(this), this.time)) && point && this.touch();
	        }
	        this.move = function (dir) {
	            (dir == 'left') && this.wait && !(this.wait = false) && (this.dir = true) && (this.timer = setInterval(this.oncemove.bind(this), this.time));
	            (dir == 'left') && this.dir && (this.dir = false);
	            (dir == 'right') && this.wait && !(this.wait = false) && !(this.dir = false) && (this.timer = setInterval(this.oncemove.bind(this), this.time));
	            (dir == 'right') && !this.dir && (this.dir = true);
	        }
	        this.oncemove = function (dirct) {
	            var num, judge, that;
	            dirct == 'left' ? judge = true : (dirct == 'right' ? judge = false : judge = this.dir);
	            for (i = 0; i < this.obj.length; i++) {
	                judge ? num = ++String(this.obj[i].className).match(/[0-9]/)[0] : num = --String(this.obj[i].className).match(/[0-9]/)[0];
	                judge ? (num == (this.obj.length + 1)) && (num = 1) : (num == 0) && (num = this.obj.length);
	                this.obj[i].className = this.name + ' ' + this.name + num;
	            }
	            point && (that = this.obj.length - Number(String(this.obj[this.index].className).match(/[0-9]/)[0]));
	            point && fun(that,this.point);
	        }
	        this.touch = function () {
	            for (i = 0; i < this.point.length; i++) {
	                (function (that, i) {
	                    that.point[i].onmouseover = function () {
	                        var count, dir, num;
	                        (num = that.obj.length - Number(String(that.obj[that.index].className).match(/[0-9]/)[0])) && (clearInterval(that.timer) || (that.wait = true));
	                        ((num > i) && ((count = num - i) && (dir = 'left'))) || ((num < i) && ((count = i - num) && (dir = 'right')));
	                        for (let j = 0; j < count; j++) {
	                                setTimeout(that.oncemove.bind(that, dir), 1000 * j);
	                        }
	                        setTimeout(that.move.bind(that, dir), 1000 * count);
	                    }
	                })(this, i)
	            }
	        }
	    }


//---------------------右侧边栏的出现时间-----------------
	
	var goTop=document.getElementsByClassName('goTop_wrap')[0];
	var hua=document.getElementsByClassName('shang')[0];
//	console.log(hua);
//	console.log(goTop);
	function gd() {
		var gundong = document.body.scrollTop || document.documentElement.scrollTop
		return gundong
	}
	window.onscroll = function() {
//		console.log(gd());
		if(gd() > 1) {
			goTop.style.left='0px';

		} else if(gd() < 1) {
			goTop.style.left='35px'
		}
		if(gd() > 600) {
			hua.style.display='block';

		} else if(gd() < 600) {
			hua.style.display='none'
		}
	}
	
//	-------------------关于localStorage---------------
 	
	
	var storage=window.localStorage;
	var mm1=storage.getItem('c');
	console.log(mm1);
	var confirm=document.getElementsByClassName('confirm')[0]
	//	console.log(confirm);
	var cookies=document.getElementsByClassName('hn_cookie_notice')[0];
	//	console.log(cookies);
	confirm.onclick=function(){
		cookies.style.display='none';
		storage.clear();
		console.log(storage);
	}
//	------------------实现页面跳转-------------------------
	var gw=document.getElementsByClassName('logo left')[0]
	gw.onclick=function(){
		location.href='index.html';
	}
	var sy=document.getElementsByClassName('sy')[0]
	sy.onclick=function(){
		location.href='Home.html';
	}
	var zj=document.getElementsByClassName('zj')[0]
	zj.onclick=function(){
		location.href='HPlan.html';
	}
	var zx=document.getElementsByClassName('zx')[0]
	zx.onclick=function(){
		location.href='touzi.html';
	}
	
}