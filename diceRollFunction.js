/*
* @Author: home
* @Date:   2015-02-26 19:28:05
* @Last Modified by:   Eric Phung
* @Last Modified time: 2015-02-26 20:49:31
*/


console.log("Hello Dice Roll Program");
dieSide = 6;
dieFace = Math.round((Math.random(10,1)*12));

function diceRollFunction(dieSide, dieFace) {
	this.dieSide = dieSide;
	this.dieFace = dieFace;
	return this.dieFace; // returns a times b
} // end dice roll function

dice = diceRollFunction(dieSide,dieFace);
console.log("You rolled " + dice);


