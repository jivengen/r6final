(function(){
    angular
            .module('rainbowApp')
            .controller('ENCEplayerCtrl', ENCEplayerCtrl);
            
            ENCEplayerCtrl.$inject = ['$scope', 'PlayerData'];
            
            function ENCEplayerCtrl($scope, PlayerData){
                var vm = this;
                
                console.log("in player controller");
                vm.content = "EG Ranked Data";
                vm.selectedplayer="4930e1ce-223d-4dea-a2e0-b4dcdcaad94a";

                
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
                vm.selectedplayer2="8cd97b18-e5da-4ae1-b3ac-366f79114cc9";

                
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
                
                vm.selectedplayer3="b78f15cc-c1f4-4abd-9134-e5d9cb3ef608";

                
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
                
                vm.selectedplayer4="7ae6af91-6b98-4f6e-a89a-3021ab29ed2d";

                
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
                
                vm.selectedplayer5="cecf58a0-3970-4271-8670-c8696eb57308";

                
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