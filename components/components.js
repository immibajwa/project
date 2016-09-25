(function(angular){
//TODO: Let us say this is a good place for provider's  	
angular.module('components',[])
.controller('componentCtrl',function(provider){
	provider.getMessage();
})
.provider('provider',function(){
	return {
		//accessable in config block
		someFunctionOrFunctions:function(){},
		//init by $injector also accessable in ctrl over provider
		$get:function(){ 
			return {
				getMessage:function(){
					console.log('Provider say\'s Hello World');
				}
			}
		}
	}
}).config(function(providerProvider){
	providerProvider.$get().getMessage();
});	
})(window.angular);


  


  