// Read Data From Server
/**
 * GET 
 */
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
function getstudentsData() {
  fetch('http://localhost:3000/students')
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

// function getEmployeeData() {
//   fetch('http://localhost:3000/employees')
//     .then(response => response.json())
//     .then((data) => {
//       console.log("DATA: -->", data)
//     })
//     .catch(error => console.error(`Can't Fetch Data ${error}`));
// }

// /**
//  * POST METHOD
//  */

function addCityData() {
  let options = {
    method: 'POST',
    body: JSON.stringify({ "id": 6, "name": "Pune" }),
    headers: {
      'Content-type': 'application/json',
    },
  }

  fetch('http://localhost:3000/city', options)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// /**
//  * PUT Method
//  */

function updatestate(id) {
  let options1 = {
    method: 'PUT',
    body: JSON.stringify({
      "name": "kerala"
    }),
    headers: {
      'Content-type': 'application/json',
    },
  }

  fetch(`http://localhost:3000/state/${id}`, options1)
    .then((response) => response.json())
    .then((json) => console.log(json));
}

// /**
//  * DELETE Method
//  */

function deleteCity() {

  let option3 = {
    method: 'DELETE'
  }

  fetch('http://localhost:3000/city/2', option3)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
