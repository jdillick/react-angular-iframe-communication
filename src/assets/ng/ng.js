var app = angular.module('myShoppingList', []);
app.controller('myCtrl', function($scope) {
    $scope.products = window.products = ['Milk', 'Bread', 'Cheese'];
    $scope.addItem = function() {
        $scope.products.push($scope.addMe);
    };
});
