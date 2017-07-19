const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt');
const Note = mongoose.model('Note');

module.exports ={
	index: (req, res) => {
		res.render('index');
	},

	get_notes: (req, res) => {
		Note.find({}, (err, data) => {
			if(err){
				res.json(err)
			}else{
				res.json(data);
			}
		} )
	},

	create: (req, res) => {
		let note = new Note(req.body);
		note.save( (err, savedNote) => {
			if(err){
				let errors = [];
				for(let i in err.errors){
					errors.push(err.errors[i].message);
				}
				return res.status(400).send(errors);
			}else{
				res.json(savedNote)
			}
		})
		console.log("Controller.js: ", req.body)
	}


};
