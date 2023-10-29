for(i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
function handleClick()
{
var buttonInnerHtml = this.innerHTML;
makeSound(buttonInnerHtml);
buttonAnimation(buttonInnerHtml);
    
}
   

document.addEventListener("keydown",function(event)
{
makeSound(event.key);
buttonAnimation(event.key);
});

function makeSound(key)
{
    
switch (key){
    case "w":
        var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
    break;
    case "a":
        var audio1 = new Audio("sounds/tom-2.mp3");
        audio1.play();
    break;
    case "s":
        var audio1 = new Audio("sounds/tom-3.mp3");
        audio1.play();
    break;
    case "d":
        var audio1 = new Audio("sounds/tom-4.mp3");
        audio1.play();
    break;
    case "j":
        var audio1 = new Audio("sounds/snare.mp3");
        audio1.play();
    break;
    case "k":
        var audio1 = new Audio("sounds/crash.mp3");
        audio1.play();
    break;
    case "l":
        var audio1 = new Audio("sounds/kick-bass.mp3");
        audio1.play();
    break;
    
}
}

function buttonAnimation(currentKey)
{
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    
    setTimeout(function(){
        activeKey.classList.remove("pressed")
    },200);
}