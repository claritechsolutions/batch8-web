
function opr() {
    debugger;
    let a = Number(document.getElementById("NO1").value);
    let b = Number(document.getElementById("NO2").value);
    let select = document.getElementById("select").value;

    switch (select) {
        case "Add":
            var c = a + b
            break;
        case "Sub":
            var c = a - b
            break;
        case "Mul":
            var c = a * b
            break;
        case "Div":
            var c = a / b
            break;

    }
    document.getElementById("ans").innerHTML = c;
}
