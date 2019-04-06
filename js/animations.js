const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
const canvas2 = document.getElementById('my-canvas2');
const ctx2 = canvas2.getContext('2d');

const makeBox = () => {
ctx.beginPath()
ctx.rect(0,620,canvas.width,50);
ctx.fillStyle = 'black';
ctx.fill();

ctx2.beginPath()
ctx2.rect(0,620,canvas.width,50);
ctx2.fillStyle = 'black';
ctx2.fill();
// at some point have it pulsate to the beat
}
makeBox();

const animateEverything = () => {
  makeBox();
  animateArrows();
}


const animateArrows = () => {
  if (game.easyArray[0]){
  game.easyArray.forEach(function(i){i.move()})
  game.easyArray.forEach(function(i){i.draw()})
}
  if (game.mediumArray[0]){
  game.mediumArray.forEach(function(i){i.move()})
  game.mediumArray.forEach(function(i){i.draw()})
}
  if (game.hardArray[0]){
  game.hardArray.forEach(function(i){i.move()})
  game.hardArray.forEach(function(i){i.draw()})
}
if (game.easyArray2[0]){
game.easyArray2.forEach(function(i){i.move()})
game.easyArray2.forEach(function(i){i.draw()})
}
if (game.mediumArray2[0]){
game.mediumArray2.forEach(function(i){i.move()})
game.mediumArray2.forEach(function(i){i.draw()})
}
if (game.hardArray2[0]){
game.hardArray2.forEach(function(i){i.move()})
game.hardArray2.forEach(function(i){i.draw()})
}
  game.check();
}

let animationLoop = null;

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.clearRect(0, 0, canvas.width, canvas.height);
  animateEverything()
  animationLoop = requestAnimationFrame(animate);
}
