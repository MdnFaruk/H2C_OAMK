$(document).ready(function(){
    $("#calculate1").click(function(){
        let number = Number($("#amount1").val());
        let joul = number * 4.184;
        $("#result1").html(joul.toFixed(1) + " J")
    });
    $("#amount1").focusin(function() {
        $(this).select();
        // Or $("#amount1").select();
        $("#result1").html("")
    });

    $("#calculate2").click(function(){
        let option = Number($("[name=caljou2]:checked").val());
        let number = Number($("#amount2").val());
        if (option === 1) {
            let result = number * 4.184;
            $("#result2").html(number + " cal = " +result.toFixed(0) + " J")
        } else {
            let result = number * 0.2390;
            $("#result2").html(number + " j = " +result.toFixed(0) + " cal")
        }
    });

    $("[name=caljou2]").click(function() {
        $("#amount2").focus();
    });

    $("#amount2").focusin(function() {
        $(this).select();
        $("#result2").html("")
    });

    $("#calculate3").click(function(){
        let option = Number($("[name=caljou3]:checked").val());
        let number = Number($("#amount3").val());
        let result = option * number;
        
        let dataOut = $("[name=caljou3]:checked").attr("data-unit-out");
        let dataIn = $("[name=caljou3]:checked").attr("data-unit-in");
        
        $("#result3").html(number + dataIn + " = " +result.toFixed(0) + dataOut)
    });

    $("[name=caljou3]").click(function() {
        $("#amount3").focus();
    });

    $("#amount3").focusin(function() {
        $(this).select();
        $("#result3").html("")
    });

    $("#calculate4").click(function(){
        let num1 = Number($("#num1").val());
        let num2 = Number($("#num2").val());

        let checkBox = $("[name=math]");
        
        /* for (let i = 0; i < checkBox.length; i++) {
            let check = checkBox[i];

            if ($(check).prop("checked") === true) {
                let option = Number($(check).val());
                if (option === 1) {
                    let result = num1 + num2;
                    $("#result4").append(num1 + " + " + num2 + " = " + result + "<br>");
                } else if(option === 3){
                    let result = num1 - num2;
                    $("#result4").append(num1 + " - " + num2 + " = " + result + "<br>");
                } else if(option === 2){
                    let result = num1 * num2;
                    $("#result4").append(num1 + " * " + num2 + " = " + result + "<br>");
                } else {
                    let result = num1 / num2;
                    $("#result4").append(num1 + " / " + num2 + " = " + result.toFixed(0) + "<br>");
                }
            }
        } */

        $(checkBox).each(function(){
            if ($(this).prop("checked") === true) {
                let option = Number($(this).val()); 
                if (option === 1) {
                    let result = num1 + num2;
                    $("#result4").append(num1 + " + " + num2 + " = " + result + "<br>");
                } else if(option === 3){
                    let result = num1 - num2;
                    $("#result4").append(num1 + " - " + num2 + " = " + result + "<br>");
                } else if(option === 2){
                    let result = num1 * num2;
                    $("#result4").append(num1 + " * " + num2 + " = " + result + "<br>");
                } else {
                    let result = num1 / num2;
                    $("#result4").append(num1 + " / " + num2 + " = " + result.toFixed(0) + "<br>");
                }
            }
        });
        
    });

    $("[name=math]").click(function() {
        $("#result4").html("");
        $("#num1").focus();
    });
    //$("#num1, #num2").focusin(function() OR
    $(".numbers").focusin(function() {
        $(this).select();
        $("#result4").html("");
    });


    $("[name=color_a]").click(function(){
        $(this).parent().addClass("selected");
        let liElements = $(this).parent().parent().children();
        $(liElements).each(function(){
            //$(this) >> li-element
            //let inputElement = $(this).children().first();
            //inputElement.prop("disabled", true); or
           // $(inputElement).prop("disabled", true); or
           $(this).children().first().prop("disabled", true);
        });
    });

    $("[name=color_b]").click(function(){
        $(this).parent().addClass("selected");
        $("[name=color_b]").prop("disabled", true);
    });  
    
    $(".choice").click(function(){
        $(this).parent().addClass("selected");
        let name_attribute = $(this).attr("name");
        //color_c >> [name=colo_c]
        let option = "[name=" + name_attribute + "]";
        $(option).prop("disabled", true);
    });

    $(".choice2").click(function(){
        /* let element = $(this).parent().parent().next();
        element.removeClass("not_visible"); */
        // name=color_e >> #color_e
        let name_attribute = $(this).attr("name");
        let id_selection = "#" + name_attribute;
        $(id_selection).removeClass("not_visible");
    });    

    $(".answer1").click(function(){
        let answer = Number($(this).val());
        if (answer === 1) {
            // right
            $(this).parent().addClass("selected");
        } else {
            // wrong
            $(this).parent().addClass("wrong");
            //right answer:[value=1]
            //right answer:[name=XXXX]
            //right answer:[name=XXXX] [value=1]
            let name_attribute = $(this).attr("name");
            let right_answer = "[name=" + name_attribute + "][value=1]";
            $(right_answer).parent().addClass("right");
        }

    });
});
// Popover and Tooltip code is here