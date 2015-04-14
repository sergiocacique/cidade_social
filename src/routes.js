'use strict';

angular.module('CidadeSocial', ['ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider
        .html5Mode({enabled: true, requireBase: true});

        $routeProvider
        .when('/', {templateUrl: 'views/pages/home.html'})
        .when('/home', {templateUrl: 'views/pages/home.html'})
        .when('/login', {templateUrl: 'views/users/login.html'})
        .when('/error404', {templateUrl: 'views/pages/error404.html'})
        .when('/pessoas/add', {templateUrl: 'views/pessoas/add.html', controller: 'PessoasController'})
        .otherwise({redirectTo : 'error404'});
    });
