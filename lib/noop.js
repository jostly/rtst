/* A no-op requirejs plugin */
define({
    load: function (name, req, onload, config) {
        req([name], function (value) {
            onload(value);
        });
    }
});