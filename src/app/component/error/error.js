/**
 * @ngdoc module
 * @name: error
 *
 * @description
 * Define error page module and controller.
 */
angular.module('error', [])

    .controller('errorCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {
            console.log('Error Controller...');

            $scope.pageClass = "page-error";

            console.log($stateParams);
        }
    ]);