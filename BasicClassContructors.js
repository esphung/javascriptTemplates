// Example Class Constructor
function Foo(bar) {
  // always initialize all instance properties
  this.bar = bar;
  this.baz = 'baz'; // default value
}
// class methods
Foo.prototype.fooBar = function() {
	console.log(this.bar)// test
};
// export the class
module.exports = Foo;



// constructor call
var object = new Foo('Hello');

// call method
object.fooBar();