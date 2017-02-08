angular.module('starter.directives', [])
.directive('contactBlock', function(funkcije) { 
  return { 
    restrict: 'E', 
    scope: { 
      contact: '=' 
    }, 
    templateUrl: 'js/directives/contacts.html'
  }; 
});