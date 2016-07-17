'use strict';
var interceptor=function($q){/*,toaster*/
	return {
		request:function(config){
			//console.log(config);
			return config;
		},
		response:function(result){
			// toaster.pop('success', "title", "text");
			//console.log('RESPONSE');
			//console.log(result);
			return result;
		},
		ersponseError:function(rejection){
			//console.log('REJECTION');
			//console.log(rejection);
			return $q.reject(rejection);
		}
	}
};
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'myApp.home',
  'myApp.dashboard',
  'myApp.card',
  'myApp.admin',
  'myApp.users'
]).
config(['$locationProvider','$stateProvider','$urlMatcherFactoryProvider','$httpProvider',
 function($locationProvider, $stateProvider,$urlMatcherFactoryProvider,$httpProvider) {
	$httpProvider.interceptors.push(interceptor);			
  $locationProvider.hashPrefix('!');
  $urlMatcherFactoryProvider.caseInsensitive(true);
}]).run(function ($rootScope, $state, $stateParams) {
	$state.go('home');
}); 