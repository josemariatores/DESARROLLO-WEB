
datArray=[9,19,33,27];
function average(datArray){
    if (datArray == 0){
        return undefined;
    }else {
        return datArray.reduce((a,b) => (a+b)/datArray.length);
    }
}
console.log(average(datArray));
