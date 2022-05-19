console.log("Promise function implementation")
const students = [
    { name: "Archana", Subject: "Javascript" },
    { name: "Priya", Subject: "Software testing" }
]
function enrollStudent(student){
    return new Promise(function (resolve, reject) {
        setTimeout(function(){
            students.push(student);
            console.log("student has been enrolled");
            const error= false;
            if (!error) {
                resolve();
            }
            else {
                reject();
            }
        }, 2000);
    })
}
function getStudent() {
    setTimeout(function () {
        let str = "farukh";
        students.forEach(function(student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("student has been fetched");
    }, 1000);

}
let newStudent={name:"sunny", Subject:"python"}
enrollStudent(newStudent).then(function(){
    getStudent();

}).catch(function(){
console.log("The error occured")

});