decimal = function(numero) {// numero-> arreglo de decimales
            var decimales = [];
            for (var i = 0; i < numero.length; i++) {
                decimales.push(parseInt(numero[i], 2));
            }
            return decimales;
        }
