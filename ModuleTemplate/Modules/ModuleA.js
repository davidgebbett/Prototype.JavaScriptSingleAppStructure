
//var x = require('ModuleB.js'); // as it requires module B B will load first, then A
//exports.addNumber = function (one, two) { alert(one + two); }
//var something = 'A';
//alert(something);
//x.hello();

//Below pulls through the "global var from B
//alert('In B globalTest is' + globalTest);
//globalTest = 'I am trying to pollute the global from A';
//alert(globalTest);

//This throws an Undefined error... vars are scoped inside
//Salert(SomethingInB);

(function (modB) {
    var mod = {
        init: function() { //Do your setup here
            mod.start();
        },
        start: function() { // Logic
            modB.hello();
        },
        api: { // Public Api
            greeting: function() {
                alert('Hello from Module A');
            }
        }
    };
    mod.init();
    module.exports = mod.api;

}(require('ModuleB.Js')))