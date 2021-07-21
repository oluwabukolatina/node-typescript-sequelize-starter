import { DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME, DATABASE_HOST } from "../../src/v1/utils/secret";

require('dotenv').config();

module.exports = {
  development: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    dialect: 'postgres',
  }
};
