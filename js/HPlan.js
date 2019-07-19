window.onload=function(){
//	-----------------------鼠标滚轮--------------------
	let box = document.getElementById('box'),
			boxChild = box.children, //获取子节点
			libg = document.getElementsByClassName('liBg')
		libg[0].style.display = 'block'
		lis = document.querySelectorAll('.dot li')
		childLength = boxChild.length;
		let index = 0,
			timer,
			Delta,
			e,
			flag = true;
		const BOX_CHANGE_TIME = 1000; //页面动画的过渡时间 
		if (window.addEventListener) //FF,火狐浏览器会识别该方法
			window.addEventListener('DOMMouseScroll', slideEvent, false);
		window.onmousewheel = function(event) {
			if (flag) { //  防止多次滚轮滚动多个页面，保证在上个页面动画结束后，发生下一个页面
				flag = false;
				slideEvent(event);
				setTimeout(function() {
					flag = true;
				}, BOX_CHANGE_TIME)
			}
		}
		for (let i = 0; i < lis.length; i++) {
			lis[i].addEventListener('click', function() {
				index = i - 1
				slideEvent(event)
			})
		}

		function slideEvent(event) {
			clearTimeout(timer); //不会一次滚动触发多次事件
			timer = setTimeout(function() {
				e = event || window.event;
				// IE、chrome监听的是wheelDelta,向下滚动其值为-120；向上滚动其值为120
				if (e.wheelDelta) {
					Delta = e.wheelDelta / 120;
					//火狐浏览器监听的是detail,向下滚动其值为3；向上滚动其值为-3
				} else if (e.detail) {
					Delta = -e.detail / 3; //取负数，以保证符号相同
				}
				if (Delta > 0) { //向上
					index = (index === 0 ? 0 : --index);
				} else { //向下
					index = (index === childLength - 1 ? childLength - 1 : ++index);
					if (index > 7) {
						index = 7;
					}
				}
				for (let i = 0; i < childLength; i++) {
					boxChild[i].style.top = (i - index) * 100 + "%";
				}
				for (let i = 0; i < libg.length; i++) {
					libg[i].style.display = 'none';
				}
				libg[index].style.display = 'block'
			}, 100);
		}
		
//		---------------------防止页面进行缩放-----------------
//		document.onkeydown=function(event){
//			event=event||window.event;
//			if(event.ctrlKey){
//				return false;
//			}
//		}
//		document.addEventListener('DOMContentLoaded', function (event) {
//          // chrome 浏览器直接加上下面这个样式就行了，但是ff不识别
//          document.body.style.zoom = 'reset';
//          document.addEventListener('keydown', function (event) {
////          	console.log(11);
//              if ((event.ctrlKey === true || event.metaKey === true)
//              && (event.which === 61 || event.which === 107
//                  || event.which === 173 || event.which === 109
//                  || event.which === 187  || event.which === 189))
//                  {
//                     event.preventDefault();
//                     console.log(11);
//                  }
//          }, false);
//          document.addEventListener('DOMMouseScroll', function (event) {
//              if (event.ctrlKey === true || event.metaKey) {
//                  event.preventDefault();
//              }
//          }, false);
//      }, false);

		$(document).ready(function () {
			// chrome 浏览器直接加上下面这个样式就行了，但是ff不识别
			$('body').css('zoom', 'reset');
			$(document).keydown(function (event) {
			  	//event.metaKey mac的command键
			  	if ((event.ctrlKey === true || event.metaKey === true)&& (event.which === 61 || event.which === 107 || event.which === 173 || event.which === 109 || event.which === 187  || event.which === 189)){
			    	event.preventDefault();
			  	}
			});
			$(window).bind('mousewheel DOMMouseScroll', function (event) {
			  	if (event.ctrlKey === true || event.metaKey) {
			    	event.preventDefault();
			  	}
			});
		});

		


//		--------------------------轮播-------------------
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
		var play1=new Play('pictwo', 5000, 'anniu1',function(point,points){
			for(var i=0;i<points.length;i++){
				points[i].style.background='#cac2be';
			}
			points[point].style.background='#513629';
		})
		play1.init();
		
		
//		--------------实现页面跳转---------------------
		var gw=document.getElementsByClassName('header-logo')[0];
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
		
}
