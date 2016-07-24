define(require => {
    var ReactControl = require('jsx!$MODULE_PATH/ReactControl'),
        ReactButton = require('jsx!$MODULE_PATH/ReactButton');

    return ReactControl.wrap(ReactButton);
});