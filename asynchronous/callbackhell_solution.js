// refer callback first

console.log("first line");

getStudent(12,callbackStudents);

console.log("last line");

function callbackStudents(data){
    console.log(data);
    getSubjects(12,callbackSubjects);
}

function callbackSubjects(subjects){
    console.log(`marks of student id 12 ${subjects}`);
    getMarks("maths",callbackMarks);
}

function callbackMarks(marks){
    console.log(marks);
}


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