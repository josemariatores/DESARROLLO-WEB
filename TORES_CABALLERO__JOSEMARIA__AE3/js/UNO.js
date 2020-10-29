
//validacion de errores en el formulario
const nombre = document.getElementById('nombre');

nombre.addEventListener('input',function (event){
    if(nombre.validity.typeMismatch){
        nombre.setCustomValidity('Introduzca su nombre');
    }else{
        nombre.setCustomValidity('');
    }
});
const apellido1 = document.getElementById('apellido1');

nombre.addEventListener('input',function (event){
    if(nombre.validity.typeMismatch){
        nombre.setCustomValidity('Introduzca su nombre');
    }else{
        nombre.setCustomValidity('');
    }
});

