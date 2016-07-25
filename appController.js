define(function (require) {
    'use strict';

    const
        ModuleController = require('common/platform/ModuleController');

    /**
     * This is the application controller, which holds the application logic in an MVC architecture.
     * The corresponding application view is used for any UI control handling.
     *
     * You may choose to not use a controller and place your application logic in the view code space.
     * If you do so, you may simply leave this file untouched, or remove it from your application folder
     * and remove the "controller" line from your app.manifest file.
     *
     * Note that any functions of your own that you define within this ModuleController space
     * may be called by the view as this.getController().yourControllerFunction()
     *
     * Any functions created in the view may be called from here with this.getView().yourViewFunction()
     *
     * Functions called between "view" and "controller" must return a Promise.
     *
     * @see Application Lifecycle {@link https://insidetrack.opencar.com/documentation/2.2/lifecycle}
     * @see Views & Controllers {@link https://insidetrack.opencar.com/documentation/2.2/controllers_and_views}
     * @see Promises {@link https://insidetrack.opencar.com/documentation/2.2/promises}
     */
    return class extends ModuleController {

    };
});
