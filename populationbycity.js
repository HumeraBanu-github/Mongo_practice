               POPULATION BY CITY
1.
Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{ _id:{state:'$state',city:'$city'},totalpop:{$sum:'$pop'}}}])
[
  { _id: { state: 'WI', city: 'VESPER' }, totalpop: 1616 },
  { _id: { state: 'PA', city: 'WORTHVILLE' }, totalpop: 65 },
  { _id: { state: 'OH', city: 'BUCYRUS' }, totalpop: 19018 },
  { _id: { state: 'NJ', city: 'LYNDHURST' }, totalpop: 18423 },
  { _id: { state: 'NY', city: 'ROOSEVELT' }, totalpop: 14595 },
  { _id: { state: 'MN', city: 'HACKENSACK' }, totalpop: 1382 },
  { _id: { state: 'ND', city: 'SHELDON' }, totalpop: 546 },
  { _id: { state: 'VT', city: 'CAVENDISH' }, totalpop: 258 },
  { _id: { state: 'NJ', city: 'GLADSTONE' }, totalpop: 887 },
  { _id: { state: 'IL', city: 'PROSPECT HEIGHTS' }, totalpop: 14692 },
  { _id: { state: 'TX', city: 'NAVASOTA' }, totalpop: 12634 },
  { _id: { state: 'IN', city: 'LOOGOOTEE' }, totalpop: 6068 },
  { _id: { state: 'MO', city: 'PLEVNA' }, totalpop: 149 },
  { _id: { state: 'CA', city: 'WHITMORE' }, totalpop: 593 },
  { _id: { state: 'NC', city: 'DALLAS' }, totalpop: 13328 },
  { _id: { state: 'WI', city: 'BABCOCK' }, totalpop: 409 },
  { _id: { state: 'MO', city: 'HIGH RIDGE' }, totalpop: 12915 },
  { _id: { state: 'MO', city: 'ASHLAND' }, totalpop: 2989 },
  { _id: { state: 'KY', city: 'BLAINE' }, totalpop: 982 },
  { _id: { state: 'AL', city: 'MILLPORT' }, totalpop: 2286 }
]
Type "it" for more

2.
Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:{city:'$city' ,pop:'$pop'}}},{$sort:{'_id.pop':-1}}])
[
  { _id: { city: 'CHICAGO', pop: 112047 } },
  { _id: { city: 'BROOKLYN', pop: 111396 } },
  { _id: { city: 'NEW YORK', pop: 106564 } },
  { _id: { city: 'NEW YORK', pop: 100027 } },
  { _id: { city: 'BELL GARDENS', pop: 99568 } },
  { _id: { city: 'CHICAGO', pop: 98612 } },
  { _id: { city: 'LOS ANGELES', pop: 96074 } },
  { _id: { city: 'CHICAGO', pop: 95971 } },
  { _id: { city: 'CHICAGO', pop: 94317 } },
  { _id: { city: 'NORWALK', pop: 94188 } },
  { _id: { city: 'CHICAGO', pop: 92005 } },
  { _id: { city: 'CHICAGO', pop: 91814 } },
  { _id: { city: 'CHICAGO', pop: 89762 } },
  { _id: { city: 'CHICAGO', pop: 88377 } },
  { _id: { city: 'JACKSON HEIGHTS', pop: 88241 } },
  { _id: { city: 'ARLETA', pop: 88114 } },
  { _id: { city: 'BROOKLYN', pop: 87079 } },
  { _id: { city: 'SOUTH GATE', pop: 87026 } },
  { _id: { city: 'RIDGEWOOD', pop: 85732 } },
  { _id: { city: 'BRONX', pop: 85710 } }
]
Type "it" for more

3.
Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:{city:'$city'},totalpop:{$sum:'$pop'}}},{$sort:{totalpop:-1}},{$limit:3}])
[
  { _id: { city: 'CHICAGO' }, totalpop: 2452177 },
  { _id: { city: 'BROOKLYN' }, totalpop: 2341387 },
  { _id: { city: 'HOUSTON' }, totalpop: 2123053 }
]

3.
Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.aggregate([{$match:{state:'TX'}},{$group:{_id:{city:'$city',state:'$state'},population:{$sum:'$pop'}}},{$sort:{'_id.population':-1}},{$limit:3}])
[
  { _id: { city: 'CRYSTAL CITY', state: 'TX' }, population: 9130 },
  { _id: { city: 'CUT AND SHOOT', state: 'TX' }, population: 14683 },
  { _id: { city: 'PRESIDIO', state: 'TX' }, population: 3482 }
]