window.MovingObject = require("./moving_object.js");
window.Utils = require("./utils.js");

function Asteroid(pos){
  this.pos = pos;
  this.COLOR = 'gray';
  this.RADIUS = 20;
  this.vel = Utils.randomVec(Math.random() * 10);
  MovingObject.call(this, {pos: this.pos, color: this.COLOR, radius: this.RADIUS, vel: this.vel});
}

Utils.inherits(Asteroid, MovingObject);

module.exports = Asteroid;