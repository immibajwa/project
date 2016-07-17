'use strict';
angular.module('myApp.home', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
	$stateProvider
	.state('home', 
	{
		url:'/home',	
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'vm',
		data:{title:"THIS IS HOME PAHE"}
	});
}])
.controller('HomeCtrl', ['$state',function($state) {
	var self=this;
}]);