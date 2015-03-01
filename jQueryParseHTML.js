// parse DOM with JS
var $log = $( "#log" ),
	str = "hello, <b>my name is</b> jQuery.",
	html = $.parseHTML( str ),
	nodeNames = [];

// Append the parsed HTML
$log.append( html );
alert(html);

// Gather the parsed HTML's node names
$.each( html, function( i, el ) {
	nodeNames[ i ] = "<li>" + el.nodeName + "</li>";
	//alert(nodeNames[i]);
});

// Insert the node names
$log.append( "<h3>Node Names:</h3>" );
$( "<ol>Hello WOrlD!</ol>" )
	.append( nodeNames.join( "" ) )
	.appendTo( $log );