class Logger {
  constructor() {}

  log(message) {
    this.message = message;
    timestamp = now().toISOString();
  }
}
module.exports = Logger;
