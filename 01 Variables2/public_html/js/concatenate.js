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

function j01() {
    let dte = new Date();
    let present_yr = dte.getFullYear();
    let year1 = Number(document.getElementById("year1").value);
    let year2 = Number(document.getElementById("year2").value);
    
    let age1 = present_yr - year1;
    let age2 = present_yr - year2;
    let difference = age1 - age2;

    document.getElementById("age1").innerHTML = "Person 1 age is " + age1;
    document.getElementById("age2").innerHTML = "Person 2 age is " + age2;
    document.getElementById("difference").innerHTML ="Person 1 is " + difference +" years older than person 2";


}

function j02() {
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);

    let area = width * height;
    document.getElementById("area").innerHTML = "The area is " + area +" m2.";

}

function j03() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let sum = number1 + number2;
    document.getElementById("sum").innerHTML = 
    number1 + " + " + number2 + " = " + sum;
}

function j04() {
    const START = "Hello ";
    const MIDDLE = ", you are ";
    const END = " years of age.";
    let dte = new Date();
    let present_yr = dte.getFullYear();
    let name =  document.getElementById("name").value;
    let year3 = Number(document.getElementById("year3").value);
    let age = present_yr - year3;

    document.getElementById("message").innerHTML = START + name + MIDDLE + age + END;
    
}

function j05() {
    
    let number3 = Number(document.getElementById("number3").value);
    let number4 = Number(document.getElementById("number4").value);

    let sum = number3 + number4;
    document.getElementById("sums").innerHTML += 
    number3 + " + " + number4 + " = " + sum +"<br>";

}

