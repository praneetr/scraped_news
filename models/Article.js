var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
  },

  link: {
    type: String,
    required: true,
    unique: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },

  notes: [{
    type: Schema.ObjectId,
    ref: 'Note'
  }]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;