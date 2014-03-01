'use strict';

describe("Inputs mapping ", function () {
  var InputsService;
  var serviceName = 'InputsService';
  
  describe("Loads", function () {
    var config  = {url: "test"};
    
    
    beforeEach(function() {
      module('Inputs');
      module(function($provide) {
        $provide.value('Config', config);
        $provide.value('$http', {});
      });
    });
    
    it("binds properties to the inputs service", inject(function(_InputsService_) {
       InputsService=_InputsService_;
       expect(angular.isFunction(InputsService.bind)).toBe(true);
     }) 
    );
  });
});