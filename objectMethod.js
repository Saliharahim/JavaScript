// const stud={name:"saliha",
//     class:3,
//     div:"A",
//     mark:90,
//     displayMArk:function(){return this.name+ "mark is"+this.mark}}

// disp=stud.displayMArk()
// console.log(disp);

// const car={Name:"bwm",
//             colour:"white",
//             type:"four wheeler",
//             prize:"70 lakhs",
//             Enginestart:function(){
//                 return this.Name+" engine start...."
//             },
//             breaking:function(){
//                 return this.Name+" breaking"
//             }}

// console.log(car);
// console.log(car.Enginestart());


// const person={Name:"saliha",place:" perumbavoor",Currently:" python full stack developer",skills:"python,html",shotGOal:"to be placed in a company ",
//                 intro:function(){self=" i am "+this.Name+ " from "+this.place+" currently on going "+this.Currently+" my skills are "+this.skills+" my short time Goal is  "+this.shotGOal
//                                 return self}}

// console.log(person.intro());





// const person={Name:"saliha",place:" perumbavoor",Currently:" python full stack developer",skills:{skill1:"python",skill2:"html",skill3:"css"},shotGOal:"to be placed in a company ",
//                 intro:function(){self=" i am "+this.Name+ " from "+this.place+" currently on going "+this.Currently+" my skills are "+this.skills.skill1+" my short time Goal is  "+this.shotGOal
//                                 return self}}

// console.log(person.skills.skill1);
// console.log(person.intro())



const stud={name:"saliha",
    class:3,
    div:"A",
    mark:{english:"34",maths:"54",it:"60",social:67,malayalam:55},
    displayMArk:function(){return this.name+ " mark of malayalam is "+this.mark.malayalam}}


console.log(stud.displayMArk());
console.log(stud.mark.maths);

