window.MovingObject = require("./moving_object.js");
window.Utils = require("./utils.js");

function Bullet() {

}

Utils.inherits(Bullet, MovingObject);

module.exports = Bullet ;