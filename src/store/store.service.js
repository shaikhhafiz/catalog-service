const StoreDAO = require('./store.dao.js');
const CRUDService = require('../common/crud/crud.service.js');

class StoreService extends CRUDService{
    constructor() {
        super(StoreDAO);
    }
}

module.exports = StoreService