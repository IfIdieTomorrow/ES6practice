//arrow function

setTimeout( () => {
    console.log("setTimeOut");
}, 1000)

let newArr = [1,2,3,4,5].map(val => val * 2 );

console.log("arrow newArr" , newArr);

//this context of Arrow function

const myObj = {
    runTimeOut (){
        setTimeout(() => {
            //node.js 환경에서는 global이 최상위 객체
            console.log(this);
            this.printData();
        }, 200);
    },
    printData(){
        console.log("hi codesquad!");
    }
}

myObj.runTimeOut();