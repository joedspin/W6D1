window.MovingObject = require("./moving_object.js");
window.Utils = require("./utils.js");

function Ship() {

}

Utils.inherits(Ship, MovingObject);

module.exports = Ship ;