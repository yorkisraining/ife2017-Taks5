//create by rain 2017.2.28

var items = [];

window.onload = function() {
	
	var lis = document.getElementsByClassName('scroll-item');
	for (var i=0; i<lis.length; i++) {
		items.push(lis[i]);
	}
	
	window.scrollTop = 0;
	
}

window.onscroll = function() {
	var scrTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动高度
	var winH = document.documentElement.clientHeight || document.body.clientHeight; //屏幕高度
//	console.log(scrTop + winH)
	var eleH = document.documentElement.offsetHeight || document.body.offsetHeight; //元素高度
//	console.log(eleH);
	var wrap = document.getElementsByClassName('scroll')[0];
	var h = wrap.offsetHeight/2 - 80;
	var ul = wrap.getElementsByTagName('ul')[0];
	var num = items.length + 1;
	if (scrTop + winH == eleH) {
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
	}
}
