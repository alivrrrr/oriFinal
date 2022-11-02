var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  nigga()
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },610)
})

function nigga(){  var audio = new Audio("assets/music/die.mp3");

audio.oncanplaythrough = function(){
audio.play();
}

audio.loop = true;

audio.onended = function(){
audio.play();
}}
