//ES6 Desturcturing

//Desturcturing은 변수명보다는 해당 값을 가져올 위치를 생각해야 한다.

//배열은 []
let data = ["crong","honux","jk","jinny"];
let [jisu, ,jung] = data;
console.log(jisu,jung);

//객체는 {}
let obj = {
    name : "crong",
    address : "Korea",
    age : 10
}

let {name, age} = obj;
console.log(name, age);

// 프로퍼티명 변경
let {name : myName , age : myAge} = obj;
console.log(myName, myAge);

//Json
let news = [
    {
        "title" : "sbs",
        "imgurl" : "./screen.png",
        "newslist" : [
            "안녕하세요",
            "이용준 입니다.",
            "반가워요."
        ]
    },
    {
        "title" : "mbc",
        "imgurl" : "./screen.png",
        "newslist" : [
            "Hello",
            "My name is Lee",
            "nice to meet you"
        ]
    }
]

//mbc항목만 따로 뽑을 시 
let [,mbc] = news;
console.log(mbc);
//mbc항목에서 타이틀과 같은 항목을 뽑을때
let{title,newslist} = mbc;
console.log(title, newslist);
for(let cont of newslist){
    console.log(cont);
}
// 내 생각에는 Desturcturing을 사용할 때는 뽑고 싶은 그 항목이 어느 괄호로 감싸져 있는지
// 확인해야 할 거 같다. 물론 {}은 객체에서 사용하고 []을 배열에서 사용하는걸 생각하면 더 쉽다.
// 그리고 변수명과 값이 겹쳐야 하는것도 있지만 위치도 고려해야 한다.

// 이 방법도 위와 같다.
// 2개의 JSON데이터가 있는 JSON배열 중 2번째에 있는 JSON데이터의 title과 newslist만 가져온다.
// let [,{title, newslist}] = news;

//Destructuring을 활용한 Event객체 전달

function getNewsList([{newslist}]){
    console.log(newslist);
}

getNewsList(news);