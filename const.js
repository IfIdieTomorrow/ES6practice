// function home(){
    //const로 재할당은 불가, 하지만 배열이나 객체값을 추가하거나 삭제, 변경하는것은 가능하다.
//     const homename = "my house";
//     homename = "your house";
//     console.log(homename);
//     //const를 기본으로 사용한다.
//     //하지만 변경이 될 수 있는 변수는 let을 사용한다.
//     //var는 사용하지 않는다.
// }

// home();

function home(){
    const list = ["apple","orange","watermelon"];
    //const는 재할당 불가
    list.push("banana");
    for(let i in list){
        console.log(list[i]);
    }
}

home();

//immutable array를 어떻게 만들지?
const list = ["apple","orange","watermelon"];
list2 = [].concat(list, "banana");
console.log(list);
console.log(list2);
console.log(list === list2);
