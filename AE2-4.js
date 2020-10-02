var numeros  = [5,10,25,58,12];
    n = 0;

for(var i=0,len=numeros .length;i<len;i++){
    if(n < numeros [i]){
        n = numeros [i];
    }
}
console.log(n);
//Asi no sirve hace falta meterlo en una funcion
//intento fallido de funcion(seguir intentando)
maximo=0
function localizarMayor(){
    numeros=new Array(9,19,57,33,27)
    for(i=0;i<5;i++){
        if(numeros[i]>maximo){
            maximo=numeros[i]
        }
    }


}
console.log(localizarMayor);