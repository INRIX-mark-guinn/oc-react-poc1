// This is an OC control that wraps a button written entirely in React
define(require => {
    var ReactControl = require('jsx!$MODULE_PATH/oc/ReactControl'),
        ReactButton = require('jsx!$MODULE_PATH/react/ReactButton');

    return ReactControl.wrap(ReactButton);
});