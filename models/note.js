var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//create a new NoteSchema object
var NoteSchema = new Schema({
  title: String,
  body: String
});

var Note = mongoose.model("Note", NoteSchema);

//export model
module.exports = Note;
