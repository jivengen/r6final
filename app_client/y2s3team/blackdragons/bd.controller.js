(function(){
    angular
        .module('rainbowApp')
        .controller('y2s3bdCtrl', y2s3bdCtrl);
        
    y2s3bdCtrl.$inject = ['$scope', 'Y2s3Data'];
    
    function y2s3bdCtrl($scope, Y2s3Data) {
        var vm = this;
        //console.log(window.location);
        console.log("In team controller");
        vm.linkteam = "/players/BD";
        vm.content = "Black Dragons";
        vm.teamlogo = "/images/BD.jpg";
        //vm.selectedTeam = "";
        
        
       vm.getY2s3DataForTeam = function(){
                Y2s3Data.getY2s3DataForTeam("Black Dragons")
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