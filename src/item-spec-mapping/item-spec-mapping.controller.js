const CRUDController = require('../common/crud/crud.conteroller.js');
const ItemSpecMappingService = require('./item-spec-mapping.service.js');


class ItemSpecMappingController extends CRUDController{

  constructor() {
    const service = new ItemSpecMappingService();
    super(service);
  }
}

module.exports = ItemSpecMappingController