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
        
       /* vm.getTeamData = function(){
                Y2s3Data.getTeamData(vm.selectedTeam.team)
                .then(function(response){
                    vm.teamData = response.data[0];
                })
                .catch(function(e){
                    console.log(e);
                });
            };
            console.log("IN CTRL FOR TEAM DATA");
            
            vm.getTeamData();*/
        

        
    }
})();