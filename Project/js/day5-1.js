

function myFunction() {
    
    var num1 =parseInt(document.getElementById("num1").value) ;
    var num2 = parseInt(document.getElementById("num2").value);
    var operation = document.getElementById("op").value;
    
    // document.getElementById("result").innerText=num1+num2;

 // document.write(result);
//  if else loop

      if(operation==="Addition"){
        document.getElementById("result").value = num1 + num2;
      }
      else if(operation==="Substraction"){
        document.getElementById("result").value = num1 - num2;

      }
      else if(operation==="Multiplication"){
        document.getElementById("result").value = num1 * num2;

      }
      else if(operation==="Division"){
        document.getElementById("result").value = num1 / num2;

      }
    //   switch operation
    switch(operation){
        case "Addition":
            document.getElementById("switch").value = num1 + num2;
            break
        case "Substraction":
            document.getElementById("switch").value = num1 - num2;
            break
        case "Multiplication":
            document.getElementById("switch").value = num1 * num2;
            break
        case "Division":
            document.getElementById("switch").value = num1 / num2;
            break
    }
      
       
           
    
}