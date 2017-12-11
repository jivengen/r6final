(function () {

  angular.module('rainbowApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("BEING AIRPLANE SERVICES APP - MEAN STACK DRIVEN");
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/y2s3/', {
        templateUrl: '/y2s3/y2s3.view.html',
        controller: 'y2s3Ctrl',
        controllerAs: 'vm'
      })
      .when('/y2s3/ENCE', {
        templateUrl: '/y2s3team/team.view.html',
        controller: 'y2s3ENCECtrl',
        controllerAs: 'vm'
      })
      .when('/y2s3/EG', {
        templateUrl: '/y2s3team/team.view.html',
        controller: 'y2s3egCtrl',
        controllerAs: 'vm'
      })
      .when('/y2s3/BD', {
        templateUrl: '/y2s3team/team.view.html',
        controller: 'y2s3bdCtrl',
        controllerAs: 'vm'
      })
      .when('/y2s3/Eins', {
        templateUrl: '/y2s3team/team.view.html',
        controller: 'y2s3einsCtrl',
        controllerAs: 'vm'
      })
      .when('/y2s3/1NF', {
        templateUrl: '/y2s3team/team.view.html',
        controller: 'y2s31nfCtrl',
        controllerAs: 'vm'
      })
      .when('/y2s3/Mantis', {
        templateUrl: '/y2s3team/team.view.html',
        controller: 'y2s3mantisCtrl',
        controllerAs: 'vm'
      })
      .when('/y2s3/Fontt', {
        templateUrl: '/y2s3team/team.view.html',
        controller: 'y2s3FonttCtrl',
        controllerAs: 'vm'
      })
      .when('/y2s3/PENTA', {
        templateUrl: '/y2s3team/team.view.html',
        controller: 'y2s3pentaCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('rainbowApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();