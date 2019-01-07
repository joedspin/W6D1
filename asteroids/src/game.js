function Game(){
  // const DIM_X;
  // const DIM_Y;
  // const NUM_ASTEROIDS;
  this.asteroids = [];
  this.addAsteroids();
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  this.draw(ctx);
}



Game.prototype.addAsteroids = function () {
  for (let i = 0; i < 20; i++) {
    this.asteroids.push(new Asteroid(this.randomPos()));
  }
}

Game.prototype.randomPos = function () {
  return [Math.floor(Math.random() * 580), Math.floor(Math.random() * 880)];
}

Game.prototype.step = function(){
  
}

Game.prototype.moveObjects = function(){
  this.asteroids.forEach((el) => { el.move() });
}

Game.prototype.checkCollisions = function(){

}

Game.prototype.draw = function(ctx){
  ctx.clearRect(0, 0, 600, 900);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 600, 900);
  this.asteroids.forEach ((el) => { el.draw(ctx) });
}

module.exports = Game ;