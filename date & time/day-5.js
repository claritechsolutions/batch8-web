setInterval(mydate, 1000);
function mydate(){
    let Time = new Date();
    let hr = Time.getHours();
    let min = Time.getMinutes();
    let sec = Time.getSeconds();
    let day = Time.getDate();
    let month = Time.getMonth() + 1 ;
    let year = Time.getFullYear();
    let mk = Time.getDay();


    hr=(hr<10) ? ("0"+hr) :hr;
    min=(min<10) ? ("0"+min) :min;
    sec=(sec<10) ? ("0"+sec) :sec;
    day=(day<10) ? ("0"+day) :day;
    month=(month<10) ? ("0"+month) :month;
    
    let CurrentTime = day+ "/" + month + "/" + year + "     " + hr + ":" +  min + ":" + sec

    arr = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    document.getElementById("Day").innerHTML=arr[mk];

    document.getElementById("datetime").innerHTML=CurrentTime;
}
