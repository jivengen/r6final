(function(){
    angular
            .module('rainbowApp')
            .controller('EGplayerCtrl', EGplayerCtrl);
            
            EGplayerCtrl.$inject = ['$scope', 'PlayerData'];
            
            function EGplayerCtrl($scope, PlayerData){
                var vm = this;
                
                console.log("in player controller");
                vm.content = "EG Ranked Data";
                vm.selectedplayer="87b5229e-c0be-4b99-8a39-571d5ab84399";

                
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
                vm.selectedplayer2="3f8f76ca-a125-41bf-8704-2fb4b64a5ca5";

                
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
                
                vm.selectedplayer3="04e11153-ac5c-4bc2-8b03-a625d8c88057";

                
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
                
                vm.selectedplayer4="115497b4-5c13-416f-b356-a542765c5233";

                
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
                
                vm.selectedplayer5="d66660d2-95fe-47a2-b7e5-e615f07d8337";

                
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