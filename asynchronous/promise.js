const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("fulfilled");
    },2000);
})

promise.then(data => console.log(data));

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("rjected");
    })
})

promise2.catch(err=> console.log(err));