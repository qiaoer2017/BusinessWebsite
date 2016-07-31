// JavaScript Document
"use strict";

function showSubNav(id){
	var obj = document.getElementById(id);
	obj.style.display="block";
}
function hideSubNav(id){
	var obj = document.getElementById(id);
	obj.style.display="none";
}

var index = 0;
var bannerImages = new Array("img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg");


function autoPlay(){
	if(index>=bannerImages.length){
			index = 0;
	}
	var bannerImg = document.getElementById("banner-img");
	bannerImg.src = bannerImages[index];
	index++;
}
var bannerTimer = setInterval(autoPlay,3000);



function showBannerById(id){
	
	var count = parseInt(id);
	var bannerImg = document.getElementById("banner-img");
	bannerImg.src = bannerImages[count];
	index = count;
}

var speed = 10;
var tab = document.getElementById("demo");
var tab1 = document.getElementById("demo1");
var tab2 = document.getElementById("demo2");
tab2.innerHTML = tab1.innerHTML;



function marquee(){
	if(tab2.offsetWidth-tab.scrollLeft<=0){
		tab.scrollLeft-=tab2.offsetWidth;
	}else{
		tab.scrollLeft++;
	}
}
var rollTimer = setInterval(marquee,speed);
tab.onmouseover = function(){
	clearInterval(rollTimer);
}

tab.onmouseout = function(){
	rollTimer = setInterval(marquee,speed);
}