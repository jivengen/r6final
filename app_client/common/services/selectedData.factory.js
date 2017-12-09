(function() {

  angular
    .module('rainbowApp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedTeam : '',
          selectedArrivalICAO : '',
          selectedWeight : ''
      };
  }

})();