const { User } = require('../models');

const userData = [
  {
    username: 'Biggs',
    email: 'biggs@mail.com',
    password: 'password123',
  },
  {
    username: 'Lernantino',
    email: 'lernantino@mail.com',
    password: 'test123',
  },
  {
    username: 'techguy300',
    email: 'techguy300@mail.com',
    password: 'secret123',
  },
  {
    username: 'Herfst',
    email: 'herfst2@mail.com',
    password: 'private123',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;