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


// q1: total number of items
var total=products.length
// console.log(total);

// q2: total number of avl items

var avl_prdct=products.filter(p=>p.avl_qty>0).length
// console.log(avl_prdct);

// q3:out of stock product names
var out_stock=products.filter(p=>p.avl_qty==0).map(p=>p.name)
// console.log(out_stock);

// q4:in stock products names
var in_stock=products.filter(p=>p.avl_qty!=0).map(p=>p.name)
// console.log(in_stock);



// q5: is there any prdcts available under 5rs
var prdct_forty=products.some(t=>t.price<40)
// console.log(prdct_forty);


// q6:costly product name
var costly=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2).name
// console.log(costly);

// q7:prnt apple product price =============specific aayit oru object edukan

var apple=products.find(p=>p.name=="apple").price
// console.log(apple);


// q8: