var copyPasteApp = angular.module('copyPasteApp',[]);

copyPasteApp.controller('copyPasteCtrl', function ($scope, $http) {


    console.log("Hello world from controller");

    var refresh = function(){
              $http.get('/copypaste').success(function(response){
                console.log("I got the data I requested");
                $scope.copypaste = response;
                $scope.copy = "";
              });
      };

        refresh();

        $scope.addCopyPaste = function(){
            console.log($scope.copy);
            $http.post('/copypaste', $scope.copy).success(function(response){
            console.log(response);
            //number list
            refresh();
});
        };

        $scope.remove = function(id){
            console.log(id);
            $http.delete('/copypaste/' + id).success(function(response){
              refresh();
            });
          };

        $scope.edit = function(id){
          console.log(id);
          $http.get('/copypaste/' + id).success(function(response){
            $scope.copy = response;
          });
        };

        $scope.update = function(id){
          console.log($scope.copy._id);
          $http.put('/copypaste/' + $scope.copy._id, $scope.copy).success(function(response){
          refresh();
          });
        };

        $scope.deselect = function(){
          $scope.copy = "";
        };


    $scope.showDetails = function(name, paste){
        $scope.copyName = name;
        $scope.copyText = paste;
       };

      $scope.refresh = function(){
        refresh();
      }

});
