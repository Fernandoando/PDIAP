(function(){
	'use strict';

	angular
	.module('PDIAP')
	.factory("projetosAPI", function($http) {
		let _saveProjeto = function(projeto) {
			const request = {
				url: '/projetos/registro',
				method: 'POST',
				data: projeto
			}
			return $http(request);
		};

		let _postLogin = function(email,password) {
			const request = {
				url: '/projetos/login',
				method: 'POST',
				data: {
					email: email,
					password: password
				}
			}
			return $http(request);
		};

		let _getProjeto = function() {
			const request = {
				url: '/projetos/home',
				method: 'GET',
			}
			return $http(request);
		};

		let _getTodosProjetos = function() {
			const request = {
				url: '/projetos/todos',
				method: 'GET',
			}
			return $http(request);
		};

		let _getCategorias = function() {
			const request = {
				url: 'assets/js/categorias-eixos.json',
				method: 'GET',
			}
			return $http(request);
		};

		let _getEstados = function() {
			const request = {
				url: 'assets/js/estados-cidades.json',
				method: 'GET',
			}
			return $http(request);
		};

		let _getEmails = function() {
			const request = {
				url: '/projetos/registro',
				method: 'GET',
			}
			return $http(request);
		};

		let _putProjeto = function(projeto) {
			const request = {
				url: '/projetos/update',
				method: 'PUT',
				data: projeto
			}
			return $http(request);
		};

		let _putIntegrante = function(integrante) {
			const request = {
				url: '/projetos/updateIntegrante',
				method: 'PUT',
				data: integrante
			}
			return $http(request);
		};

		let _postEmail = function(email) {
			const request = {
				url: '/projetos/redefinir-senha',
				method: 'POST',
				data: email
			}
			return $http(request);
		};

		return {
			saveProjeto: _saveProjeto,
			postLogin: _postLogin,
			getProjeto: _getProjeto,
			getTodosProjetos: _getTodosProjetos,
			getCategorias: _getCategorias,
			getEstados: _getEstados,
			getEmails: _getEmails,
			putProjeto: _putProjeto,
			putIntegrante: _putIntegrante,
			postEmail: _postEmail
		};
	});
})();
