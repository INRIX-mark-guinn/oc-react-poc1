define(function(require) {
    const
        React = require('react'),
        Control = require('common/ui/control');

    class WrappedControlComponent extends React.Component {
        constructor (...args) {
            super(...args);
            this.control = null;
        }

        componentWillMount () {
            this.control = new this.props.control(Object.assign({}, this.props), false);
        }

        componentDidMount () {
            var a = this.refs.controlRoot;
            this.control.render(this.refs.controlRoot);
        }

        componentWillUnmount () {
            // TODO if necessary
        }

        componentWillReceiveProps (nextProps, nextState) {
            // model could be extracted here if we want the props to be flat (ideal for react)
            let model = {},
                modelChanges = 0,
                controlProps = {},
                controlPropsChanges = 0;

            if (nextProps.model) {
                for (let k in nextProps.model) {
                    if (this.props.model && nextProps.model[k] !== this.props.model[k]) {
                        model[k] = nextProps.model[k];
                        modelChanges++;
                    }
                }
            }

            for (let k in nextProps) {
                if (k !== 'model' && nextProps[k] !== this.props[k]) {
                    controlProps[k] = nextProps[k];
                    controlPropsChanges++;
                }
            }

            if (modelChanges) {
                this.control.model.set(model);
            }

            if (controlPropsChanges) {
                this.control.controlProps.set(controlProps);
            }
        }

        shouldComponentUpdate () {
            // we never want React to try to update the DOM here
            return false;
        }

        render () {
            return <div ref="controlRoot"/>
        }
    }

    return WrappedControlComponent;
});