
$(document).ready(function(){
    var flag=true;
    $(".nav").click(function(){
        $("#mySidenav").show("fast");
        $(".nav-closepad").show();
    });

     $(".nav-closepad").click(function(){
        $("#mySidenav").hide("fast");
        $(".nav-closepad").hide();
    });

     $(".new-articles").click(function(){
        $("#articles-divopen").show("fast");
        $(".nav-closepad").show();
    });

     $(".nav-closepad").click(function(){
        $("#articles-divopen").hide("fast");
        $(".nav-closepad").hide();
    });
    $(".dropdown-arrow").click(function(){
        $(".dropdown-items").slideToggle("fast");
        $(".arrow-up").toggle();
        $(".arrow-down").toggle();
    });
});







