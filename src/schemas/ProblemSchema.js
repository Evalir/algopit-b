
const mongoose = require('mongoose');
const { Schema } = mongoose;
// TODO: migrate problems from toribio db to local db
const problemSchema = new Schema({
  id: String,
  name: String,
  difficulty: Number,
  computedDifficulty: Number,
  url: String,
  contest: String,
  entryDate: { type: Date, default: Date.now },
  sourceReferenceId: String,
  lastUpdated: { type: Date, default: Date.now },
  categories: [String],
  judge: String,
  writer: String,
  tags: [String]
}, {
  timestamps: {}
});

const Problem = mongoose.model('problem', problemSchema);

module.exports = {
  Problem
};
