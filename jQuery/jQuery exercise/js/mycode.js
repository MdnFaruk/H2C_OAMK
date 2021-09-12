/*
 * Your name: Md Faruk
 * Start date: 13.03.2021
 * End date: 15.03.2021
 * 
 */

$(document).ready(function(){
    /**
     * Generates a random number in a min - max range
     * 
     * @param {Number} min  minimum value for a random number
     * @param {Number} max  maximum value for a random number
     * @returns {Number}    generated random number
     */
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    } 

    /**
     * Calculates the around of circle or square
     * 
     * @param {Number} value    radius or side measurement
     * @param {Number} type     1 = circle, 2 = square
     * @returns {String}        result of a calculation
     */
    function calculateAround(value, type) {
        let result = "";
        if (type === 1) {
            let around = 2 * Math.PI * value;
            result = "Circle around: " + around.toFixed(1);
        } else {
            let around = value * 4;
            result = "Square around: " + around.toFixed(1);
        }
        return result;
    }
    
    // dice images, use indexes 1 - 6
    let dice = [
        '',
        '<span><img src="img/noppa1.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa2.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa3.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa4.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa5.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa6.png" class="img-fluid" alt=""/></span>'
    ];
    
    
    // red and blue flower
    let pair = [
        '<span><img src="img/flower1.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/flower2.png" class="img-fluid" alt=""/></span>'
    ];    

// Exercise 1. Circle or Square
$("#calculate").click(function(){
    let selection = Number($("input[name=rad_cir_opt]:checked").val());
    let value = Number($("#radius_side").val());
    let calculation = calculateAround(value , selection);
    $("#result").html(calculation);
});

$("[name=rad_cir_opt]").focusin(function(){
    $("#radius_side").select();
    $("#result").html("");
});
    
// Exercise 2. Circle and Square    
$(".rad_cir").click(function(){
    let select = $(this).attr("data-content");
    
 
    if ($(this).prop('checked') === true) {
        $(select).removeClass("invisible");
        $(select).val("");
        $(select).focus();
  
    } else {
        $(select).addClass("invisible");
        
    } 
});

$("#calculate2").click(function(){
    let boxes = $(".rad_cir");
    $(boxes).each(function(){
        let print = $(this).attr("data-result");
        let select = $(this).attr("data-content");
        let selection = Number($(this).attr("value"));
        let value = Number($(select).val());
        let calculation = calculateAround(value , selection);

        if ($(this).prop('checked') === true) {
            $(print).html(calculation);
        } 
        $(this).focusin(function(){
            $(select).select();
            $(print).html("");
        });
    });
});
    
// Exercise 3. Random numbers 1  

let count = 0;
$("#numbers").click(function(){
    //$(this).parent().children().children().first().addClass("checked");
    //$("input[name=num_scale]:checked")
    
    let min = Number($("input[name=num_scale]:checked").attr("data-min"));
    let max = Number($("input[name=num_scale]:checked").attr("data-max"));
    let randm_NUmber = getRndInteger(min, max);
    $("#rnd_numbers").append(randm_NUmber + " ");
    count++;
    $("#total").html(count);
    
});

/* $("[name=num_scale]").click(function(){
    $(this).addClass("checked");
    let min = Number($(this).attr("data-min"));
    let max = Number($(this).attr("data-max"));
    let randm_NUmber = getRndInteger(min, max);
}); */
$("[name=num_scale]").click(function(){
    $("#rnd_numbers").html("");
    $("#total").html("");
    count = 0;
});

// Exercise 4. Random numbers 2   

$("#random").click(function(){
    $("#randoms").html("")
    let min = Number($("#min").val());
    let max = Number($("#max").val());

    for (let i = 0; i < 10; i++) {
        let randm_Number = getRndInteger(min, max);
        $("#randoms").append(randm_Number + " ");
    }
}); 

$(".min_max").focusin(function() {
    $(this).select();
    $("#randoms").html("")
});

// Exercise 5. Throw dices    

$("#throw").click(function(){
    let pairs = [0 ,0 ,0 ,0 ,0 ,0 , 0];
    
    $("#dices").html("");
    $("#pairs").html("");

    for (let i = 0; i < 100; i++) {
        let randm_Number1 = getRndInteger(1, 6);
        let randm_Number2 = getRndInteger(1, 6);
        

        if (randm_Number1 == randm_Number2){
            pairs[0] = pairs[0] + 1;
                       
            if((randm_Number1 && randm_Number2) === 6 ) {
                $("#dices").append("<li>" + dice[randm_Number1]+ dice[randm_Number2]+ pair[1] + "</li>");
                pairs[randm_Number1] = pairs[randm_Number1] + 1;
            } else {
                $("#dices").append("<li>" + dice[randm_Number1]+ dice[randm_Number2]+ pair[0] + "</li>");
                pairs[randm_Number1] = pairs[randm_Number1] + 1;
            }
        } else {
            $("#dices").append("<li>" + dice[randm_Number1]+ dice[randm_Number2] + "</li>");
        }
    }
    
    for (i = 1; i < 7; i++) {
        $("#pairs").append("<span class='badge bg-primary'>"+ i + ":" + pairs[i] + "</span>" + " ");
    }
    $("#pairs").append("<span class='badge bg-secondary'>"+ "all:" + pairs[0] + "</span>" + " ");
    
    
}); 

});
