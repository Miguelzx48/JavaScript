#javascript

// Callback - Object Oriented (Stoyan Stefanov)

var myarr = [];

function multiplyByTwo(a, b, c, callback) {
    var i, ar = [];
    for (i = 0; i < 3; i++) {
        ar[i] = callback(arguments[i] * 2);
    }
    return ar;
}

myarr = multiplyByTwo(1, 2, 3, function(a) { return a + 1 });
console.log(myarr);
