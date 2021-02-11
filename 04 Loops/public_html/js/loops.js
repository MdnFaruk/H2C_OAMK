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

function l01() {    
    let fn = document.getElementById("name1").value;
    let ln = document.getElementById("name2").value;
    
    
    for (let i = 0; i < 5; i++) {
        document.getElementById("first_name").innerHTML += fn + "<br>";
      }
    let i = 0;
    while (i < 5) {
      document.getElementById("last_name").innerHTML += ln + "<br>";
      i++;
    }

}

function l02() {    
  for (let i = 5; i < 51; i=i+5) {
    document.getElementById("five").innerHTML += i+" " ;
  }
  let i = 6;
  while (i < 61) {
    document.getElementById("six").innerHTML += i+" ";
    i=i+6;
  }

}

function l03() {
  document.getElementById("stars1").innerHTML = "";
  document.getElementById("stars2").innerHTML = "";

  let amount = Number(document.getElementById("amount").value);
  let stars = "*";
  for (let i = 0; i < amount; i++) {
    document.getElementById("stars1").innerHTML += stars +"<br>" ;
    stars = stars + "*";
  }
  stars = "*";
  let j = 0;
  while (j < amount) {
    document.getElementById("stars2").innerHTML += stars +"<br>";
    stars = stars + "*";
    j++;
  }

}

function l04() {
  for (let i = 10; i > -11; i--) {
    document.getElementById("numbers1").innerHTML += i+" " ;
  }
  for (let i = -20; i < 21; i+=2) {
    document.getElementById("numbers2").innerHTML += i+" " ;
  }
  for (let i = 29; i > 0; i=i-2) {
    document.getElementById("numbers3").innerHTML += i+" " ;
  }


}

function l05() {
  let min = Number(document.getElementById("min").value);
  let max = Number(document.getElementById("max").value);

  for (let i = min; i <= max; i++) {
    if (i % 3 === 0){
      document.getElementById("divisibility3").innerHTML += i+" ";
    }  
  }
  for (let i = min; i <= max; i++) {
    if (i % 5 === 0){
      document.getElementById("divisibility5").innerHTML += i+" ";
    }  
  }

}

// copy and paste here the random number generator function 
// and use it in the following functions
function f06() {
  let randomNumber = 0;
  randomNumber = Math.floor(Math.random() * 2); 
  return randomNumber;
}



function l06() {   
  document.getElementById("zeros").innerHTML = "";
  document.getElementById("ones").innerHTML = "";
    let randm;
    let count0 = 0;
    let count1 = 0;
    for (let i = 0; i < 1000; i++) {
    randm = f06();
    if (randm ===  0) {
       count0++;
    }
    else if (randm === 1) {
      count1++;
   }
   document.getElementById("zeros").innerHTML = count0;
   document.getElementById("ones").innerHTML = count1;
}

}

function l07() {
  document.getElementById("week").innerHTML = "";
  document.getElementById("joker").innerHTML = "";
  let randomNumber1 = 0;
  randomNumber1 = Math.floor(Math.random() * 52) + 1; 
  document.getElementById("week").innerHTML = randomNumber1;
  
  for (let i = 0; i < 7; i++) {
    
    document.getElementById("joker").innerHTML += Math.floor(Math.random() * 10)+" ";
  }
}

function l08() {
  let mmultiplier = Number(document.getElementById("multiplier").value);
  for (let i = 0; i < 11; i++) {
    document.getElementById("table").innerHTML += mmultiplier + " * " + i +" = " +mmultiplier * i +"<br>";
  }

}

function l09() {
    const space = ";&nbsp;&nbsp;";
  for (let j = 0; j < 11; j++){

    for (let i = 0; i < 11; i++) {
      document.getElementById("multiplication").innerHTML += j + " * " + i +" = " + i * j + ";" + space;
    }
    document.getElementById("multiplication").innerHTML += "<br>"
  }
}

