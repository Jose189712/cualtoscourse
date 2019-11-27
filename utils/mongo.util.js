const mongoose = require('mongoose');

exports.connnectToDB = () => {

  mongoose.connect(
    'mongodb+srv://dbUser:TaU0tUuunP4DmCv5@cluster0-mjwq6.mongodb.net/test?retryWrites=true&w=majority',
    //'mongodb+srv://cluster0-mjwq6.mongodb.net/sample_mflix?retryWrites=true&w=majority',
    {
      user: 'dbUser',
      pass: 'TaU0tUuunP4DmCv5',
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );

  mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open');
  });

  mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
  });

  mongoose.connection.on('disconnected', function() {
      console.log('Mongoose default connection disconnected');
  });

  mongoose.set('debug', true);

  process.on('SIGINT', function() {
      mongoose.connection.close(function() {
          console.log('Mongoose default connection disconnected through app termination')
      });

      process.exit(0);
  });

};