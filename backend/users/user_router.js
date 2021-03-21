const express = require('express');
const Users = require('./user_module');
const restricted = require('../auth/restricted_midware');

const router = require("express").Router();

router.use(restricted);

router.get('/', (req, res) => {
  Users.getClass()
    .then(classes => {
      res.status(200).json({data: classes});
    })
    .catch(err => {
      res.status(500).json({message: 'Could not fetch classes', error: err.message});
    });
});

router.get('/clan', (req, res) => {
  const {type} = req.body;

  Users.getClassType(type)
    .then(clas => {
      if (clas.length > 0) {
        res.status(200).json({data: clas});
      } else {
        res.status(400).json({errr: 'there is a big error'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Error fetching type', error: err.message});
    });
});

router.get('/cards', (req, res) => {
  const {intensity} = req.body;

  Users.getIntensity(intensity)
    .then(level => {
      if (level.length > 0) {
        res.status(200).json({data: level});
      } else {
        res.status(400).json({message: 'please choose between low, high or medium'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Failed to fetch data', error: err.message});
    });
});

router.get('/', (req, res) => {
  const {location} = req.body;

  Users.getByLocation(location)
    .then(clas => {
      if (clas) {
        res.status(200).json({data: clas});
      } else {
        res.status(400).json({error: 'could not find location'});
      }
    })
    .catch(err => {
      res.status(500).json({message: 'Error loading data', error: err.message});
    });
});

router.get('/duration', (req, res) => {
  const {duration} = req.body;

  Users.getByDuration(duration)
    .then(clas => {
      if (clas) {
        res.status(200).json({data: clas});
      } else {
        res.status(400).json({message: 'error'});
      }
    })
    .catch(err => {
      res.status(500).json({error: 'Error fetching data'});
    });
});

router.post('/:id/card', (req, res) => {
  const {class_id} = req.body;
  const user_id = req.params.id;

  Users.addFavorite(user_id, class_id)
    .then(clas => {
      if (clas) {
        res.status(200).json({data: clas});
      } else {
        res.status(404).json({message: 'invalid id'});
      }
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

router.get('/:id/clan', (req, res) => {
  const user_id = req.params.id;

  Users.getFavoriteClass(user_id)
    .then(clan => {
      res.status(200).json({data: clan});
    })
    .catch(err => {
      res.status(500).json({error: err.message});
    });
});

module.exports = router;