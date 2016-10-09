window.onload=function(){
	var bannerbox=getClass("banner-box",document)[0];
	var midbox=getClass("mid-box",bannerbox);
	/*console.log(midbox)*/
	var small=getClass("small",bannerbox)[0];
	var lis=small.getElementsByTagName('li');
	var rightbtn=getClass("right-btn",document)[0];
	/*console.log(rightbtn)*/
	var leftbtn=getClass("left-btn",document)[0];
	var index=0;//指示下标
	midbox[0].style.zIndex=10;
	lis[0].style.backgroundColor="red";
	leftbtn.style.display="none";
		rightbtn.style.display="none";
	/*sml[0].style.backgroundColor="red";*/
	var t=setInterval(move,2000)
	function move(){
		index++;
		if(index==midbox.length){
			index=0;
		}
		for(var i=0;i<midbox.length;i++){
			midbox[i].style.zIndex=0;
			lis[i].style.backgroundColor="";
		}
		midbox[index].style.zIndex=10;
		lis[index].style.backgroundColor="red";
	}
	bannerbox.onmouseover=function(){
		clearInterval(t);
		leftbtn.style.display="block";
		rightbtn.style.display="block";
	}
	bannerbox.onmouseout=function(){
		t=setInterval(move,2000);
		leftbtn.style.display="none";
		rightbtn.style.display="none";
	}
	for(var j=0;j<lis.length;j++){
		lis[j].index=j;
		lis[j].onclick=function(){
			for(var k=0;k<midbox.length;k++){
				midbox[k].style.zIndex=0;
				lis[k].style.backgroundColor="";
			}
			midbox[this.index].style.zIndex=10;
			lis[this.index].style.backgroundColor="red";
			index=this.index;
		}
	}
	rightbtn.onclick=function(){
		move();
	}
	leftbtn.onclick=function(){
		index--;
		if(index<0){
			index=midbox.length-1;
		}
		for(var m=0;m<midbox.length;m++){
		midbox[m].style.zIndex=0;
		lis[m].style.background="";
	}//遍历
		midbox[index].style.zIndex=10;
		lis[index].style.background="red";

	}
	//左移
	var banright=$(".banright")[0];
	banright.onmouseover=function(){
		animate(banright,{right:380})
	}
	banright.onmouseout=function(){
		animate(banright,{right:360})
	}



	//主体
	var mid1Title=getClass("mid1-title",document)[0];
	var as=mid1Title.getElementsByTagName('a');
	var mid1Img=getClass("mid1-img",document);
	/*alert(mid1Img.length)*/
	var bor=getClass("bor",document)[0];
	var sml=getClass("sml",bor);
	var pl=$(".pl")
	pl[0].style.display="block";
	sml[0].style.backgroundColor="red";
	for (var i = 0; i < as.length; i++) {
		as[i].index=i;
		as[i].onmouseover=function(){
			for(var j=0;j<mid1Img.length;j++){
				mid1Img[j].style.display="none";
				pl[j].style.display="none";
				sml[j].style.backgroundColor="transparent";
			}
			mid1Img[this.index].style.display="block";
			sml[this.index].style.backgroundColor="red";
			pl[this.index].style.display="block";
		}
	};
	var mid3Box=getClass("mid3-box",document)[0];
	var mid3wenzi1=getClass("mid3-wenzi1",mid3Box);
	var kuang=getClass("kuang",mid3Box)[0];
	var mid3bottom=getClass("mid3-bottom",document);
	var xiaokuang=getClass("xiaokuang",kuang);
	xiaokuang[0].style.backgroundColor="red";
	mid3bottom[0].style.display="block";
		for(var i=0;i<mid3wenzi1.length;i++){
			mid3wenzi1[i].index=i;
			mid3wenzi1[i].onmouseover=function(){
			for(var j=0;j<xiaokuang.length;j++){
				xiaokuang[j].style.backgroundColor="";
				mid3bottom[j].style.display="none";
				
			}
			xiaokuang[this.index].style.backgroundColor="red";
			mid3bottom[this.index].style.display="block";
			
		}
	}

//包装函数，给中间的图加轮播
	function mid(mainfivemmid){
	var fivea=mainfivemmid.getElementsByTagName('a');
	var fivebtn=getClass("fivebtn",mainfivemmid)[0];
	//console.log(fivebtn)
	var fiveleftbtn=getClass("fiveleft-btn",fivebtn)[0];
	var fiverightbtn=getClass("fiveright-btn",fivebtn)[0];
	var fivesmall=getClass("fivesmall",mainfivemmid);
	var fiveli=fivesmall[0].getElementsByTagName('li');
	fivea[0].style.display="block";
	fiveli[0].style.backgroundColor="#d10452";
	fivebtn.style.display="none";
	mainfivemmid.onmouseover=function(){
		fivebtn.style.display="block";
	}
	mainfivemmid.onmouseout=function(){
		fivebtn.style.display="none";
	}
	for(var i=0;i<fiveli.length;i++){
		fiveli[i].index=i;
		fiveli[i].onclick=function(){
		for(var j=0;j<fivea.length;j++){
		fivea[j].style.display="none";
		fiveli[j].style.backgroundColor="";
		}
		fivea[this.index].style.display="block";
		fiveli[this.index].style.backgroundColor="#d10452";
		}
		
	}
	var ij=0;
	fiverightbtn.onclick=function(){
		ij++;
		if(ij==fiveli.length){
			ij=fiveli.length-1;
		}
		for(var j=0;j<fiveli.length;j++){
		fivea[j].style.display="none";
		fiveli[j].style.backgroundColor="";	
		}
		fivea[ij].style.display="block";
		fiveli[ij].style.backgroundColor="#d10452";
	}
	fiveleftbtn.onclick=function(){
		ij--;
		if(ij<0){
			ij=0;
		}
		for(var m=0;m<fiveli.length;m++){
		fivea[m].style.display="none";
		fiveli[m].style.backgroundColor="";
	}//遍历
		fivea[ij].style.display="block";
		fiveli[ij].style.backgroundColor="#d10452";

	}
	}
	var mainfivemmid=getClass("main_fivemmid",document);
	mid(mainfivemmid[0]);
	for(var i=4;i<mainfivemmid.length;i++){
		mid(mainfivemmid[i]);
	}
	

//给右边的加线条效果
	function xiantiao(box){
		var first=$('.first',box)
		// console.log(first)
		for(var i=0;i<first.length;i++){
			first[i].onmouseover=function(){
				var bt=$('.bt',this)[0]
				var bl=$('.bl',this)[0]
				var br=$('.br',this)[0]
				var bb=$('.bb',this)[0]
				animate(bt,{width:270})
				animate(bl,{height:180})
				animate(br,{height:180})
				animate(bb,{width:270})
			}
			first[i].onmouseout=function(){
				var bt=$('.bt',this)[0]
				var bl=$('.bl',this)[0]
				var br=$('.br',this)[0]
				var bb=$('.bb',this)[0]
				animate(bt,{width:0})
				animate(bl,{height:0})
				animate(br,{height:0})
				animate(bb,{width:0})
			}
		}
	}
	var box=$('.box');
	for(var i=0;i<box.length;i++){
			xiantiao(box[i]);
	}
		


		//wufenglianjie
		var mainfivemlbottom=$(".main_fivemlbottom");
		function wufeng(mainfivemlbottom){
		var lunbo=$(".lunbo",mainfivemlbottom);
		var left=$(".left",mainfivemlbottom)[0];
		var right=$(".right",mainfivemlbottom)[0];
		/*console.log(lunbo)*/
		var nh=0;
		var next=0;
		var iw=159;
		lunbo[0].style.left=0;
		right.onclick=function(){
		next++;
		if(next==lunbo.length){
			next=0;
		}
		lunbo[next].style.left=iw+"px";
			animate(lunbo[nh],{left:-iw})
			animate(lunbo[next],{left:0})
			nh=next;
	}
		left.onclick=function(){
		next--;
		if(next<0){
			next=lunbo.length-1;
		}
		lunbo[next].style.left=iw+"px";
		animate(lunbo[nh],{left:-iw});
		animate(lunbo[next],{left:0});
		nh=next;
	}
		}
		for(var i=0;i<mainfivemlbottom.length;i++){
			wufeng(mainfivemlbottom[i]);
		}
		
		



	var img1box=$(".img1-box",mid1Img[0]);
	for(var i=0;i<img1box.length;i++){
			img1box[i].onmouseover=function(){
				var ibt=$('.ibt',this)[0]
				var ibl=$('.ibl',this)[0]
				var ibr=$('.ibr',this)[0]
				var ibb=$('.ibb',this)[0]
				animate(ibt,{width:216})
				animate(ibl,{height:256})
				animate(ibr,{height:256})
				animate(ibb,{width:216})
			}


			img1box[i].onmouseout=function(){
				var ibt=$('.ibt',this)[0]
				var ibl=$('.ibl',this)[0]
				var ibr=$('.ibr',this)[0]
				var ibb=$('.ibb',this)[0]
				animate(ibt,{width:0})
				animate(ibl,{height:0})
				animate(ibr,{height:0})
				animate(ibb,{width:0})
			}
		}

		var img1box=$(".img1-box",mid1Img[1]);
	for(var i=0;i<img1box.length;i++){
			img1box[i].onmouseover=function(){
				var ibt=$('.ibt',this)[0]
				var ibl=$('.ibl',this)[0]
				var ibr=$('.ibr',this)[0]
				var ibb=$('.ibb',this)[0]
				animate(ibt,{width:216})
				animate(ibl,{height:256})
				animate(ibr,{height:256})
				animate(ibb,{width:216})
			}


			img1box[i].onmouseout=function(){
				var ibt=$('.ibt',this)[0]
				var ibl=$('.ibl',this)[0]
				var ibr=$('.ibr',this)[0]
				var ibb=$('.ibb',this)[0]
				animate(ibt,{width:0})
				animate(ibl,{height:0})
				animate(ibr,{height:0})
				animate(ibb,{width:0})
			}
		}

		var img1box=$(".img1-box",mid1Img[2]);
	for(var i=0;i<img1box.length;i++){
			img1box[i].onmouseover=function(){
				var ibt=$('.ibt',this)[0]
				var ibl=$('.ibl',this)[0]
				var ibr=$('.ibr',this)[0]
				var ibb=$('.ibb',this)[0]
				animate(ibt,{width:216})
				animate(ibl,{height:256})
				animate(ibr,{height:256})
				animate(ibb,{width:216})
			}


			img1box[i].onmouseout=function(){
				var ibt=$('.ibt',this)[0]
				var ibl=$('.ibl',this)[0]
				var ibr=$('.ibr',this)[0]
				var ibb=$('.ibb',this)[0]
				animate(ibt,{width:0})
				animate(ibl,{height:0})
				animate(ibr,{height:0})
				animate(ibb,{width:0})
			}
		}



	
	var mid3bottom1=$(".mid3-bottom")[1];
	var mid3img1=$(".mid3-img1",mid3bottom1);
	for(var i=0;i<mid3img1.length;i++){
			mid3img1[i].onmouseover=function(){
				var bt=$('.bt',this)[0]
				var bl=$('.bl',this)[0]
				var br=$('.br',this)[0]
				var bb=$('.bb',this)[0]
				animate(bt,{width:194})
				animate(bl,{height:246})
				animate(br,{height:246})
				animate(bb,{width:194})
			}


			mid3img1[i].onmouseout=function(){
				var bt=$('.bt',this)[0]
				var bl=$('.bl',this)[0]
				var br=$('.br',this)[0]
				var bb=$('.bb',this)[0]
				animate(bt,{width:0})
				animate(bl,{height:0})
				animate(br,{height:0})
				animate(bb,{width:0})
			}
		}


		//固定出现
		var scrollwhell=$(".scroll_whell")[0];
		var whellsmask=$(".whellsmask");
		var mainbox5=$(".main_box5")
		var arr=[];
		var mask=$(".mask");
		var flag=true;
		for(var i=0;i<mainbox5.length;i++){
		arr.push(mainbox5[i].offsetTop);
	}
		/*console.log(arr)*/
		scrollwhell.style.display="none";
		window.onscroll=function(){
		var stop=document.body.scrollTop||document.documentElement.scrollTop;
		document.title=document.body.scrollTop||document.documentElement.scrollTop;
		if(stop>700){
			if(flag){
				flag=false;
				scrollwhell.style.display="block";
			}
		}else{
			if(!flag){
				flag=true;
				scrollwhell.style.display="none";
			}
		}
		for(var i=0;i<arr.length;i++){
					if(arr[i]<stop+300){
					for(var k=0;k<mask.length;k++){
					animate(mask[k],{zIndex:-2});}
					animate(mask[i],{zIndex:22})
				}			 
			
		}
		
		
		}
		/*console.log(mask)*/
		for(var i=0;i<whellsmask.length;i++){
			whellsmask[i].index=i;
			whellsmask[i].style.zIndex="22";
			whellsmask[i].onclick=function(){
				animate(document.body,{scrollTop:arr[this.index+1]-500},500)
				animate(document.documentElement,{scrollTop:arr[this.index+1]-500},500)
			}
		}

	/*//下拉
	var drag=$('.drag')[0];
	var uls=$('ul',drag);
		for(var i=0;i<lns.length;i++){
		hover(drag,function(){uls[0].style.display="block";
			drag.style.backgroundColor="#fff";},function(){uls[0].style.display="none";drag.style.backgroundColor="#eee";})
	}*/

		//下拉菜单  我的银泰
	var dropdown=$('.top_drop')[0]
	var drop=$('.drop')[0]
	var droptitle=$(".drop_title")[0];
	hover(dropdown,function(){
		drop.style.display='block';
		droptitle.style.backgroundColor='#fff'
	},function(){
		drop.style.display='none'
		droptitle.style.backgroundColor=''
	})

	//微信 手机
	var topTl1=$('.top_tl1')[1]
	var weixinBox=$('.weixinBox',topTl1)[0];
	var weixhid=$('.weixhid',weixinBox)[0]
	hover(weixinBox,function(){
		weixinBox.style.width="120px";
		weixhid.style.display='block'
		weixinBox.style.backgroundColor="#fff";
	},function(){
		weixhid.style.display='none'
		weixinBox.style.backgroundColor="";
	})



	var topTl2=$('.top_tl1')[2];
	var phoneBox=$('.phoneBox',topTl2)[0];
	var phhid=$('.phhid',phoneBox)[0]
	hover(phoneBox,function(){
		phoneBox.style.width="120px";
		phhid.style.display='block'
		phoneBox.style.backgroundColor="#fff";
	},function(){
		phhid.style.display='none'
		phoneBox.style.backgroundColor="";
	})

	

		//banner二级页面
	var bannerlist=$(".banner-list")[0];
	var zibox=$(".zi-box");
	var bannererjicons=$(".bannererjicons",bannerbox);
	for(var o=0;o<zibox.length;o++){
		zibox[o].index=o;
		hover(zibox[o],function(){
      this.style.background="#e5004f";
      bannererjicons[this.index].style.display="block";
      
      },function(){
       this.style.background="";
       bannererjicons[this.index].style.display="none";
      });
    };

    for (var p = 0; p < bannererjicons.length;p++) {
      bannererjicons[p].index=p;
      hover(bannererjicons[p],function(){
       bannererjicons[this.index].style.display="block";
      },function(){
      bannererjicons[this.index].style.display="none";
      });
    };

	
    
	



}