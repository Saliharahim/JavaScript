/**
  initialisation
 while(condition){
   stmnts to be executed
   increment
 }
 */


//  let num=1
//  while(num<=10){
//     console.log(num);
//     num++
//  }

// wap to print 10 to 1
// let num=10
// while(num>0){
//    console.log(num);
//    num--
// }


// sum of digits using while
// =============================
// let sum=0
// let num=123
// while(num>0){
//    rem=num%10
//    sum=sum+rem
//    num=parseInt(num/10)
// }
// console.log(sum);


// PRIME USING FOR
// ===================
// let num=7
// let flag=0
// for (i=2;i<=num/2;i++){
//    if(num%i === 0){
//       flag=1
//    }
// }
// if(flag===1){
//    console.log("not prime");
// }
// else{
//    console.log("prime")
// }


// prime using while
// ==================
// let num=8;
// let i=2
// let flag=0
// while(i<=num/2){
//    if(num%i===0){
//       console.log("not prime");
//       break;
//    }
//    else{
//       console.log("prime");
//       break;
//    }
//    i++
// }
/*
 do{
    stmts
 }while(condition
*/

let a=3
let b=3
let i=2
do{
   console.log(a+b);
   i--
}while(i>0)