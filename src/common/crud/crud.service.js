const _ = require('lodash');
class CRUDService {

  constructor(dao) {
    this.dao = dao;
  }

  readAll = async function () {
    const rows = await this.dao.findAll().then(rows => rows);
    const result = rows.map(row => this.makeReadable(row.dataValues));
    return result;
  }

  findById = async function (rowId) {
    const row = await this.dao.findByPk(rowId);
    row.dataValues = this.makeReadable(row.dataValues);
    return row.dataValues;
  };

  save = async function (row) {
    const createdRow = await this.dao.create(this.makeWritable(row));
    createdRow.dataValues = this.makeReadable(createdRow.dataValues);
    return createdRow;
  }

  deleteById = async function (rowId) {
    const deletedRow = await this.dao.destroy({
      where: {
        id: rowId
      }
    });
    return deletedRow;
  }

  makeReadable = (values) => {
    return _.mapKeys(values, (value, key) => _.camelCase(key));
  }

  makeWritable = (values) => {
    return _.mapKeys(values, (value, key) => _.snakeCase(key));
  }
}

module.exports = CRUDService