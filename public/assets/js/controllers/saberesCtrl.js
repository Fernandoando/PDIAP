(function(){
	'use strict';

	angular
	.module('PDIAP')
	.controller('saberesCtrl', function($scope, $rootScope, $location, $mdDialog, projetosAPI) {

		// $rootScope.inscrito = 0;
		$scope.escolas = [];

		projetosAPI.getEscolasSaberes()
		.success(function(data) {
			angular.forEach(data, function (value) {
				if (value.escola !== undefined) {
					let escolaIdem = false;
					for (var i in $scope.escolas) {
						if (value.escola === $scope.escolas[i]) {
							escolaIdem = true;
							break;
						}
					}
					if (escolaIdem === false) {
						$scope.escolas.push(value.escola);
					}
				}
			});
			console.log($scope.escolas);
		});

		$scope.registrarSaberes = function(saberes) {
			$scope.registro1 = false;
			$rootScope.inscrito = 0;
			projetosAPI.saveSaberesDocentes(saberes)
			.success(function(data) {
				if (data === 'success') {
					let showConfirmDialog = function(ev) {
						var confirm = $mdDialog.confirm()
						.title('Parabéns!')
						.textContent('Inscrição realizada com sucesso!')
						.ariaLabel('Inscrição realizada com sucesso!')
						.targetEvent(ev)
						.ok('OK, Voltar')
						.cancel('Nova Inscrição');
						$mdDialog.show(confirm).then(function() {
							console.log(confirm);
							$location.url('/');
						}, function() {});
					};
					showConfirmDialog();
					resetForm();
				} else {
					let showConfirmDialog = function(ev) {
						var confirm = $mdDialog.confirm()
						.title('Ops...')
						.textContent('A inscrição não foi realizada. Tente novamente ou então, entre em contato conosco.')
						.ariaLabel('A inscrição não foi realizada.')
						.targetEvent(ev)
						.theme('error')
						.ok('Continuar')
						.cancel('Entrar em contato');
						$mdDialog.show(confirm).then(function() {}
						, function() {
							$location.url('/');
						});
					};
					showConfirmDialog();
				}
			})
			.error(function(status) {
				let showConfirmDialog = function(ev) {
					var confirm = $mdDialog.confirm()
					.title('Ops...')
					.textContent('A inscrição não foi realizada. Tente novamente ou então, entre em contato conosco.')
					.ariaLabel('A inscrição não foi realizada.')
					.targetEvent(ev)
					.theme('error')
					.ok('Continuar')
					.cancel('Entrar em contato');
					$mdDialog.show(confirm).then(function() {}
					, function() {
						$location.url('/');
					});
				};
				showConfirmDialog();
				console.log(status);
			});
			console.log(saberes);
		};

		// $scope.showConfirmDialog = function(ev) {
		// 	console.log($rootScope.inscrito);
		// 	if ($rootScope.inscrito === 1) {
		// 		var confirm = $mdDialog.confirm()
		// 		.title('Parabéns!')
		// 		.textContent('Inscrição realizada com sucesso!')
		// 		.ariaLabel('Inscrição realizada com sucesso!')
		// 		.targetEvent(ev)
		// 		.ok('OK, Voltar')
		// 		.cancel('Nova Inscrição');
		// 		$mdDialog.show(confirm).then(function() {
		// 			console.log(confirm);
		// 			$location.url('/');
		// 		}, function() {});
		// 	} else {
		// 		var confirm = $mdDialog.confirm()
		// 		.title('Ops...')
		// 		.textContent('A inscrição não foi realizada. Tente novamente ou então, entre em contato conosco.')
		// 		.ariaLabel('A inscrição não foi realizada.')
		// 		.targetEvent(ev)
		// 		.theme('error')
		// 		.ok('Continuar')
		// 		.cancel('Entrar em contato');
		// 		$mdDialog.show(confirm).then(function() {}
		// 		, function() {
		// 			$location.url('/');
		// 		});
		// 	}
		// };

		let resetForm = function() {
			delete $scope.saberes;
			$scope.saberesForm.$setPristine();
		};
	});
})();
