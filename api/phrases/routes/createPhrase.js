'use strict';

const Phrase = require('../model/Phrase');
const Boom = require('boom');

module.exports = {
  method: 'POST',
  path: '/api/phrases',
  config: {
    auth: false,
    handler: (req, res) => {
      let phrase = new Phrase();
      phrase.text = req.payload.text;
      phrase.save((err, phrase) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        res({ text: phrase.text }).code(201);
      });
    }
  }
}
