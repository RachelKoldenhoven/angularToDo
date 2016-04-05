/**
 * Created by rachelkoldenhoven on 4/4/16.
 */
app.controller('ToDoController', function($scope) {
  $scope.view = {};
  $scope.view.display = "";
  $scope.newItem = {};


  $scope.toggleView = function(view){
    $scope.view.display = view;
  };

  $scope.view.list = [];

  $scope.view.completedList = [];

  $scope.addItem = function(item){
    item.date = new Date();
    item.completed = false;
    $scope.view.list.push(item);
    $scope.toggleView('list');
    $scope.newItem = {};
    $scope.newToDoItem.$setUntouched();
  };

  $scope.completeItem = function(item) {
    $scope.view.completedList.push(item);
    $scope.view.list.splice($scope.view.list.indexOf(item), 1);
    $scope.toggleView('completed');

  };

  $scope.unDo = function(item) {
    $scope.view.list.push(item);
    $scope.view.completedList.splice($scope.view.completedList.indexOf(item), 1);
    $scope.toggleView('list');
  };

  $scope.checkForError = function(field) {
    return field.$invalid && field.$touched;
  };


});