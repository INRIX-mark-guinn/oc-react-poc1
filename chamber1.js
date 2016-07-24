define(require => {
    const Chamber = require('common/platform/chamber/Chamber'),
        Button = require('common/ui/Button'),
        TextView = require('common/ui/TextView'),
        Pane = require('common/ui/Pane'),
        ReactButton = require('jsx!$MODULE_PATH/ReactButton-wrapped');

    return class extends Chamber {
        beforeStart () {
            return super.beforeStart().then(() => {
                new ReactButton({
                    model:{
                        text: 'Click Wrapped React Control'
                    },
                    click: this.clickHandler.bind(this)
                }).render(this.screen.element);

                new Button({
                    model:{
                        text: 'Click OC Control'
                    },
                    click: this.clickHandler.bind(this)
                }).render(this.screen.element);

                const p = new Pane();
                p.addChild(new TextView({model:{text: "This chamber is managed&nbsp;"}}));
                p.addChild(new TextView({model:{text: "by old-style OC controls"}}));
                p.render(this.screen.element);
            });
        }

        clickHandler() {
            this.goto('chamber2');
        }
    }
});