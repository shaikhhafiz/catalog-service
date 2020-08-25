class CRUDController {

  constructor(service) {
    this.service = service;
  }

  readAll = async (req, res) => {
    try {
      const elems = await this.service.readAll();
      return res.send({ elems });
    } catch (error) {
      return res.send(error);
    }
  }
    
  findById = async (req, res) => {
    try {
      const elem = await this.service.findById(req.params.id);
      return res.send({ elem });
    } catch (error) {
      return res.send(error);
    }
  }
    
  save = async (req, res) => {
    try {
      const elem = await this.service.save(req.body);
      return res.send({ elem });
    } catch (error) {
      return res.send(error);
    }
  }
    
  deleteById = async (req, res) => {
    try {
      const elem = await this.service.deleteById(req.params.id);
      return res.send({ elem });
    } catch (error) {
      return res.send(error);
    }
  }

}

module.exports = CRUDController