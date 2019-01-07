window.Utils = require("./utils.js");
window.MovingObject = require("./moving_object.js");
window.Game = require("./game.js");
window.GameView = require("./game_view.js");
window.Asteroid = require("./asteroid.js");
window.Bullet = require("./bullet.js");
window.Ship = require("./ship.js");
console.log("Webpack is working!");

document.addEventListener("DOMContentLoaded", () => {
  GameView.startCanvas();
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  // const m = new MovingObject({ pos: [10, 10], vel: [500, 500], radius: 10, color: 'red' });
  // m.draw(ctx);
  // m.move();
  // m.draw(ctx);
  // const a = new Asteroid([60,70]);
  // a.draw(ctx);
  const g = new GameView.GameView(ctx);
  g.start();
});