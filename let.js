var name = 'global var';
function home(){
    var homevar = "homevar";
    for(let i=0; i<100; i++){
        //let은 block scope.
        //여기서는 for문 {} 안에서만 유효하다.
        console.log(i);
    }
    if(true){
        let myif = "myif";
    }
    console.log(myif);
}

home();
