// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

window.onload = function(){

    document.getElementById("section-header").addEventListener('click', function(){
        document.getElementById("section").style.height= "0px";
        document.getElementById("section").style.overflow= "hidden";

        console.log('clicked')
    })

};







