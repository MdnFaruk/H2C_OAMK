/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name : Md Faruk
 * Started date :
 * Ended   date :
 * 
 */

function v10() {
    const ERROR = "Points should be between 0 - 60.";
    document.getElementById("grade_error").innerHTML = "";
    let number1 = Number(document.getElementById("points").value);
    let result = ""; 
    if ((0 <= number1)&& (number1 <30)) {
        result = "fail";
    }else if((30 <= number1)&& (number1 <34)){
        result = "satisfactory";
    }else if((35 <= number1)&& (number1 <40)){
        result = "fair";
    }else if((40 <= number1)&& (number1 <50)){
        result = "good";
    }else if((50 <= number1)&& (number1 <=60)){
        result = "excellent";
    }else {
        document.getElementById("grade_error").innerHTML = ERROR;
        
    }
    document.getElementById("grade").innerHTML = result;
}

function v11() {
    const ERROR = "Hours should be between 0 - 24.";
    
    document.getElementById("clock_error").innerHTML = "";
    let number1 = Number(document.getElementById("clock").value);
    let result = "";
    if ((21 <= number1)&& (number1 <25)) {
        result = "Good night";
    }else if((18 <= number1)&& (number1 <21)){
        result = "Good evening";
    }else if((12 <= number1)&& (number1 <19)){
        result = "Good afternoon";
    }else if((4 <= number1)&& (number1 <12)){
        result = "Good morning";
    }else if((0 <= number1)&& (number1 <=3)){
        result = "Good night";
    }else {
        document.getElementById("clock_error").innerHTML = ERROR;
        
    }
    document.getElementById("greeting").innerHTML = result;
    
}

function v12() {
    const ERROR_NEG = "Number of guests cannot be negative.";
    const ERROR_DIGIT = "Number of guests must be integer.";
    const ERROR_FEW = "Party is cancelled due to too few guests."; 
    
    const ADDRESS1 = "Naapuritie 1";
    const ADDRESS2 = "Naapuritie 12";
    const ADDRESS3 = "Juhlasalintie 34";

    document.getElementById("shopping_list").innerHTML = "";
    document.getElementById("address").innerHTML = "";
    document.getElementById("party_error").innerHTML = "";
    
    let guests =  Number(document.getElementById("guests").value);

    if (guests < 0) {
        document.getElementById("party_error").innerHTML = ERROR_NEG;
        return;
    }
    if (Number.isInteger(guests) === false) {
        document.getElementById("party_error").innerHTML = ERROR_DIGIT;
        return;
    }
    if (guests <= 3) {
        document.getElementById("party_error").innerHTML = ERROR_FEW;
        return;
    }
    let sausages = 0;
    let drinks = 0;
    let tomatto = 0;
    let eggs = 0;
    let address = "";

    if (guests <= 15){
        sausages = 3 * guests;
        drinks = 5 * guests;
        tomatto = 2 * guests;
        eggs = guests;
        address = ADDRESS1;

    } else {
        sausages = 2 * guests;
        drinks = 3 * guests;
        tomatto = guests;
        eggs = guests * 0.5;
        
        if (guests <= 50) {
            address = ADDRESS2;
        } else {
            address = ADDRESS3;
        }

    }
    document.getElementById("shopping_list").innerHTML =
        "Shopping list: <br>" +
        "- Sausages " + sausages + " pcs<br>"+
        "- Drinks " + drinks + " bottles<br>"+
        "- Tomatoes " + tomatto + " pcs<br>"+
        "- Eggs " + eggs + " pcs"

    document.getElementById("address").innerHTML = address;

}

function v13() {
	const ERROR = "Number of right answers cannot be bigger than number of questions.";
	const RES1 = "Less than 25% right, you should study more.<br>";
	const RES2 = "Less than 50% right, nearly passed.<br>";
	const RES3 = "More than 50% right, good work.<br>";
	const RES4 = "More than 75% right, excellent.<br>";
	
	const prize1 = '<img src="img/prize1.png">';
	const prize2 = '<img src="img/prize2.png">';
	const prize3 = '<img src="img/prize3.png">';
    const prize4 = '<img src="img/prize4.png">';

    document.getElementById("result").innerHTML = "";
    document.getElementById("quiz_error").innerHTML = "";

    let nmbrOfQstn = Number(document.getElementById("amount").value);
    let rightAns = Number(document.getElementById("right").value);

    if (rightAns > nmbrOfQstn) {
        document.getElementById("quiz_error").innerHTML = ERROR;
        return;
    }

    let num = rightAns/nmbrOfQstn;
    let crctAnswerPrcntg = num.toFixed(2);
    let result = "";

    
        if(crctAnswerPrcntg < 0.25){
            result = RES1+prize1;
        } else if((crctAnswerPrcntg >= 0.25)&&(crctAnswerPrcntg < 0.50)){
            result = RES2+prize2;
        }else if((crctAnswerPrcntg >= 0.50)&&(crctAnswerPrcntg < 0.75)){
            result = RES3+prize3;
        }else if(crctAnswerPrcntg >= 0.75){
            result = RES4+prize4;
        }
        document.getElementById("result").innerHTML = result;
    }  
      






