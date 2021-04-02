const db = require('../database/connection')

module.exports = {
    find,
    findBy,
    findById,
    add,
    remove,
    update,
    
}

// get all clans
function find() {
     return db('clan')
}

// get a clan by filter
function findBy(filter) {
    return find().where(filter)
}

// get a clan by ID
function findById(id) {
    return find().where({id}).first()
}

// add your clan 
async function add(clan) {
    try {
        const [id] = await find().insert(clan, "id");

        return findById(id);
    } catch (error) {
        throw error;
    }
}

// delete your clan 
function remove(id) {
  return  findById(id).del()
}

// update your clan 
function update(updating, id) {
    return findById(id).update(updating)
    .then(()=> findById(id))
}

