(function(angular){
angular.module('app',['components']).
controller('appCtrl',appCtrl);
appCtrl.$inject=['$scope'];
function appCtrl($scope){
	$scope.msg="HELLO WORLD!";
}	
})(window.angular);


  


  