const CRUDController = require('../common/crud/crud.conteroller.js');
const ItemService = require('./item.service.js');

class ItemController extends CRUDController{

  constructor() {
    const service = new ItemService();
    super(service);
  }
}

module.exports = ItemController