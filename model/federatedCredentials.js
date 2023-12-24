const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const FederatedCredentials = sequelize.define('FederatedCredentials', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  provider: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  uniqueKeys: {
    uniqueConstraint: {
      unique: true,
      fields: ['provider', 'subject'],
    },
  },
});

module.exports = FederatedCredentials;
