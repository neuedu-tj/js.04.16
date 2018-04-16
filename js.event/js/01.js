
//伴随页面加载的事件
window.onload = function () {

    // alert("我是 onload 事件 ..")


    var btn = document.getElementById("btn");  //根据ID获取元素 --> one

    //可以绑定多种事件
    btn.onclick = function ()  {
       console.log("我被点击了")
    }

    btn.onmouseover = function () {
      console.log("有飞机.......")
    }


    ///////////////////////////////////
    var d1 = document.getElementsByClassName("d1")     //根据CLSSNAME 获取元素数组    --> d1-> [elements]

    for (var i=0 ; i < d1.length ; i++) {          //逐一绑定事件
        d1[i].onclick = function () {
           alert(this.innerText)          //this 代表当前事件的触发者   //innerHTML 代表元素中内容 (html , text , content)
        }
    } 

}