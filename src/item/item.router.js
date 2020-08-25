const ItemController = require('./item.controller.js');
const CRUDRouter = require('../common/crud/router.config.js');

class ItemRouter extends CRUDRouter{

    constructor(app) {
        let itemController = new ItemController();
        super(app, itemController, 'items');
    }
}

module.exports = ItemRouter