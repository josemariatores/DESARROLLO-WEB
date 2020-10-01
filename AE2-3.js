var array = [1,56,14,38];
function finminimun(array){
    var almacen=array[1];
    var min=array.reduce((a,b) => Math.min(a,b),almacen);
    return min;
} 
console.log(finminimun(array));