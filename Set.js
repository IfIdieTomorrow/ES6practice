let mySet = new Set();
// console.log(toString.call(mySet));
//set : 중복없이 유일한 값을 저장할 때 사용하는 자료구조.

mySet.add("crong");
mySet.add("hary");
mySet.add("crong");

console.log(mySet.has('crong'));

for(let val of mySet){
    console.log(val);
}