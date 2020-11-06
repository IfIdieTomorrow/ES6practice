//Map & WeakMap
//Array -> Set, WeakSet
//Object -> Map, WealMap

//Map은 Key, Value 구조이다.

// let wm = new WeakMap();
// let myfunc = function(){};
// // 이 함수가 얼마나 실행됐지 ? 를 알려고 할때.

// wm.set(myfunc,0);
// console.log(wm);

// for(let i=0; i<10; i++){
//     count = wm.get(myfun);
//     count++;
//     wm.set(myfun, count);
// }
// console.log(wm);
// wm.get(myfun);

//WeakMap 활용

const wm = new WeakMap();

function Area(height, width){
    //WeakMap을 이용하여 객체의 프로퍼티를 숨길 수 있다.
    wm.set(this,{height, width});
}

Area.prototype.getArea = function(){
    //여기서 Destructuring을 사용하여 height,와 width를 가져옴
    const {height, width} = wm.get(this);
    return height * width;
}

let myArea = new Area(10,20);
console.log(myArea.getArea());
console.log(myArea.height); //undefined

console.log(wm.has(myArea));

myArea = null;

console.log(wm.has(myArea));
