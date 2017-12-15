(function(){
    angular
            .module('rainbowApp')
            .controller('BDplayerCtrl', BDplayerCtrl);
            
            BDplayerCtrl.$inject = ['$scope', 'PlayerData'];
            
            function BDplayerCtrl($scope, PlayerData){
                var vm = this;
                
                console.log("in player controller");
                vm.content = "EG Ranked Data";
                vm.teamlogo = "/images/BD.jpg";
                vm.selectedplayer="e213685e-4b6c-4afc-9a53-7726b8ec6275";

                
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
                vm.selectedplayer2="9431ddc3-cb70-4875-9c95-307cf4e5f62f";

                
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
                
                vm.selectedplayer3="3aaa3f4c-faa5-487c-9bec-af3ed166b06f";

                
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
                
                vm.selectedplayer4="1fb07f4a-fbcf-465c-8fb9-0a1cff670a3c";

                
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
                
                vm.selectedplayer5="52fcc7cd-4d7a-46d8-9e15-643e3a915c31";

                
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