
 //we want some action when button got clicked
 //first we find the NumberOfDrumButtons
var NumberOfDrumButtons =document.querySelectorAll(".drum").length;
 var presskey;
// now we add addEvenetListner to every button, check on mdn for addEvenetListner
// for loop for every button
for(var i=0; i<NumberOfDrumButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    // this is function for action of clicking, here we write what should happen
    // when button got clicked
    var buttonInnerHtml= this.innerHTML;
makesound(buttonInnerHtml);
keyAnimt(buttonInnerHtml);
});
}
document.addEventListener("keydown",function(event){
  makesound(event.key);
  keyAnimt(event.key);
})

function makesound(presskey){
switch (presskey) {
  case "w": var audio= new Audio("sounds/tom-1.mp3");
  audio.play();
    break;
    case "a": var audio= new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "s": var audio= new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "d": var audio= new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case "j": var audio= new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "k": var audio= new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "l": var audio= new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
  default: console.log(buttonInnerHTML)


}
}
   function keyAnimt(key){
     document.querySelector("." + key).classList.add("pressed");
     setTimeout(function(){
          document.querySelector("." + key).classList.remove("pressed");
     },100);
   }


     // "this" is used for get the button which triggered event
     // output of this.innerhtml is letters i.e : w a s d and all
