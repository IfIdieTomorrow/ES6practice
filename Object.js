function geObj(){
    const name = "crong";
    const getName = function(){
        return name;
    }
    const setName = function(newName){
        name = newName;
    }
    const printName = function(){
        console.log(name);
    }
    return {
        getName : getName,
        setName : setName
    }
}

let obj = geObj();
console.log(obj.getName());
