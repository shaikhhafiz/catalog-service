const CRUDController = require('../common/crud/crud.conteroller.js');
const SpecValueService = require('./spec-value.service.js');


class SpecValueController extends CRUDController{

  constructor() {
    const service = new SpecValueService
    super(service);
  }
}

module.exports = SpecValueController