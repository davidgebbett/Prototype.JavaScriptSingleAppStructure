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