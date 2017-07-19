const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt');

let NoteSchema = new Schema({
	content: {
		type: String,
		required: [true, "Please enter content before submitting"],
	},
},
{timestamps: true});

mongoose.model('Note', NoteSchema)
