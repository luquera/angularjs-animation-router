'use strict';

angular.module('page', ['ngRoute', 'ngAnimate'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/start.html',
                controller: 'homeController'
            })
            .when('/film', {
                templateUrl: 'pages/foo.html',
                controller: 'fooController'
            })
            .when('/contest', {
                templateUrl: 'pages/bar.html',
                controller: 'barController'
            });
    })
    .controller('siteController', ['$scope', '$route', '$routeParams', '$location', '$timeout',
        function ($scope, $route, $routeParams, $location, $timeout) {
            $scope.animDir = '';
            $scope.$on('$routeChangeStart', function (angularEvent, next, current) {
                if (!current) return;
                var x = 0;
                var currentIndex = 0;
                var nextIndex = 0;
                angular.forEach($route.routes, function (value, key) {
                    x++;
                    //find current node
                    if (key == current.$$route.originalPath) {
                        currentIndex = x;
                    }

                    //find next node
                    if (key == next.$$route.originalPath) {
                        nextIndex = x;
                    }
                });

                if (nextIndex > currentIndex) {
                    $scope.animDir = 'left';
                }
                else {
                    $scope.animDir = 'right';
                }
            });
        }])
    .controller('homeController', function ($scope) {
        $scope.pageClass = 'home';
    })
    .controller('fooController', function ($scope) {
        $scope.pageClass = 'foo';
    })
    .controller('barController', function ($scope) {
        $scope.pageClass = 'bar';
    });