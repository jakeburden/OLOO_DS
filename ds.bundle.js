(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var isArray = require('./is-array');

module.exports = {

    init: function(data) {
    	if (isArray(data)) return this.data = data;
        return this.data = [];
    },
    
    isEmpty: function() {
        return this.data.length === 0;
    },
    
    peek: function() {
        return this.data[0];
    },
    
    clear: function() {
        return this.data = [];
    },
    
    push: function(obj) {
        return this.data.push(obj);
    }

} 

},{"./is-array":3}],2:[function(require,module,exports){
var stack = require('./stack');
var queue = require('./queue');
},{"./queue":4,"./stack":5}],3:[function(require,module,exports){
var toString = Object.prototype.toString;
var nativeIsArray = Array.isArray;


module.exports = nativeIsArray || function isArray(obj) {
    return toString.call(obj) === '[object Array]';
};
},{}],4:[function(require,module,exports){
var dataStructProto = require('./DS_proto');

queue = Object.create(dataStructProto);

queue.init();

queue.enqueue = queue.push;

queue.dequeue = function() {
    return this.data.shift();
}

module.exports = queue;

},{"./DS_proto":1}],5:[function(require,module,exports){
var dataStructProto = require('./DS_proto');

stack = Object.create(dataStructProto);

stack.init();

stack.pop = function() {
       return this.data.pop();
}

module.exports = stack;
},{"./DS_proto":1}]},{},[2]);
