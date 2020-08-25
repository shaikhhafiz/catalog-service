const SpecController = require('./spec.controller.js');
const CRUDRouter = require('../common/crud/router.config.js');

class SpecRouter extends CRUDRouter {
    
    constructor(app) {
        let specController = new SpecController();
        super(app, specController, 'specs');
    }
}

module.exports = SpecRouter