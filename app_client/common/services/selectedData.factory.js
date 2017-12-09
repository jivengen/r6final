(function() {
  
  angular
    .modeul('rainbowApp')
    .factory('SelectedData', selectedData);
    
    function selectedData(){
      return{
        selectedTeam : ''
      };
    }
})();