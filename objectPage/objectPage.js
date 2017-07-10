// HOME page object ====================================
var homePage = {
	title : 'Home Page',
	heading : 'Home Page',
	body : 'Page Body...'
} // end Home Page Object




$(document).ready(function(){
	// wait until DOM has finished loade the document fully

	$('title').replaceWith(
		`<title>`
		+ homePage.title
		+`</title>`);

	$('body').append(

		`<div class="container">`
		+ `<h1>`
		+ homePage.heading
		+ `</h1>`
		+ `</div><br>`);

	$('body').append(
		`<div class="container">`
		+ homePage.body
		+ `</div><br>`);

















}); // end doc ready









