var rshApp = angular.module('rshApp',[]);

rshApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");

	$stateProvider.state('ERP01',{
		url:"/ERP01",
		templateUrl:"partials/erp01.html"
	})
	.state('ERP01.ERPS001',{
		url:"/ERPS001",
		templateUrl:"partials/erps001L.html"
	})
	.state('ERP01.ERPR001',{
		url:"/ERPR001",
		templateUrl:"partials/erpr001.html"
	});
});