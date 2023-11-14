const QueueHandler = require`./QueueHandler`;

const queueHandler = new QueueHandler();

const orders = [`order1`, `order2`, `order3`, `order4`];

orders.forEach((val) => {
  queueHandler.enqueue(val);
});
