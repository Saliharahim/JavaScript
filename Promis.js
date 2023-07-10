// var study=new Promise((res,rej)=>{
//     let mark=66
//     if(mark>50){
//         res("pass")
//     }
// })

// study.then(res=>console.log("lets start degree")).catch(rej=>console.log("study again"))


var luckeyContext=new Promise((res,rej)=>{
    let yournum=6
    let lotnum=parseInt(Math.random()*10)
    if(yournum==lotnum){
        res("you win")
    }
})

luckeyContext.then(res=>console.log("will buy a new car"))