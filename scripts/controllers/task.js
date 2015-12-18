
'use strict'

app.controller('TaskController', function($scope, $location, toaster, Task, Auth) {


  $scope.createTask = function() {
  	$scope.task.status = 'open';
  	//$scope.task.gravatar = Auth.user.profile.gravatar;
  	//$scope.task.name = Auth.user.profile.name;
  	$scope.task.poster = Auth.user.uid;
//Again, don't forget capital T for Task
  	Task.createTask($scope.task).then(function(ref) {
  		toaster.pop('success', 'Task created successfully.');
  		$scope.task = {title: '', description: '', total: '', status: 'open', poster: ''};
  		$location.path('/browse/' + ref.key());
  	});
  };

  $scope.editTask = function(task) {
  	Task.editTask(task).then(function() {
  		toaster.pop('success', 'Task is updated.');
  	});
  };
	
	
});