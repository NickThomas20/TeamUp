// var mysql = require('mysql');
//
// var con = mysql.createConnection({
//     host:'coms-319-g23.class.las.iastate.edu',
//     user:'team1',
//     password: 'team1comsVM@319',
//     database: 'TeamUp'
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected to server");
//
// })


// this function will validate
function validate() {
    var first = names(document.forms["Sign-Up Info"]["first"].value, "first", "FirstName");
    var last = names(document.forms["Sign-Up Info"]["last"].value, "last", "LastName");
    var email = emailCheck(document.forms["Sign-Up Info"]["email"].value, "email", "Email");
    var number = numberCheck(document.forms["Sign-Up Info"]["phone"].value, "phone", "Number");
    var password = passwordCheck(document.forms["Sign-Up Info"]["pass"].value, "pass", "Password")
    var confirm = confirmpass(document.forms["Sign-Up Info"]["confirm"].value, "confirm", "Confirm")
    var username = names(document.forms["Sign-Up Info"]["user"].value, "user", "userName")
    nextPage(first, last, email, number, password, confirm, username);
}

function nextPage(first, last, email, number, password, confirm, username) {
    if(first === true && last === true && email === true && number === true && password === true && confirm === true && username === true) {
        localStorage["username"] = document.forms["Sign-Up Info"]["user"].value;
        localStorage["firstname"] = document.forms["Sign-Up Info"]["first"].value;
        localStorage["lastname"] = document.forms["Sign-Up Info"]["last"].value;
        localStorage["phonenum"] = document.forms["Sign-Up Info"]["phone"].value;
        localStorage["useremail"] = document.forms["Sign-Up Info"]["email"].value;

        document.location.href = "Login.html"; //Comment for Nedim I changed this to Login isntead of test page
    }
}

function names(entry, id, elementId) {
    var result = alphanumericCheck(entry);
    var message = getMessage(Boolean(result), id);
    document.getElementById(elementId).appendChild(message);
    return result;
}

function emailCheck(email, id, elementId) {
    var result;
    aSplit = email.split('@');
    if (aSplit.length == 2 && alphanumericCheck(aSplit[0])) {
        pSplit = aSplit[1].split('.')
        if (pSplit.length == 2 && alphanumericCheck(pSplit[0] + pSplit[1])) {
            result = true;
        }
    }
    else {
        result = false;
    }
    var message = getMessage(Boolean(result), id);
    document.getElementById(elementId).appendChild(message);

    return result;
}

function numberCheck(number, id, elementId) {
    var result;
    numSplit = number.split('-');
    if(numSplit.length == 3 && numericCheck(numSplit[0]) && numericCheck(numSplit[1]) && numericCheck(numSplit[2])) {
        if(numSplit[0].length == 3 && numSplit[1].length == 3 && numSplit[2].length == 4) {
            result = true;
        }
    }
    else if(number.length == 10 && numericCheck(number)) {
        result = true;
    }
    else {
        result = false;
    }
    var message = getMessage(Boolean(result), id);
    document.getElementById(elementId).appendChild(message);

    return result;
}

function passwordCheck(password, id, elementId){
    var result;
    var characters = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8,16}$/;
    if(password != null && password.match(characters)) {
        result = true;
    }
    else {
        result = false;
    }

    var message = getMessage(Boolean(result), id);
    document.getElementById(elementId).appendChild(message);

    return result;
}

function confirmpass(confirm, id, elementId) {
    var result;

    if(confirm && confirm.match(document.forms["Sign-Up Info"]["pass"].value)) {
        result = true;
    }
    else {
        result = false;
    }

    var message = getMessage(Boolean(result), id);
    document.getElementById(elementId).appendChild(message);

    return result;
}

function numericCheck(entry) {
    let nums = /^[0-9]+$/;
    if (entry != null && entry.match(nums)) {
        return true;
    }
    else {
        return false;
    }
}

function alphanumericCheck(entry) {
    let lettersAndNums = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(lettersAndNums)) {
        return true;
    }
    else {
        return false;
    }
}

function getMessage(bool, id) {
    var label = document.getElementById("labelNotify" + id);
    if (label == null) {
        label = document.createElement("LABEL");
        label.id = "labelNotify" + id;
        label.setAttribute( 'class', 'errorMessage' );
    }
    if (id === "email") {
        label.innerHTML = bool ? "" : "Must be in the form xxx@xxx.xxx. x should be alphanumeric (e.g. no special symbols).";
    }
    else if(id === "phone") {
        label.innerHTML = bool ? "" : "Must be in the form xxx-xxx-xxxx or xxxxxxxxxx. x should be numeric";
    }
    else if(id === "pass") {
        label.innerHTML = bool ? "" : "Must be between 8 and 16 character, must have a letter, number, and symbol.";
    }
    else if(id === "confirm") {
        label.innerHTML = bool ? "" : "Passwords must match.";
    }
    else {
        label.innerHTML = bool ? "" : "Must contain only alphabetic or numeric characters.";
    }
    return label;
}