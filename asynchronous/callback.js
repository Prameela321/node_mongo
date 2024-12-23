// problem

// console.log("line1");
// const res = getStudent();
// console.log(res);
// console.log("last line");


// function getStudent(){
//     setTimeout(()=>{
//         return {id: 1, marks: 20, name:"xyz"};
//     },3000);
// }


// solution

console.log("line1");
getStudent((data)=>{
    console.log(data);
})
console.log("last line");

function getStudent(callback){
    setTimeout(()=>{
        callback({id: 1, marks: 20, name:"xyz"})
    },3000)
}