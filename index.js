'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const port = 5000;

const TagManager = require('./tag-manager');
const tagManager = new TagManager();

router.use(function(req, res, next) {
  console.log(`Received ${req.method}`);
  next();
});

router.route('/tags')
  .get(function(req, res) {
    res.json({ tags: tagManager.list(), count: tagManager.count() });
  })

  .post(function(req, res) {
    let tag = req.body.tag;
    if (tagManager.add(tag)) {
      res.json({message: 'Tag created', tag: tag});
    } else {
      res.json({message: 'Tag was not created'});
    }
  })

  .delete(function(req, res) {
    let tag = req.body.tag;
    let removed = tagManager.remove(tag)
    if (removed) {
      res.json({message: 'Tag deleted', tag: removed});
    } else {
      res.json({message: 'Tag was not found', tag: tag});
    }
  });

app.use(bodyParser.json());
app.use('/', router);

app.listen(port);
console.log('Server running on port ' + port);