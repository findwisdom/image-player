/**
 * Created by wisdom king on 2016/1/30.
 */
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}//全局加载window.onload函数
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}//对应insertBefore的insertAfter函数
function prepareplace(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var myalt = document.createElement("img");
    myalt.setAttribute("id","myalt");
    myalt.setAttribute("src","image/alt.jpg");
    myalt.setAttribute("alt","This is an gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var desctxt = document.createTextNode("choose an image");
    description.appendChild(desctxt);
    var gallery = document.getElementById("imagegallery");
    insertAfter(myalt,gallery);
    insertAfter(description,myalt);
}

//添加转换的gallery 与 解说.

function prepare(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var imagegallery = document.getElementById("imagegallery");
    var links = imagegallery.getElementsByTagName("a");
    for(var i = 0;i<links.length;i++){
        links[i].onclick = function(){
            return showPic(this)?false:true;
        }
    }
}

function showPic(whichpic){
    if(!document.getElementById("myalt")) return false;
    var source = whichpic.getAttribute("href");
    var myalt = document.getElementById("myalt");
    if(myalt.nodeName!="IMG") return false;
    myalt.setAttribute("src",source);
    if(!document.getElementById("description")) return false;
    var description = document.getElementById("description");
    var text = whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
    if(description.firstChild.nodeType == 3){
        description.firstChild.nodeValue = text;
    }
    return true;
}
addLoadEvent(prepare);
addLoadEvent(prepareplace);