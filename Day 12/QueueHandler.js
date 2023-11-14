class QueueHandler {
  constructor() {
    this.queue = [];
    this.isProcessing = false;
  }

  enqueue(order) {
    this.queue.push(order);
    this.processQueue();
  }
  async processQueue() {
    if (this.isProcessing) {
      console.log("Already processing orders. Adding to the queue");
      return;
    }
    while (this.queue.length > 0) {
      const order = this.queue.shift();
      this.isProcessing = true;

      console.log(`Processing order: ${order}`);
      await this.randomDelay();

      console.log(`Order ${order} processed.`);
      this.isProcessing = false;
    }
  }

  randomDelay() {
    const delaySec = Math.floor(Math.random() * 10) + 1;
    return new Promise((resolve) => setTimeout(resolve, delaySec * 1000));
  }
}

module.exports = QueueHandler;
