/// <reference path ="../../node_modules/jQuery/tmp/jquery.js" />

$(document).ready(function(){
   /*  $("#flower1").click(function(){
        $("#flower1").hide(5000);
        $("#peony1").show(5000);
    }); */

    $("#flower1").click(function(){
        //callback function
        $(this).hide(3000,function(){
            $("#peony1").show(3000);
        });
    });
    $("#peony1").click(function(){
        //callback function
        $(this).slideUp(3000,function(){
            $("#flower1").show(3000);
        });
    });

    $("#flower2").click(function(){
        //callback function
        $(this).hide(3000,function(){
            $("#peony2").slideDown(3000);
        });
    });
    $("#peony2").click(function(){
        //callback function
        $(this).slideUp(3000,function(){
            $("#flower2").fadeIn(3000);
        });
    });

    $(".fa").click(function(){
        // "swing" - moves slower at the beginning/end, but faster in the middle
        //  "linear" - moves in a constant speed
        $(this).parent().next().slideToggle(2000,"swing",function(){
            if ($(this).prev().children().first().hasClass("fa-plus-circle")) {
                $(this).prev().children().first().removeClass("fa-plus-circle");
                $(this).prev().children().first().addClass("fa-minus-circle");
            } else {
                $(this).prev().children().first().removeClass("fa-minus-circle");
                $(this).prev().children().first().addClass("fa-plus-circle");
            }
        });  
    });
    
});
