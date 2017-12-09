(function(){
    angular
        .module('rainbowApp')
        .controller('y2s3Ctrl', y2s3Ctrl);
        
    y2s3Ctrl.$inject = ['$scope'];
    
    function y2s3Ctrl($scope, SelectedData) {
        var vm = this;
        //console.log(window.location);
        console.log("In y2s3 controller");
        
        vm.content = "Sao Paulo";
        

        
    }
})();