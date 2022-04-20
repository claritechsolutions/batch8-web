function tryIt() {
    let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too yonug ":"Old enough";
     document.getElementById("demo").innerHTML = voteable + " to vote.";
}