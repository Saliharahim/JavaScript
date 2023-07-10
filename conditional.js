/*python
if-if(conditioin):
        statements

    
elif -
elif(condition):
    statements
else:
    stmts

JAVASCRIPT
==========

if(condition){
    statmts
}
else if(condition){
    stamnts
}
else{
    staments
}
 */

//1.   num1=10
// num2=20
// if (num1>num2){
//     console.log("hiii");
// }
// if (num1<num2){
//     console.log("hellooo");
// }

// write a pgrm to print wheather the given number is positive ,-ve or zero using if only


// num=-4
// if (num>0){
//     console.log("positive");
// }
// if (num<0){
//     console.log("negative");
// }
// if (num==0){
//     console.log("zero");
// }


// Write a prgm to check wheather a student passed or failed in a exam
// passed if marks 45 and above,if below 45 failed if only


// mark=45
// if(mark>=45){
//     console.log("passed");
// }
// if(mark<45){
//     console.log("failed");
// }


/*
1.check a person is eligible for voting or not
2.check a given number is odd or even
3.check the given number is divisible by 7 or not
 */

// age=13
// if (age>=18){
//     console.log("eligible for vote");
// }
// if (age<18){
//     console.log("not eligible for vote");
// }



// num=4
// if (num%2===0){
//     console.log("even");
// }
// if (num%2!==0){
//     console.log("odd");
// }


// num=14
// if (num%7==0){
//     console.log("divisible");
// }
// if (num%7!=0){
//     console.log("not divisible");
// }

// ==============if else

// num1=10
// num2=20
// if (num1>num2){
//     console.log("hiii");
//     console.log("num1 is greater");
// }
// else
//     console.log("hello");


// write a prgm to print the given number is odd or even

// num=4
// if (num%2===0)
//     console.log("even");

// else
//     console.log("odd");

// wap to find out max of 3 numbers
// let num1=9
// let num2=4
// let num3=6
// let max
// if (num1>num2)
//     max=num1
// if (num1<=num2) {
//     max=num2
// }
// if (num3>max){
//     max=num3
// }
// console.log(max);



// =========if ...else if..else
// let num1=6
// let num2=7
// let num3=1
// if (num1>num2 && num1>num3){
//     console.log(num1);
// }
// else if(num2>num3){
//     console.log(num2);
// }
// else{
//     console.log(num3);
// }



// ========================
// a=10 a=15 a=30 ,a is not 10,15 or 30

// a=38
// if (a==10){
//     console.log("a is 10");
// }
// else if(a==15){
//     console.log("a is 15");

// }
// else if(a==30){
//     console.log("a is 30");
// }
// else{
//     console.log("a is not 10,15 or 30");
// }

// wap to check wheather the given angles of a triangle is valid nor not,check weather it is isocsles
// 


// a=7
// b=10
// c=5
// if(a+b>c && b+c>a && a+c>b){
//     console.log("valid");
// }
// else{
//     console.log("not valid");
// }


// isocsles triangle
// =================


function equilt(num1){
    let area=((Math.sqrt(3))/4)*(num1*num1)
    console.log("area=",area);
}
function isocl(b,h){
    let area=(b*h)/2
    console.log("area=",area);
}
function scalene(a,b,c){
    let s=(a+b+c)/2
    let area=Math.sqrt(s*(s-a)*(s-b)*(s-c))
    console.log("area=",area);
}

let side1=10;
let side2=11;
let side3=12;
if(side1===side2 && side2===side3 ){
    console.log("triangle is equilateral");
    equilat(side1);
}
else if(side1===side2 || side2===side3 || side1===side3){
    console.log("triangle is isocles");
    isocs(side1,side2);
}
else{
    console.log("triangle is scalene");
    scalene(side1,side2,side3);
}


























