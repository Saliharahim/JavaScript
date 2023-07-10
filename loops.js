/**
 loops

 multiple execution or iteration-loops

 1.for-(entry control)
 2.while (entry control)
 3.do while(exit control)
 
 for

 for(initialisation;expression;increment)
    stmnts to be executed
 */

// for(let i=1;i<=5;i++){
//     console.log(i);
// }
// reverse

// for(let i=10;i>=0;i--){
//     console.log(i);
// }

/**
 1.wap to display the grade according to the following
 below -25 -d
 -25-45  -c
 45-50 -b
 50-60  b+
 60-80  a
 above 80 a+

 2.sal=10000
 year of exp>10 sal increment by 10%
            >=6  <=10 by 8%
            <6        by 5%

 */

// 1.
// mark=46
// if (mark<25){
//    console.log("D");
// }
// else if(mark<45){
//    console.log("C");
// }
// else if(mark<50){
//    console.log("B");
// }
// else if(mark<60){
//    console.log("B+");
// }
// else if(mark<80){
//    console.log("A");
// }
// else{
//    console.log("A");
// }

// 2.

// sal=10000
// ex=7
// if (ex>10){
//    p=((10*sal)/100)
//    console.log("new salary:",p+sal);
// }
// else if(ex>=6){
//    p=((8*sal)/100)
//    console.log("salary:",p+sal);
// }
// else{
//    p=((5*sal)/100)
//    console.log("salary:",p+sal);
// }


// wap to print all the odd numbers within a given range

// for (let i=0;i<=10;i++){
//    if(i%2===1){
//       console.log(i);
//    }
// }

// or

// for (let i=1;i<=10;i+=2){
//    console.log(i);
// }


//wap to print the sum of digits of a given number

// let sum=0
// let num=123
// for(let i=0;num>0;i++){
//    rem=num%10
//    sum=sum+rem
//    num=parseInt(num/10)
//    // num=Math.floor(num/10)
//    // num=((num/10) | 0)
// }
// console.log("sum of digits:",sum);

/**
 nested for 

 for (initialization ;condition;increament){
    for (initialization ;condition;increament){
                  ----stmnts---
    }
 }
 */


// let string="";
// for(let i=1;i<=3;i++){
//    string=""
//    for(let j=0;j<i;j++){
//       string+="* "
//    }
//    console.log(string);
// }


// Print following pattern
// 1
// 1 2
// 1 2 3

for (let i=1;i<=3;i++){
   string=" "
      for (let j=1;j<=i;j++){
         string+=j
      }
      console.log(string);
}