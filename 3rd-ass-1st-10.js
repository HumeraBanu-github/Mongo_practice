                                   ASSIGNMENT-3


Atlas atlas-147xil-shard-0 [primary] myFirstDatabase> show dbs
mongo_practice   283 kB
population      2.06 MB
restaurants      684 kB
admin            377 kB
local           12.3 GB
Atlas atlas-147xil-shard-0 [primary] myFirstDatabase> show collections

Atlas atlas-147xil-shard-0 [primary] myFirstDatabase> use restaurants
switched to db restaurants
Atlas atlas-147xil-shard-0 [primary] restaurants> show collections
addresses
                   query1.
//1.To see all the documents of the collecction
Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.find()

          query2.
//2. Showing selected fields from the database
Atlas atlas-3gp48w-shard-0 [primary] restaurants> db.addresses.aggregate({$project:{restaurant_id:1,name:1,borough:1,cuisine:1}})


                query3.

//3. To show some selected fields and leave some using $project
Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.aggregate([{$project:{restaurant_id:1,name:1,borough:1,cuisine:1,_id:0}}])
[
  {
    borough: 'Bronx',
    cuisine: 'Bakery',
    name: 'Morris Park Bake Shop',
    restaurant_id: '30075445'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'Hamburgers',
    name: "Wendy'S",
    restaurant_id: '30112340'
  },
  {
    borough: 'Manhattan',
    cuisine: 'Irish',
    name: 'Dj Reynolds Pub And Restaurant',
    restaurant_id: '30191841'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'Riviera Caterer',
    restaurant_id: '40356018'
  },
  {
    borough: 'Queens',
    cuisine: 'Jewish/Kosher',
    name: 'Tov Kosher Kitchen',
    restaurant_id: '40356068'
  },
  {
    borough: 'Queens',
    cuisine: 'American ',
    name: 'Brunos On The Boulevard',
    restaurant_id: '40356151'
  },
  
  {
    borough: 'Brooklyn',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40360076'
  },
  {
    borough: 'Queens',
    cuisine: 'Ice Cream, Gelato, Yogurt, Ices',
    name: 'Carvel Ice Cream',
    restaurant_id: '40361322'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'Delicatessen',
    name: 'Nordic Delicacies',
    restaurant_id: '40361390'
  },
  {
    borough: 'Manhattan',
    cuisine: 'American ',
    name: 'Glorious Food',
    restaurant_id: '40361521'
  },
  {
    borough: 'Brooklyn',
    cuisine: 'American ',
    name: 'The Movable Feast',
    restaurant_id: '40361606'
  }
]
                     
                            query4.
//4. To print some and and print an individual field from an nested document

Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.aggregate([{$project:{restaurant_id:1,name:1,borough:1,cuisine:1,'address.zipcode':1,_id:0}}])

                             query5.


//5. to print the first 5 restaurants that have bronx as thier borough
Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{borough:'Bronx'}},{$limit:5}])
[
  {
    _id: ObjectId("61800705fd544585a63c7dea"),
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },
    borough: 'Bronx',
    cuisine: 'Bakery',
    grades: [
      {
        date: ISODate("2014-03-03T00:00:00.000Z"),
        grade: 'A',
        score: 2
      },
      {
        date: ISODate("2013-09-11T00:00:00.000Z"),
        grade: 'A',
        score: 6
      },
      {
        date: ISODate("2013-01-24T00:00:00.000Z"),
        grade: 'A',
        score: 10
      },
      {
        date: ISODate("2011-11-23T00:00:00.000Z"),
        grade: 'A',
        score: 9
      },
      {
        date: ISODate("2011-03-10T00:00:00.000Z"),
        grade: 'B',
        score: 14
      }
    ],

                    query6.

//6. to print the names of all restaurants in the borough bronx

Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{borough:'Bronx'}}])
[
  {
    _id: ObjectId("61800705fd544585a63c7dea"),
    address: {
      building: '1007',
      coord: [ -73.856077, 40.848447 ],
      street: 'Morris Park Ave',
      zipcode: '10462'
    },

               query7.

//7. skipping first 5 borough bronx restaurants
Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{borough:'Bronx'}},{$skip:5},{$limit:5}])
 
                query8.
#score greater than 90
Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{"grades.score":{$gt:90}}},{$project:{name:1}}])
[
  {
    _id: ObjectId("61800705fd544585a63c7f48"),
    name: "Murals On 54/Randolphs'S"
  },
  { _id: ObjectId("61800705fd544585a63c7fe9"), name: 'Gandhi' },
  { _id: ObjectId("61800705fd544585a63c814c"), name: 'Bella Napoli' }
]

             query9.
#score greater than 80 and less than 100
Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{"grades.score":{$gt:00, $lt:100}}},{$project:{name:1}}])
  
                    query10.
#query having latitude less than
Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{"address.coord":{$lt:-95.754168}}},{$project:{name:1,address:1}}])
