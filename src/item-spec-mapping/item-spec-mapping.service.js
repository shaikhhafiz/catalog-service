const ItemSpecMappingDAO = require('./item-spec-mapping.dao');
const CRUDService = require('../common/crud/crud.service');

class ItemSpecMappingService extends CRUDService{
    constructor() {
        super(ItemSpecMappingDAO);
    }
}

module.exports = ItemSpecMappingService