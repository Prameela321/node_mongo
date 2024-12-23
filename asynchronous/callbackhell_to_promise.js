// refer callback first

console.log("first line");

const pr = getStudent(12);

pr
.then(data => getSubjects(data.id))
.then((res)=>  getMarks(res[0]) )
.then(marks =>  console.log(marks));

console.log("last line");

function getStudent(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("getting student details",id)
           resolve({id : id ,name : "test"});
        },2000)
    });
}

function getSubjects(id){

   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("getting subject of",id)
       resolve(["maths"]);
    },2000)
});
}

function getMarks(subject){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("getting marks of sub",subject)
           resolve(80);
        },2000)
    });
}