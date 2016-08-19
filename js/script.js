/*$('.nav').click(function(){
	$('#mySidenav').css("width","250px");
	$('.nav-closepad').css("width","320px");
});



$('.nav-closepad').click(function(){
	$('#mySidenav').css("width","0px");
	$('.nav-closepad').css("width","0px")
});

$('.new-articles').click(function(){
	$('#articles-divopen').css("width","250px");
	$('.articles-closepad').css("width","320px");
});


$('.articles-closepad').click(function(){
	$('#articles-divopen').css("width","0px");
	$('.articles-closepad').css("width","0px")
});
*/



$(document).ready(function(){
    $(".nav").click(function(){
        $("#mySidenav").animate({left: '0px'},"slow");
        $(".nav-closepad").animate({left: '0px'},"slow");
    });

     $(".nav-closepad").click(function(){
        $("#mySidenav").animate({left: '-252px'},"slow");
        $(".nav-closepad").animate({left: '-322px'},"slow");
    });

     $(".new-articles").click(function(){
        $("#articles-divopen").animate({right: '0px'},"slow");
        $(".articles-closepad").animate({right: '0px'},"slow");
    });

     $(".articles-closepad").click(function(){
        $("#articles-divopen").animate({right: '-252px'},"slow");
        $(".articles-closepad").animate({right: '-322px'},"slow");
    });
});







