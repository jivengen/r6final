(function(){
    angular
        .module('rainbowApp')
        .controller('teamCtrl', teamCtrl);
        
    teamCtrl.$inject = ['$scope', 'Y2s3Data'];
    
    function teamCtrl($scope, Y2s3Data) {
        var vm = this;
        //console.log(window.location);
        console.log("In team controller");
        
        vm.content = "ENCE Data Soon?";
        vm.selectedTeam = "ENCE";
        
       vm.getY2s3DataForTeam = function(){
                Y2s3Data.getY2s3DataForTeam(vm.selectedTeam)
                .then(function(response){
                    console.log(vm.selectedTeam);
                    vm.teamData = response.data[0];
                    console.log(vm.teamData);
                    
                })
                .catch(function(e){
                    console.log(e);
                });
            };
            console.log("IN CTRL FOR TEAM DATA");
            
            vm.getY2s3DataForTeam();
        

        
    }
})();