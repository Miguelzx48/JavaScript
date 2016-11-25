/*Imagine Math didn't exist. Create a MyMath object that also provides some
additional methods:
MyMath.rand(min, max, inclusive)—generates a random number between min and max, inclusive if inclusive is true (default)
MyMath.min(array)—returns the smallest number in a given array*/

function MyMath() {
            this.max = function(arreglo) {
                if (toString.call(arreglo) === '[object Array]') {
                    let mayor = 0;
                    for (let i in arreglo) {
                        mayor = (arreglo[i] > mayor) ? arreglo[i] : mayor;
                    }
                    return mayor;
                }
            }
            this.min = function(arreglo) {
                if (toString.call(arreglo) === '[object Array]') {
                    let menor = this.max(arreglo);
                    for (let i in arreglo) {
                        menor = (arreglo[i] < menor) ? arreglo[i] : menor;
                    }
                    return menor;
                }
            }
            this.rand = function (modulus,a, c, seed){/// NO FUNCIONA 'BIEN' ->> teorema lgc
                     if (seed != undefined){
                     this.previous = seed;
                        }
                     var randomnumber = (this.previous * a + c) % modulus;//Math.pow(2,30);
                     this.previous = randomnumber;
                     return randomnumber;
             }
 }

