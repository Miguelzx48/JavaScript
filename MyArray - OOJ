/* Imagine Array() doesn't exist and the array literal notation doesn't exist either. 
Create a constructor called MyArray() that behaves as close to Array() as possible. Test with this code:*/


var MyArray = function() {
            var args = arguments;
            this.length = 0;
            for (var i in args) {
                this[this.length] = args[i];
                this.length++;
            }

            this.toString = function() {
                var result = args[0];
                for (var i = 1; i < args.length; i++) {
                    result += ', ' + args[i];
                }
                return "[" + result + "]";
            }

            this.push = function(push) {
                var newLength = args.length++;
                args[newLength] = push;
                this[newLength] = push;
                this.length++;
                return this.length;
            }
            this.pop = function() {
                let temp = args[args.length - 1];
                delete args[--args.length];
                delete this[args.length];
                this.length--;
                return temp;
            }
            this.join = function(joiner) {
                if (typeof arguments[0] === "undefined") {
                    joiner = ',';
                }
                var result = args[0];
                for (var i = 1; i < args.length; i++) {
                    result += joiner + args[i];
                }
                return result;
            }

        }
