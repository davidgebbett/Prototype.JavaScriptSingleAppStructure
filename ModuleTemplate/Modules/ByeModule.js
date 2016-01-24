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