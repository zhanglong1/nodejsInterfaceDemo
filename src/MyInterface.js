/**
 * Interface declaration.
 */
function MyInterface() {
    throw new Error("You can't instantiate MyInterface.");
}

/**
 * One of the interface method.
 * @param  
 * @return 
 */
MyInterface.prototype.doSomeJob = function (param) {
    throw new Error("doSomeJob has not been implemented.");
};

/**
 * Another interface method.
 * @param 
 * @param  
 * @return 
 */
MyInterface.prototype.doAnotherJob = function (param1, param2) {
    throw new Error('doAnotherJob has not been implemented.');
};

exports = module.exports = MyInterface;