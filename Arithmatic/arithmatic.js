function Addition(){

    var val1=parseInt(document.getElementById("value1").value);
    var val2=parseInt(document.getElementById("value2").value);
    var ans=document.getElementById("Answer");
    ans.value = val1+val2;
}
function Substraction(){

    var val1=parseInt(document.getElementById("value1").value);
    var val2=parseInt(document.getElementById("value2").value);
    var ans=document.getElementById("Answer");
    ans.value = val1-val2;
}
function Multi(){

    var val1=parseInt(document.getElementById("value1").value);
    var val2=parseInt(document.getElementById("value2").value);
    var ans=document.getElementById("Answer");
    ans.value = val1*val2;

}
function divide(){
    var val1=parseInt(document.getElementById("value1").value);
    var val2=parseInt(document.getElementById("value2").value);
    var ans=document.getElementById("Answer");
    ans.value = val1/val2;
}
function modulas(){

    var val1=parseInt(document.getElementById("value1").value);
    var val2=parseInt(document.getElementById("value2").value);
    var ans=document.getElementById("Answer");
    ans.value = val1%val2;
}
