angular.module('starter.services', []).factory('functions', ['$http', function($http) {

	var functions = {};

	//Produkcioni mod
	// var link = 'http://codeline.sytes.net:8080';

	//Dev mod
	var link = 'http://localhost:8080';

	functions.login = function(input) {
		return $http.post(link + '/login', input);
	}
	functions.getcontactsfordomain = function(input) {
		return $http.post(link + '/getcontactsfordomain', input);
	}
	functions.sendmessage = function(input) {
		return $http.post(link + '/sendmessage', input);
	}

	return functions;
}]);
