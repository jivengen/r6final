(function() {
    angular
        .module('rainbowApp')
        .service('Y2s3Data', Y2s3Data );
        
        Y2s3Data.$inject = ['$http'];
        
        
        function Y2s3Data($http){
            var getTeamData = function(){
                return $http.get('api/y2s3/ENCE');
                //return $http.get('/api/y2s3/' + team);
            };
            
            return {
                getTeamData : getTeamData,
            };
        }
    
})