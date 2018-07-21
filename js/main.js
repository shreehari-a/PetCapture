/**
* Main AngularJS Web Application
*/
var app = angular.module('tutorialWebApp', [
'ngRoute'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "partials/dog.html", controller: "PageCtrl"})
    .when("/faq", {templateUrl: "partials/cat.html", controller: "PageCtrl"})
    .when("/pricing", {templateUrl: "partials/about.html", controller: "PageCtrl"})
   
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});