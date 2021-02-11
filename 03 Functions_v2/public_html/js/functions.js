/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    License    : CC-BY-4.0
*/

let whatShape = 1;
/**
 * What is selected, circle or square?
 * @param {number} i    1 = circle, 2 = square
 */
function shape(i) {
    whatShape = i;
    document.getElementById('result').innerHTML = "";
}

/**
 * Print result on the page
 * @param {element} place   where to print
 * @param {string} shape    shape as text
 * @param {number} area     area of the shape
 * @param {number} around   around of the shape
 */
function print(place, shape, area, around) {
    place.innerHTML = shape + " area is " + area + ", around is " + around + ".";
}

/**
 * Calculate circle around
 * @param {number} r    radius of a circle
 * @returns {number}    around of a circle
 */
function calculateCirleAround  (r) {
    let around = 2 * Math.PI * r; 
    around = Math.round(around);
    return around;
}

/**
 * Calculate circle area
 * @param {number} r    radius of a circle
 * @returns {number}    area of a circle 
 */
function calculateCirleArea (r) {
    let area   = Math.PI * Math.pow(r,2);
    area = Math.round(area);
    return area;
}

// Write Square functions here
function calculateSquareAround (a) {
    let Saround = 4 * a;
    return Saround;
}
function calculateSquareArea (a) {
    let Sarea = Math.pow(a,2);
    return Sarea;
}


// Paste here the random number generator function 


// Button functions
function f01() {           
    let radius1 =  Number(document.getElementById("radius1").value);
    let c_around = calculateCirleAround(radius1);
    let c_area = calculateCirleArea (radius1);

    document.getElementById("c_around").innerHTML   = c_around;
    document.getElementById("c_area").innerHTML  = c_area;

}

function f02() {
    let side =  Number(document.getElementById("side").value);
    let bottom =  Number(document.getElementById("bottom").value);
    let height = Math.sqrt(Math.pow(side,2) - Math.pow(bottom/2,2));
    let around = side + side + bottom;
    let area   = 0.5 * height * bottom;

    document.getElementById("t_height").innerHTML  = Math.round(height);
    document.getElementById("t_around").innerHTML  = Math.round(around);
    document.getElementById("t_area").innerHTML  = Math.round(area);
}

function f03() {

//    how to find the element where to print and use it    
//    let p = document.getElementById('circle');
//    print(p, ...);    
    let radius2 =  Number(document.getElementById("radius2").value);
    let p = document.getElementById('circle');
    let c_around = calculateCirleAround(radius2);
    let c_area = calculateCirleArea (radius2);
    print(p,"Circle:", c_area, c_around);

}

function f04() {
    let side2 =  Number(document.getElementById("side2").value);
    let p = document.getElementById('square');
    let s_around = calculateSquareAround(side2);
    let s_area = calculateSquareArea(side2);
    print(p,"Square:", s_area, s_around);
    
}

function f05() {
    if (whatShape === 1) {
        let radius2 =  Number(document.getElementById("amount").value);
        let p = document.getElementById('result');
        let c_around = calculateCirleAround(radius2);
        let c_area = calculateCirleArea (radius2);
        print(p,"Circle:", c_area, c_around);
        
    }
    if (whatShape === 2) {
        let side2 =  Number(document.getElementById("amount").value);
        let p = document.getElementById('result');
        let s_around = calculateSquareAround(side2);
        let s_area = calculateSquareArea(side2);
        print(p,"Square:", s_area, s_around);
        
    }

}

function f06() {
    randomNumber = Math.floor(Math.random() * 6) + 1; 
    document.getElementById("dice").innerHTML  = randomNumber;
}

function f07() {
    let min =  Number(document.getElementById("min").value);
    let max =  Number(document.getElementById("max").value);
    let randomNumber = Math.floor(Math.random() * max) + min; 
    document.getElementById("randoms").innerHTML  += randomNumber+" ";
}

// Write getCharacter and getDigit functions here
function getCharacter(text, index, uppercase) {
    let letter = text.charAt(index);
    if (uppercase === true) {
        letter = letter.toUpperCase();
    } else {
        letter = letter.toLowerCase();
    }
    return letter;
}

function getDigit() {
    let year = new Date().getFullYear();
    year = year.toString();
    return year[3];
}

function f08() {
    // write here the user id and password by hand to have an example of 
    // the desired result of the task, use your own name
    // first name:  
    // last name: 
    // user id: 
    // password: 
    let firstName =  document.getElementById("firstName").value;

    let lastName =  document.getElementById("lastName").value;
    let userid  = "n"+getDigit()+getCharacter(firstName,0)+getCharacter(firstName,1)+getCharacter(lastName,0)+getCharacter(lastName,1)+"00";
    let password = "!?"+getCharacter(firstName,0)+getCharacter(firstName,firstName.length-1,true)+getCharacter(lastName,0)+getCharacter(lastName,lastName.length-1,true)+getCharacter(lastName,lastName.length-2,true)+"+/"+ (Number(getDigit()) + 1);
    document.getElementById("userid").innerHTML  = userid;
    document.getElementById("password").innerHTML  = password;
}

// Write checkDate and luckyNumber functions here
function checkDate(day, month, year) {
    let ErrorMsz = "";
    let cryear = new Date().getFullYear();
    if ((day < 0) || (day > 31)) {
        ErrorMsz = "Day must be 1-31.";
    }
    if ((month < 0) || (month > 12)) {
        ErrorMsz = "Month must be 1-12.";
    }
    if ((year < 1990) || (year > cryear)) {
        ErrorMsz = "Year must be between 1900 and current year.";
    }

    return ErrorMsz;
}

function luckyNumber(day, month, year) {
    const LUCKY = "2468013579";
    let lcknmbr = (day + month + year) % 10;
    return LUCKY[lcknmbr];
}

function f09() {
    document.getElementById("check_result").innerHTML  = "";
    document.getElementById("check_error").innerHTML  = "";

    let date =  Number(document.getElementById("dd").value);
    let month =  Number(document.getElementById("mm").value);
    let year =  Number(document.getElementById("yy").value);
    let check_error = checkDate(date, month, year);
    if (check_error !== "") {
        document.getElementById("check_error").innerHTML  = check_error;
        return;
    }
    let cryear = new Date().getFullYear();
    let pryear = cryear -year;
    let LuckYNumber = luckyNumber(date, month, year);
    document.getElementById("check_result").innerHTML  = "Your date is right and your are "+pryear+" years old."+ "<br>"+"Your lucky number is "+LuckYNumber;
}
