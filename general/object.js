// let user  = {
//     firstName : 'abc',
//     lastName : 'eac',
//     printName : function(hobby,age){
//            console.log("this",this);
//            console.log( `${this.firstName}   ${this.lastName}  ${age}   ${hobby}`);
//     }
//    }
//  user.printName(12,13);
//  const fn = user.printName;
//  console.log(fn,"fn");
//  fn(14,56);

// function xcheck(){
//     let a = 10;
//     function ycheck(){
//           console.log(a);
//     }
//    return ycheck;
// }
// let res = xcheck();


function x(){
  let a = 10; 
  function y(){
    let b = 20;
    function  z(){
      console.log(a,b);
    }
    z();
  }
  y();
}
x();


