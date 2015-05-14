'use strict';
/* Controllers */

var fakeBlogs = [{
        "_id": 1,
        "date": 1400623623107,
        "introText": "This is a blog...",
        "blogText": "This is a blog...",
        "comments": [
            {"commentText": "Very good post. I love it."},
            {"commentText": "When can we learn services."},
        ]},
    {
        "_id": 2,
        "date": 1400267723107,
        "introText": "In this blog...",
        "blogText": "In this blog...",
        "comments": [{
                "commentText": "REST is great. I want to know more"
            }, {"commentText": "Will we use Node.js for REST services?"}]
    }
];

var blogControllers =
        angular.module('blogControllers', []);

blogControllers.controller('BlogCtrl', ['$scope',
    function BlogCtrl($scope) {
        $scope.blogList = fakeBlogs;
    }]);

blogControllers.controller('BlogViewCtrl',
        ['$scope', '$routeParams',
            function BlogViewCtrl($scope, $routeParams) {
              
                var blogId = $routeParams.id - 1;

                $scope.blogEntry = fakeBlogs[blogId];
            }
        ]);