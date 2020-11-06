const data = [1,2,undefined,NaN,null,""];
data.forEach(result => console.log(result));
data.forEach(result =>{
    console.log(result);
});


// 이 경우에는 Array.prototype이라는 프로퍼티에 getIndex라는 함수가 생성되면.
// Array로 생성한 모든 객체와 Array를 상속받은 모든 객체가 원하지 않아도 getIndex라는
// 함수를 상속받기 때문에 자신의 객체의 프로토타입인지 검사하는 hasOwnPrototype를 사용해야 한다.
Array.prototype.getIndex = function(){};

for(let idx in data){
    if(data.hasOwnPrototype){
        console.log(data[idx]);
    }
}

// 이 방법은 매우 귀찮고 문제가 커질 수 있으므로.
// for of 반복문을 사용하면 쉽게 해결할 수 있다.
for(let value of data){
    console.log(value);
}