define(require => {
    var React = require('react'),
        ReactControl = require('jsx!$MODULE_PATH/ReactControl');

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