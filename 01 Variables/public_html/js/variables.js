/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/
 
/*
 * Student name :
 * Started date :
 * Ended   date :
 * 
 */

function t01() {
    let text = document.getElementById("name").value;
    document.getElementById("welcome").innerHTML = text;

}

function t02() {        
    let secInMinutes = 60;
    let minInHours = 60;
    let hoursInDay = 24;
    let dayInYear = 365;

    let secInYear = secInMinutes * minInHours * hoursInDay * dayInYear ; 
    document.getElementById("seconds").innerHTML = secInYear;   
    
}

function t03() {
    let first = Number(document.getElementById("first").value);
    let second = Number(document.getElementById("second").value);
    let third = Number(document.getElementById("third").value);

    let average = (first + second + third)/3;
    document.getElementById("average").innerHTML = average; 

}

function t04() {
    let numb1 = Number(document.getElementById("number1").value);
    let numb2 = Number(document.getElementById("number2").value);

    let add = numb1 + numb2;
    let dif = numb1 - numb2;
    let mul = numb1 * numb2;
    let div = numb1 / numb2;
    let rem = numb1 % numb2;

    document.getElementById("d1").innerHTML = numb1;
    document.getElementById("d2").innerHTML = numb2; 
    document.getElementById("d3").innerHTML = add;

    document.getElementById("d4").innerHTML = numb1;
    document.getElementById("d5").innerHTML = numb2; 
    document.getElementById("d6").innerHTML = dif;

    document.getElementById("d7").innerHTML = numb1;
    document.getElementById("d8").innerHTML = numb2; 
    document.getElementById("d9").innerHTML = mul;

    document.getElementById("d10").innerHTML = numb1;
    document.getElementById("d11").innerHTML = numb2; 
    document.getElementById("d12").innerHTML = div;

    document.getElementById("d13").innerHTML = numb1;
    document.getElementById("d14").innerHTML = numb2; 
    document.getElementById("d15").innerHTML = rem;

}


function t05() {   
    let price = Number(document.getElementById("price").value);
    let percent = Number(document.getElementById("percent").value);
    let newprice = price * (1 -(percent/100));

    document.getElementById("newprice").innerHTML = newprice;
}

function t06() {
    let dte = new Date();
    let present_yr = dte.getFullYear();
    let year = Number(document.getElementById("year").value);
    
    let age = present_yr - year;

    document.getElementById("age").innerHTML = age;

}

function t07() {
    let seats = Number(document.getElementById("seats").value);
    let guest = Number(document.getElementById("guests").value);

    let avaiableSeat = seats - guest;
    document.getElementById("remaining").innerHTML = avaiableSeat;

}

function t08() {
    let plants = Number(document.getElementById("plants").value);
    let distance = Number(document.getElementById("distance").value);

    let leninCm = plants * distance;
    let leninM = leninCm/100;
    document.getElementById("length_cm").innerHTML = leninCm;
    document.getElementById("length_m").innerHTML = leninM;

}

function t09() {
    let participent = Number(document.getElementById("participant").value);
    let sausages = 3 * participent;
    let drinks = 5 * participent;
    let tomatoes = 2 * participent;
    let eggs = 1 * participent;

    document.getElementById("sausages").innerHTML = sausages;
    document.getElementById("drinks").innerHTML = drinks;
    document.getElementById("tomatoes").innerHTML = tomatoes;
    document.getElementById("eggs").innerHTML = eggs;

}




