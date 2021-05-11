const Logger = require("./logger");

var logger = new Logger();
class Shopper {
  constructor(name, money = 0) {
    logger.log(" ${nme} has ${money} in his account");
  }
}
module.exports = Shopper;
