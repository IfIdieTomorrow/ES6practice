//ES2015 from method

function addMark(){
    //Array객체의 from메서드를 사용하면 arguments를 배열로 변환할 수 있다.
    let newArray = Array.from(arguments);
    //arguments는 모양은 배열과 비슷하지만 배열은 아니기 때문에
    //map 메서드를 사용할 수 없다.
    let newData = newArray.map(value => {
        return value+"!";
    });
    console.log(newData);
    console.log(toString.call(newArray));
    console.log(toString.call(newData));
    console.log(toString.call(arguments));
}

addMark(1,2,3,4,5);