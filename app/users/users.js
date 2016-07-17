'use strict';
angular.module('myApp.users', ['ui.router'])
.config(['$stateProvider',function($stateProvider){
	var objUsersState ={
		name:'users',url:'/users',templateUrl:'users/users.html',
		data:{
			PERMINSION:'Administrator',
			USERLIST:[
			{id:1,name:'imran',email:'imran@immi.de'},
			{id:2,name:'irfan',email:'irfan@immi.de'},
			{id:3,name:'luqman',email:'luqman@immi.de'}]
			},
		controller:usersController,
		controllerAs:'usersCtrl',
		abstract:true}	
	$stateProvider.state(objUsersState);
	$stateProvider.state('user',{
		parent:'users',
		url:'/:id',
		template:'<h1>USER INFORMATION</h1><div><span ng-bind="userCtrl.userinfo.email"></span> <span ng-bind="userCtrl.userinfo.name"></span></div>',
		controller:userController,
		controllerAs:'userCtrl'
  });
}]).run(function ($rootScope, $state, $stateParams) {
}); 
usersController.$inject=['$state'];
function usersController(state){
	this.userlist=state.current.data.USERLIST;
};
function userController($state,$stateParams){
	//var userlist=$state.get("users").data.USERLIST;
	//http://adrianmejia.com/blog/2014/10/01/creating-a-restful-api-tutorial-with-nodejs-and-mongodb/
	var self=this;
	angular.forEach($state.current.data.USERLIST,function(val,key){
		if(val.id==$stateParams.id){
			self.userinfo=val;
		}
	});
};
