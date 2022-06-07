function getStudent() {
    fetch('http://localhost:3000/students')
        .then(response => response.json())
        .then((result) => {
            for(let i in result){
              console.log(result);
              document.getElementById("result").innerHTML +=(`<tr><td>${result[i].id}</td>
              <td>${result[i].name}</td>
              <td>${result[i].branch}</td>`)
          }})
        .catch(error => console.error(`Can't Fetch Data ${error}`));
}


function createStudent() {
    let options1 = {
        method: 'POST',
        body: JSON.stringify({
            "id": 3,
            "name": "Dolly",
            "branch": "Mechanical"
        }),
        headers: {
            'Content-type': 'application/json',
        },
    }
    fetch('http://localhost:3000/students', options1)
        .then((response) => response.json())
        .then((json) => console.log(json));
}

function deleteStudent() {

    let option3 = {
      method: 'DELETE'
    }
  
    fetch('http://localhost:3000/students/3', option3)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }