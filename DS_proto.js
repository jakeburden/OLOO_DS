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
