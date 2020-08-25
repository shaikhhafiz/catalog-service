const SpecService = require('./spec.service.js');
const CRUDController = require('../common/crud/crud.conteroller.js');

class SpecController extends CRUDController{
  constructor() {
    const service = new SpecService();
    super(service);
  }
}

module.exports = SpecController