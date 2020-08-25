const SpecDAO = require('./spec.dao');
const CRUDService = require('../common/crud/crud.service');

class SpecService extends CRUDService{
    
    constructor() {
        super(SpecDAO);
    }
}

module.exports = SpecService