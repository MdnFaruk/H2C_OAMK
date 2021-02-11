/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/

/*
 * Student name :Md Faruk
 * Started date :
 * Ended   date :
 * 
 */

let length_cm1_total = 0;
let length_m1_total = 0;
let plants1_total = 0;
let length_cm2_total = 0;
let length_m2_total = 0;
let plants2_total = 0;
let family_total = 4;

// define here the common functions calculateHedgeRow and getMeters
function calculateHedgeRow(plant, distance) {
    return plant * distance;

}

function getMeters (distance) {
    return distance/100;
}

function lt01() {
    let plants1 = Number(document.getElementById("plants1").value);
    let distance1 = Number(document.getElementById("distance1").value);

    let lengthTotal = calculateHedgeRow(plants1,distance1);
    let lengthInMeter = getMeters(lengthTotal);
    length_cm1_total = length_cm1_total + lengthTotal;
    length_m1_total = length_m1_total + lengthInMeter;
    plants1_total = plants1_total + plants1;
    document.getElementById("length_cm1").innerHTML = lengthTotal;
    document.getElementById("length_m1").innerHTML = lengthInMeter;
    document.getElementById("length_cm1_total").innerHTML = length_cm1_total;
    document.getElementById("length_m1_total").innerHTML = length_m1_total;
    document.getElementById("plants1_total").innerHTML = plants1_total;
}


function lt02() {
    if (family_total > 0) {

        let plants2 = Number(document.getElementById("plants2").value);
        let distance2 = Number(document.getElementById("distance2").value);

        let lengthTotal = calculateHedgeRow(plants2,distance2);
        let lengthInMeter = getMeters(lengthTotal);
        length_cm2_total = length_cm2_total + lengthTotal;
        length_m2_total = length_m2_total + lengthInMeter;
        plants2_total = plants2_total + plants2;
        document.getElementById("length_cm2").innerHTML = lengthTotal;
        document.getElementById("length_m2").innerHTML = lengthInMeter;
        document.getElementById("length_cm2_total").innerHTML = length_cm2_total;
        document.getElementById("length_m2_total").innerHTML = length_m2_total;
        document.getElementById("plants2_total").innerHTML = plants2_total;

        family_total--;

    } else {
        document.getElementById("finish").innerHTML = "All data entered.";
    }

}

function lt03() {  
    
    let length_cm3_total= 0;
    let length_m3_total = 0;
    let plants3_total = 0;

    let plants3 = Number(document.getElementById("plants3").value);
    let distance3 = Number(document.getElementById("distance3").value);

    let lengthTotal = calculateHedgeRow(plants3,distance3);
    let lengthInMeter = getMeters(lengthTotal);
    length_cm3_total = 4 * lengthTotal;
    length_m3_total = 4 * lengthInMeter;
    plants3_total = 4 * plants3;
    document.getElementById("length_cm3").innerHTML = lengthTotal;
    document.getElementById("length_m3").innerHTML = lengthInMeter;
    document.getElementById("length_cm3_total").innerHTML = length_cm3_total;
    document.getElementById("length_m3_total").innerHTML = length_m3_total;
    document.getElementById("plants3_total").innerHTML = plants3_total;
}