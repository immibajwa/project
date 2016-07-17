'use strict';
angular.module('myApp.admin', ['ui.router'])
.config(['$stateProvider',function($stateProvider){
	var objAdminState ={
		name:'admin',url:'/admin',templateUrl:'admin/admin.html',
		data:{PERMINSION:'Administrator',ROLE:'admin'},
		controller:adminController,
		controllerAs:'adminCtrl',
		//abstract:true
		}	
	$stateProvider.state(objAdminState);
	
}]).run(function ($rootScope, $state, $stateParams) {
}); 

function adminController($state){
	//this.permision=$state.current.data.PERMINSION;
};
