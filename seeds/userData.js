const { User } = require('../models');

const userData = [
  {
    user_id: 1,
    username: 'Biggs',
    email: 'biggs@mail.com',
    password: 'password123',
  },
  {
    user_id: 2,
    username: 'Lernantino',
    email: 'lernantino@mail.com',
    password: 'test123',
  },
  {
    user_id: 3,
    username: 'techguy300',
    email: 'techguy300@mail.com',
    password: 'secret123',
  },
  {
    user_id: 4,
    username: 'Herfst',
    email: 'herfst2@mail.com',
    password: 'private123',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;