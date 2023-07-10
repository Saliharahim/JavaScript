var text="hello good morning all"
// wright highest wor length

console.log(text.split(" ").reduce((w1,w2)=>w1.length>w2.length?w1:w2));