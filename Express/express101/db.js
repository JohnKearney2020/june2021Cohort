const db = {
  // friends: ['Joey', 'Chandler', 'Monika', 'Fibi', 'Ross', 'Rachel']
  friends: [
    {
      name: 'Tony Stark',
      handle: 'tincan'
    },
    {
      name: 'Joey',
      handle: 'ItalionStallion'
    },
    {
      name: 'Monika',
      handle: 'daBaker'
    },
    {
      name: 'Ross',
      handle: 'museumnerd129'
    }
  ],
  specials: [
    {
      id: 1,
      name: 'The Ron Swanson',
      description:  'All the bacon you have',
      price: 12.99
    },
    {
      id: 2,
      name: 'The Leslie Knope',
      description:  'Whipped cream with a side of waffles',
      price: 10.99
    },
    {
      id: 3,
      name: 'The Andy Dwyer',
      description:  'One of everything, severed in a large bowl',
      price: 15.99
    }
  ]
}

module.exports = db;