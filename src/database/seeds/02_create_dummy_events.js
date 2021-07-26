
const EVENTS_TABLE = 'events';

export async function seed(knex) {
  return knex(EVENTS_TABLE).del()
    .then(function () {
      return knex(EVENTS_TABLE).insert([
        { title: 'graduation', description: 'my graduation ceremony', location: 'Karation', date: '2021-10-12', time: '08:00:00', created_by: 4},
        { title: 'farewell', description: 'my uncles farewell part', location: 'Isiolo', date: '2021-07-27', time: '11:00:00', created_by: 4 },
        { title: 'wedding', description: 'a weeding ceremony for my uncle', location: 'Nakuru', date: '2021-12-12', time: '10:00:00', created_by: 2 },
        { title: 'birthday', description: 'my birthday party na mayengs ceremony', location: 'Kasarani', date: '2021-07-28', time: '12:00:00', created_by: 3 },
        { title: 'birthday', description: 'my birthday party after graduation', location: 'Taita', date: '2021-08-24', time: '12:00:00', created_by: 1 },
      ]);
    });
};
