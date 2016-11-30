// conversion de caracteres a valores decimales segun la tablas ascii

 toAscii = function(texto) {
            var codigos = [];
            var caracteres = String(texto);
            for (var i = 0; i < caracteres.length; i++) {
                codigos.push(caracteres[i].charCodeAt(0));
            }
            return codigos;
        }
