(function(){
    angular
        .module('rainbowApp')
        .controller('y2s3FonttCtrl', y2s3FonttCtrl);
        
    y2s3FonttCtrl.$inject = ['$scope', 'Y2s3Data'];
    
    function y2s3FonttCtrl($scope, Y2s3Data) {
        var vm = this;
        //console.log(window.location);
        console.log("In team controller");
        vm.linkteam = "/players/Fontt";
        vm.teamlogo = "/images/Fontt.png";
        vm.content = "ENCE Data Soon?";
        //vm.selectedTeam = "";
        
        
       vm.getY2s3DataForTeam = function(){
                Y2s3Data.getY2s3DataForTeam("Team Fontt")
                .then(function(response){
                    console.log(vm.selectedTeam);
                    vm.teamData = response.data;
                    console.log(vm.teamData);
                    console.log(vm.teamData[0].player);
                    
                })
                .catch(function(e){
                    console.log(e);
                });
            };
            console.log("IN CTRL FOR TEAM DATA");
            
            vm.getY2s3DataForTeam();
            
        

        
    }
})();