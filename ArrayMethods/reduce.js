var nums=[2,3,4,5,6,2]
var sum=nums.reduce((n1,n2)=>n1+n2)
console.log(sum);

// maximum-------
var max=nums.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(max);


// minimum
var min=nums.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);



var expenses=[12000,8000,24000,23000,45000,10000]

// total expense reduce
// highest exp reduce
// lowest exp reduce
// avg exp reduce /len
// sort exp //sort
// expeses > 20000 //filter