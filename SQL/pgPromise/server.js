const pgp = require('pg-promise')();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'avengershq',
  user: 'postgres',
  password: 'postgres'
};

const db = pgp(config);

// Many results
// db.many('SELECT * FROM members')
//   .then((results) => {
//     console.log(results);
//     pgp.end();
//   })

// One Result
// db.one("SELECT * FROM members WHERE alias = 'Iron Man'")
//   .then((results) => {
//     console.log(results);
//     pgp.end();
//   })


// Insert a new value(s) into the table
// db.result(`INSERT INTO members (name, alias, joindate, birthdate) 
//   VALUES 
//   ('Thor','God of Thunder','2011-06-04 13:00:00-4:00','804-08-10')`
//   )
//     .then((result) => {
//       console.log(result.rowCount);
//       pgp.end();
//     })

// const nameFromUser = 'Wanda';
// db.result(`INSERT INTO members (name) 
//   VALUES 
//   ('${nameFromUser}')`
//   )
//     .then((result) => {
//       console.log(result.rowCount);
//       pgp.end();
//     })



// Sanitazing data inputs
// const nameFromUser = "'); DROP TABLE members/ --";
// db.result(`INSERT INTO members (name) VALUES ($1)`, nameFromUser)
//   .then((result) => {
//     console.log(result.rowCount);
//     pgp.end();
//   })

// Inserting values from an object
// const superhero = {
//   name: 'Steve Rogers',
//   alias: 'Captain America',
//   rank: 100
// }

// db.result("INSERT INTO members (name, alias, rank) VALUES (${name}, ${alias}, ${rank})", superhero)
//   .then((result) => {
//     console.log(result.rowCount)
//     pgp.end()
//   })
//   .catch((e) => {
//     console.log('There was an error');
//   });

// Delete a value
// const id = 7;
// const rank = 0;
// db.result("DELETE FROM members WHERE id = $1 AND rank = $2", [id, rank])
//   .then((result) => {
//     console.log(result.rowCount);
//     pgp.end();
//   })
//   .catch((e) => {
//     console.log('There was an error');
  // });

const alias = "The Incredible Hulk";
db.result("UPDATE members SET gender = 'M' WHERE alias = $1", alias)
  .then((result) => {
    console.log(result.rowCount);
    pgp.end();
  })