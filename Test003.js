var Scratch = require('scratch-api');

var Data = 0;
var DaCl = 0;
var C = 0;

Scratch.UserSession.load(function(err, user){
  user.cloudSession(416342639, function(err, cloud){
    cloud.on('set', function(name, value){
      Data = cloud.get('☁ Data', value);
      user.cloudSession(416220856, function(err, cloud){
        cloud.on('set', function(name, value){
          Dacl = cloud.get('☁ DataBack', value);
          if (Dacl < Data) {
            cloud.set('☁ DataBack', Data);
          }
        });
      });
    });
  });
});
