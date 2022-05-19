 function getStudent() {
    fetch('http://localhost:3000/students')
        .then(response => response.json())
        .then((result) => {
            for(let i in result){
              console.log(result)
          }})
        .catch(error => console.error(`Can't Fetch Data ${error}`));
}