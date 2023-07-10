// var nums=[3,4,5,6,2,6.8]

// var srt=nums.sort((n1,n2)=>n1<n2?-1:1)
// console.log(srt);


// // var srt=nums.sort((n1,n2)=>n1-n2)



// =====================================================
var expenses=[12000,8000,24000,23000,45000,10000]
// total expense reduce
// highest exp reduce
// lowest exp reduce
// avg exp reduce /len
// sort exp //sort
// expeses > 20000 //filter

var total_exp=expenses.reduce((n1,n2)=>n1+n2)
console.log(total_exp);


var highest_exp=expenses.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest_exp);


var lowest_exp=expenses.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest_exp);

var average_exp=console.log(total_exp/expenses.length);


var srt=expenses.sort((n1,n2)=>n1>n2?-1:1)
console.log(srt);

var exp_gt=expenses.filter(n1=>n1>20000)
console.log(exp_gt);