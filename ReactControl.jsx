define(function(require) {
    const 
        Control = require('common/ui/Control'),
        React = require('react'),
        ReactDOM = require('react-dom');
    
    class ReactControl extends Control {
        /**
         * Returns a constructor
         * @param reactComponent
         * @returns {Function}
         */
        static wrap(reactComponent) {
            return function(attrs = {}, autoRender) {
                return new ReactControl(reactComponent, attrs, autoRender);
            }
        }

        /**
         * Constructs a Control instance
         *
         * @param {React.Component} reactComponent  The component to wrap (not instantiated)
         * @param {Object} attrs                    An object literal defining the attributes of the control.
         * @param {boolean} [autoRender=true]       Indicates whether the control renders automatically after construction if it has a valid HTMLElement instance to replace.
         */
        constructor (reactComponent, attrs = {}, autoRender) {
            super(false);
            this.reactComponent = reactComponent;
            if (attrs) {
                this.init(attrs, autoRender);
            }
        }

        /**
         * @private
         * @returns {HTMLElement} the generated HTML element.
         */
        _generateElement () {
            let element = document.createElement('div');

            element.setAttribute('data-oc-control', 'ReactControl');
            if (this.get('noStyle')) {
                element.classList.add('no-style');
            }

            this._renderModelToHtml(element);

            return element;
        }

        /**
         * Sets the contents of the element.
         *
         * @param {HTMLElement}     element
         */
        _renderModelToHtml (element) {
            if (!element && this.renderedElement) {
                element = this.renderedElement;
            }
            this.renderedElement = element;

            let props = Object.assign(
                this.controlProps.flatten(),
                this.model.flatten()
            );

            ReactDOM.render(<this.reactComponent {...props}/>, element);
        }

        /**
         * Returns the existing HTMLElement, optionally with new HTML.
         *
         * @returns {HTMLElement} True or false, depending on whether the specified element can be reused rather than replaced.
         */
        _reuseElement () {
            // if (this.model.get('text') || this.get('template')) {
            this._renderModelToHtml(this.existingElement);
            // } else {
            //     this.set('template', this.existingElement.innerHTML, true);
            //     this._buildHtmlFromTemplate(this.existingElement);
            // }
            return this.existingElement;
        }

        // These are just for safety

        /**
         * Sets the contents of the element.
         *
         * @param {HTMLElement}     element
         */
        _renderModelToHtmlLegacy (element) {
            throw new Error("Don't use this");
        }

        /**
         * Takes a template and turns it into innerHTML for the element in question. Generally this.element,
         * sometimes a control adds its template to a child element (see checkbox for an example).
         *
         * @param {HTMLElement} element The element to which to add the template.
         */
        _buildHtmlFromTemplate (element) {
            throw new Error("Don't use this");
        }

        /**
         * Renders the model using the current control template.
         *
         * @param   {HTMLElement} [element] The element to render content into.
         *
         */
        _renderContentsFromTemplate (element) {
            throw new Error("Don't use this");
        }
    }

    return ReactControl;
});