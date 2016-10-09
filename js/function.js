//类名获取兼容问题
function getClass(className,range){
	if(range.getElementsByClassName){
		/*alert("支持");*/ //通过判断值是函数还是undefinef来判断是否兼容，兼容就直接通过类名获取
		return range.getElementsByClassName(className);
	}else{
	/*	alter("不支持")*/ //不兼容就通过标签名获取，然后进行遍历
	   var all=range.getElementsByTagName('*');
	   var arr=[];
	   for(var i=0;i<all.length;i++){
	   	if(checkClass(all[i].className,className)){
	   		arr.push(all[i]);//如果类名==className就放到数组里
	   	}
	   }return arr;
	}
}
//检测当前元素的类名中是否包含需要查找的类名
function checkClass(cedname,classname){
	var a=cedname.split(" ");//把传入的字符串按空格为分字符转换为数组
	for(var i=0;i<a.length;i++){
		if(a[i]==classname){
			return true;
		}
	}return false;
}


//多种方法获取元素
function $(selector,range){
	var range=range||document;
	if(typeof selector=="string"){
		/*alert("获取");*/
		if(selector.charAt(0)=="#"){
			return range.getElementById(selector.slice(1));
		}
		if(selector.charAt(0)=="."){
			return getClass(selector.slice(1),range);
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
			return range.getElementsByTagName(selector);
		}

	}else if(typeof selector=="function"){
		/*alert("页面加载")*/
		return window.onload=selector;
	}

}


function getChilds(obj){
	var childs=obj.childNodes;
	var arr=[];
	for(var i=0;i<childs.length;i++){
		if(!(childs[i].nodeType==8||(childs[i].nodeType==3&&trim(childs[i].nodeValue)=="")))//判断是注释或者是换行
			arr.push(childs[i]);
	}
	return arr;

}


function trim(str){
	return str.replace(/^\s+|\s+$/g,"");
}
/*var aa="   dbh   ";
alert("|"+trim(aa)+"|")
*/
function getFirst(parent){
	return getChilds(parent)[0];
}


function getLast(parent){
	var child=getChilds(parent);
	return child[child.length-1]
}


function getIndex(parent,i){
	return getChilds(parent)[i];
}


function getnext(obj){
	var next=obj.nextSibling;
	if(!next){
		return false;
	}
	while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
		next=next.nextSibling;
		if(!next){
		return false;
	}
	}
	return next;
}


function fore(obj){
	var fore=obj.previousSibling;
	if(!fore){
		return false;
	}
	while(fore.nodeType==8||(fore.nodeType==3&&trim(fore.nodeValue)=="")){
		fore=fore.previousSibling;
		if(!fore){
		return false;
	}
	}
	return fore;
}

function insertBefore(obj1,obj2){
	var parent=obj2.parentNode;
		parent.insertBefore(obj1,obj2);
}

function insertAfter(obj1,obj2){
	var parent=obj1.parentNode;
	var next=getnext(obj1);
	if(next){
	 parent.insertBefore(obj2,next);
	}
	 parent.appendChild(obj2);
}



function on(obj,ev,callback){
	if(obj.addEventListener){
		obj.addEventListener(ev,callback);
	}else{
		obj.fffnnn=function(){
			callback.call(obj);
		}
		obj.attachEvent("on"+ev,fffnnn)
	}
}

function off(obj,ev,callback){
	if(obj,removeElementListener){
		obj.removeElementListener(ev,callback);
	}else{
		obj.detachEvent("on"+ev,obj.fffnnn);
	}
}