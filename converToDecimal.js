decimal = function(numero) {// numero-> arreglo de decimales
            var decimales = [];
            for (var i = 0; i < numero.length; i++) {
                decimales.push(parseInt(numero[i], 2));
            }
            return decimales;
        }
///////////// MEJORADO

decimal = function(numero) {
            return numero.map(e => parseInt(String(e), 2)); 
        }
