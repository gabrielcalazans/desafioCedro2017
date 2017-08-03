var mongoose = require('mongoose');

module.exports = function(){	

	var contasSchema = mongoose.Schema({
		conta: {type: String, required: true, trim: true},
		preco: {type: String, required: true},
	});

	return mongoose.model('Contas', contasSchema);
}