//default parameters


//ES6에서는 함수 매개변수를 선언과 동시에 초기화 할 수 있다.
function sum(value, size = {value : 1}){
    return value * size.value;
}

console.log(sum(3,{value:3}));

function add(value, size=1) {
    return value + size;
}