

var step = 1;
var messages =[];

$(function () {


    $.getJSON("data/message.json" , function (results) {
        messages = results;
    })


    $("#container").scroll(function () {

        var container_totalHeight = $(this)[0].scrollHeight;

        var contianer_scroll = $(this).scrollTop();

        var container_height = $(this).height();

        // console.log("container_totalHeight : " + container_totalHeight + " ; container_height : " + container_height + " ; scroll : "+contianer_scroll )

        if (container_totalHeight == contianer_scroll + container_height) {
            var arr = messages.slice((step-1) , step+4-1);   //splice 在原数组基础上删除某些元素 , slice 修改数组并返回副本 , 原本不动
            console.log(arr)
            step += 4;
            
        }

    })



});
