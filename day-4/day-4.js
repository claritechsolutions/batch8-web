function op() {
    let A = Number(document.getElementById("no1").value);
    let B = Number(document.getElementById("no2").value);
    let OPP = document.getElementById("select").value;

    switch (OPP) {
        case "add":
            ans = A + B;
            break;
        case "sub":
            ans = A - B;
            break;
        case "mul":
            ans = A * B;
            break;
        case "div":
            ans = A / B;
            break;
    }

    document.getElementById("ans").innerHTML = "Answer is  " + ans;

}