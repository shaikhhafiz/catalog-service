const StoreController = require('./store.controller.js');
const CRUDRouter = require('../common/crud/router.config.js');

class StoreRouter extends CRUDRouter{

    constructor(app) {
        let storeController = new StoreController();
        super(app, storeController, 'stores');
    }
}

module.exports = StoreRouter