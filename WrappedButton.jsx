define(require => {
    const
        React = require('react'),
        Button = require('common/ui/Button'),
        WrappedControlComponent = require('jsx!$MODULE_PATH/WrappedControlComponent');

    return function(props) {
        return <WrappedControlComponent {...props} control={Button}/>
    }
});