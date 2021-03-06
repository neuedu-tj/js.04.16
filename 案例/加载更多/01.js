

var step = 1;
var messages =[];

$(function () {

    $.getJSON("data/message.json" , function (results) {
        messages = results;

        var arr = messages.slice((step-1) , step+4-1);
        
        createItem(arr);

    });

    function createItem(arr) {           //根据传入的数组内容   去渲染 item

        arr.forEach(function (e) {

            // console.log(e)
            
            var item = $("<div class=\"item\">\n" +
                "            <div class=\"photo\"><img src="+e.photo+" height=\"60px\" width=\"60px\"/> </div>\n" +
                "            <div class=\"\">\n" +
                "                <div class=\"name\">"+e.name+"</div>\n" +
                "                <div class=\"content\">"+e.content+"</div>\n" +
                "            </div>\n" +
                "        </div>");

            $("#container").append(item);
        })

    }


    $("#container").scroll(function () {   //监听滚动事件..

        var container_totalHeight = $(this)[0].scrollHeight;  //总高度

        var contianer_scroll = $(this).scrollTop();   //卷动高度 // 看不见的部分

        var container_height = $(this).height();   //元素可见部分的高度 

        // console.log("container_totalHeight : " + container_totalHeight + " ; container_height : " + container_height + " ; scroll : "+contianer_scroll )

        if (container_totalHeight == contianer_scroll + container_height) {

            setTimeout(function () {
                var arr = messages.slice((step-1) , step+4-1);   //splice 在原数组基础上删除某些元素 , slice 修改数组并返回副本 , 原本不动
                createItem(arr);
                step += 4;
            }, 0)

        }

    })



});
