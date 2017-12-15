(function(){
    angular
            .module('rainbowApp')
            .controller('EinsplayerCtrl', EinsplayerCtrl);
            
            EinsplayerCtrl.$inject = ['$scope', 'PlayerData'];
            
            function EinsplayerCtrl($scope, PlayerData){
                var vm = this;
                
                console.log("in player controller");
                vm.content = "EG Ranked Data";
                vm.teamlogo = "/images/Eins.jpg";
                vm.selectedplayer="d51e1081-3bac-4754-b686-c6042bbaffee";

                
                vm.getPlayerData = function(){
      
                    PlayerData.getPlayerData(vm.selectedplayer)
                    .then(function(response){
                        vm.playerData = response.data;
                        vm.KD =(vm.playerData.stats.ranked.kills / vm.playerData.stats.ranked.deaths).toFixed(2);
                        vm.wl = (vm.playerData.stats.ranked.won/ vm.playerData.stats.ranked.lost).toFixed(2);

                    })
                    .catch(function(e){
                        console.log(e);
                    });
                    
                };
                vm.selectedplayer2="201ef793-eed9-413d-a778-7911090af47a";

                
                vm.getPlayerData1 = function(){
   
                    PlayerData.getPlayerData(vm.selectedplayer2)
                    .then(function(response){
                        vm.playerData1 = response.data;
                        vm.wl1 = (vm.playerData1.stats.ranked.won/ vm.playerData1.stats.ranked.lost).toFixed(2);
                        vm.KD1 =(vm.playerData1.stats.ranked.kills / vm.playerData1.stats.ranked.deaths).toFixed(2);
                        

                    })
                    .catch(function(e){
                        console.log(e);
                    });
                };
                
                vm.selectedplayer3="dbbc2efa-45c6-4b4f-880d-908f8be1e835";

                
                vm.getPlayerData2 = function(){
      
                    PlayerData.getPlayerData(vm.selectedplayer3)
                    .then(function(response){
                        vm.playerData2 = response.data;
                        vm.wl2 = (vm.playerData2.stats.ranked.won/ vm.playerData2.stats.ranked.lost).toFixed(2);
                        vm.KD2 =(vm.playerData2.stats.ranked.kills / vm.playerData2.stats.ranked.deaths).toFixed(2);
                        

                    })
                    .catch(function(e){
                        console.log(e);
                    });
      
                };
                
                vm.selectedplayer4="88034694-8c25-4a0e-9c14-54b12df25d53";

                
                vm.getPlayerData3 = function(){

                    PlayerData.getPlayerData(vm.selectedplayer4)
                    .then(function(response){
                        vm.playerData3 = response.data;
                        vm.wl3 = (vm.playerData3.stats.ranked.won/ vm.playerData3.stats.ranked.lost).toFixed(2);
                        vm.KD3 =(vm.playerData3.stats.ranked.kills / vm.playerData3.stats.ranked.deaths).toFixed(2);
                        

                    })
                    .catch(function(e){
                        console.log(e);
                    });
      
                };
                
                vm.selectedplayer5="b762a55e-f9ad-4b05-943f-57c0796d694d";

                
                vm.getPlayerData4 = function(){

                    PlayerData.getPlayerData(vm.selectedplayer5)
                    .then(function(response){
                        vm.playerData4 = response.data;
                        vm.wl4 = (vm.playerData4.stats.ranked.won/ vm.playerData4.stats.ranked.lost).toFixed(2);
                        vm.KD4 =(vm.playerData4.stats.ranked.kills / vm.playerData4.stats.ranked.deaths).toFixed(2);
                        

                    })
                    .catch(function(e){
                        console.log(e);
                    });
      
                };
                
                
                vm.getPlayerData();
                vm.getPlayerData1();
                vm.getPlayerData2();
                vm.getPlayerData3();
                vm.getPlayerData4();
                
            }
})();