function login(){
     var user=document.loginform.email.value;
     var pass=document.loginform.password.value;
     if(email=="" || password=="")
     {
       alert("please enter.....");
     }
     else{
       if((user == "c" || user == "p") && pass == "123")
       {
        alert("login succeesfuly");
        window.location = "page.html";
       }
       else{
         alert("please enter correct");
       }
     }

}