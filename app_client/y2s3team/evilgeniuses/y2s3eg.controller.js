(function(){
    angular
        .module('rainbowApp')
        .controller('y2s3egCtrl', y2s3egCtrl);
        
    y2s3egCtrl.$inject = ['$scope', 'Y2s3Data'];
    
    function y2s3egCtrl($scope, Y2s3Data) {
        var vm = this;
        //console.log(window.location);
        console.log("In team controller");
        vm.linkteam = "/players/EG";
        vm.content = "ENCE Data Soon?";
        //vm.selectedTeam = "Evil Geniuses";
        
        
       vm.getY2s3DataForTeam = function(){
                Y2s3Data.getY2s3DataForTeam("Evil Geniuses")
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