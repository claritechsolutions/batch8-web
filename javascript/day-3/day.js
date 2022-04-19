//+ button click function increment 
//- button click function increment 
// output bind with output div

var data = 0;

//   var test = document.getElementById("output").innerHTML;
//   console.log(test);
document.getElementById("output").innerText = data;
//document.write(data);

function pluseOne() {
    data = data + 1;
    var inText = document.getElementById("output").innerText = data;

    // alert("add one");
    // console.log(inText);
}

function minusOne() {
    // alert("minus-1");
    data = data - 1;
    var inHtml = document.getElementById("output").innerHTML = data;
    //  console.log(inHtml)

}
//Arithmetic Operation from user input using form input elements
function add() {

    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    addition = a + b;
    sub = a - b;
    multi = a * b;
    div = a / b;
    mod = a % b;
    // document.getElementById("addition").value = addition;
    // document.getElementById("sub").value = sub;
    // document.getElementById("multi").value = multi;
    // document.getElementById("div").value = div;
    // document.getElementById("mod").value = mod;

    document.write("Addition is:" + addition);
    document.write("<br/>Substraction is:" + sub);
    document.write("<br/>multiplication is:" + multi);
    document.write("<br/>Division is:" + div);
    document.write("<br/>Modulus is:" + mod);
}