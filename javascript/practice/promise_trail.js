// // var promise=new Promise(function(resolve,reject) {
// //     const x = "geekforworld";
// //     const y = "geekforwold";
// //     if(x==y){
// //         resolve();
// //     }
// //     else{
// //         reject();
// //     }
// // });
// // promise.then(function()
// // {
// //     console.log("You are successfull");
// // }).catch(function(){
// //     console.log("you are failed");
// // })


// var promise=new Promise(function(resolve, reject){
//     const x = "ghytr";
//     const y ="jkhk";
//     if(x==y){
//         resolve();
//     }else{
//         reject();
//     }
// });
// promise.then(function(){
//     console.log("you are beautifull");
// }).catch(function(){
//     console.log("you are naughty");
// })
//type2:

function prom(complete){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            console.log("Hi I am in pending state");
            if(complete){
                resolve("I am successfull");
            }else{
                reject("I am failed");
            }
        }, 5000);
    })
}
prom(true).then((result)=>{
    console.log("result=>",result);
}).catch((error)=>{console.log("error=>",error);})
