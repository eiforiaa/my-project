const fs = require('fs');
const path = require('path');
const { Op } = require('sequelize');
const Hotel = require('../models/Hotel');
const upsert = require('../utils/upsert');
const { Iconv } = require('iconv');

const HotelController = () => {
  const sync = async (req, res) => {
    const file = fs.readFileSync(path.join(__dirname, '../../db/data.json'));
    const buffer = Buffer.from(file, 'binary');
    const conv = Iconv('windows-1251', 'utf8');
    const body = conv.convert(buffer).toString();
    const apiData = JSON.parse(body);

    //  eslint-disable-next-line no-restricted-syntax
    apiData.forEach((entry) => {
      upsert({
        model: Hotel,
        values: {
          id: entry.global_id,
          fullName: entry.FullName,
          admArea: entry.AdmArea,
          district: entry.District,
          address: entry.Address,
          fullAvailable: entry.FullAvailable,
          available_o: entry.Available_o,
          available_z: entry.Available_z,
          available_s: entry.Available_s,
          available_k: entry.Available_k,
          presenceParking: entry.PresenceParking,
          presenceWC: entry.PresenceWC,
          presenceRoom: entry.PresenceRoom,
        },
        condition: { id: entry.global_id },
      });
    });

    return res.status(200).json(apiData);
  };

  const getAll = async (req, res) => {
    try {
      let hotels;

      if (req.query.name) {
        hotels = await Hotel.findAll({
          where: {
            fullName: {
              [Op.substring]: req.query.name,
            },
          },
        });
      } else {
        hotels = await Hotel.findAll();
      }

      return res.status(200).json({ hotels });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    sync,
    getAll,
  };
};

module.exports = HotelController;
