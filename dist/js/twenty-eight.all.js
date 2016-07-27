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
    'ui.router',

    'header',
    'footer',
    'error',
    'main',
    'login'
])

    /**
     * @description
     * Routing each page.
     */
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('main', {
                url: '/main',
                views: {
                    '': {
                        templateUrl: 'app/component/main/main.tpl.html',
                        controller: 'mainCtrl'
                    },
                    'header@main': {
                        templateUrl: 'app/component/share/header/header.tpl.html',
                        controller: 'headerCtrl'
                    },
                    'footer@main': {
                        templateUrl: 'app/component/share/footer/footer.tpl.html',
                        controller: 'footerCtrl'
                    }
                }
            })
            .state('error', {
                url: '/error',
                templateUrl: 'app/component/error/error.tpl.html',
                controller: 'errorCtrl',
                params: {
                    title: null,
                    message: null
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/component/login/login.tpl.html',
                controller: 'loginCtrl'
            });

            $urlRouterProvider.otherwise(function ($injector, $location) {
                var $state = $injector.get('$state');
                var $rootScope = $injector.get('$rootScope');

                if ($location.$$url === '') {
                    $state.go('main', {}, {location: 'replace'});
                } else {
                    $state.go('error', {
                        title: "Page not found",
                        message: 'Could not find a state associated with url "'+$location.$$url+'"'
                    }, {location: 'replace'});
                }
            });
    }]);

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