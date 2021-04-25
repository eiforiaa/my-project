const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const tableName = 'hotels';

const Hotel = sequelize.define('Hotel', {
  id: {
    type: Sequelize.NUMBER,
    unique: true,
    primaryKey: true,
  },
  fullName: {
    type: Sequelize.STRING,
  },
  admArea: {
    type: Sequelize.STRING,
  },
  district: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  fullAvailable: {
    type: Sequelize.STRING,
  },
  available_o: {
    type: Sequelize.STRING,
  },
  available_z: {
    type: Sequelize.STRING,
  },
  available_s: {
    type: Sequelize.STRING,
  },
  available_k: {
    type: Sequelize.STRING,
  },
  presenceParking: {
    type: Sequelize.STRING,
  },
  presenceWC: {
    type: Sequelize.STRING,
  },
  presenceRoom: {
    type: Sequelize.STRING,
  },
}, { tableName });

module.exports = Hotel;
