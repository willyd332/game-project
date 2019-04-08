const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
const canvas2 = document.getElementById('my-canvas2');
const ctx2 = canvas2.getContext('2d');

const makeBox = () => {
  ctx.beginPath()
  ctx.rect(0, 620, canvas.width, 50);
  ctx.fillStyle = 'black';
  ctx.fill();

  ctx2.beginPath()
  ctx2.rect(0, 620, canvas.width, 50);
  ctx2.fillStyle = 'black';
  ctx2.fill();
  // at some point have it pulsate to the beat
}
makeBox();

const updateScore = () => {
  $('#score').text(window.game.score)
  $('#score2').text(window.game.score2)
}

const animateEverything = () => {
  makeBox();
  moveArrows();
  animateArrows();
}

const moveArrows = () => {
  if (window.game.easyArray[0]) {
    window.game.easyArray.forEach(function(i) {
      i.move()
    })
  }
  if (window.game.easyArray2[0]) {
    window.game.easyArray2.forEach(function(i) {
      i.move()
    })
  }
  if (window.game.mediumArray[0]) {
    window.game.mediumArray.forEach(function(i) {
      i.move()
    })
  }
  if (window.game.mediumArray2[0]) {
    window.game.mediumArray2.forEach(function(i) {
      i.move()
    })
  }
  if (window.game.hardArray[0]) {
    window.game.hardArray.forEach(function(i) {
      i.move()
    })
  }
  if (window.game.hardArray2[0]) {
    window.game.hardArray2.forEach(function(i) {
      i.move()
    })
  }
}

const animateArrows = () => {
  if (window.game.easyArray[0]) {
    window.game.easyArray.forEach(function(i) {
      i.draw()
    })
  }
  if (window.game.easyArray2[0]) {
    window.game.easyArray2.forEach(function(i) {
      i.draw()
    })
  }
  if (window.game.mediumArray[0]) {
    window.game.mediumArray.forEach(function(i) {
      i.draw()
    })
  }
  if (window.game.mediumArray2[0]) {
    window.game.mediumArray2.forEach(function(i) {
      i.draw()
    })
  }
  if (window.game.hardArray[0]) {
    window.game.hardArray.forEach(function(i) {
      i.draw()
    })
  }
  if (window.game.hardArray2[0]) {
    window.game.hardArray2.forEach(function(i) {
      i.draw()
    })
  }
  window.game.check();
}

let animationLoop = null;

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.clearRect(0, 0, canvas.width, canvas.height);
  animateEverything()
  animationLoop = requestAnimationFrame(animate);
}
