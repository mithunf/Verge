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
    var flag=true;
    $(".nav").click(function(){
        $("#mySidenav").animate({left: '0px'},"fast");
        $(".nav-closepad").animate({left: '0px'},"fast");
    });

     $(".nav-closepad").click(function(){
        $("#mySidenav").animate({left: '-252px'},"fast");
        $(".nav-closepad").animate({left: '-100%'},"fast");
    });

     $(".new-articles").click(function(){
        $("#articles-divopen").animate({right: '0px'},"fast");
        $(".articles-closepad").animate({right: '0px'},"fast");
    });

     $(".articles-closepad").click(function(){
        $("#articles-divopen").animate({right: '-252px'},"fast");
        $(".articles-closepad").animate({right: '-100%'},"fast");
    });
    $(".dropdown-arrow").click(function(){
        if(flag==true){
            $(".dropdown-items").animate({top: '60px'},"fast");
            flag=false;
            var icon = $("#down").find("img");
            //console.log(icon);
            $(".dropdown-arrow").prepend(icon);
        }
        else{
            $(".dropdown-items").animate({top: '-320px'},"fast");
            flag=true;
            var icon = $("#up").find("img");
            $(".dropdown-arrow").innerHTML = icon;
        }
        
    });
});







