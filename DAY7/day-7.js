let country = ["INDIA", "UK", "DENMARK", "FINLAND", "FRANCE", "ITALY", "US", "RUSSIA", "JAPAN"]
document.getElementById("str").innerHTML = (country.toString());
document.getElementById("join").innerHTML = (country.join(" >>>> "));
document.getElementById("index").innerHTML = (country.indexOf("INDIA"))
document.getElementById("index1").innerHTML = (country.indexOf("AUS"))
document.getElementById("include").innerHTML = (country.includes("DENMARK"))
document.getElementById("include1").innerHTML = (country.includes("CANADA"))
document.getElementById("push").innerHTML = (country.push("NEW ZEALAND"))
document.getElementById("push").innerHTML = country;
document.getElementById("pop").innerHTML = (country.pop("NEW ZEALAND"))
document.getElementById("pop").innerHTML = country;
document.getElementById("splice").innerHTML = (country.splice(2));
document.getElementById("splice1").innerHTML = (country.splice(-2));
document.getElementById("splice123").innerHTML = (country.splice(0,2));
document.getElementById("shift").innerHTML = (country.shift());
document.getElementById("shift").innerHTML = country;

document.getElementById("unshift").innerHTML = (country.unshift("CANADA"));
document.getElementById("unshift").innerHTML = country;


