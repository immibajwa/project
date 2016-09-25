(function(angular){
angular.module('components',[])
.component('heroList',{
	bindings:{},
	controller:heroListCtrl,
	template:[ // Later this will be transfer to herolist.html
	'{{$ctrl.heros.herolist}}',
	'<h1>HERO\'S LIST</h1>',
	'<ul><li ng-repeat="hero in $ctrl.heros.herolist">',
	'<hero-detail hero="hero" index="{{$index}}"',
	'on-edit="$ctrl.EditHero(index,hero)"',
	'></hero-detail>',
	'</li></ul>',
	'<input ng-model="hero"></input>',
	'<button ng-click="$ctrl.addHero(hero)">Add</button>'
	].join(' ')
});
function heroListCtrl(){
	//observation : when i use ctrl as ControllerAs then it work
	//but when i use $ctrl then it did not work 
	// i think this is a issu of data exchange between controllers 
	//TODO: rausfinden wo ran dass liegt
	ctrl=this;
	ctrl.heros={
		herolist:['ajay devgan','sharukh khan','Irfan khan']
		};
	//ctrl.herolist=['ajay devgan','sharukh khan','Irfan khan'];
	ctrl.addHero=function(hero){
		ctrl.heros.herolist.push(hero);
	}
	ctrl.removeHero=function(index){
		ctrl.heros.herolist.splice(index, 1);
	}
	ctrl.EditHero=function(index,hero){
		//ctrl.herolist[index]=hero;
		ctrl.heros.herolist[index]=hero;
	}
	
}
})(window.angular);


  


  