// This is a React component with a similar interface to the OC Button control
define(require => {
    var React = require('react');

    return function (props) {
        return (
            <button data-oc-control="Button"
                    className={props.classNames && props.classNames.join(' ')}
                    onClick={props.click}>
                {props.text}
            </button>
        );
    };
});