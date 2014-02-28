angular.module("Inputs", [])
.factory("InputsService", ['$http', 'Config', function($http, config) {
   this.url = config.url;
   this.__inputs__ = {};
   var self = this;
//   
//   this.getInput = function (namespace, name) {
//     
//   };
//   
//   this.get = function(key) { return this.__inputs__[key];  };
//   this.put = function(key, value) { this.__inputs__[key] = value; };
//   
   this.bind = function(namespace, names, scope) {
     if( !self.namespace_exists(namespace)) self.initialize_namespace(namespace);
     
     for (var x = 0; x < names.length; x++) {
       var prop = names[x];
       if( !(prop in scope) ) scope[prop] = "test";
       var input = new Input();
       
       input.namespace = namespace;
       input.name      = prop;
       input.value     = scope[prop]; 
       scope.$watch(prop, function(newValue, oldValue) {
         if(self.__inputs__[prop] == newValue) return; 
         self.__inputs__[prop] = newValue;
       });
     }
   };
   
   this.initialize_namespace = function (namespace) {
      self.__inputs__[namespace] = [];
   };
   
   this.namespace_exists = function (namespace) {
     return (namespace in self.__inputs__);
   } 
   
   return this;
  }]
);

function Input() {
  
  this.value         = null;
  this.namespace     = null;
  this.class_name    = null;
  this.errors        = [];
  this.warnings      = [];
  this.notices       = [];
  this.is_required   = false;
  this.name          = null;
  this.is_dirty      = false;
  this.default_value = null;
  this.possible_values = [];
  
  this.equals = function(other) {
    if(typeof this !== typeof other) return false;
    if(this.namespace != other.namespace) return false;
    if(this.name != other.name) return false;
  } 
  return this;
}
  
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


