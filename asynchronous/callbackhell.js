// refer callback first

console.log("first line");

getStudent(12,(data)=>{
    console.log(data);
    getSubjects(12,(subjects)=>{
        console.log(`marks of student id 12 ${subjects}`);
        getMarks("maths",(marks)=>{
            console.log(marks);
        })
    })
});

console.log("last line");



function getStudent(id,callback){
    setTimeout(()=>{
        callback({id : id ,name : "test"});
    },2000)
}

function getSubjects(id,callback){
    setTimeout(()=>{
      callback(["maths","physics"]);
    },2000)
}

function getMarks(subject,callback){
    setTimeout(()=>{
        callback(80);
    })
}