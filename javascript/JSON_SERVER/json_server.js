function getCityData() {
    fetch('http://localhost:3000/city')
      .then(response => response.json())
      .then((data) => {
        console.log("DATA: -->", data)
      })
      .catch(error => console.error(`Can't Fetch Data ${error}`));
  }
  
  function getStateData() {
    fetch('http://localhost:3000/state')
      .then(response => response.json())
      .then((data) => {
        console.log("DATA: -->", data)
      })
      .catch(error => console.error(`Can't Fetch Data ${error}`));
  }
  
  function getCountryData() {
    fetch('http://localhost:3000/country')
      .then(response => response.json())
      .then((data) => {
        console.log("DATA: -->", data)
      })
      .catch(error => console.error(`Can't Fetch Data ${error}`));
  }
  
  function getEmployeeData() {
    fetch('http://localhost:3000/employees')
      .then(response => response.json())
      .then((data) => {
        console.log("DATA: -->", data)
      })
      .catch(error => console.error(`Can't Fetch Data ${error}`));
  }
  
  /**
   * POST METHOD
   */
  
  function addCityData() {
    let options = {
      method: 'POST',
      body: JSON.stringify({ "id": 5, "name": "Delhi" }),
      headers: {
        'Content-type': 'application/json',
      },
    }
  
    fetch('http://localhost:3000/city', options)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  /**PUT Method */
  function putemployees() {
    let options1 = {
      method: 'PUT',
      body: JSON.stringify({
        "id": 2,
      "name": "def",
      "Salary": 22000,
      "designation": "Tester"
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }
  
    fetch(`http://localhost:3000/employees/2`, options1)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  
  /**
   * PATCH Method
   */
  
  function updateemployees() {
    let options1 = {
      method: 'PATCH',
      body: JSON.stringify({
        "name": "Archana"
      }),
      headers: {
        'Content-type': 'application/json',
      },
    }
  
    fetch(`http://localhost:3000/employees/2`, options1)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  
  /**
   * DELETE Method
   */
  
  function deleteCity() {
  
    let option3 = {
      method: 'DELETE'
    }
  
    fetch('http://localhost:3000/city/5', option3)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  
 // example2 output on html
//   function getStudent() {
//     fetch('http://localhost:3000/students')
//         .then(response => response.json())
//         .then((result) => {
//             for(let i in result){
//               console.log(result);
//               document.getElementById("result").innerHTML +=(`<tr><td>${result[i].id}</td>
//               <td>${result[i].name}</td>
//               <td>${result[i].branch}</td>`)
//           }})
//         .catch(error => console.error(`Can't Fetch Data ${error}`));
// }


// function createStudent() {
//     let options1 = {
//         method: 'POST',
//         body: JSON.stringify({
//             "id": 3,
//             "name": "Dolly",
//             "branch": "Mechanical"
//         }),
//         headers: {
//             'Content-type': 'application/json',
//         },
//     }
//     fetch('http://localhost:3000/students', options1)
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// }

// function deleteStudent() {

//     let option3 = {
//       method: 'DELETE'
//     }
  
//     fetch('http://localhost:3000/students/3', option3)
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   }