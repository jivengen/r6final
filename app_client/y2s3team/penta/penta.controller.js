(function(){
    angular
        .module('rainbowApp')
        .controller('y2s3pentaCtrl', y2s3pentaCtrl);
        
    y2s3pentaCtrl.$inject = ['$scope', 'Y2s3Data'];
    
    function y2s3pentaCtrl($scope, Y2s3Data) {
        var vm = this;
        //console.log(window.location);
        console.log("In team controller");
        vm.linkteam = "/players/Penta";
        vm.teamlogo = "/images/Penta.jpg";
        vm.content = "ENCE Data Soon?";
        vm.selectedTeam = "";
        
        
       vm.getY2s3DataForTeam = function(){
                Y2s3Data.getY2s3DataForTeam("Penta Sports")
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