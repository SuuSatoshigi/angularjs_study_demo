var module = angular.module("HelloAngular",[]);
var mymodule = angular.module("mymodule",[]);

module.controller("angular",['$scope',
	function HelloAngular($scope) {
		$scope.greeting = {
			text: 'hello'
		};
	}
]);

mymodule.directive("cordova",function() {
	return {
		restrict: 'E',
		template: '<div>cordova study </div>',
		replace: true
	}
});
