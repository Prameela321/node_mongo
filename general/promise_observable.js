import 'Rx' from 'rxjs'

const p1 = new Promise((resolve,reject)=>{
    // setTimeout(()=>{
	//  resolve('dog');
    //  resolve('cat');
    // },1000);
    // reject('err');
});

p1
.then(res => console.log(res))
.catch((err)=>{
   console.log(err);
});


const observe =  Rx.Observable.create(observer =>{
   setTimeout(()=>{
        observer.next('dog');
   },1000); 
});

observe.subscribe(result =>{
    console.log(`${result} is the observables`);
})

