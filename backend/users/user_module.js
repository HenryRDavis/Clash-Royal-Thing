const db = require('../data/connection');

module.exports = {
  addUser,
  getUsers,
  findBy,
  getCards,
  getClanById,
  getCardById,
  getClan,
  getClanByLocation,
  getClanByTrophies,
};

function addUser(user) {
  return db
    .select('*')
    .from('user')
    .insert(user);
}

function getClanById(id) {
  return dbit
    .select('*')
    .from('user')
    .where({id});
}

function getCardById(id) {
  return db
    .select('*')
    .from('user')
    .where({id});
}

function getUsers() {
  return db.select('*').from('user');
}

function findBy(user) {
  return db
    .select('*')
    .from('user')
    .where(user);
}

function getCard() {
  return db.select('*').from('card');
}

function getClanById(id) {
  return db
    .select('*')
    .from('clan')
    .where({id})
    .first();
}

function getIntensity(intensity) {
  return db
    .select('*')
    .from('class')
    .where({intensity});
}

function getClanByLocation(location) {
  return db
    .select('*')
    .from('class')
    .where({location});
}

function getByDuration(duration) {
  return db
    .select('*')
    .from('class')
    .where({duration});
}

function addFavorite(user_id, class_id) {
  return db('user_classes')
    .insert({user_id, class_id})
    .then(() => {
      return getClanById(user_id);
    });
}

function getFavoriteClass({user_id}) {
  return db
    .select('*')
    .from('user_classes')
    .join('user', 'user.id', 'user_classes.user_id')
    .where('user.id', '=', `${user_id}`);
}