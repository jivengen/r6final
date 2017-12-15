(function(){
    angular
            .module('rainbowApp')
            .controller('PentaplayerCtrl', PentaplayerCtrl);
            
            PentaplayerCtrl.$inject = ['$scope', 'PlayerData'];
            
            function PentaplayerCtrl($scope, PlayerData){
                var vm = this;
                
                console.log("in player controller");
                vm.content = "EG Ranked Data";
                vm.teamlogo = "/images/Penta.jpg";
                vm.selectedplayer="61bcfa75-acbb-4ee5-a5c2-6a526b772b15";

                
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
                vm.selectedplayer2="9cf4d4a1-e328-49f8-be77-c255d6efefaa";

                
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
                
                vm.selectedplayer3="f4f6e2f1-5353-4dee-b35c-8b78788de238";

                
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
                
                vm.selectedplayer4="f1b010e1-d441-47b1-be1f-cea6e2f22e19";

                
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
                
                vm.selectedplayer5="aef1f7f1-112e-4110-b35d-61aba9de42ce";

                
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