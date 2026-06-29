/*console.log("Hello world");
let x=10;
console.log(x);
const y =20;
console.log(y);
console.log(x+y);


function add(x,y){
    return x + y;
}
console.log(add(10,20));

const arr = [10,20,30,40,50];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
//console.log(arr[3]);
console.log(arr[4]);*/
//dictionary
const dict = {"name":"john","age":30,"city":"Newyork"};
console.log.apply(dict.name);

//destucturing
let {name,age,city} =dict;
console.log(name);
console.log(age);
console.log(city);

let a=[10,20]
let b=[30,40]
console.log(...a,...b)
console.log([...a,...b])

function add(a, ...b){
    let sum=a
    for(let num of b){
        sum+=num
    }
    return sum;
}

console.log(add(10,20));