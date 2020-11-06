//setPrototypeOf

const healthObj = {
    showHealth : function(){
        console.log("오늘 운동시간 : "+this.healthTime);
    },
    setHealth : function(newTime){
        this.healthTime = newTime;
    }
}

// const myH = {
//     name : "crong",
//     lastTime : "11:20"
// };

// //myH객체에 healthObj객체 프로토타입을 추가. 상속이라고 생각하면 쉽다.
// Object.setPrototypeOf(myH,healthObj);

// console.log(myH);

const myH = Object.setPrototypeOf({
    name : "crong",
    lastTime : "11:20"
}, healthObj);

console.log(myH);
myH.setHealth("11:50");
console.log(myH);
myH.showHealth();

const myHealth = {
    name : "lee",
    lastTime : "13:20"
}

console.log(myHealth);
myHealth.__proto__ = healthObj;
myHealth.setHealth("12:50");
console.log(myHealth);
myHealth.showHealth();