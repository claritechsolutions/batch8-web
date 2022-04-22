//Arithmetic Operation from user input using form input elements
function allIN1() {

    var p = parseInt(document.getElementById("num1").value);
    var q = parseInt(document.getElementById("num2").value);
    add = p + q;
    sub = p - q;
    mult = p * q;
    div = p / q;
    mod = p % q;
   
    document.write("Addition is:" + add);
    document.write("<br/>Substraction is:" + sub);
    document.write("<br/>multiplication is:" + mult);
    document.write("<br/>Division is:" + div);
    document.write("<br/>Modulus is:" + mod);
}