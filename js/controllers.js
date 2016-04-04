/**
 * Created by rachelkoldenhoven on 4/4/16.
 */
app.controller('ToDoController', function($scope) {
  $scope.view = {};
  $scope.viewNew = false;


  $scope.toggleViewNew = function(){
    $scope.viewNew = !$scope.viewNew;
  };


});