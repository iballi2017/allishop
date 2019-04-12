function greet(){
	alert("hello");
}

$(document).ready(function(){
	// $("#menu-toggle-button").click(function(){
	// 	alert("Hello");
	// 	$("#mobile-nav-container").hidden();
	// });


	$('#menu-toggle-button').click(function(){
		// alert("Hello");
            $('#mobile-nav-container').toggleClass('hidden', 1000);

     });

});