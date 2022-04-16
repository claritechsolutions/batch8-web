function text1()
{
   document.getElementById('p1').value='';

}
function result(p1){
   document.getElementById('p1').value +=p1;

}
function cal()
{
   var cal_result = 0;
   cal_result = document.getElementById('p1').value;
   document.getElementById('p1').value = eval(cal_result);

}