define(require => {
    // This is just easier because of the way I'm currently loading jsx. Wouldn't be needed if the files were
    // pre-transpiled or loaded in some other fashion.
    return require('jsx!$MODULE_PATH/RealChamber2');
});
