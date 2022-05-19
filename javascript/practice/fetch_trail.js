//
// POST Method
//  let options = {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'Archana Zanzane',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// }
// fetch('https://jsonplaceholder.typicode.com/posts',options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));


//PUT Method:
// let option2 = {
//   method: 'PUT',
//   body: JSON.stringify({
//     title: 'Archana Jagdale',
//     body: 'bar',
//     userId: 24,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// }
// fetch('https://jsonplaceholder.typicode.com/posts/4',option2)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//PATCH method
// let option3={

//   method: 'PATCH',
//   body: JSON.stringify({
// title: 'Archana Zanzane',


//   }),
//   headers:{
//     'content-type':'application/json; charset=UTF-8',

//   },
// }
// fetch('https://jsonplaceholder.typicode.com/posts/4',option3)
// .then ((response) => response.json())
// .then((json)=>console.log(json));



//DELETE Method
 

let option3 = {
  method: 'DELETE',
}

fetch('https://jsonplaceholder.typicode.com/posts/2', option3)
  .then((response) => response.json())
  .then((json) => console.log(json));