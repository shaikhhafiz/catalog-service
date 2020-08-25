const CRUDRouter = require('../common/crud/router.config.js');
const ItemSpecMappingController = require('./item-spec-mapping.controller.js');

class ItemSpecMappingRouter extends CRUDRouter{

    constructor(app) {
        let controller = new ItemSpecMappingController();
        super(app, controller, 'item-spec-mappings');
    }
}

module.exports = ItemSpecMappingRouter