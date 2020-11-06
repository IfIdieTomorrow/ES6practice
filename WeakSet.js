//WeakSet
//참조를 가지고 있는 객체만 저장이 가능하다.
//객체형태를 중복없이 저장할때 유용함.

let arr = [1,2,3,4];
let arr2 = [5,6,7,8];
let obj = {arr, arr2};
let ws = new WeakSet();

ws.add(arr);
ws.add(function(){})
ws.add(arr2);
ws.add(obj);

arr = null;

// 기본 타입은 저장이 불가능
// ws.add(111);
// ws.add("111");
// ws.add(null);

console.log(ws);