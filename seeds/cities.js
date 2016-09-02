
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cities').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('cities').insert({
          name:'Denver',
          population:650000,
        }),
        knex('cities').insert({
          name:'Boulder',
          population:105000

        }),
        knex('cities').insert({
          name:'Fort Collins',
          population:130000

        })
      ]);
    });
};
