//+ button click function increment 
//- button click function increment 
// output bind with output div

var val = 0;
//   var test = document.getElementById("output").innerHTML;
//   console.log(test);
document.getElementById("Result").innerText = val;
//document.write(val);

function pluse1() {
    val = val + 1;
    var inText = document.getElementById("Result").innerText = val;

    // alert("add one");
    // console.log(inText);
}

function minus1() {
    // alert("minus-1");
    val = val - 1;
    var inHtml = document.getElementById("Result").innerHTML = val;
    //  console.log(inHtml)

}
