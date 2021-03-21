
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('clan').del()
    .then(function () {
      // Inserts seed entries
      return knex('clan').insert([
        {id: 1, name: 'Jeruko'},
        {id: 2, name: 'Klan of Ketamine'},
        {id: 3, name: 'gaem'}
      ]);
    });
};
