/*
two ways to access functions from other components
	1- over bindings (@see onEdit:'&')
	2- component require property (@see $ctrl.heroListCtrl.removeHero)
both ways are used in this example
*/
(function(angular){
angular.module('components')
.component('heroDetail',{
	bindings:{
		hero:'=',
		index:'@',
		onEdit:'&'
	},
	require: {heroListCtrl:'^heroList'},
	controller:heroDetailCtrl,
	template:[ // Later this will be transfer to heroDetail.html
	'<div>{{$ctrl.hero}}',
	'<input ng-model="$ctrl.hero"></input>',//This part can be a new component
	'<button ng-click="$ctrl.heroListCtrl.removeHero($ctrl.index)">delete</button>',
	'<button ng-click="$ctrl.edit($ctrl.index,$ctrl.hero)">{{$ctrl.key}}</button>',
	'</div>'
	].join(' ')
});
function heroDetailCtrl(){
	$ctrl=this;
	$ctrl.key='Edit';
	/*$ctrl.$onInit = function(){ 
		$ctrl.heroListCtrl.removeHero(index);
	};*/
	$ctrl.edit=function(index,hero){
		$ctrl.onEdit(
			{
				index:index,
				hero: hero
			}
		);
		
	}
}
})(window.angular);


  


  