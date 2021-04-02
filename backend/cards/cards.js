const db = require('../database/connection')

module.exports = {
    find,
    findBy,
    findCardById,
}

// get all cards
function find() {
    return db('card')
}

// get a card by filter
function findBy(filter) {
   return find().where(filter)
}

// get a card by ID
function findCardById(id) {
   return find().where({id}).first()
}