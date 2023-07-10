var products=[
    {code:1,name:"potato",price:45,avl_qty:50,category:"veg"},
    {code:2,name:"onion",price:30,avl_qty:150,category:"veg"},
    {code:3,name:"brinjal",price:30,avl_qty:10,category:"veg"},
    {code:4,name:"carrot",price:75,avl_qty:0,category:"veg"},
    {code:5,name:"tomato",price:34,avl_qty:20,category:"veg"},
    {code:6,name:"apple",price:190,avl_qty:50,category:"veg"},
    {code:7,name:"egg",price:5,avl_qty:250,category:"nonveg"},
    {code:8,name:"chicken",price:145,avl_qty:250,category:"nonveg"},
    {code:9,name:"garlic",price:240,avl_qty:0,category:"veg"},
    {code:10,name:"chilly",price:100,avl_qty:15,category:"veg"},
    
]



products.forEach(p=>console.log(p.name))
products.forEach(p=>console.log(p.price))




// collections
// Array.from(collections)
// spread operator

// [...collections]


// object to Arrays
// =====================
// objects.entries()


var temps={"tvm":34,"ktm":28,"apy":29,"ekm":34}

var high_temp=Object.entries(temps).reduce((t1,t2)=>t1[1]>t2[1]?t1:t2)
console.log(high_temp);
