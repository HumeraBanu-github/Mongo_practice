                                     Insert Documents

Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.insertOne({title :"Fight Club" ,writer :"chuck palahniuko" ,year :1999 , actors : ["Brad Pitt" ,"Edward Norton"]})
{
  acknowledged: true,
  insertedId: ObjectId("617e4ddbc3d240a5d7d8a83b")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.insertOne({title :"Pulp Fiction" ,writer :"Quentin Torantino" ,year :1994 , actors : ["John Travalto" ,"Uma Thurman"]})
{
  acknowledged: true,
  insertedId: ObjectId("617e4e8ac3d240a5d7d8a83c")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.insertOne({title :"Inglorious Basterds" ,writer :"Quentin Torantino" ,year :2009 , actors : ["Brad Pitt" ,"Diane Kruger","Eli Roth"]})
{
  acknowledged: true,
  insertedId: ObjectId("617e4f29c3d240a5d7d8a83d")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.insertOne({title :"The hobbit:An Unexpected Journey" ,writer :"J.R.R>Tolkein" ,year :2012 , franchise : "The Hobbit"})
{
  acknowledged: true,
  insertedId: ObjectId("617e4fcac3d240a5d7d8a83e")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.insertOne({title :"The hobbit:The Desolation Of Smaug" ,writer :"J.R.R.Tolkein" ,year :2013 , franchise : "The Hobbit"})
{
  acknowledged: true,
  insertedId: ObjectId("617e502bc3d240a5d7d8a83f")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.insertOne({title :"The hobbit:The Battle of the Five Armies" ,writer :"J.R.R.Tolkein" ,year :2012 , franchise : "The Hobbit" , synopsis :"biblo and Comapany are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness"})
{
  acknowledged: true,
  insertedId: ObjectId("617e50c8c3d240a5d7d8a840")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.insertOne({title :"Pee Wee Herman's Big Adventure"})
{
  acknowledged: true,
  insertedId: ObjectId("617e5100c3d240a5d7d8a841")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.insertOne({title :"Avatar"})
{
  acknowledged: true,
  insertedId: ObjectId("617e510fc3d240a5d7d8a842")
}

                             Query/find Documents

   1. find All documents
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.find()
[
  {
    _id: ObjectId("617e4ddbc3d240a5d7d8a83b"),
    title: 'Fight Club',
    writer: 'chuck palahniuko',
    year: 1999,
    actors: [ 'Brad Pitt', 'Edward Norton' ]
  },
  {
    _id: ObjectId("617e4e8ac3d240a5d7d8a83c"),
    title: 'Pulp Fiction',
    writer: 'Quentin Torantino',
    year: 1994,
    actors: [ 'John Travalto', 'Uma Thurman' ]
  },
  {
    _id: ObjectId("617e4f29c3d240a5d7d8a83d"),
    title: 'Inglorious Basterds',
    writer: 'Quentin Torantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ]
  },
  {
    _id: ObjectId("617e4fcac3d240a5d7d8a83e"),
    title: 'The hobbit:An Unexpected Journey',
    writer: 'J.R.R>Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("617e502bc3d240a5d7d8a83f"),
    title: 'The hobbit:The Desolation Of Smaug',
    writer: 'J.R.R.Tolkein',
    year: 2013,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("617e50c8c3d240a5d7d8a840"),
    title: 'The hobbit:The Battle of the Five Armies',
    writer: 'J.R.R.Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'biblo and Comapany are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness'
  },
  {
    _id: ObjectId("617e5100c3d240a5d7d8a841"),
    title: "Pee Wee Herman's Big Adventure"
  },
  { _id: ObjectId("617e510fc3d240a5d7d8a842"), title: 'Avatar' }
]
        2. get all the documents with writer set to "Quentin Toranto"
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.find({writer: 'Quentin Torantino'})
[
  {
    _id: ObjectId("617e4e8ac3d240a5d7d8a83c"),
    title: 'Pulp Fiction',
    writer: 'Quentin Torantino',
    year: 1994,
    actors: [ 'John Travalto', 'Uma Thurman' ]
  },
  {
    _id: ObjectId("617e4f29c3d240a5d7d8a83d"),
    title: 'Inglorious Basterds',
    writer: 'Quentin Torantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ]
  }
]
       3. get all the documents where actore include "brad Pitt"
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.find({actors: 'Brad Pitt'})
[
  {
    _id: ObjectId("617e4ddbc3d240a5d7d8a83b"),
    title: 'Fight Club',
    writer: 'chuck palahniuko',
    year: 1999,
    actors: [ 'Brad Pitt', 'Edward Norton' ]
  },
  {
    _id: ObjectId("617e4f29c3d240a5d7d8a83d"),
    title: 'Inglorious Basterds',
    writer: 'Quentin Torantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ]
  }
]
       4. get all documents with the franchise set to "The Hobbit"
Atlas atlas-147xil-shard-0 [secondary] mongo_practice> db.movies.find({franchise: 'The Hobbit'})
[
  {
    _id: ObjectId("617e4fcac3d240a5d7d8a83e"),
    title: 'The hobbit:An Unexpected Journey',
    writer: 'J.R.R>Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("617e502bc3d240a5d7d8a83f"),
    title: 'The hobbit:The Desolation Of Smaug',
    writer: 'J.R.R.Tolkein',
    year: 2013,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("617e50c8c3d240a5d7d8a840"),
    title: 'The hobbit:The Battle of the Five Armies',
    writer: 'J.R.R.Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'biblo and Comapany are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness'
  }
]

              5.Get all movies released in the 90's
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.find({year : {$lt : 2000}})
[
  {
    _id: ObjectId("617e4ddbc3d240a5d7d8a83b"),
    title: 'Fight Club',
    writer: 'chuck palahniuko',
    year: 1999,
    actors: [ 'Brad Pitt', 'Edward Norton' ]
  },
  {
    _id: ObjectId("617e4e8ac3d240a5d7d8a83c"),
    title: 'Pulp Fiction',
    writer: 'Quentin Torantino',
    year: 1994,
    actors: [ 'John Travalto', 'Uma Thurman' ]
  }
]

        6.Get all movies released before the year 2000 or after the 2010
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.find({$or :[{year : {$lt : 2000}},{year:{$gt:2010}}]})
[
  {
    _id: ObjectId("617e4ddbc3d240a5d7d8a83b"),
    title: 'Fight Club',
    writer: 'chuck palahniuko',
    year: 1999,
    actors: [ 'Brad Pitt', 'Edward Norton' ]
  },
  {
    _id: ObjectId("617e4e8ac3d240a5d7d8a83c"),
    title: 'Pulp Fiction',
    writer: 'Quentin Torantino',
    year: 1994,
    actors: [ 'John Travalto', 'Uma Thurman' ]
  },
  {
    _id: ObjectId("617e4fcac3d240a5d7d8a83e"),
    title: 'The hobbit:An Unexpected Journey',
    writer: 'J.R.R>Tolkein',
    year: 2012,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("617e502bc3d240a5d7d8a83f"),
    title: 'The hobbit:The Desolation Of Smaug',
    writer: 'J.R.R.Tolkein',
    year: 2013,
    franchise: 'The Hobbit'
  },
  {
    _id: ObjectId("617e50c8c3d240a5d7d8a840"),
    title: 'The hobbit:The Battle of the Five Armies',
    writer: 'J.R.R.Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'biblo and Comapany are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness'
  }
]
                Update Documents 
    1. Add a Synopsis to "The hobbit:the unexpected journey":'A reluctant hobbit , biblo Baggins,sets out to the lonely Mountain with a sprited group of dwarves to reclaim their mountain home-and the gold within it -from the dragon Smaug'
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.update({
... title:"The hobbit:An Unexpected Journey"} ,{$set : {synopsis : 'A reluctant hobbit , biblo Baggins,sets out to the lonely Mountain with a sprited group of dwarves to reclaim their mountain home-and the gold within it -from the dragon Smaug'}})

{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
 
  2.Add synopsis to Title:The hobbit:the deoslation of smaug:'the dwarves along with biblo Baggins and Gandalf and Grey ,Continue their quest to recalim Erebor, their homeland,from Smaug,biblo baggins is in possession of a mysterious and magical ring' 

Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.updateOne({ title: 'The hobbit:The Desolation Of Smaug' },
 { $set: {synopsis: 'the dwarves along with biblo Baggins and Gandalf and Grey ,Continue their quest to recalim Erebor, their homeland,from Smaug,biblo baggins is in possession of a mysterious and magical ring' } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.find({franchise:'The Hobbit'})
[
  {
    _id: ObjectId("617e4fcac3d240a5d7d8a83e"),
    title: 'The hobbit:An Unexpected Journey',
    writer: 'J.R.R>Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'A reluctant hobbit , biblo Baggins,sets out to the lonely Mountain with a sprited group of dwarves to reclaim their mountain home-and the gold within it -from the dragon Smaug'
  },
  {
    _id: ObjectId("617e502bc3d240a5d7d8a83f"),
    title: 'The hobbit:The Desolation Of Smaug',
    writer: 'J.R.R.Tolkein',
    year: 2013,
    franchise: 'The Hobbit',
    synopsis: 'the dwarves along with biblo Baggins and Gandalf and Grey ,Continue their quest to recalim Erebor, their homeland,from Smaug,biblo baggins is in possession of a mysterious and magical ring'
  },
  {
    _id: ObjectId("617e50c8c3d240a5d7d8a840"),
    title: 'The hobbit:The Battle of the Five Armies',
    writer: 'J.R.R.Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'biblo and Comapany are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness'
  }
]
   3.Add hnjns in the movie Pulp Fiction
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.update({title:'Pulp Fiction'},{$push:{actors:'hujnjs'}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.find({title:'Pulp Fiction'})
[
  {
    _id: ObjectId("617e4e8ac3d240a5d7d8a83c"),
    title: 'Pulp Fiction',
    writer: 'Quentin Torantino',
    year: 1994,
    actors: [ 'John Travolta', 'Uma Thurman', 'Sameul.L Jackson', 'hujnjs' ]
  }
]

            Text Search

1.

Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.createIndex({synopsis :'text'})
synopsis_text
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.find({$text:{$search:'biblo'}})
[
  {
    _id: ObjectId("617e502bc3d240a5d7d8a83f"),
    title: 'The hobbit:The Desolation Of Smaug',
    writer: 'J.R.R.Tolkein',
    year: 2013,
    franchise: 'The Hobbit',
    synopsis: 'the dwarves along with biblo Baggins and Gandalf and Grey ,Continue their quest to recalim Erebor, their homeland,from Smaug,biblo baggins is in possession of a mysterious and magical ring'
  },
  {
    _id: ObjectId("617e50c8c3d240a5d7d8a840"),
    title: 'The hobbit:The Battle of the Five Armies',
    writer: 'J.R.R.Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'biblo and Comapany are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness'
  },
  {
    _id: ObjectId("617e4fcac3d240a5d7d8a83e"),
    title: 'The hobbit:An Unexpected Journey',
    writer: 'J.R.R>Tolkein',


2.

Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.find({$text:{$search:'Gandalf'}})
[   franchise: 'The Hobbit',
  { synopsis: 'A reluctant hobbit , biblo Baggins,sets out to the lonely Mountain with a sprited group of dwarves to rec
    _id: ObjectId("617e502bc3d240a5d7d8a83f"),t -from the dragon Smaug'
    title: 'The hobbit:The Desolation Of Smaug',
    writer: 'J.R.R.Tolkein',
    year: 2013,xil-shard-0 [primary] mongo_practice>
    franchise: 'The Hobbit',
    synopsis: 'the dwarves along with biblo Baggins and Gandalf and Grey ,Continue their quest to recalim Erebor, their homeland,from Smaug,biblo baggins is in possession of a mysterious and magical ring'
  }
]
3.
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find({$text:{$search:"bilbo -gandalf"}})
[
  {
    _id: ObjectId("617c1b42bb4c08c65637bd1e"),
    title: 'The Hobbit: The Battle of the five armies',
    writer: 'J.R.R Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'Bilbo and company are force to engage in a war against an array of caombatants and keep the lonely mountain from falling into the hands of a rising darkness'
  }
]
4.
Atlas atlas-3gp48w-shard-0 [primary] mongo_practice> db.movies.find({$text:{$search:"dwarves hobbit"}})
[
  {
    _id: ObjectId("617c1a9bbb4c08c65637bd1d"),
    title: 'The Hobbit: The Desolation of Smaug',
    writer: 'J.R.R Tolkein',
    year: 2013,
    franchise: 'The Hobbit',
    synopsis: 'The dwarves, along with bilbo baggins and gandalf the grey, continue thier quest top reclaim erebor, thier homeland form smaug.Bilbo baggins is in possesion of a mysterious and magical ring'
  }
]

                Delete Documents
1.

Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.deleteOne({title:"Pee Wee Herman's Big Adventure"})
{ acknowledged: true, deletedCount: 1 }

2.

Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.deleteOne({title:"Avatar"})
{ acknowledged: true, deletedCount: 1 }
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.movies.find()
[
  {
    _id: ObjectId("617e4ddbc3d240a5d7d8a83b"),
    title: 'Fight Club',
    writer: 'chuck palahniuko',
    year: 1999,
    actors: [ 'Brad Pitt', 'Edward Norton' ]
  },
  {
    _id: ObjectId("617e4e8ac3d240a5d7d8a83c"),
    title: 'Pulp Fiction',
    writer: 'Quentin Torantino',
    year: 1994,
    actors: [ 'John Travolta', 'Uma Thurman', 'Sameul.L Jackson', 'hujnjs' ]
  },
  {
    _id: ObjectId("617e4f29c3d240a5d7d8a83d"),
    title: 'Inglorious Basterds',
    writer: 'Quentin Torantino',
    year: 2009,
    actors: [ 'Brad Pitt', 'Diane Kruger', 'Eli Roth' ]
  },
  {
    _id: ObjectId("617e4fcac3d240a5d7d8a83e"),
    title: 'The hobbit:An Unexpected Journey',
    writer: 'J.R.R>Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'A reluctant hobbit , biblo Baggins,sets out to the lonely Mountain with a sprited group of dwarves to reclaim their mountain home-and the gold within it -from the dragon Smaug'
  },
  {
    _id: ObjectId("617e502bc3d240a5d7d8a83f"),
    title: 'The hobbit:The Desolation Of Smaug',
    writer: 'J.R.R.Tolkein',
    year: 2013,
    franchise: 'The Hobbit',
    synopsis: 'the dwarves along with biblo Baggins and Gandalf and Grey ,Continue their quest to recalim Erebor, their homeland,from Smaug,biblo baggins is in possession of a mysterious and magical ring'
  },
  {
    _id: ObjectId("617e50c8c3d240a5d7d8a840"),
    title: 'The hobbit:The Battle of the Five Armies',
    writer: 'J.R.R.Tolkein',
    year: 2012,
    franchise: 'The Hobbit',
    synopsis: 'biblo and Comapany are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness'
  }
]