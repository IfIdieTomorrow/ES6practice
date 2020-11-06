//arrow function


// setTimeout(function(){
//     console.log("setTimeOut");
// }, 1000);

//function 키워드가 ()=> 하나로 대체되었다.
//매개 변수가 있는 경우 ()도 생략 할 수 있으며, 실행 문장이 한 줄인경우에는 {}도 생략 가능하다.

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