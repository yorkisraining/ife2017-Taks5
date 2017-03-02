//create by rain 2017.2.28

var items = [];

window.onload = function() {
	
	var lis = document.getElementsByClassName('scroll-item');
	for (var i=0; i<lis.length; i++) {
		items.push(lis[i]);
	}
	
	window.scrollTop = 0;
}

addEventListener("load", function() {
	setTimeout(function() {
		window.scrollTo(0,1);
	}, 0);
}, false); 

window.onscroll = function() {	
	var scrTop = window.pageYOffset; // || document.documentElement.scrollTop || document.body.scrollTop;  //滚动高度
	var winH = window.innerHeight; //|| document.documentElement.clientHeight; //屏幕高度
//	console.log(scrTop + winH)
	var eleH = document.documentElement.offsetHeight; //|| document.body.offsetHeight; //元素高度
//	console.log(eleH);
	var ani = document.getElementsByClassName('box')[0];
	if (scrTop + winH == eleH) {
		setTimeout(add, 1000);
		ani.style.display = 'block';
	}
}

function add() {
	var wrap = document.getElementsByClassName('scroll')[0];
	var ul = wrap.getElementsByTagName('ul')[0];
	var num = items.length + 1;
	var ani = document.getElementsByClassName('box')[0];
	for (var i=0; i<20; i++) {
		var newItem = document.createElement('li');
		newItem.className = 'scroll-item';
		ul.appendChild(newItem);
		var newInner = document.createElement('div');
		newInner.innerHTML = 'item' + (i + num);
		newInner.className = 'scroll-inner';
		newItem.appendChild(newInner);
		items.push(newItem);
	}
	ani.style.display = 'none';
}