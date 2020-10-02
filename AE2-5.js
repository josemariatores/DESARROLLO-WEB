values=[19,9,24,33,17,57];
//Algo va mal no da bien los factoriales
function multipleFactorial (values) {
        var total = 1; 
        for (i=1; i<=values; i++) {
            total = total * i; 
        }
        return total; 
    }

    console.log(values.map(multipleFactorial));

