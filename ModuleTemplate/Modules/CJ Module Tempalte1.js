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