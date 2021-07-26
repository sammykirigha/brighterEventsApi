
export async function seed(knex) {
   return knex('users').del()
    .then(function () {
      return knex('users').insert([
        { id: 1, username: 'John Doe', email: 'johndoe@example.com', password: "password1"},
        { id: 2, username: 'Will Smith', email: 'willsmith@example.com', password: "password2" },
        { id: 3, username: 'Jane Doe', email: 'janedoe@example.com', password: "password3" },
        { id: 4, username: 'Sam Doe', email: 'samdoe@example.com', password: "password4" },
      ]);
    });
};
