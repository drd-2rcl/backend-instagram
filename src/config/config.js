require('dotenv').config();
const env = process.env.NODE_ENV;

const db = {
  host: process.env.HOST,
  port: parseInt(process.env.PORT),
  name: process.env.NAME
}

const config = {
  db
};

module.exports = config[env];