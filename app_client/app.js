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
        controller: 'teamCtrl',
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