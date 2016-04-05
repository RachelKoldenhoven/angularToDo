/**
 * Created by rachelkoldenhoven on 4/4/16.
 */
app.controller('ToDoController', function($scope) {
  $scope.view = {};
  $scope.view.display = "";
  $scope.newItem = {};


  $scope.toggleView = function(view){
    $scope.view.display = view;
    console.log(view);
  };

  $scope.view.list = [

  ];

  $scope.addItem = function(item){
    item.date = new Date();
    item.completed = false;
    $scope.view.list.push(item);
    $scope.toggleView('list');
    $scope.newItem = {};
    $scope.newToDoItem.$setUntouched();
  };

});