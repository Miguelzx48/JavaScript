//  convertir un numero en su caracter ascii

tostring = function(arreglo) {
            var codigos = [];
             for (var i = 0; i < arreglo.length; i++) {
                 if (typeof arreglo[i] === 'number' && (arreglo[i] > 32 && arreglo[i] < 127) || (arreglo[i] > 160 && arreglo[i] <= 255)) {
                     codigos.push(String.fromCharCode(arreglo[i]));
                 }
             }
            return codigos;
        }
        
////////////////// mejorado

tostring = function(arreglo) {
            return arreglo.map(e => String.fromCharCode(e));
        }
