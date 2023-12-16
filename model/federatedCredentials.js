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
    type: DataTypes.TEXT,
    allowNull: false,
  },
  subject: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  uniqueKeys: {
    uniqueConstraint: {
      fields: ['provider', 'subject'],
    },
  },
});

module.exports = FederatedCredentials;
