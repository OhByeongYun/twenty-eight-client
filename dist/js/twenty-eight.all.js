(function() {
'use strict';

console.log('starting twenty eight...');

/**
 * @ngdoc module
 * @name: TwentySeven
 *
 * @description
 * Define module dependencies.
 * Initialize twenty eight config.
 */
var TwentyEight = angular.module('TwentyEight', [
    'ngRoute',
    'ngAnimate',

    'main',
    'login'
])

    /**
     * @description
     * Routing each page.
     */
    .config(['$routeProvider',function($routeProvider) {
        $routeProvider

            .when('/main', {
                templateUrl: 'app/component/main/main.tpl.html',
                controller: 'mainCtrl'
            })

            .when('/login', {
                templateUrl: 'app/component/login/login.tpl.html',
                controller: 'loginCtrl'
            })

            .when('/header', {
                templateUrl: 'app/component/share/header/header.tpl.html',
                controller: 'headerCtrl'
            })

            .otherwise({
                redirectTo: '/main'
            });
    }]);

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

/**
 * @ngdoc module
 * @name footer
 *
 * @description
 * Define footer module.
 */
angular.module('footer', [])

    .controller('footerCtrl', ['$scope', function($scope) {
        console.log('footer controller...');
    }]);

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

})();