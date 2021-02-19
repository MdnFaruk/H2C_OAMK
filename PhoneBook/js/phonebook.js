class PhoneBook {
    constructor (lastName, firstName, phoneNumber, birthYear) {
        this._lastName = lastName;
        this._firstName = firstName;
        this._phoneNumber = phoneNumber;
        this._birthYear = birthYear;
    }

    personAge() {
        let age = new Date().getFullYear() - this._birthYear;
        return age;
    }

    printName() {
        return this._firstName + ", " + this._lastName;
    }

    set lastName(ln) {
    this._lastName = ln;
    }

    set firstName(fn) {
        this._firstName = fn;
    }
    
    set phoneNumber(pn) {
        this._phoneNumber = pn;
    }

    set birthYear(by) {
        this._birthYear = by;
    }

    get lastName() {
        return this._lastName;
    }

    get firstName() {
        return this._firstName;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    get birthYear() {
        return this._birthYear;
    }
}

let totalFriends = {
    allFriends: [],

    saveFriend: function (frnd) {
        this.allFriends.push(frnd);
    },

    removeFriend: function (index) {
        this.allFriends.splice(index,1);
    },

    ageAverage: function() {
        let totalAge = 0;
        for (let i = 0; i < this.allFriends.length; i++) {
            let frnd = this.allFriends[i];
            totalAge += frnd.personAge();
        }
        let average = totalAge / this.allFriends.length;
        return Math.round(average);
    }
};

function startData() {
    let friend = new PhoneBook ("Faruk", "Md", 358123456789, 1992);
    totalFriends.saveFriend(friend);
    friend = new PhoneBook ("Zia", "Hq", 358123409278, 1990);
    totalFriends.saveFriend(friend);
    friend = new PhoneBook ("Moli", "Sari", 358123475201, 1995);
    totalFriends.saveFriend(friend);
    print();
    cancle();
}

function print() {
    let result = document.getElementById("friend");
    result.innerHTML = "";
    document.getElementById("averageNdNumber").innerHTML = "";

    for (let i = 0; i < totalFriends.allFriends.length; i++) {
        let oneFriend = totalFriends.allFriends[i];
        result.innerHTML += "<label class = 'output' onclick='printOne("+i+")'>" + oneFriend.printName() + "</label>";
    }
 
    document.getElementById("averageNdNumber").innerHTML = "Average age: "+totalFriends.ageAverage() + "<br>"+
    "Number of friends: " + totalFriends.allFriends.length;
    document.getElementById("oneFriend").innerHTML = "";
}

function printOne(index) {
    let frnd = totalFriends.allFriends[index];

    document.getElementById("oneFriend").innerHTML = frnd.firstName + ", " + frnd.lastName + "<br>" +
    "phone: " + frnd.phoneNumber + "<br>" + "Birth Year: " + frnd.birthYear + "<br>" + "Age: " +frnd.personAge()+ "<br>" +
    "<button onclick='remove(" + index + ")'>Remove</button>" + "<button onclick='edit("+ index + ")'>Edit</button>";
    
}

function remove(element) {
    totalFriends.removeFriend(element);
    print();
}

function edit(element) {
    let friend = totalFriends.allFriends[element];

    document.getElementById("lastname").value = friend.lastName;
    document.getElementById("firstName").value = friend.firstName;
    document.getElementById("phone").value = friend.phoneNumber;
    document.getElementById("birthyear").value = friend.birthYear;
    document.getElementById("index").value = element;
}
function save() {
    if (document.getElementById("index").value === "") {
        let friend = new PhoneBook(
            document.getElementById("lastname").value,
            document.getElementById("firstName").value,
            document.getElementById("phone").value,
            Number(document.getElementById("birthyear").value)
        );
        totalFriends.saveFriend(friend);
    } else {
        let i = Number(document.getElementById("index").value);
        let oneFriend = totalFriends.allFriends[i];
    
        oneFriend.lastName = document.getElementById("lastname").value;
        oneFriend.firstName = document.getElementById("firstName").value;
        oneFriend.phoneNumber = document.getElementById("phone").value;
        oneFriend.birthYear = Number(document.getElementById("birthyear").value);
    }
    print();
    cancle();
}

function cancle() {
    document.getElementById("lastname").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("birthyear").value = "";
}