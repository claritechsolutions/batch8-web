function validation(){

    var user = document.getElementById('user').value ;
    var password = document.getElementById('password').value ;
    //variable name need not be same as id just like password=>password
    var conpasss = document.getElementById('conpass').value ;
    var mob = document.getElementById('mobnum').value ;
    var emaill = document.getElementById('email').value ;

    if(user ==""){
    document.getElementById('username').innerHTML=" **please fill the username field";
    return false;
    }
    if((user.length<2 )||(user.length>20)) {
        document.getElementById('username').innerHTML=" **user length must be between 2 and 20";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML=" **only characters are allowed";
        return false;
    }

    if(password =="")  {
    document.getElementById('passwords').innerHTML=" **please fill the password field";
    return false;
    }

    if((password.length<=5 )||(user.length>20)) {
    document.getElementById('passwords').innerHTML=" **password length must be between 5 and 20";
    return false;
    }

    if(password!=conpasss){
        document.getElementById('confpass').innerHTML=" **passwords are not matching";
        return false;
        }

    if(conpasss ==""){
    document.getElementById('confpass').innerHTML=" **please fill the confirm password field";
    return false;
    }
    if(password!=conpasss){
        document.getElementById('confpass').innerHTML=" **passwords are not matching";
        return false;
        }
    if(mob ==""){
    document.getElementById('mobnumb').innerHTML=" **please fill the mobile number field";
    return false;
    }
if(isNaN(mob)){
    document.getElementById('mobnumb').innerHTML=" **user must write digits only not characters";
    return false;
}
if(mob.length!=10){
    document.getElementById('mobnumb').innerHTML=" **mobile number must be 10 digits only";
    return false;
}

    if(emaill ==""){
    document.getElementById('emails').innerHTML=" **please fill the email-ID field";
    return false;
}
if(emaill.indexOf('@')<= 0){
    document.getElementById('emails').innerHTML=" **@ Invalid position";
    return false;
}
if((emaill.charAt(emaills.length-4)!='.') && (emaills.charAt(emaills.length-3)!='.')){

    document.getElementById('emails').innerHTML=" ** . Invalid position";
    return false;
}

}