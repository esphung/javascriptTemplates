// Example Class Constructor
function BaseClass(foo) {
  // always initialize all instance properties
  this.foo = foo;
  this.bar = 'bar'; // default value
}
// class methods
BaseClass.prototype.fooBar = function() {
	console.log(this)// test
};
// export the class
module.exports = BaseClass;

// constructor call
var object = new BaseClass('Hello');

// call method
object.fooBar();