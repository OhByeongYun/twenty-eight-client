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