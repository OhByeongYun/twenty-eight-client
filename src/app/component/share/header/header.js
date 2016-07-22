/**
 * @ngdoc module
 * @name: header
 *
 * @description
 * Define header module.
 */
angular.module('header', [])

    .controller('headerCtrl', ['$scope',
        function($scope) {
            console.log('Header Controller...');
        }
    ]);