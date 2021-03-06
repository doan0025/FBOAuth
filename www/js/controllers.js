angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $auth) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.data = { isLoggedIn:false,
                  loginFailed: false
                };
  $scope.alert = {shown: false};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.authenticate = function(provider){
    $auth.authenticate(provider)
      .then(function(response) {
        console.log("Login with facebook app is done");
        $scope.data.isLoggedIn = true;
        $scope.data.loginFailed = false;
        $scope.alert.shown = true;
      })
      .catch(function(response) {
        console.log("facebook login does not work");
        $scope.data.loginFailed = true;
        $scope.alert.shown = true;
      });
  }

  $scope.logout = function(){
    $auth.logout();
    $scope.data.isLoggedIn = false;    
  }

  $scope.alert_dismiss = function(){
    $scope.alert.shown = false;
  }
})

.controller('PlaylistsCtrl', function($scope) {
  // $scope.playlists = [
  //   { title: 'Reggae', id: 1 },
  //   { title: 'Chill', id: 2 },
  //   { title: 'Dubstep', id: 3 },
  //   { title: 'Indie', id: 4 },
  //   { title: 'Rap', id: 5 },
  //   { title: 'Cowbell', id: 6 }
  // ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});