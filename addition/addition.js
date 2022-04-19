function answer(){
    var n1 = parseInt(document.getElementById('firstN').value);
    var n2 = parseInt(document.getElementById('secondN').value);
    var sum = n1 + n2;
    
    document.getElementById('ans').value = sum;
  }