function prom (number){
    return new Promise(function(resolve, reject)
    {
        setTimeout (function()
        {
            console.log("hey.. I am in pending state");
            if(number%2==0){
                console.log("The number is even");
            }
            else{
                console.log("the number is odd");
            }
        }, 1000);

    }
    )
}
prom(24).then((result)=>{
    console.log("Result=>", Result);
}).catch((error)=>
{
    console.log("error=>", error);
})