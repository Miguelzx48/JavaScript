# javascript

///// conversión de numero hexadecimal a formato rgb

function getRGB(color) {
    var hexToRGB = [];

    var rgb = function() {
        hexToRGB[0] = parseInt(color.substring(1, 3), 16);
        hexToRGB[1] = parseInt(color.substring(3, 5), 16);
        hexToRGB[2] = parseInt(color.substring(5, 7), 16);
        return 'rgb(' + hexToRGB + ')';
    }
    return rgb;
}
var a = getRGB('#00FF00');
console.log(a())
