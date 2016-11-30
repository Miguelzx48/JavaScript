/// operacion entre binarios OR, AND , XOR

opBinarias = function(num1,num2,operacion) {
            var numero = [];

            for (var i = 1; i <= num1.length; i++) {
                if (num1[num1.length - i] == 1 && num2[num2.length - i] == 1) {
                    if (operacion == 'OR' || operacion == 'AND') { //&& (operacion == 'OR' || operacion == 'AND')) {
                        numero.push(1);
                    }
                } else if (num1[num1.length - i] == 1 && (num2[num2.length - i] == 0 || num2[num2.length - i] == undefined)) {
                    if (operacion == 'XOR' || operacion == 'OR') { //&& operacion == 'XOR' || operacion == 'OR') {
                        numero.push(1);
                    }
                } else if (num1[num1.length - i] == 0 && num2[num2.length - i] == 1) {
                    if (operacion == 'OR') { //&& operacion == 'OR') {
                        numero.push(1);
                    }
                } else {
                    numero.push(0);
                }
            }
            return numero.reverse().join('');
        }
