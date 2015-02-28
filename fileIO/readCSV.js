$(document).ready(function() {
$.ajax({
	type: "GET",
	url: "data.csv",
	dataType: "text",
	success: function(data) {
		processData(data);
	}
}); // end database ajax object


//$(".csvClass").hide();// hides all elements with class="csvClass".

alert("Hello World");



function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            } // end for
            lines.push(tarr);
        } // end if
    } // end for
    //console.log(lines);// for me

    csvShit(lines);

    return lines;
    //alert(lines);
} // end process data


function csvShit (lines) {
	    $("div").hide(function(){
    	alert(lines.length)
    	for (var i = 0; i <= lines.length; i++) {

	    	console.log(lines[i][0]);// LAST
	    	$("h3").append(lines[i][0]);// LAST
	    	$("div").append("<br>");// write lines
	  		console.log(lines[i][1]);// FIRST
	  		console.log(lines[i][2]);// ADDRESS
	  		console.log(lines[i][3]);// NAMES
	  		console.log(lines[i][4]);// NAMES
	  		console.log(lines[i][5]);// NAMES
	  		console.log(lines[i][6]);// NAMES
	  		console.log(lines[i][7]);// NAMES
	  		console.log(lines[i][8]);// NAMES
	  		console.log(lines[i][9]);// NAMES

    		//$("div").html(lines[i][0]);// write lines
    		//$("div").append("<br>");// write lines
    	};
    }); // end csvClass function
	// body...
	$( "<div>Test</div>" ).insertAfter( ".inPut" );
}



}); // end doc ready