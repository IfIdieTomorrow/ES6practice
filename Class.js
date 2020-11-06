//ES6 Class
class Health{
    //ES6에서class는 개념이 추가된것이 아닌 문법만 바뀐것.
    //자바스크립트에서는 JAVA처럼 생성자 함수명이 클래스명과 같지 않고.
    //모든 class가 constructor을 사용한다.
    constructor(name, lastTime){
        this.name = name;
        this.lastTime = lastTime;
    }

    show(){
        console.log(this.name+"님 안녕하세요")
    }
}

let h = new Health("이용준");
h.show();

console.log(toString.call(Health));

class Man extends Health{
    constructor(name, lastTime, sport){
        super(name, lastTime);
        this.sport = sport;
    }
    run (){
        console.log(this.sport + "을(를) 시작합니다.")
    }
}

let m = new Man("이용준","11-20","축구");
m.show();
m.run();

console.log(toString.call(Man));