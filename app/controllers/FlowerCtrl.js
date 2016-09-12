'use strict';

app.controller('FlowerCtrl', function($scope, FirebaseFactory) {
  function loadFlowers() {
    FirebaseFactory.getArrangements()
      .then((data) => {
        console.log(data);
        $scope.arrangements = data;
        console.log($scope.arrangements);
      });
  }

  loadFlowers();
});
