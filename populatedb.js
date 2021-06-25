const mongoose = require('mongoose');

// importar el modelo de usuario
const User = require('./models/User');

// la URI de la db
const db = 'mongodb://localhost/hellodb';

// array de usuarios para ingresar a la db
const users = [
  {
    id: 1,
    name: 'Leon',
    : 'Resident Evil Franchise',
    Lanzamiento: '2004'
  }
  {
    id: 2,
    name: 'Nathan drake',
    Juego: 'Uncharted Franchise',
    Lanzamiento: '2005'
  }
  {
    id: 3,
    name: 'Joel',
    Juego: 'TLOU',
    Lanzamiento: '2013'
  }
];

// conectarse a la db
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    // si nos conectamos con exito mostrar mensajes
    // e insertar los usuarios en el array
    console.log(`DB connected @ ${db}`);
    console.log('Populating DB...');
    User.insertMany(users, (err, users) => {
      if (err) throw err;
      // un mensaje con la cantidad de documentos insertados
      console.log(`${users.length} documents inserted!`);
      // cerramos la conexion cuando terminamos
      mongoose.connection.close();
    });
  })
  .catch(err => console.error(`Connection error ${err}`));
