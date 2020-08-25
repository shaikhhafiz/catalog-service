const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../core/database');

class ItemDAO extends Model {}

ItemDAO.init(
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    name_en: Sequelize.STRING,
    name_local: Sequelize.STRING,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    created_by: DataTypes.STRING,
    updated_at: { type: DataTypes.DATE},
    updated_by: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN
  },
  { 
    sequelize,
    modelName: 'Item',
    schema: 'cat',
    timestamps: false,
    tableName: 'item'
  }
);

module.exports = ItemDAO;