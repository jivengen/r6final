(function(){
    angular
        .module('rainbowApp')
        .controller('y2s31nfCtrl', y2s31nfCtrl);
        
    y2s31nfCtrl.$inject = ['$scope', 'Y2s3Data'];
    
    function y2s31nfCtrl($scope, Y2s3Data) {
        var vm = this;
        //console.log(window.location);
        console.log("In team controller");
        vm.linkteam = "/players/1NF";
        vm.teamlogo = "/images/inf.jpg";
        vm.content = "ENCE Data Soon?";
        //vm.selectedTeam = "";
        
        
       vm.getY2s3DataForTeam = function(){
                Y2s3Data.getY2s3DataForTeam("1nfamy")
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