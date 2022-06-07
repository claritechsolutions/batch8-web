// function func1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             const error = true;
//             if (!error) {
//                 console.log('Function:Your promise has been resolved');
//                 resolve();
//             } else {
//                 console.log('Function:Your promise has not been resolved')
//                 reject('sorry not fulfilled');
//             }
//         }, 2000);
//     })
// }

// func1().then(function () {
//     console.log("Harry:Thanks or resolving");
// }).catch(function () {
//     console.log("very bad bro")
// })
setTimeout(() => {
    
}, timeout);
function prom(num){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("I am in pending state");
            if(num==2){
            
            resolve("i am equal");
            }else{
                reject("i am failed");
            }
        },1000);
    })
}
prom(2).then((result)=>{
    console.log("result",result);

}).catch((error)=>{
    console.log("error",error);

})