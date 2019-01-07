Function.prototype.inherits = function(parent){
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function MovingObject(name) { 
  this.name = name;
  
}

MovingObject.prototype.move = function() {
  console.log(`${this.name} is moving`);
}

function Ship(name) {
  MovingObject.call(this, name);
}
Ship.inherits(MovingObject);

function Asteroid(name) { }
Asteroid.inherits(MovingObject);

const s = new Ship("titanic");