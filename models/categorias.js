var mongoose = require('mongoose');

module.exports = function(){	

	var categoriasSchema = mongoose.Schema({
		categoria: {type: String, required: true, trim: true},
	});

	return mongoose.model('Categorias', categoriasSchema);
}