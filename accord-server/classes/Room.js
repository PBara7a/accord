class Room {
  constructor(id, roomTitle, namespace) {
    this.id = id;
    this.roomTitle = roomTitle;
    this.namespace = namespace;
    this.history = [];
  }

  addMessage(message) {
    this.history.push(message);
  }

  clearHistory() {
    this.history = [];
  }
}

module.exports = Room;
