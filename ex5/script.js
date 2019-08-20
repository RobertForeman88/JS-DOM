// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp

var button = document.getElementById('myButton');
var myContainer = document.getElementById('boxContainer');

button.addEventListener("click", function(){
    var div = document.createElement("div");
    div.className= "box";
    myContainer.appendChild(div);

})



/*

declare button
declare element

addEventlistener ('click', function(){})
in function we created a new div with createElement('div')
        ("div" is the element name)
take var name and add a class to it with .className
call myContainer and add it to "boxContainer" with appendChild


*/

