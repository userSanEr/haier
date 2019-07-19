window.onload=function(){
//	------------------banner轮播------------------------
		function Play(name, time, point, fun) {
	        this.name = name;
	        this.time = time;
	        this.obj = document.getElementsByClassName(this.name);//获取要变化的框
	        this.index = parseInt(this.obj.length / 2)+1;
	        point && (this.point = document.getElementsByClassName(point));//获取下面的按钮
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
		var ahover=document.getElementsByClassName('ahover');
//		console.log(ahover);
		var play1=new Play('pictwo', 5000, 'anniu1',function(j,points){
			
			for(var i=0;i<ahover.length;i++){
					ahover[i].style.width='0%'
			}
			ahover[j].style.width='100%'
		})
		play1.init();
		var ahover1=document.getElementsByClassName('ahover1');
		var play2=new Play('picthree', 5000, 'anniu2',function(j,points){
			
			for(var i=0;i<ahover1.length;i++){
					ahover1[i].style.width='0%'
			}
			ahover1[j].style.width='100%'
		})
		play2.init();
		
//		------------------------选项卡1----------------
		var po=document.getElementsByClassName('showbox')[0]
//		console.log(po);
		var ul=po.getElementsByTagName('ul')[0];
//		console.log(ul);
		var list=po.getElementsByTagName('li');
		console.log(list);
		var prev=document.getElementsByClassName('prev')[0];
//		console.log(prev);
		var next=document.getElementsByClassName('next')[0];
//		console.log(next);
		var time=document.getElementsByClassName('time');
//		console.log(time);
		var product=document.getElementsByClassName('scenes_product');
//		console.log(product);
		var close=document.getElementsByClassName('close')[0];
//		console.log(close);
		var open=document.getElementsByClassName('button_box')[0]
//		console.log(open);
		var fixed=document.getElementsByClassName('fixed')[0];
//		console.log(fixed);
		var videokuan=document.getElementsByClassName('video')[0];
//		console.log(videokuan);
//		var videolist=videokuan.getElementsByClassName('video-list');
		var videolist=videokuan.getElementsByTagName('video');
		
//		console.log(videolist);
		open.onclick=function(){
			videokuan.style.display='block';
			videolist[0].style.display='block';
			fixed.style.display='block';
			
		}
		videolist[0].style.display='none';
		close.onclick=function(){
			videokuan.style.display='none';
			fixed.style.display='none';
			videolist[0].style.display='none';
		}
		let count=0;
		next.onclick=function(){
			prev.style.display='block';
			count++;
			if(count<5){
				ul.style.left=count*-820+'px';
				for(var j=0;j<time.length;j++){
					time[j].style.display='none';
				}
				time[count].style.display='block';
				for(var m=0;m<product.length;m++){
					product[m].style.display='none'
				}
				product[count].style.display='block';
				for(var n=0;n<videolist.length;n++){
					videolist[n].style.display='none'
				}
				videolist[count].style.display='block';
				if(count==4){
					next.style.display='none';
				}
				
			}
			
			prev.onclick=function(){
				prev.style.display='block';
				count--;
				if(count<5){
					ul.style.left=count*-820+'px';
					for(var j=0;j<time.length;j++){
						time[j].style.display='none';
					}
					time[count].style.display='block';
					for(var m=0;m<product.length;m++){
						product[m].style.display='none'
					}
					product[count].style.display='block';
					for(var n=0;n<videolist.length;n++){
						videolist[n].style.display='none'
					}
					videolist[count].style.display='block';
					if(count==3){
						next.style.display='block';
					}
					if(count==0){
						prev.style.display='none';
					}
				}
				
			}
			
		}
		
		
//		---------------------选项卡2-----------------------
		var solutionlist=document.getElementsByClassName('solution-box');
		console.log(solutionlist);
		var titshow=document.getElementsByClassName('titshow');
		console.log(titshow);
		var big_bag=document.getElementsByClassName('big_bag');
		console.log(big_bag);
		var solutionimg=document.getElementsByClassName('solution_info');
		console.log(solutionimg);
		for(let x=0;x<solutionlist.length;x++){
			solutionlist[x].onclick=function(){
				for(var y=0;y<solutionlist.length;y++){
					solutionlist[y].style.width='12.3%';
					titshow[y].style.display='none';
					big_bag[y].style.display='block';
					solutionimg[y].style.display='none'
				}
				solutionlist[x].style.width='50%';
				titshow[x].style.display='block';
				big_bag[x].style.display='none';
				solutionimg[x].style.display='block'
			}
		}
		
//	----------------------ajax导入数据------------
	ajax({
		type:"get",
		dataType:"json",
		url:'https://www.easy-mock.com/mock/5cd91340756d7373c032d699/index/touch',
		success:function(responseData){
			var data=responseData.result;
			var html="";
			console.log(data);
			data.forEach(function(txt){
				html+=`
				<div class="life_box_list">
					<div class="life_box_ob">
						
					</div>
					<div class="life_box_right">
						<span class="life_box_tit">${txt.title}</span>
						<p>
							<span class="p_span">${txt.subTitle1}</span>
							<i>${txt.subTitle4}</i>
							<span class="p_span">${txt.subTitle2}</span>
							<i>${txt.subTitle4}</i>
							<span class="p_span">${txt.subTitle3}</span>
						</p>
					</div>
				</div>
				`;
			});
			var life_box=document.getElementsByClassName('home_life_box')[0];
			console.log(life_box);
			life_box.innerHTML = html;
		}
	})
	setTimeout(function(){
		var arr=['<img class="life_box_img" src="img/Homeimg/123.jpg"/>',
		'<img class="life_box_img" src="img/Homeimg/223.jpg"/>',
		'<img class="life_box_img" src="img/Homeimg/323.jpg"/>',
		'<img class="life_box_img" src="img/Homeimg/423.jpg"/>',
		'<img class="life_box_img" src="img/Homeimg/523.jpg"/>',
		'<img class="life_box_img" src="img/Homeimg/623.jpg"/>',
		'<img class="life_box_img" src="img/Homeimg/723.jpg"/>',
		'<img class="life_box_img" src="img/Homeimg/823.jpg"/>'
		]
		for(var i=0;i<arr.length;i++){
			document.getElementsByClassName('life_box_ob')[i].innerHTML=arr[i];
		}
	},1000)
	
//	-------------------跳转页面-----------------------
	var gw=document.getElementsByClassName('header-logo')[0];
	console.log(gw);
	gw.onclick=function(){
		location.href='index.html';
	}
	var sy=document.getElementsByClassName('sy')[0];
	console.log(sy);
	sy.onclick=function(){
		location.href='Home.html'
	}
	var zj=document.getElementsByClassName('zj')[0];
	console.log(zj);
	zj.onclick=function(){
		location.href='HPlan.html'
	}
	var zx=document.getElementsByClassName('zx')[0];
	console.log(zx);
	zx.onclick=function(){
		location.href='touzi.html'
	}
}
