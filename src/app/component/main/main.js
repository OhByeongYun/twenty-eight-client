/**
 * @ngdoc module
 * @name: main
 *
 * @description
 * Define main page module and controller.
 */
angular.module('main', [
    'header'
])

    .controller('mainCtrl', ['$scope',
        function($scope) {
            console.log('Main Controller...');

            $scope.pageClass = "page-main";
        }
    ]);