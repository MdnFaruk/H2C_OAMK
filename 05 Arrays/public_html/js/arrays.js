/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    License    : CC-BY-4.0
*/

let numbers = [15, 4, 68, 23, 22, 7, 15, 10, 32, 15];

// copy and paste here the random number generator function
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


function t01a() {
    document.getElementById("result_a1").innerHTML  = "";
    document.getElementById("result_a2").innerHTML  = "";

    document.getElementById("result_a1").innerHTML  = numbers;
    for (let i=0; i<numbers.length; i++) {
        document.getElementById("result_a2").innerHTML  += numbers[i]+" ";
    }
}

function t01b() {
    document.getElementById("result_b").innerHTML  = "";
    let lngth = numbers.length;
    for (let i=lngth-1; i>=0; i--) {
        document.getElementById("result_b").innerHTML  += numbers[i]+" ";
    }

}

function t01c() {
    document.getElementById("result_c1").innerHTML  = "";
    document.getElementById("result_c2").innerHTML  = "";
    let lngth = numbers.length;
    let sum = 0;
    let average = 0;
    for (let i=lngth-1; i>=0; i--) {
        sum += numbers[i];
    }
    average = sum / lngth;
    document.getElementById("result_c1").innerHTML  = sum;
    document.getElementById("result_c2").innerHTML  = average;
    
}

function t01d() {
    document.getElementById("result_d1").innerHTML  = "";
    document.getElementById("result_d2").innerHTML  = "";

    numbers.sort(function SmallAndBig(a,b) { return a-b});  // Ascending order
    document.getElementById("result_d1").innerHTML  = numbers[0];
    document.getElementById("result_d2").innerHTML  = numbers[9];
    
}

function t01e() {
    document.getElementById("result_e").innerHTML  = "";

    numbers.sort(function SmallAndBig(a,b) { return a-b});

    document.getElementById("result_e").innerHTML  = numbers.join(" ")+" ";
}

function t01f() {
    let numbers = [];
    for(let i=0; i<20; i++) {
        let element = getRndInteger(1, 21);
        numbers.push(element);
    }
    t01a();
    t01b();
    t01c();
    t01d();
    t01e();
}

function t02() {  
    let jokers = [];
    for(let i=0; i<7; i++) {
        let element = getRndInteger(0, 9);
        jokers.push(element);
    }
    document.getElementById("joker").innerHTML  = jokers.join(" ")+" ";
}

function t03() {
    let ltnmbr = []; 

    for(let i=0; i<=40; i++) {
        ltnmbr.push(0);
    }

    let i = 0;
    while (i < 7) {
        let element = getRndInteger(1,41);
        if (ltnmbr[element] === 0) {
            ltnmbr[element] = 1;
            i++;
        }
    }
    i = 0;
    while (i < 1) {
        let element = getRndInteger(1,41);
        if (ltnmbr[element] === 0) {
            ltnmbr[element] = 2;
            i++;
        }
    }
    document.getElementById("lotto").innerHTML  = "";
    document.getElementById("extra").innerHTML  = "";
    document.getElementById("plus").innerHTML  = "";
    
    for (i = 0; i < ltnmbr.length; i++) {
        if (ltnmbr[i] === 1) {
            document.getElementById("lotto").innerHTML  += i +" ";
        }else if (ltnmbr[i] === 2) {
            document.getElementById("extra").innerHTML  = i;
        }
    }
    let element = getRndInteger(1,41);
    document.getElementById("plus").innerHTML  = element;
}

function t04() {  
     
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let lng = numbers.length;
    let num = [];
    document.getElementById("random").innerHTML  = ""; 
    while (lng > 0) {
        let element = getRndInteger(0,lng);
        prnt = numbers[element];
        num.push(prnt);
        numbers.splice(element,1);
        lng--;
    }
    //numbers = numbers.splice(9,9);
    document.getElementById("random").innerHTML  = num.join(" ")+" ";
    
}

function t05() {    
    let dices = ["",
        '<img alt="dice 1" src="img/noppa1.png">',
        '<img alt="dice 2" src="img/noppa2.png">',
        '<img alt="dice 3" src="img/noppa3.png">',
        '<img alt="dice 4" src="img/noppa4.png">',
        '<img alt="dice 5" src="img/noppa5.png">',
        '<img alt="dice 6" src="img/noppa6.png">'
    ];
    let six = 0;
    for(let i=0; i<100; i++) {
        random = dices[getRndInteger(1, 7)];
        if (random == dices[6]) {
            six++;
        }
        document.getElementById("dices").innerHTML  += random;
    }
    document.getElementById("sixes").innerHTML  = six;
}
