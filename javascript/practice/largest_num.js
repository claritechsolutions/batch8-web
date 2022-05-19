
    var array=[23,45,32,67,21,78];
    array.forEach((element)=> {

        if (temp<element){
            temp=element;

        }
    });
 document.write(`The largest number in the array is ${temp}`);
