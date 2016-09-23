/**
 * Created by ZhiyuanSun on 16/9/23.
 */
const express = require('express');
const router = express.Router();

const EventManager = require('../../management/event-manager');

const eventManager = new EventManager();

router.get('/event-selection', (req, res, next) =>{
  const {start, count} = req.query;
  eventManager.getEventSelection(start, count)
    .then((items)=>{
      res.status(200).send(items);
    })
    .catch((err)=>{
      res.status(500).send(err);
    });
});

module.exports = router;