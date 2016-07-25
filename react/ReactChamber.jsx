// This is a chamber that is powered by react.
// You just extend it and override the renderContent method
define(function(require) {
    const
        React = require('react'),
        ReactDOM = require('react-dom'),
        Chamber = require('common/platform/chamber/Chamber');

    class ReactChamber extends Chamber {
        beforeStart() {
            return super.beforeStart().then(() => {
                this.renderComponent();
            });
        }

        renderComponent() {
            ReactDOM.render(this.renderContent(), this.screen.element);
        }

        renderContent() {
            return <div/>
        }
    }

    return ReactChamber;
});