$(document).ready(function(){
    var flag=true;
    $(".header-nav").click(function(){
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
        if(flag){
            $(".dropdown-items").animate({top: '60px'},"fast");
            flag=false;
            var icon = $("#up").text();
            $(".arrow-toggle").text(icon);
            $(".dropdown-arrow").css("background-color","#fa4b2a");
            $(".arrow-toggle").css("color","white");
            $(".new-articles").css("border-left","1px solid white");
        }
        else{
            $(".dropdown-items").animate({top: '-320px'},"fast");
            flag=true;
            var icon = $("#down").text();
            $(".arrow-toggle").text(icon);
            $(".dropdown-arrow").css("background-color","#f0f0f0");
            $(".arrow-toggle").css("color","#fa4b2a");
            $(".new-articles").css("border","none");
        }
        
    });
});







