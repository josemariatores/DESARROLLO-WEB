const nombre = document.getElementById('nombre');

nombre.addEventListener('input',function (event){
    if(nombre.validity.typeMismatch){
        nombre.setCustomValidity('Introduzca su nombre');
    }else{
        nombre.setCustomValidity('');
    }
});
