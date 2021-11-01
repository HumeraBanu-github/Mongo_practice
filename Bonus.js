                    BONUS

1.
Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:{city:'$city'},population:{$avg:'$pop'}}}])
[
  { _id: { city: 'TRUXTON' }, population: 693.5 },
  { _id: { city: 'ELLISTON' }, population: 115 },
  { _id: { city: 'BOSTIC' }, population: 3094 },
  { _id: { city: 'BIRCH HARBOR' }, population: 229 },
  { _id: { city: 'TRUMBULL' }, population: 16297 },
  { _id: { city: 'CAMARILLO' }, population: 31831 },
  { _id: { city: 'MIRA' }, population: 207 },
  { _id: { city: 'PATHFORK' }, population: 545 },
  { _id: { city: 'CASTLEWOOD' }, population: 4124.5 },
  { _id: { city: 'TEXICO' }, population: 1305 },
  { _id: { city: 'CLEMONS' }, population: 363 },
  { _id: { city: 'PROMISE CITY' }, population: 370 },
  { _id: { city: 'MC INTIRE' }, population: 382 },
  { _id: { city: 'MANKATO' }, population: 20173 },
  { _id: { city: 'LEICESTER' }, population: 5372.333333333333 },
  { _id: { city: 'FANCY FARM' }, population: 1423 },
  { _id: { city: 'CHARLOTTESVILLE' }, population: 32235 },
  { _id: { city: 'ANTON' }, population: 932.5 },
  { _id: { city: 'CITY OF COMMERCE' }, population: 9689 },
  { _id: { city: 'BELCAMP' }, population: 2957 }
]
Type "it" for more

2.

Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:{city:'$city'},population:{$avg:'$pop'}}},{$sort:{population:-1}},{$limit:3}])
[
  { _id: { city: 'BELL GARDENS' }, population: 99568 },
  { _id: { city: 'ARLETA' }, population: 88114 },
  { _id: { city: 'SOUTH GATE' }, population: 87026 }
]