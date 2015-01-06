var dataStructProto = require('./DS_proto');

queue = Object.create(dataStructProto);

queue.init();

queue.enqueue = queue.push;

queue.dequeue = function() {
    return this.data.shift();
}

module.exports = queue;
