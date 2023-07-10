/*
SWITCH
=======

switch (expression){
    case value1:
        // stmnts
    case condition2:
        // stmnts
    default:
        // stmnts:
}
 */

// check weather the given value is 10,15,or 20 print value is not 10,15 or 20

// let num=20
// switch (num){
// case 10:
//     console.log("value is 10");
//     break;
// case 20:
//     console.log("value is 20");
//     break;
// case 15:
//     console.log("value is 15");
//     break;
// default:
//     console.log("value is not 10,15,20");
// }


// print day for particular number

// let n=1
// switch (n){
//     case 1:
//         console.log("sunday");
//         break
//     case 2:
//         console.log("monday");
//         break
//     case 3:
//         console.log("tuesday");
//         break
//     case 4:
//         console.log("wednesday");
//         break
//     case 5:
//         console.log("thursday");
//         break
//     case 6:
//         console.log("friday");
//         break
//     case 7:
        // console.log("saturday");
//         break
//     default:
//         console.log("invalid number");
// }

// CALCULATOR

let a=1
let b=4
op="+"
switch (op){
    case "+":
        console.log("addition:",a+b);
        break
    case "-":
        console.log("sub:",a-b);
        break
    case "*":
        console.log("mul:",a*b);
        break
    case "/":
        console.log("div:",a/b);
        break
    default:
        console.log("invalid operation");
}