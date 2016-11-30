 binary = function(numero) {// numero -> arreglo de numeros a convertir
            var binarios = []; // arreglo de 'numero' con los numeros convertidos
            var binario = []; // arreglo del cada numero del arreglo 'numero' convertidos a binario
            for (var i = 0; i < numero.length; i++) {
                while (numero[i] > 0) {
                    binario[binario.length] = numero[i] % 2; //== 1 ? 'a' : 'b';
                    numero[i] >>= 1;
                }
                binarios.push(binario.reverse().join(''));
                binario = [];
            }
            return binarios;
        }
