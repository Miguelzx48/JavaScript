// organizar un array de menor a mayor o viceversa

var organizar = function(arreglo, tipo) {
            this.arreglo = arreglo;
            var i = 0;
            var condicion = false;
            while (condicion == false && arreglo.length - 1 > i) { //ordenamiento por burbuja de menor a mayor
                var mayor = 0;
                var posicion = 0;
                if (arreglo[i] > arreglo[i + 1]) {// intercambio de posiciones
                    mayor = arreglo[i];
                    posicion = i;
                    arreglo[posicion] = arreglo[i + 1];
                    arreglo[i + 1] = mayor;
                }
                i++;
                while (condicion == false && i == arreglo.length - 1) {// verificacion array este completamente organizado
                    for (let j = 0; arreglo.length - 1 > j; j++) {
                        if (arreglo[j + 1] >= arreglo[j]) {
                            condicion = true;
                        } else {
                            condicion = false;
                            break;
                        }
                    }
                    i = 0;
                }
            }
            if (tipo.toLowerCase() == 'menor') {
                return arreglo;
            } else {
                return arreglo.reverse();
            }
        }

////////////// mejorado

organizar = function(arreglo, tipo) {
            this.arreglo = arreglo;
            var i = 0;
            var condicion = false;
            var menor = 0;
            while (condicion == false) {
                arreglo.map((e, i) => e > arreglo[i + 1] ? (menor = arreglo[i + 1], arreglo[i + 1] = arreglo[i], arreglo[i] = menor) : e);
                while (condicion == false && i < 1) {
                    for (let j = 0; arreglo.length - 1 > j; j++) {
                        condicion = arreglo[j + 1] >= arreglo[j] ? true : (j = arreglo.length, false);
                    }
                    i = 1;
                }
                i = 0;
            }
            return tipo.toLowerCase() == 'menor' ? arreglo : arreglo.reverse();
        }

