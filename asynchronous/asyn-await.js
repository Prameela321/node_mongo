// refer callback first

console.log("first line");

async function displayData(){
    try{
    const data = await getStudent(12);
    const  res = await  getSubjects(data.id);
    const marks = await   getMarks(res[0]);
    console.log(marks);
    }catch(err){
        console.log(err);
    }
}
displayData();
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