// This is a React component that wraps the OC button control
define(require => {
    const
        React = require('react'),
        Button = require('common/ui/Button'),
        WrappedControlComponent = require('jsx!$MODULE_PATH/react/WrappedControlComponent');

    return function(props) {
        return <WrappedControlComponent {...props} control={Button}/>
    }
});