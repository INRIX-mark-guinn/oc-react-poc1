define(require => {
    const React = require('react');
    const ReactChamber = require('jsx!$MODULE_PATH/react/ReactChamber'),
        Button = require('common/ui/Button'),

        ReactButton = require('jsx!$MODULE_PATH/react/ReactButton'),
        WrappedButton = require('jsx!$MODULE_PATH/react/Button-wrapped');

    return class extends ReactChamber {
        // this liitle exercise just proves we can handle model changes
        tickTock() {
            Log.log('tick tock', this.counter);
            this.counter++;
            this.renderComponent();
            setTimeout(this.tickTock.bind(this), 1000);
        }

        beforeStart() {
            this.counter = 1;
            return super.beforeStart().then(() => {
                this.tickTock();
            });
        }

        renderContent() {
            return (
                <div>
                    <ReactButton text="Click on React Control" click={this.clickHandler.bind(this)}/>
                    <WrappedButton
                        model={{text:`Click on Wrapped OC Control - ${this.counter}`}}
                        click={this.clickHandler.bind(this)}/>
                    <p>This chamber is managed by React.</p>
                </div>
            );
        }

        clickHandler() {
            this.goto('chamber1');
        }
    }

});