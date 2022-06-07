//this is the function that will be called when information is submitted
function validationForm(){
    //check the username and password
    var c = check();

    //if the username and password is valid, move to the next page after half a second
    if(c){
        setTimeout(nextPage, 500);//waits .5 seconds and will go to the next page
    }
    return false;
}

//moves to the next page
function nextPage(){
    //open the next page
    window.open("Class.html", "_self");//Changed file name incase of errors thrown
}

//overall check function made for both username and password
function check(){
    var pass = true;

    //get the values inputted for the username and password
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password_id").value;

    //also get the error elements, so we can notify the user if something is incorrect
    var messageUsername = document.getElementById("userNameError");
    var messagePassword = document.getElementById("passwordError");

    //if the username is numbers and/or letters, it is valid. Pass
    if(alphanumeric(userName)){
        pass = pass && true;
    }else{
        //username was not valid. Do not pass
        pass = pass && false;
        //show the error message
        messageUsername.style.display = 'block';
    }

    //check if the password is valid
    if(passwordCheck(password)){
        pass = pass && true;
    }else{
        //the password was not valid. Do not pass
        pass = pass && false;
        //show the error message
        messagePassword.style.display = 'block';
    }
    return pass;
}

//checks to see if it's numbers or letters
function alphanumeric(str){
    return /^[A-z0-9]+$/.test(str);
}

//this password checker has to be between 8-16 characters which contains at least one numeric digit and a special character
function passwordCheck(str){
    return/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{8,16}$/.test(str);
}
