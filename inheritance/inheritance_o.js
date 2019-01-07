
function MovingObject(name) {
  this.name = name;

}

MovingObject.prototype.move = function () {
  console.log(`${this.name} is moving`);
}

function Ship(name) {
  MovingObject.call(this, name);
}
Ship.prototype = Object.create(MovingObject.prototype);

function Asteroid(name) { }
Asteroid.prototype = Object.create(MovingObject.prototype);

const s = new Ship("titanic");