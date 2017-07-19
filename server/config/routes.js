const mongoose = require('mongoose');

const Note = mongoose.model('Note');

const controller = require('./../controllers/controller.js'); //link to controller files, which handles what the routes do.

module.exports = app => {
	app.get('/', controller.index);
	app.get('/api/notes', controller.get_notes);
	app.post('/api/notes', controller.create);

	app.all("*", (req,res,next) => {
	    res.sendfile(path.resolve("./public/dist/index.html"))
	});
}
