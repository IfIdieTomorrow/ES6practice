//setPrototypeOf

//parent
const healthObj = {
    showHealth : function(){
        console.log("운동시간 : "+ this.healtTime);
    },
    setHealth : function(newTime){
        this.healtTime = newTime;
    }
}

//child obj
const healthChildObj = {
    getAge : function(){
        return this.age;
    }
}

//상속
Object.setPrototypeOf(healthChildObj, healthObj);

const childObj = Object.setPrototypeOf({
    age : 22
}, healthChildObj);

console.log("childObj is "+childObj);
childObj.setHealth("11:50");
childObj.showHealth();
console.log("나이 "+childObj.getAge());