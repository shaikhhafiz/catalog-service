const ItemDAO = require('./item.dao');
const CRUDService = require('../common/crud/crud.service.js');

class ItemService extends CRUDService{
    constructor() {
        super(ItemDAO);
    }
}

module.exports = ItemService