/**
 * @ngdoc module
 * @name: login
 *
 * @description
 * Define login page module and controller.
 */
angular.module('login', [])

    .controller('loginCtrl', ['$scope',
        function($scope) {
            console.log('Login Controller...');

            $scope.pageClass = "page-login";
        }
    ]);