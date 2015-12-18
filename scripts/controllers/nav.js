'use strict';
//Ask why scope and location need $ but others do not
app.controller('NavController', function($scope, $location, Auth, toaster) {
	$scope.currentUser = Auth.user;
	$scope.signedIn = Auth.signedIn;

	$scope.logout = function() {
		Auth.logout();
		toaster.pop('success', 'Logged out successfully');
		//console.log("Logged out!");
		$location.path('/');
	};
});