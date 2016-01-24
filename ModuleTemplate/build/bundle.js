(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (modC) {
    var mod = {
        init: function () {
            mod.start();
        },
        start: function () {
            alert(modC.someProp + ' From Bye Mod');
        },
        api: {
        }
    };
    mod.init();
    module.exports = mod.api;
}(require('ModuleC.js')));
},{"ModuleC.js":8}],2:[function(require,module,exports){
(function () {
    var mod = {
        init: function () {
            mod.start();
        },
        start: function () {
            alert('Hey from a new module');
        },
        api: {
        }
    };
    mod.init();
    mod.exports = mod.api;
}());
},{}],3:[function(require,module,exports){

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
},{"ModuleB.Js":7}],4:[function(require,module,exports){
exports.hello = function () { alert("Hello"); }

var something = 'B';
//alert(something);
//This polutes teh global "modules
//globalTest = 'I am trying to pollute the global from B';
//alert(globalTest);

//Testing var scope
var SomethingInB = 'I Am in B';
alert(SomethingInB);

},{}],5:[function(require,module,exports){
(function (modA) {
    var mod = {
        init: function() {
            mod.start();
        },
        start: function() {
            modA.greeting();
        },
        api: {
            someProp : 'ModC Some Prop'
        }
    };
    mod.init();
    module.exports = mod.api;
}(require('ModuleA.Js')))
},{"ModuleA.Js":6}],6:[function(require,module,exports){
module.exports=require(3)
},{"ModuleB.Js":7}],7:[function(require,module,exports){
module.exports=require(4)
},{}],8:[function(require,module,exports){
module.exports=require(5)
},{"ModuleA.Js":6}]},{},[1,2,3,4,5])