const bcrypt = require('bcrypt');
const faker = require('faker');

module.exports = {
  up: async (queryInterface) =>
    queryInterface.bulkInsert(
      'Users',
      [
        {
          email: faker.internet.email(),
          password: await bcrypt.hash('password', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: faker.internet.email(),
          password: await bcrypt.hash('password', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: faker.internet.email(),
          password: await bcrypt.hash('password', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: faker.internet.email(),
          password: await bcrypt.hash('password', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: faker.internet.email(),
          password: await bcrypt.hash('password', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    ),

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
