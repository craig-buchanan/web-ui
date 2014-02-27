angular.module('inputs', [])
.service("inputsService", function($rootScope) {
  
  $rootScope.__inputs = {};
  this.get = function(key) { return $rootScope.__inputs[key];  };
  this.put = function(key, value) { $rootScope.__inputs[key] = value; };
  this.map = function(keys, scope) { 
      if( !(key in scope) ) scope.key = null;
      $rootScope.__inputs[key] = scope[key];
      scope.$watch(key, function(newValue, oldValue) { 
        
        $rootScope.__inputs[key] = newValue;
      }
    );
  };
  return this});
  
//  .service('InputsService', ['$scope', '$http', function ($scope, $http) {
//    
//    $scope.inputs = {};
//    
//    $http.get("/inputs").success(function(response) { 
//      for(x = 0; x < response.length; x++ ) {
//        
//        var key = response[x].field; 
//        if( response[x].context &&  response[x].context.length > 0) key = response[x].context + "." + key;
//        $scope.inputs[key] = response[x];
//      }
//    });
//  }]);


