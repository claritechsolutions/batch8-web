class person{
    constructor(n,a){
this.name = n;
this.age = a;
        
    }
    //prototype method
sayHi(){
    console.log(`Hello this fruitName is ${this.name} & my color is ${this.age}`);
 }
//static method:is called by class name not a object name.
static hello(){
    console.log("hello.......");
}
static property
//  static sproperty="something"
//  }

// let person1 = new person("vishwajeet", 28);
// person1.sayHi();


//  person.hello();
//    console.log(person.sproperty);
//   //console.log(person1);
var string1 = "Hello World";
var string2 = "Hello world.";
if (string1 === string2) {
  console.log("Matching strings!");
}
else {
  console.log("Strings do not match");
}