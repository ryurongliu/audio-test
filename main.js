var audio = new Audio();
audio.src = "test.wav";
audio.preload = "auto"; 

document.addEventListener('mousedown', test);

function test(){
  audio.currentTime = 15;
  console.log(audio.currentTime);
  audio.play();
  console.log(audio.currentTime);
}
