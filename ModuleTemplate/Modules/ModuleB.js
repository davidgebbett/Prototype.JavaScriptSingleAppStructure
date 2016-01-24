exports.hello = function () { alert("Hello"); }

var something = 'B';
//alert(something);
//This polutes teh global "modules
//globalTest = 'I am trying to pollute the global from B';
//alert(globalTest);

//Testing var scope
var SomethingInB = 'I Am in B';
alert(SomethingInB);
