(function(){
    angular
        .module('rainbowApp')
        .controller('homeCtrl', homeCtrl);
        
    homeCtrl.$inject = ['$scope'];
    
    function homeCtrl($scope, SelectedData) {
        var vm = this;
        //console.log(window.location);
        console.log("In home controller");
        
        vm.content = "r6Data";
        
        vm.selectedYear= "";
        vm.selectedSeason="";
        
    }
})();