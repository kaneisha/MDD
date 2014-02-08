'use strict';

/* global Firebase*/
angular.module('mddApp')
	//Firebase Connection
	.factory('FireConn', ['$firebase', function ($firebase){

		var url = 'https://whipple.firebaseIO.com',
		ref = new Firebase( url );

		return $firebase( ref );

	}]);