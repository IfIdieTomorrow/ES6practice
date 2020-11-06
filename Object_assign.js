//Object_assign 메서드.
// const healthObj = {
//     showHealth : function(){
//         console.log("오늘 운동시간 : "+this.healthTime);
//     }
// }

// const myH = Object.assign(Object.create(healthObj),{
//     name : "crong",
//     healthTime : "11:20"
// });



// console.log(myH);
// myH.showHealth();

//Object_assign 메서드.

const previousObj = {
    name : "crong",
    healthTime : "11:20"
}

const myH = Object.assign({}, previousObj, {
    lastTime : "12:30"
});


console.log(myH);