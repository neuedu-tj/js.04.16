

window.onload = function () {




    var btn = document.getElementById("btn");

    btn.onclick = function () {

        var form = document.f;

        console.log("name : " + form.name.value)
        console.log("degree : " + form.degree.value)


        var skills = form.skills;
        var data = [];

        for (var i=0 ; i<skills.length ; i++) {
           if (skills[i].checked) {
               data.push(skills[i].value)
           }
        }

        console.log("you choice : "+ data)


    }


}