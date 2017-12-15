(function(){
    angular
            .module('rainbowApp')
            .controller('playerCtrl', playerCtrl);
            
            playerCtrl.$inject = ['$scope', 'PlayerData'];
            
            function playerCtrl($scope, PlayerData){
                var vm = this;
                
                console.log("in player controller");
                vm.content = "player data";
                vm.selectedplayer="87b5229e-c0be-4b99-8a39-571d5ab84399";
                console.log(vm.selectedplayer);
                
                vm.getPlayerData = function(){
                    console.log("Getting data?");
                    PlayerData.getPlayerData(vm.selectedplayer)
                    .then(function(response){
                        vm.playerData = response.data;
                        console.log(vm.playerData);
                        console.log(vm.playerData.stats.general.headshot)
                    })
                    .catch(function(e){
                        console.log(e);
                    });
                    
                };
                vm.getPlayerData();
            }
})();