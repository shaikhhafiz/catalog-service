const SpecValueDAO = require('./spec-value.dao');
const CRUDService = require('../common/crud/crud.service');

class SpecValueService extends CRUDService{
    constructor() {
        super(SpecValueDAO);
    }
}

module.exports = SpecValueService