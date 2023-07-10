/**
  Arrays--------
  same type of data types
  let arr=["saliha" ,"dona","arya"]
 */

// let arr=["saliha" ,"dona","arya"]
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr.length);

// for (i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// let i=0
// while(i<(arr.length)){
//     console.log(arr[i]);
//     i++
// }



// sum of elements in an integers array
// let integers=[2,3,5,6,34,54,65]
// let sum=0
// for (i=0;i<integers.length;i++){
//     sum+=integers[i]
// }
// console.log("sum of integers in an array is",sum);

// // print all odd numbers in the array
// let integers=[2,3,4,19,30,45,67]
// for (i=0;i<integers.length;i++){
//     if(integers[i]%2!==0){
//         console.log(integers[i]);
//     }
// }



// // print all even numbers in the array
//  let integers=[2,3,4,19,30,45,67]
// for (i=0;i<integers.length;i++){
//     if(integers[i]%2===0){
//         console.log(integers[i]);
//     }
// }


// greatest number in the array
// let Max=integers[0]
// for (i=0;i<integers.length;i++){
//     if(integers[i]>Max){
//         max=integers[i]

//     }
// }
// console.log(max);

// array[23,45,67]  "45"-> 95  [23,95,67]

// let array=[23,45,67]
// for (i=0;i<array.length;i++){
//     if(array[i]===45){
//         array[i]=95
//     }
    
// }
// console.log("array:",array);


// add 10 with all elements
// let array=[23,45,67]
// for (i=0;i<array.length;i++){
//   array[i]=array[i]+10
// }
// console.log(array);






// find out a pair of elements which form a particular value as sum from a given array for ex:value=9  pairs:(3,6),(7,2)
// Array=[2,3,4,5,1,8]
// for(let i=0;i<Array.length;i++){
//   for (j=i+1;j<Array.length;j++){
//     if (Array[i]+Array[j]===9){
//       console.log(Array[i],Array[j]);
//     }

//   }
// }


// peak and valley pairs--------------
let arr=[2,4,3,5,1,8,7,10,0]
let peak=0
let valley=0
for (let i=1;i<arr.length;i++){
  if(arr[i-1]>arr[i] && arr[i]<arr[i+1]){
    valley+=1
  }
  else if(arr[i-1]<arr[i] && arr[i]>arr[i+1]){
    peak+=1
  }
}
console.log("peak:",peak);
console.log("valley:",valley);
  