/**
 * This class implements the interface 'MyInterface'.
 */
function MyClass() {
}

/** Implements MyInterface.prototype.doSomeJob. */
MyClass.prototype.doSomeJob = function () {
    console.log("do some job.");
};

// /** Implements MyInterface.prototype.doAnotherJob. */
// MyClass.prototype.doAnotherJob = function() {
//     console.log("do another job.");
// };

exports = module.exports = MyClass;