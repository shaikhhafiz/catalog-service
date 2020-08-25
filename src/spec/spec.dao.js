const {Sequelize, DataTypes} = require('sequelize');
const database = require('../core/database');

const Spec = database.define(
  'spec',
  {    
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1
    },
    name_en: DataTypes.STRING,
    name_local: DataTypes.STRING,
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    created_by: DataTypes.STRING,
    updated_at: { type: DataTypes.DATE},
    updated_by: DataTypes.STRING,
    is_deleted: DataTypes.BOOLEAN
  },
  { 
    schema: 'cat',
    timestamps: false,
    modelName: 'Spec',
    tableName: 'spec'
  }
);

module.exports = Spec;