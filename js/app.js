'use strict';
/* App Module*/

var Tickets = Tickets || {};

Tickets.helpers = {
    badge: function (status) {
        if (status === 'CLOSED') {
            return 'uk-badge-danger';
        }
        return 'uk-badge-success';
    }
};

var blogApp = angular.module('blogApp', [
    'ngRoute',
    'blogControllers',
    'blogDirectives'
]);

blogApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/main.html',
                    controller: 'BlogCtrl'
                }).
                when('/blogPost/:id', {
                    templateUrl: 'partials/blogPost.html',
                    controller: 'BlogViewCtrl'
                });
    }]);