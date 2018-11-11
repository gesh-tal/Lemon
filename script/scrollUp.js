
window.onscroll = function(){

	if( document.documentElement.scrollTop >= 350 ){
		document.getElementById('scroll').style.display = "block";
	}else{
		document.getElementById('scroll').style.display = "none";
	}
}

$('#up').click(function(){
	$("html, body").animate({ scrollTop: 0 });
});

$("#down").click(function(){
	var height=$("body").height(); 
	$("html, body").animate({scrollTop:height}); 
});


