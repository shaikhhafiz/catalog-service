const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../core/database');

class SpecValueDAO extends Model {}

SpecValueDAO.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    name_en: DataTypes.STRING,
    name_local: DataTypes.STRING,
    spec_item_mapping_id: DataTypes.BOOLEAN,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    created_by: DataTypes.STRING,
    updated_at: { type: DataTypes.DATE},
    updated_by: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN
  },
  { 
    sequelize,
    modelName: 'SpecValue',
    schema: 'cat',
    timestamps: false,
    tableName: 'spec_value'
  }
);

module.exports = SpecValueDAO;