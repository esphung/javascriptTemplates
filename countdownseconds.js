/*
* @Author: eric phung
* @Date:   2017-12-04 01:36:14
* @Last Modified 2017-12-04
* @Last Modified time: 2017-12-04 20:33:10
*/

function countdown (count) {
	if (count) {
		var seconds = count;
		    var timer = setInterval(function() {
		       seconds--;
		        if(seconds == 0) {
		            console.log("done");
		            clearInterval(timer);
		            return true
		        } else {
		           console.log(seconds + ' seconds left');
		        }
		}, 1000);
	} else {
		return false
	}

}


module.exports = countdown









