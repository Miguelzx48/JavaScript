# JavaScript - Stoyan Stefanov - Object Oriented Java]Script
/* Imagine the String() constructor didn't exist. Create a constructor function MyString() 
that acts like String() as closely as possible. You're not allowed to use any built-in string
methods or properties, and remember that String() doesn't exist. You can use this code to test your constructor:*/

function MyString(texto) {
    this.texto = texto;
    this.length = texto.length;
    this.split = function(letra) {
        return texto.split(letra);
    }
    this.charAt = function(n) {
        return texto[n];
    }
    this.concat = function(frase) {
        return texto + " " + frase;
    }
    this.valueOf = function() {
        return texto;
    }
    this.esplit = function(letra) {
        var cadena = "";
        for (var i = 0; i < texto.length; i++) {
            if (texto[i] != letra) {
                cadena += texto[i]
            } else if (texto[i] != texto[texto.length - 1] || texto[i] != texto[0]) {
                cadena += ',';
            }
        }

        return cadena
    }
    this.reverse = function() {
        var cadena = "";
        for (var i = texto.length - 1; i >= 0; i--) {
            cadena += texto[i]
        }
        return cadena;
    }

}
