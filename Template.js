const data = [
    {
        name : "coffee-bean",
        order : true,
        items : [
            'americano',
            'milk',
            'grenn-tea'
        ]
    },
    {
        name : "coffee-king",
        order : true,
        items : [
            'americano',
            'milk',
            'latte'
        ]
    },
    {
        name : "starbucks",
        order : false,
    }
]

//json으로 응답을 받고,
//javascript object로 변환한 후에 어떠한 데이터처리 조작을 한 후에 dom에 추가
//데이터 + HTML문자열의 결합이 필요하기 때문에

//Tagged template literals
function fn(tags, name, items) {
    if(typeof items === "undefined"){
        items = "주문가능한 상품이 없습니다.";
    }
    return (tags[0] + name + tags[1] + items + tags[2]);
}

data.forEach(val => {
    let template = fn`<div>welcome ${val.name} !!</div>
    <h2>주문 가능 항목</h2><div>${val.items}</div>`;
    console.log(template);
});




