const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../core/database');

class StoreDAO extends Model {}

StoreDAO.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    name_en: DataTypes.STRING,
    name_local: DataTypes.STRING,
    store_keeper: DataTypes.STRING,
    store_admin: DataTypes.STRING,
    address: DataTypes.STRING,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    created_by: DataTypes.STRING,
    updated_at: { type: DataTypes.DATE},
    updated_by: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN
  },
  { 
    sequelize,
    modelName: 'Store',
    schema: 'cat',
    timestamps: false,
    tableName: 'store'
  }
);

module.exports = StoreDAO;