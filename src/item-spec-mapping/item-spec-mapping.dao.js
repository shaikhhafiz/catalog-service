const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../core/database');

class ItemSpecMappingDAO extends Model {}

ItemSpecMappingDAO.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    item_id: DataTypes.STRING,
    spec_id: DataTypes.STRING,
    is_mandatory: DataTypes.BOOLEAN,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    created_by: DataTypes.STRING,
    updated_at: { type: DataTypes.DATE},
    updated_by: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN
  },
  { 
    sequelize,
    modelName: 'ItemSpecMapping',
    schema: 'cat',
    timestamps: false,
    tableName: 'item_spec_mapping'
  }
);

module.exports = ItemSpecMappingDAO;