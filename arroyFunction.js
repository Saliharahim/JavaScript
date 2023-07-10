// function add(n1,n2){
//     return n1+n2
// }


// Arroy-----
// var div=(n1,n2)=>n1/n2

// console.log(div(5,2));

// var sub=(n1,n2)=>n1-n2

// console.log(sub(5,2));


// var smartSub=(n1,n2)=>n1>n2?n1-n2:n2-n1
// console.log(smartSub(7,8));



// var maxTwo=(n1,n2)=>n1>n2?n1:n<n2?n2:"equal"
// console.log(maxTwo(5,4));


// var n=0
// console.log(n>0? "+ve":n<0?"-ve":"zero");


// largest of 3 numbers=========
// "use strict"
// var n1=9
// var n2=8
// var n3=7
// console.log((n1>n2)&&(n1>n3)?n1:(n2>n3)?n2:n3);



// var array={
//     length,
//     push(object),
//     pop(),
//     includes(objects)
// }

// var arr=[2,3,4]
// console.log(arr.length);
// arr.push(4)
// console.log(arr);
// arr.pop()
// console.log(arr);
// console.log(arr.includes(3));

// console.log(1 in arr);   //check index is present

// number of consonants and vowels--------------------------
// var str="hello"
// c=0
// v=0
// var vow=["a","e","i","o","u"]
// for (let ch of str){
//     if(vow.includes(ch)){
//         v+=1
//     }
//     else{
//         c+=1
//     }
// }

// console.log("v",v);
// console.log("c",c);



var str="hello"
c=0
v=0
var vow=["a","e","i","o","u"]
for (let ch of str){
    vow.includes(ch)?v+=1:c+=1
}    

console.log("v",v);
console.log("c",c);
