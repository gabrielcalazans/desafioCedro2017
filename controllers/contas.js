module.exports = function(app){

	var Conta = app.models.contas;

	var ContaController = {
		index: function(req, res){
			Conta.find(function(err, dados){
				if(err){
					//req.flash('erro','erro ao buscar contas:' +err);
					//res.redirect('/contas');
				}else{
					res.render('contas/index', {lista: dados});
				}
			});
		},
		create: function(req, res){
			res.render('contas/create');
		},

		post: function(req, res){
			var model = new Conta();
			model.conta = req.body.conta;
			model.preco = req.body.preco;
			model.save(function(err){
				if(err){
					//req.flash('erro','erro ao cadastrar:' +err);
					res.render('contas/create', {user: req.body});
				}else{
					//req.flash('info', 'Conta cadastrada com sucesso!');
					res.redirect('/contas');
				}
			});
			
		},

		// delete: function(req, res){
		// 	Conta.remove({_id: req.params.id}, function(err){
		// 		if(err){
		// 			//req.flash('erro','erro aoexcluir:' +err);
		// 			res.redirect('/contas');
		// 		}else{
		// 			//req.flash('info','excluido com sucesso!:');
		// 			res.redirect('/contas');
		// 		}
		// 	});
		// },
		delete: function(req, res){
			Conta.remove({_id: req.params.id}, function(err){
				if(err){
					// req.flash('erro', 'Erro ao excluir.' + err);
					res.redirect('/contas');
				}else{
					//req.flash('info', 'Registro excluido com sucesso.');
					res.redirect('/contas');
				}
			});
		},

		edit: function(req, res){
			Conta.findById(req.params.id, function(err, data){
				if(err){
					//req.flash('erro','erro ao editar:' +err);
					res.redirect('/contas');
					}else{
						res.render('contas/edit', {dados, data});
					}
				});			
		},

		update: function(req, res){
				Conta.findById(req.params.id, function(err, data){
					var model = data;
					model.conta = req.body.conta;
					model.preco = req.body.preco;

					model.save(function(err){
						if(err){
							//req.flash('erro', 'Erro ao editar.' + err);
							res.render('contas/edit', {dados: model});
						}else{
							//req.flash('info', "Registro editado com sucesso.");
							res.redirect('/contas');
						}
					})
					
				});
		}
		
	}


	return ContaController;
}