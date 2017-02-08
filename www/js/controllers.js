angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  
})

.controller('ChatsCtrl', function($scope, functions) {
  $scope.user = JSON.parse(localStorage.getItem('user'));
  $scope.chats = [];

  functions.getcontactsfordomain($scope.user)
  .success(function(response) {
    $scope.chats = response;
  })
  .error(function(error) {
    alert(eror);
  })
})

.controller('ChatDetailCtrl', function($scope, $stateParams, functions) {
  $scope.chats = [];
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('landingController', function($scope) {

})

.controller('indexController', function($scope, functions) {
  $scope.username;
  $scope.password;
  $scope.login = function() {
    var userObject = {
      username : $scope.username,
      password : $scope.password
    }
    functions.login(userObject)
    .success(function(response) {
      if (response.username == 'null') {
        alert("You are not registered!");
      } else if (response.username == 'wrong') {
        alert("You have entered wrong password");
      } else {
        localStorage.setItem('user', JSON.stringify(response));
        window.location = "landing.html";
      }
    })
    .error(function(error) {
      console.log(error);
    })
  }
  $scope.signup = function() {
    console.log("Ce radimo signup!");
    
  }
});
