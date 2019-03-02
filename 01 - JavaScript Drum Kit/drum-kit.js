function playSound(e) {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return; // stop the function from running if non-active key pressed
  audio.currentTime = 0;// rewinds sound to start
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
   if(e.propertyName !== 'transform') return; //skip all the other transitions
   this.classList.remove('playing');
}

window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));