(function (){
    
    angular
            .module('rainbowApp')
            .directive('playerInfo', [playerInfo]);
            
            function playerInfo (){
                return{
                    restrict: 'EA',
                    scope: {
                        player : '=info',
                    },
                    templateUrl: '/common/directives/playerInfo/playerInfo.template.html'
                };
            }
})();