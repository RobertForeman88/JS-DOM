// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"

var button = document.querySelector("#myButton");
var boxesList = document.querySelectorAll(".box");


function boxesBlue() {
    boxesList.forEach(function(index){
        index.style.background = "blue";
    })
}

button.onclick = boxesBlue;