/*
* @Author: homeuser
* @Date:   2017-12-02 13:47:22
* @Last Modified 2017-12-02
* @Last Modified time: 2017-12-02 20:26:08
*/


// Example Class Constructor
function Hashtable(size) {

	this.tableSize = size
	this.columns = " "
	this.head = {
	    next : " ",
	    value : 0
	}
	this.node = {
		next: " ",
		value: 0
	}
	this.keepGoing = true
}

// class methods
Hashtable.prototype.print = function() {
	this.pointer = this.head
	i = 0
	while (this.pointer != " ") {
		this.pointer = this.pointer.next
		i += 1
	}
	
	console.dir(this.head.next)
}

Hashtable.prototype.getHashKey = function (str) {
    num = 0
    keepGoing = true
    var i = str.length;
    while (i--) {
        num += (str.charCodeAt(i));
        if (i <= 0) {
        	keepGoing = false
        }
    }
    return num
}

Hashtable.prototype.setCurrentNode = function(key,value) {
	this.node = { 
		key: key,
		value: value,
		next: " ",
		down: " ",
		data: []
	}
	console.dir(this.node);
	return this.node
}

Hashtable.prototype.setHashKeyValue = function(sum){
	if (this.keepGoing == true) {
		i = 0
		this.pointer = this.head
		
		while (this.pointer.next != " ") {
			
			if (this.pointer.next.key == sum) {
				// collision with something already set here!!!
				this.setCurrentNode(sum,(this.pointer.value+1))
				this.pointer.down = this.node
			}

			this.pointer = this.pointer.next
			i += 1

		}

		this.setCurrentNode(sum,(i+1))
		this.pointer.next = this.node

		// update table info
		if ((i+1) >= this.tableSize) {
			console.log('table is full')
			this.keepGoing = false
		}
		else { this.columns = i+1
			console.log("Total columns: " + this.columns)
		}
	}
	
}

Hashtable.prototype.getCurrentNode = function () {
	return this.node
}

Hashtable.prototype.baseCase = function (name) {
	name.toString()
	//name = name.replace(' ','')
	name = this.getHashKey(name)
	this.setHashKeyValue(name)
}


Hashtable.prototype.toJson = function () {
	var json = JSON.stringify(this);
	console.log(json);
	return json
}


// constructor call
/*var object = new Hashtable(7);

object.k1Case(4)
object.print(object.toJson())
*/

// export the class
module.exports = Hashtable;



