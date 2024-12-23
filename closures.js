function Outer(){
    function createClosure(val){
        return  function(){
            return val;
        }
    }

    let arr = [];
    let i;
    for(let i=0;i<=4;i++){
        arr[i] = createClosure(i)
    }
    return arr;
}

let getArr =  Outer();
console.log(getArr[0]())
console.log(getArr[1]())
console.log(getArr[2]())
console.log(getArr[3]())
console.log(getArr[4]())