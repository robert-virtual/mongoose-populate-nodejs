const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  title: String,
  pages: Number
});

const authorSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  books: [bookSchema]
});

const Author = mongoose.model('author', authorSchema);


module.exports = Author