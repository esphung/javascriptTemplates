/*
* @Author: home
* @Date:   2016-03-06 14:43:55
* @Last Modified by:   home
* @Last Modified time: 2016-03-06 21:53:36
*/

// global vars
var reasons = [
	"Food",
	"Church",
	"Court",
	"Work",
	"Family",
	"Holiday",
	"Other"
];

var radioInputLabels = document.getElementsByTagName('span')
var radioInputElements = document.getElementsByTagName('input')


function setItemListTextValues (list) {

	console.log(radioInputLabels)
	for (var i = 0; i < radioInputLabels.length; i++) {
		radioInputLabels[i].innerHTML = list[i]
		radioInputElements[i].value = list[i]
	};
	//console.log(radioInputLabels)
	//console.log(radioInputElements)

} // end set item list def



function getValueFromSelectedRadioButton () {

	for (var i = radioInputElements.length - 1; i >= 0; i--) {
		if (radioInputElements[i].checked == true) {
			console.log(radioInputElements[i])
			console.log(radioInputLabels[i].innerHTML)
			var selectedChoiceStringValue = radioInputLabels[i].innerHTML;
			console.log(selectedChoiceStringValue)
		};

	};
	return selectedChoiceStringValue;

}











// main function for node js app
function main () {

	setItemListTextValues(reasons);
	//document.write("Hello World!");


	getValueFromSelectedRadioButton()

}




