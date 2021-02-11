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

function v01() {
    let birthYear = Number(document.getElementById("year").value);
    let present_yr = new Date().getFullYear();

    let age = present_yr - birthYear;
    if (age >= 18){
        document.getElementById("allow").innerHTML = "Welcome!";
    } else {
        document.getElementById("allow").innerHTML = "too young";
    }

}

function v02() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    if (number1 > number2) {
        document.getElementById("smaller").innerHTML = number2;
    }else {
        document.getElementById("smaller").innerHTML = number1;
    }

}

function v03() {
    const NEG = "One of the numbers is negative."
    const POS = "Both numbers are either positive or negative."
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    let multiply = number2 * number1;

    if (multiply < 0) {
        document.getElementById("negative").innerHTML = NEG;
    } else {
        document.getElementById("negative").innerHTML = POS;
    }

    
}

function v04() {
    const REC = "rectangle";
    const SQ = "square";
    let side1 = Number(document.getElementById("side1").value);
    let side2 = Number(document.getElementById("side2").value);
    
    if (side2 !== side1) {
        document.getElementById("square").innerHTML = REC;
    } else {
        document.getElementById("square").innerHTML = SQ;
    }

}

function v05() {
    const EVEN = "even";
    const ODD = "odd";
    let n3 = Number(document.getElementById("number3").value);
    
    
    if (n3 % 2 == 0) {
        document.getElementById("even").innerHTML = EVEN;
    } else {
        document.getElementById("even").innerHTML = ODD;
    }
}

function v06() {
    let n3 = Number(document.getElementById("number3").value);
    if (n3 == 0) {
        document.getElementById("positive").innerHTML = "zero";
    } else if (n3 > 0) {
        document.getElementById("positive").innerHTML = "positive";
    } else {
        document.getElementById("positive").innerHTML = "negative";
    }
}

function v07() {
    let n1 = Number(document.getElementById("digit_a").value);
    let n2 = Number(document.getElementById("digit_b").value);
    let n3 = Number(document.getElementById("digit_c").value);
    let n4 = Number(document.getElementById("digit_d").value);

    let smallest = n1;
    if (n2 < smallest) {
        smallest = n2;
    }
    if (n3 < smallest) {
        smallest = n3;
    }
    if (n4 < smallest) {
        smallest = n4;
    }
    document.getElementById("smallest").innerHTML = smallest;

    let biggest = n1;
    if (n2 > biggest) {
        biggest = n2;
    }
    if (n3 > biggest) {
        biggest = n3;
    }
    if (n4 > biggest) {
        biggest = n4;
    }
    document.getElementById("biggest").innerHTML = biggest;

}

function v08() {
    let year = Number(document.getElementById("yearx").value);

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.getElementById("leap_year").innerHTML = "is leap year";
    } else {
        document.getElementById("leap_year").innerHTML = "is not leap year";
    }

}

function v09() {
	const FLOWER1 = '<img alt="flower1" src="img/flower1.png">';
	const FLOWER2 = '<img alt="flower2" src="img/flower2.png">';
	const FLOWER3 = '<img alt="flower3" src="img/flower3.png">';
    const FLOWER4 = '<img alt="flower4" src="img/flower4.png">';
    
    let flwr = Number(document.getElementById("number4").value);
    
    if(flwr % 3 === 0){
        document.getElementById("flower").innerHTML = FLOWER1;
    } else {
        document.getElementById("flower").innerHTML = FLOWER2;
    }
    if(flwr > 10){
        document.getElementById("flower").innerHTML += FLOWER3;
    } else {
        document.getElementById("flower").innerHTML += FLOWER4;
    }
    

}
