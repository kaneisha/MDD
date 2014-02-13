'use strict';

var App = angular.module('mddApp')
  .controller('MainCtrl', ['$scope', 'FireConn', function($scope, FireConn) {

  FireConn.$bind($scope, 'remoteData');
  // console.log(FireConn);

  $scope.saveData = function(){
	//$scope.remoteData.activeUser = $scope.user;
		$scope.remoteData.activeUser = [{
			title : 'Blessed Thoughts Inc. Greeting Cards',
			imgUrl : 'images/blessedthoughts.png',
			tags : 'HTML,CSS',
			id : 0,
			desc : 'Blessed Thoughts Inc. is a greeting card company. The project was done as a redesign for my Web Standards Project class. The main point of the project was design skills so it is strictly HTML and CSS. It is a responsive site made to fit all mobile devices. No framework was used, meaning I wrote all the media queries.'
		},{
			title : 'Celiac Tracker',
			imgUrl : 'images/celiac.png',
			tags : 'ActionScript 3,Adobe Flash,Nutrionix API',
			id : 1,
			desc : 'Celiac Tracker is an application that lets you check the ingredients in a food item. It\'s main purpose is to make it easy for those with Celiac Disease see what they can and cannot eat while they\'re on the go. The app was made for a project in my Deployment of Flash Projects class. The API used for this project was the Nutrionix API.'
		},{
			title : 'Torn Flesh',
			imgUrl : 'images/tornflesh.png',
			tags : 'Citrus Engine,ActionScript 3,Adobe Flash',
			id : 2,
			desc : 'Torn Flesh is a Flash game made by myself and Mike Miller for a group project in my Deployment of Flash Projects class. Built using ActionScript 3 and a platform called Citrus Engine. Citrus Engine was made specifically for a side scrolling game but we managed to be able to put a lot more to it into the game. Credit for the design of the game goes to Jeremy McGraw.'
		},{
			title : 'Tache Time Management',
			imgUrl : 'images/tache.png',
			tags : 'HTML,CSS,JavaScript,JQuery',
			id : 3,
			desc : 'Tache is a task management application. Designed using HTML and CSS this project was made for my Scripting Web Applications class. Other languages used included JavaScript and JQuery. It is a single page application and a database was used to store it\'s information. With this app one can plan their day out with individual tasks to go under each project, along with a list of clients.'
		},{
			title : 'Her Diary',
			imgUrl : 'images/herdiary.png',
			tags : 'HTML,CSS,Node.js,Mongo DB',
			id : 4,
			desc : 'Her Diary is a blog site I made for my Advanced Server Side Language class. It is a blog designed specifically for teenage girls given the name Her Diary. Node.js was the framework used for this project. You can read all post, create a post, update a post, and delete a post. mongo was the database used to store the post information.'
		},{
			title : 'Cheer Nation',
			imgUrl : 'images/cheer.png',
			tags : 'HTML,CSS,JavaScript,JQuery,Firebase',
			id : 5,
			desc : 'Cheer Nation is my latest project. It was made for my Streaming Media Servers class, with the goal being to create a video player. Using JavaScript and JQuery a user can play, pause, seek, and record a video. Firebase was used so the user can login with Twitter and Github and leave a comment.'
		}
	];
  };

  $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
}]);

App.controller('AdminForm', ['$scope', 'FireConn', function($scope, FireConn) {

			$scope.addData = function(){

				FireConn.$add($scope.item);

			};

		}]);

App.controller('ProjectList', ['$scope', 'FireConn', function($scope, FireConn) {

		// $scope.actionTime = function(){
		// 	console.log('user', $scope.user);
		// };
		//FireConn.$bind($scope, 'items');

		$scope.items = FireConn;

		//var dataRef = new Firebase('https://whipple.firebaseIO.com');


	}]);

App.controller('ProjectDetail', ['$scope', '$routeParams', 'FireConn', function($scope, $routeParams, FireConn){

		$scope.IdDisplay = $routeParams.id;

		var free = FireConn.$child($routeParams.id);
		console.log(free);

		$scope.item = FireConn.$child($routeParams.id);

		// console.log('Loading Detail', $routeParams.id);
		// console.log(FireConn);
	}]);
