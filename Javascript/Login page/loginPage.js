var logInfo = [
  { name: "ashwinijain@gmail.com", password: "a1234" },
  { name: "kareenkapoor@gmail.com", password: "b1234" },
  { name: "aishwaryaria@gmail.com", password: "c1234" },
];

function checklog() {
  var uName = document.getElementById("uName").value;
  var passwordn = document.getElementById("password").value;

  let checkValidCredentials = false;
  logInfo.forEach((user) => {
    if (user.name === uName && user.password === passwordn) {
      checkValidCredentials = true;
      alert("Valid Credentials");
    }
  });

  if (!checkValidCredentials) {
    alert("Invalid Credentials");
  }
}
function addlog(){
  var uName = document.getElementById("uName1").value;
  var passwordn = document.getElementById("password1").value;
  logInfo.push({name:uName, password:passwordn});
  alert("New Credentials added");
}

function getall(){
  for (i = 0; i < logInfo.length; i++) {
  //  alert( "<br>" +"Name-"+logInfo[i].name);
  document.querySelector('#out').innerHTML += ( "<br>" +"Name-"+logInfo[i].name);
}

}