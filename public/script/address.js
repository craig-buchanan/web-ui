angular.module('address', ['inputs'])
  .controller('AddressCtrl', ['$scope', 'inputsService', function (scope, inputsService) {
    inputsService.map("value", scope);
    scope.value = "test";
    
    scope.alert = function(msg) { alert(inputsService.get('value'))}
     
  }]);