/*
 * Custom js for current app
 * Date: 04/Jan/2016
 */
var metachi = angular.module("metachi", []);    //create app with name "metachi"
metachi.controller("peopleList", function ($scope, $http) {
    $scope.self = {};
    $scope.orderByField = 'fname';
    $scope.reverseSort = false;
    // get data from json file - data/people.json
    $http.get('data/people.json').success(function (data) {
        $scope.self.jsonData = data;
        // loop to read data from json file
        $scope.self.jsonData.forEach(function (value, key) {
            
        });//end loop
    });// end http get 
});
