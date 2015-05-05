var MyClass = require('../src/MyClass');
var MyInterface = require('../src/MyInterface');
var assert = require('assert');

// Test MyInterface implementation.
var methods = Object.getOwnPropertyNames(MyInterface.prototype);
var result = true;
for (var i in methods) {
    var method = methods[i];
    try {
        assert(MyClass.prototype[method]);
    } catch (e) {
        result = false;
        console.log('\'MyClass\' has not implemented the method ' + method + ' of the interface \'MyInterface\'.');
    }
}
console.log('test MyClass interface: ' + result);