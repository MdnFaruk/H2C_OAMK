/*
 * Your name: Md Faruk
 * Start date: 24.03.2021
 * End date: 30.03.2021
 * 
 */

$(document).ready(function(){

    let total_score = [];

    $(".quiz").click(function(){
        let score = 0;
        let answer = Number($(this).val());
        let name_attribute = $(this).attr("name");
        let option = "[name=" + name_attribute + "]";
        let id_selection = "#" + name_attribute;
        $(id_selection).removeClass("not_apperd");
        $(option).prop("disabled", true);
        total_score.push(answer); 

        for (let i = 0; i < total_score.length; i++) {
             score += total_score[i];
        }
                
        if (answer === 1) {
            // right
            $(this).parent().addClass("selected");
            
        } else {
            // wrong
            $(this).parent().addClass("wrong");
            let name_attribute = $(this).attr("name");
            let right_answer = "[name=" + name_attribute + "][value=1]";
            $(right_answer).parent().addClass("right");
        }
        $("#result").html("<span class='badge bg-success text-warning'>"+ score + " / " + total_score.length +"</span>");
    }); 

    function getBmi(weight, height) {
        let bmi= (weight * 1.3) / Math.pow(height / 100, 2.5);
        bmi = bmi.toFixed(1);
        return bmi;
    }

    function getWeightLimit(value, factor) {
        let limit = (factor / 1.3) * Math.pow(value / 100, 2.5);
        limit = limit.toFixed(0);
        return limit;
    }
    
    $("#bmi_result").click(function(){
        
        if (validateInput() === false) {
            return;
        }
        $("#bmi").html("");
        $("#weightLimit").html("");
                        
        let weight = Number($("#weight").val());
        let height = Number($("#height").val());
        let bmi_result = parseFloat(getBmi(weight, height));        // parseFloat helps not to show NaN
        let lowerBound = getWeightLimit(height, 18.5);
        let upperBound = getWeightLimit(height, 24.9);

       
        $("#bmi").html(bmi_result);

        if ($("#weightRange").prop('checked') === true) {
        $("#weightLimit").html(lowerBound + " - " + upperBound);
        } 
        
        $("#bmi_explan").click(function(){
            
            let bmiExplanList = $(this).attr("data-bs-target");
            $(bmiExplanList).children().siblings().removeClass("selected");
            
            if (bmi_result < 17) {
                $(bmiExplanList).children().siblings("#bmiExample1").addClass("selected");
            } else if (bmi_result < 18.5) {
                $(bmiExplanList).children().siblings("#bmiExample2").addClass("selected");
            } else if (bmi_result < 25) {
                $(bmiExplanList).children().siblings("#bmiExample3").addClass("selected");
            } else if (bmi_result < 30) {
                $(bmiExplanList).children().siblings("#bmiExample4").addClass("selected");
            } else if (bmi_result < 35) {
                $(bmiExplanList).children().siblings("#bmiExample5").addClass("selected");
            } else if (bmi_result < 40) {
                $(bmiExplanList).children().siblings("#bmiExample6").addClass("selected");
            } else if (bmi_result > 39) {
                $(bmiExplanList).children().siblings("#bmiExample7").addClass("selected");
            }
            
        
        });
        
    });
    $("#weight,#height,#weightRange,#birth").focusin(function() {
        $(this).select();
        $("#bmi").html("");
        $("#weightLimit").html("");
        $("#bmiExample").children().removeClass("selected");
        $("#bmiExample").collapse("hide");
    });

    $("#WaistCalculate").click(function(){
        let waist = Number($("#waist").val());
        let option = Number($("[name=w_control]:checked").val());
        let waistList = $(this).attr("data-content");

        if (option === 1) {
            if (waist < 90) {
                $(waistList).children().siblings("#waist_result1").addClass("selected");
            } else if (waist < 101) {
                $(waistList).children().siblings("#waist_result2").addClass("selected");
            } else if (waist > 100) {
                $(waistList).children().siblings("#waist_result3").addClass("selected");
            }
        } else {
            if (waist < 80) {
                $(waistList).children().siblings("#waist_result1").addClass("selected");
            } else if (waist < 91) {
                $(waistList).children().siblings("#waist_result2").addClass("selected");
            } else if (waist > 90) {
                $(waistList).children().siblings("#waist_result3").addClass("selected");
            }
        }
    });
    $("#waist,[name=w_control]").focusin(function() {
        $(this).select();
        $(waistList).children().siblings().removeClass("selected");
        
    });

    function validateInput() {

        const error_msz_title = "Missing input";
        const error_msz_text = "You need to write all input data";
        const note_title = "Note the age";
        const note_text = "BMI results are for person aged 20-60."
        let birth_yr  = Number($("#birth").val());
        let weight = Number($("#weight").val());
        let height = Number($("#height").val());
        let present_yr = new Date().getFullYear();
        let personAge = present_yr - birth_yr;        
        
        if ((birth_yr && weight && height) === 0 ) {
            document.getElementById("m_title").innerHTML = error_msz_title;
            document.getElementById("m_body").innerHTML = error_msz_text;

            let error_Msz = new bootstrap.Modal(document.getElementById("windowModel"),{ backdrop: "static"});
            error_Msz.show();
            return false;
        } else if ((birth_yr && weight && height) !== 0 ) {

            if ((personAge < 20) || (personAge > 60)) {
                document.getElementById("m_title").innerHTML = note_title;
                document.getElementById("m_body").innerHTML = note_text;

                let note_Msz = new bootstrap.Modal(document.getElementById("windowModel"),{ backdrop: "static"});
                note_Msz.show();
                return true;
            } 
        } else {
            return true;
        }
    }

});



// Tooltips enable ......
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
//popover enable ......
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

