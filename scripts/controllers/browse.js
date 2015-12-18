'use strict';

app.controller('BrowseController', function($scope, $routeParams, toaster, Task, Auth) {

	$scope.searchTask = '';		
	$scope.tasks = Task.all;

	$scope.signedIn = Auth.signedIn;

	$scope.listMode = true;
	
	if($routeParams.taskId) {
		var task = Task.getTask($routeParams.taskId).$asObject();
		$scope.listMode = false;
		setSelectedTask(task);	
	}	
		
	function setSelectedTask(task) {
		$scope.selectedTask = task;
		//This will be good for shopping site logins. Especially with saved shopping carts.
		// We check the isTaskCreator only if the user is signedIn 
		// so we don't have to check every time guests open the task
		if($scope.signedIn()) {
			// Check if the current login user is the creator of the selected task
			$scope.isTaskCreator = Task.isCreator;
			
			// Check if the selectedTask is open
			$scope.isOpen = Task.isOpen;			
		}
	};

	// --------------- TASK ---------------	

	$scope.cancelTask = function(taskId) {
		Task.cancelTask(taskId).then(function() {
			toaster.pop('success', 'This task is cancelled successfully.');
		});
	};
});