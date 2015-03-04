/**************************************
FILENAME:
AUTHOR:
PURPOSE:
CREATED:
MODIFIED:
NOTES:
					Add fail safe js and css local libs
*************************************/

$(document).ready(function(){

	// function to write to page for each object
	function writeContent (objectName,headerContent,bodyContent,footerContent) {
		this.objectName = objectName;
		this.headerContent = headerContent;
		this.bodyContent = bodyContent;
		this.footerContent = footerContent;
		// body...

		$('title').append(objectName);
		$('header').append('<div class="container lead">' + headerContent + "</div><br>");
		$('body').append('<br><div class="container text-muted">' + bodyContent + "</div><br>");
		$('footer').append('<div class="container">' + footerContent + "</div><br>");

	} // end make object






	// test harness
/*
	var argumentArg = "Hello Test Argument!";
	var objectNameArg = "Hello Object Title!";
	var headerContentArg = "Hello Header Content String";
	var bodyContentArg = "Hello Body Content String!";
	var footerContentArg = "Hello Footer Content String";
*/
	// create object from constructor
	//var funObject = makePage(objectNameArg,headerContentArg, bodyContentArg, footerContentArg);



 // Defaults per page












	// HOME page object ====================================
	var homeObject = {
		objectNameArg : 'Home Page',
		headerContentArg : 'Hello Home Page',
		bodyContentArg : 'Hello Home Page Body Content',
		footerContentArg : 'Hello Home Page Footer Content',
		setPage: function(objectNameArg,headerContentArg, bodyContentArg, footerContentArg) {
			writeContent(this.objectNameArg,this.headerContentArg, this.bodyContentArg, this.footerContentArg);
		} // end make Home method
	} // end Home Page Object

	homeObject.setPage(); // make it happen, else nothing










}); // end doc ready









