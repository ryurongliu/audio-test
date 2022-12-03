var audio = new Howl({
  src: ["26' - 1.wav"],
  html5: true,
  preload: true
})

document.addEventListener('mousedown', test);

function test(){
  audio.seek(15);
  console.log(audio.seek());
  audio.play();
  console.log(audio.seek());
}
