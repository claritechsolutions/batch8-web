// forEach condition example
//const arr =[1,2,3,4,5,6];
// arr.forEach(i=>{if (i>2) {
//     console.log('yes')
    
// } else {
//     console.log('no')
// }

//includes() condition example
//     const arr=[1,2,3,4,5,6,7];
//     let value=arr.includes(9);
// console.log(value);
// filter method example
// const arr=[1,2,3,4,5,6];
// const arrfilter=arr.filter(num=>num>3)
// //     const arrfilter=arr.filter(num=>num>3);
// console.log(arrfilter);
// console.log(arr);

//map method example
// const arr=[1,2,3,4,5,6];
// const oneAdded=arr.map(num=>num+1);
// console.log(oneAdded);
// console.log(arr);



//reduce method example(daut)*********************************
// const arr=[1,2,3,4,5,6];
// const sum =arr.reduce((total,value)=>total+value, 0);
// console.log(sum);
//some method
// s
// //every method 
// const arr=[1,2,3,4,5,6];
// const greaterFour=arr.every(num=>num>4);
// console.log(greaterFour);
// const lessTen=arr.every(num=>num<10);
// console.log(lessTen);

//sort method
const arr = [1, 2, 3, 4, 5, 6];
const alpha= ['e','a','c','u','y'];
descOrder = arr.sort((a,b)=>a>b? -1:1);
console.log(descOrder);
ascOrder = alpha.sort((a,b)=>a>b? 1:-1);
console.log(ascOrder);

//Array.from
// const name = 'DsCode';
// const nameArray = Array.from(name);
// console.log(name);
// console.log(nameArray);




//Array.of example
// const nums = Array.of(1, 2, 3, 4, 5, 6, 7);
// console.log(nums);