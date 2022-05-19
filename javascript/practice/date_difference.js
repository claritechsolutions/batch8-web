function no_ofdays(date2, date1){
    let diff_inTime= date2.getTime()-date1.getTime();
    let diff_indays= diff_inTime/(1000 * 60 * 60 * 24);
    return diff_indays;
    }
    var result= no_ofdays(new Date("2022,03, 19"),new Date("2021,03,19"));
    console.log(result);