// function countryarea(){
// const countryName={
//     Russia : 17098242,
//     Canada : 9984670,
//     China:9706961,
//     US:9372610,
//     brazil:8515767,
//     Autralia:7692024,
//     India:3287590
// }
// let area= (Object.values(countryName));
// // console.log(area);

// var result= (area.map(x=>(x/148940000)*100));
// console.log(Object.keys(countryName))
// console.log(result);


// }
// countryarea();
function countryarea1(name,area){
    
    let pa=(area/148940000)*100;
    console.log (`country name:${name} & its proportinate area is ${pa}%`);
}
countryarea1("Russia",17098242);
countryarea1("India",3287590)




