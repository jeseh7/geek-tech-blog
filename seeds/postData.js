const { Post } = require('../models');

const postData = [
  {
    title: 'JavaScript is fun',
    post_date: 'June 21, 2021 17:00:00',
    content: 'JavaScript is soooooo fun!!!',
  },
  {
    title: 'Handlebars',
    post_date: 'August 09, 2021 20:30:00',
    content: 'They just make coding more efficient.',
  },
  {
    title: 'My first post',
    post_date: 'December 21, 2021 20:30:00',
    content: 'Hi everyone! This is my first blog post.',
  },
  {
    title: 'Javascript or Java?',
    post_date: 'March 19, 2021 19:00:00',
    content: 'Does anyone know if it is called javascript or java?',
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
