function displayInfo() {
    document.getElementById("user").innerHTML = "Username: " + localStorage["username"];
    document.getElementById("firstname").innerHTML = "First Name: " + localStorage["firstname"];
    document.getElementById("lastname").innerHTML = "Last Name: " + localStorage["lastname"];
    document.getElementById("email").innerHTML = "Email: " + localStorage["useremail"];
    document.getElementById("number").innerHTML = "Phone Number: " + localStorage["phonenum"];
}

function validate() {
    var username = names(document.forms["ChangeInfo"]["usern"].value, "usern", "userName")
    var password = passwordCheck(document.forms["ChangeInfo"]["pass"].value, "pass", "Password")
    var confirm = confirmpass(document.forms["ChangeInfo"]["confirmp"].value, "confirmp", "Confirm")

    isSuccess(username, password, confirm)
}

function isSuccess(username, password, confirm) {
    if(username === true && password === true && confirm === true) {
        localStorage["username"] = document.forms["ChangeInfo"]["usern"].value;
        document.getElementById("checkSuccess").innerHTML = "Successfully changed!";
    }
}

function names(entry, id, elementId) {
    var result = alphanumericCheck(entry);
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

    if(confirm && confirm.match(document.forms["ChangeInfo"]["pass"].value)) {
        result = true;
    }
    else {
        result = false;
    }

    var message = getMessage(Boolean(result), id);
    document.getElementById(elementId).appendChild(message);

    return result;
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
    if(id === "pass") {
        label.innerHTML = bool ? "" : "Must be between 8 and 16 character, must have a letter, number, and symbol.";
    }
    else if(id === "confirmp") {
        label.innerHTML = bool ? "" : "Passwords must match.";
    }
    else {
        label.innerHTML = bool ? "" : "Must contain only alphabetic or numeric characters.";
    }
    return label;
}