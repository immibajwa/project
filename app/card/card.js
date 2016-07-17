'use strict';
angular.module('myApp.card', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
	$stateProvider.state('card', 
	{
	url:'/card',	
    templateUrl: 'card/card.html',
	controller: CardController,
    controllerAs: 'CardCtrl',
	resolve: {
		CARDLIST:function($http){
			return $http.get("data/cards.json")
			.then(
				function(response){	
					console.log('SUCCESS');
					return response.data;
				},
				function(error){
					console.log('ERROR');
					return;
				}
			);
		}
	}
	})
}]);
CardController.$inject=['CARDLIST'];
function CardController(CARDLIST){
	var self=this;
	//debugger;
	if(CARDLIST != undefined){
		self.cardlist=CARDLIST.cards;
	}
	
}
