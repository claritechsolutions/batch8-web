//array to string
//const developerPositions=["abc", "react developer", "php developer", "new developer"];
//console.log(developerPositions.toString());

// Join array value & make array as string
//console.log(developerPositions.join('~'));
//console.log("Third developer position=>",developerPositions[2]);
//console.log("Total elements=>", developerPositions.length);
//console.log("Last  element index=>", developerPositions.length-1);
//console.log("last element=>", developerPositions[3]);

//Find the Index of an Item in an Array
// console.log("Index of developer position=>",developerPositions.indexOf("react developer"));
// if(developerPositions.indexOf("react developer")==0){
//     console.log("Yes javascript exists");
//  } else{
//      console.log("No javascript does not exist");
// }
//  
//append value into Array
//PUSH oparation 
// developerPositions.push("UI Developer");
// console.log("developerpositions=>", developerPositions);
// console.log("length of developerpositions=>" ,developerPositions.length);

//POP operation
//developerPositions.pop();
//console.log("developerpositions=>", developerPositions);
const developerPositions = ["React Developer", "iOS Developer", "Java Developer", "Php Developer", "Backend Developer"];
// console.log("Remain Developers -->", developerPositions.splice(2));
// console.log("Remain Developers -->", developerPositions.splice(-2));
// console.log("developer=>", developerPositions.shift());
// console.log("developerpositions=>", developerPositions);
// Remove multiple items from the beginning - SPLICE
//  */
// const startElement = 0;
// const deleteCount = 0;
// console.log("developerPositions -->", developerPositions.splice(startElement, deleteCount))

// /**
//  * Add a new first into Array - unShift
//  */

 developerPositions.unshift("AJAX DEVELOPER");
developerPositions.push("Deveops");
console.log("developers :: PUSH ->", developerPositions.push("Deveops"));
console.log("developerPositions -->", developerPositions)

console.log("developers :: UNSHIFT ->", developerPositions.unshift("AJAX DEVELOPER"));
console.log("developerPositions -->", developerPositions)