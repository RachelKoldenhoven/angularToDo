/**
 * Created by rachelkoldenhoven on 4/4/16.
 */
app.controller('ToDoController', function($scope) {
  $scope.view = {};
  $scope.view.viewNew = false;
  $scope.view.viewList = false;
  $scope.newItem = {};


  $scope.toggleViewNew = function(){
    $scope.view.viewNew = !$scope.view.viewNew;
  };

  $scope.toggleViewList = function() {
    $scope.view.viewList = !$scope.view.viewList;
  };


  $scope.view.list = [

  ];

  $scope.addItem = function(item){
    item.date = new Date();
    item.completed = false;
    $scope.view.list.push(item);
    $scope.toggleViewList();
    $scope.toggleViewNew();
    $scope.newItem = {};
    $scope.newToDoItem.$setUntouched();
  };

});