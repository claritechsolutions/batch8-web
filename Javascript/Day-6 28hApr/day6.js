//local storage

localStorage.setItem("Country", "India");
localStorage.setItem("name", "Bharat");
document.getElementById("local").innerHTML = localStorage.getItem("Country");

//session storage

sessionStorage.setItem("Batch name","React B8");
document.getElementById("local").innerHTML=sessionStorage.getItem("Batch name");