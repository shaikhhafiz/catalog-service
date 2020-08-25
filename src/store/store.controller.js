const CRUDController = require('../common/crud/crud.conteroller.js');
const StoreService = require('./store.service.js');

class StoreController extends CRUDController{

  constructor() {
    const service = new StoreService();
    super(service);
  }
}

module.exports = StoreController