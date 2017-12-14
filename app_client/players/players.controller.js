(function(){
    angular
            .module('rainbowApp')
            .controller('playerCtrl', playerCtrl);
            
            playerCtrl.$inject = ['$scope'];
            
            function playerCtrl($scope){
                var vm = this;
                
                console.log("in plyaer controller");
                vm.content = "player data";
                vm.selectedplayer="";
                
                vm.getRankedDataForPlayer = function(){
                    
                }
            }
})