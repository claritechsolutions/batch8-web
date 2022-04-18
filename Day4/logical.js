// Logical Operators

// console.log(20-("10")-20);//-10
// console.log("10"+(10-10));//100
// console.log(10+10*"10");//110
// console.log(10+10*(10+10));//210


//&& And
/*T T =T
T F =F
F F =F */


//Or
/*T T =T
T F = T
F F =F */

//! Not
//F=T

var a = 10;
var b = 12;
console.log(a<9 && b<14)
             /*10<9  12>14 
              f & f=f */

console.log(a<12 && b>11)

console.log(!(a>b))
             /*10>12 
             false
             Convorted into True*/
// Not qual to print the aposite value 

console.log(!(a<9) && (b<14))
            /* ! 10<9 && 12<14
                false && true
               Not qual to False convorted into true
               true && true = true*/

             
