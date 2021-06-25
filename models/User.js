const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: Number,
  name: String,
  Juego: String,
  Lanzamiento: Date
});

const User = mongoose.model('User', UserSchema);


module.exports = User;

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
