const router = require('express').Router();
const { User, Post } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [User]
      //   {
      //     model: User,
      //     attributes: ['username'],
      //   },
      // ],
    });
    console.log(dbPostData);
    //console.log(post);
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    //console.log(post);

    res.render('homepage',  {
      posts
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get a comment input block
router.get('/:post_id', async (req, res) => {
  try{
    const specificPost = await Post.findOne({
      include: [
      {
        model: User,
        attributes: ['username'],
      },
      ],
    })

    const post = specificPost.get({ plain: true });
    res.render('comment', post);
 
  }
 catch (err) {
  console.log(err);
  res.status(500).json(err);
}
})

module.exports = router;
