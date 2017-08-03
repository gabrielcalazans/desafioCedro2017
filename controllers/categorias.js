module.exports = function(app){

	var Categoria = app.models.categorias;

	var CategoriaController = {
		index: function(req, res){
			Categoria.find(function(err, dados){
				if(err){
					//req.flash('erro','erro ao buscar contas:' +err);
					//res.redirect('/contas');
				}else{
					res.render('categorias/index', {lista: dados});
				}
			});
		},
		create: function(req, res){
			res.render('categorias/create');
		},

		post: function(req, res){
			var model = new Categoria();
			model.categoria = req.body.categoria;
			model.save(function(err){
				if(err){
					//req.flash('erro','erro ao cadastrar:' +err);
					res.render('categorias/create', {user: req.body});
				}else{
					//req.flash('info', 'Conta cadastrada com sucesso!');
					res.redirect('/categorias');
				}
			});
		}
	}
	
	return CategoriaController;

}