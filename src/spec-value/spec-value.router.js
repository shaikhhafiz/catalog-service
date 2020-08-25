const CRUDRouter = require('../common/crud/router.config.js');
const SpecValueController = require('./spec-value.controller.js');

class SpecValueRouter extends CRUDRouter{

    constructor(app) {
        let controller = new SpecValueController();
        super(app, controller, 'spec-values');
    }
}

module.exports = SpecValueRouter