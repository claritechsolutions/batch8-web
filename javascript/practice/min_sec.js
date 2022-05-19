function minTosec() {
    var a = parseInt(document.getElementById('number1').value);
    var output = a * 60;
    document.getElementById('result_para').innerHTML = (`${a} minute is equal to ${output} seconds`);

}
function secTomin() {
    var b = parseInt(document.getElementById('number2').value);
    var output1 = b / 60;
    document.getElementById('result_para').innerHTML = (`${b} second is equal to ${output1} minutess`);

}