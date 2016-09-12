'use strict';

app.factory('FirebaseFactory', ($http, $q) => {
  let getArrangements = () => {
    return $q((resolve, reject) => {
      $http.get('https://flower-power-angular.firebaseio.com/arrangements.json')
        .success((data) => {
          resolve(data);
        })
        .error((error) => {
          reject(error);
        })
      })
      .then((data) => {
        let flowers = [];
        console.log(Object.keys(data));
        Object.keys(data).forEach((key) => {
          data[key].id = key;
          flowers.push(data[key]);
        });

        console.log('flowers', flowers);
        return $q.resolve(flowers);
      });
  }

  return {
    getArrangements
  };
});
