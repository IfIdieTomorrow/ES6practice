//rest parameters

function checkNum(...argArray){
    // let argArray = Array.from(arguments);
    // let argArray = Array.prototype.slice.call(arguments);
    console.log(argArray);
    console.log(toString.call(argArray));
    let result = argArray.every(val => typeof val === "number");
    console.log(result);
    return result;
}

const result = checkNum(10,2,3,4,5,"",undefined);
console.log(result);