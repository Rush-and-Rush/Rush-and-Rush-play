const audio = document.getElementById('myAudio');
const startButton = document.getElementById('startGame');

function startGame() {
  audio.play();
}

startButton.addEventListener('click', startGame);

if (audio.muted) {
  console.log('Audio is muted. Unmute to hear the music.');
}
