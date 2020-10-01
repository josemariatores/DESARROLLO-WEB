valores=["Ana",2,"Javi",5,"Roberto",7,"Vanessa",10];

function eliminamostexto(valores){
    valores = valores.filter(name => typeof(name) == typeof("text"));
    console.log(valores);
    return valores;
}
console.log(eliminamostexto(valores));
// no funciona revisar mas tarde

eliminamostexto(valores);
function eliminamosnumeros(valores){
    valores = valores.filter(name => typeof(name)==typeof(1)&& !(name%2==0) || (typeof(name)==typeof("text")));
    console.log(valores);
    return (valores);
}
console.log(eliminamosnumeros(valores));
