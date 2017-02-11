angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  
})

.controller('ChatsCtrl', function($scope, functions) {
  $scope.user = JSON.parse(localStorage.getItem('user'));
  $scope.chats = [];
  $scope.search = '';

  functions.getcontactsfordomain($scope.user)
  .success(function(response) {
    $scope.chats = response;
  })
  .error(function(error) {
    alert(eror);
  })

  $scope.showDetails = function(chat) {
    localStorage.setItem('contact', JSON.stringify(chat));
    window.location = '#/tab/chatdetails';
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, functions) {
  $scope.user = JSON.parse(localStorage.getItem('contact'));
  $scope.messageContent = {
    value: ''
  };

  $scope.sendMessage = function() {
    $scope.message = '<div class="card myMessage"><div class="item item-text-wrap">' + $scope.messageContent.value + '</div></div>'
    var content = document.getElementById('messages');
    messages.innerHTML = messages.innerHTML + $scope.message;
    content.scrollTop = content.scrollHeight;

    $scope.from = JSON.parse(localStorage.getItem('user'));
    $scope.to = JSON.parse(localStorage.getItem('contact'));

    var sender = {
      fromUserId : $scope.from,
      toUserId : $scope.to,
      content : $scope.messageContent.value
    }
    functions.sendmessage(sender);

    $scope.messageContent.value = '';
  }

  $scope.demoResponse = function() {
    $scope.response = '<div class="card myResponse"><div class="item item-text-wrap responseContent">response</div></div>'
    var content = document.getElementById('messages');
    messages.innerHTML = messages.innerHTML + $scope.response;
    $scope.messageContent.value = '';
    content.scrollTop = content.scrollHeight;
  }
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
