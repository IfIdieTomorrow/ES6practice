// spread operator, 펼침 연산자

const pre = ["apple","orange",100];
// ...pre의 뜻은 pre배열을 펼쳐서 넣는다.
let newData = [...pre];
console.log(pre);
console.log(newData);
console.log(pre === newData);

// 배열 사이에 사용하여 활용도 가능하다.
let arr = [100,200,"hello",null];
let newArr = [0,1,2,3,...pre,4];
console.log(arr);
console.log(newArr);


// 메서드 인자값으로 배열을 주는 방법
function sum(a,b,c){
    return a+b+c;
}

let pArr = [100,200,300];

//spread_operator이전에 사용하던 방법.
console.log(sum.apply(null, pArr));

//이후
console.log(sum(...pArr));


