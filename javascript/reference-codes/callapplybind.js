// let name1 = {
//   firstName: "Ankit",
//   lastName: "Varia"
// }

// let printFullName = function (howtown, state) {
//   console.log(`${this.firstName} ${this.lastName} belongs from ${howtown} & state is ${state}`)
// }

// // Call & Apply method
// printFullName.call(name1, "Pune", "Maharashtra");
// printFullName.apply(name1, ["Vadodara", "Gujarat"])

// let name2 = {
//   firstName: "Gorakh",
//   lastName: "Kharat"
// }

// // Bind Method
// let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra")
// printMyName();

let name1 = {
    firstName:"Archana",
    lastName:"Jagdale"
}
let printFullName=function (howetown,state){
    console.log(`My name is ${this.firstName} ${this.lastName}  from  ${hometown} ,${state}`);
}
printFullName.call(name1,"mumbai", "karnataka");