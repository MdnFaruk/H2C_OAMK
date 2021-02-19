/*
 * Student name : Md Faruk
 * Project name : Prizes and person(JS)
 * Started date : 13th Feb,2021
 * Ended   date : 15th Feb,2021
 * 
 */ 

const ERROR_msz1 = "Insert Prize.";
const ERROR_msz2 = "Insert Person.";
let allPrizes = [];
let allPersons = [];

document.getElementById("prize").value = "";
document.getElementById("person").value = "";

document.getElementById("prize").focus();   // Set cursor to input

function newPrize() {
    document.getElementById("prizeError").innerHTML = "";
    prizeName = document.getElementById("prize").value;

    if (prizeName == "") {
        document.getElementById("prizeError").innerHTML = ERROR_msz1;
    } else {
        allPrizes.push(prizeName);
        printPrizes();
    }
    document.getElementById("prize").value = "";
}

function newPerson() {
    document.getElementById("personError").innerHTML = "";
    personName = document.getElementById("person").value;

    if (personName == "") {
        document.getElementById("personError").innerHTML = ERROR_msz2;
    } else {
        allPersons.push(personName);
        printPersons();
    }
    document.getElementById("person").value = "";
}

function printPrizes() {
    document.getElementById("prizes").innerHTML = "";

    for(let i=0; i<allPrizes.length; i++) {
        document.getElementById("prizes").innerHTML += "<li>" + allPrizes[i] + "</li>";
    }   
    document.getElementById("prizesAmount").innerHTML = allPrizes.length;
}

function printPersons() {
    document.getElementById("persons").innerHTML = "";
    
    for(let i=0; i<allPersons.length; i++) {
        document.getElementById("persons").innerHTML += "<li>" + allPersons[i] + "</li>";
    }   
    document.getElementById("personsAmount").innerHTML = allPersons.length;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function toPerson() {
    
    let element = getRndInteger(0,allPersons.length);
    let i = 0;

    if (allPrizes.length === 0) {
        alert("No more prizes.");
        return;
    } else if (allPersons.length === 0) {
        alert("No more persons.");
        return;
    }

    while (i < 1) {
        document.getElementById("personAndPrice").innerHTML += "<li>" + allPrizes[i] + ":" + allPersons[element] + "</li>";
        allPersons.splice(element,1); 
        allPrizes.splice(i,1);
        printPrizes();
        printPersons();
        i++;
    }


}