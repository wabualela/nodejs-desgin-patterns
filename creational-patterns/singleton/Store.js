const Logger = require("./logger");

var logger = new Logger().get_instance();

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;
    logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
  }
}
module.exports = Store;
