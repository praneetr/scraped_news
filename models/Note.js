var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = new Schema({
    Article: {
        type: String,
        ref: 'Article'
    },
    text: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

var Note = mongoose.model("Note", NoteSchema);

module.exports = Note;