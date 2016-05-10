'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phraseModel = new Schema({
  text: { type: String, required: true, index: { unique: true } }
});

module.exports = mongoose.model('Phrase', phraseModel);
