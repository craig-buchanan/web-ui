angular.module('Address', ['Inputs'])
  .controller('AddressCtrl', ['$scope', 'InputsService', function (scope, inputsService) {
    inputsService.bind("", ["value"], scope);
  }]);