window.Game = require("./game.js");

function GameView(ctx) {
  this.game = new Game();
  this.ctx = ctx;
}

GameView.prototype.start = function() {
  setInterval(
    () => {
      this.game.moveObjects();
      this.game.draw(this.ctx);
    }, 20);
}

  function startCanvas(){
    const canvasEl = document.getElementById("game-canvas");
    const ctx = canvasEl.getContext("2d");
    canvasEl.height = 900;
    canvasEl.width = 600;

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 600, 900);
  }


module.exports = { GameView, startCanvas};