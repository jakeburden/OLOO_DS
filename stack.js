var dataStructProto = require('./DS_proto');

stack = Object.create(dataStructProto);

stack.init();

stack.pop = function() {
       return this.data.pop();
}

module.exports = stack;