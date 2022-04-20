function answer() {
  var n1 = parseInt(document.getElementById('firstN').value);
  var n2 = parseInt(document.getElementById('secondN').value);
  // var sum = n1 + n2;
  // document.getElementById('ans').value = sum;
  var selection = document.getElementById("operator").value;
  switch (selection) {
    case "+":
      var sum = n1 + n2;
      document.getElementById('ans').value = sum;
      break;
    case "-":
      var sum = n1 - n2;
      document.getElementById('ans').value = sum;
      break;
    case "X":
      var sum = n1 * n2;
      document.getElementById('ans').value = sum;
      break;
    case "/":
      var sum = n1 / n2;
      document.getElementById('ans').value = sum;
      break;
  }
}
function compare(){
  var n1 = parseInt(document.getElementById('firstN').value);
  var n2 = parseInt(document.getElementById('secondN').value);

  if(n1>n2){
    document.getElementById("greater than").innerHTML = n1+" is geater than "+n2;
  }
  else if(n1<n2){
    document.getElementById("greater than").innerHTML = n1+" is less than "+n2;
  }
  else {
    document.getElementById("greater than").innerHTML = n1+" is equal to "+n2;
  }
}