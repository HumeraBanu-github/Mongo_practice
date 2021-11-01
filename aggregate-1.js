                  Aggregate FrameWorks
1.Atlas atlas-147xil-shard-0 [primary] mongo_practice> use population
switched to db population
Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.find({city:'ATLANTA',state:'GA'})
[
  {
    _id: '30303',
    city: 'ATLANTA',
    loc: [ -84.388846, 33.752504 ],
    pop: 1845,
    state: 'GA'
  },
  {
    _id: '30305',
    city: 'ATLANTA',
    loc: [ -84.385145, 33.831963 ],
    pop: 19122,
    state: 'GA'
  },
  {
    _id: '30306',
    city: 'ATLANTA',
    loc: [ -84.351418, 33.786027 ],
    pop: 20081,
    state: 'GA'
  },
  {
    _id: '30307',
    city: 'ATLANTA',
    loc: [ -84.335957, 33.769138 ],
    pop: 16330,
    state: 'GA'
  },
  {
    _id: '30308',
    city: 'ATLANTA',
    loc: [ -84.375744, 33.771839 ],
    pop: 8549,
    state: 'GA'
  },
  {
    _id: '30309',
    city: 'ATLANTA',
    loc: [ -84.388338, 33.798407 ],
    pop: 14766,
    state: 'GA'
  },
  {
    _id: '30310',
    city: 'ATLANTA',
    loc: [ -84.423173, 33.727849 ],
    pop: 34017,
    state: 'GA'
  },
  {
    _id: '30311',
    city: 'ATLANTA',
    loc: [ -84.470219, 33.722957 ],
    pop: 34880,
    state: 'GA'
  },
  {
    _id: '30312',
    city: 'ATLANTA',
    loc: [ -84.378125, 33.746749 ],
    pop: 17683,
    state: 'GA'
  },
  {
    _id: '30313',
    city: 'ATLANTA',
    loc: [ -84.39352, 33.76825 ],
    pop: 8038,
    state: 'GA'
  },
  {
    _id: '30314',
    city: 'ATLANTA',
    loc: [ -84.425546, 33.756103 ],
    pop: 26649,
    state: 'GA'
  },
  {
    _id: '30315',
    city: 'ATLANTA',
    loc: [ -84.380771, 33.705062 ],
    pop: 41061,
    state: 'GA'
  },
  {
    _id: '30316',
    city: 'ATLANTA',
    loc: [ -84.333913, 33.721686 ],
    pop: 34668,
    state: 'GA'
  },
  {
    _id: '30317',
    city: 'ATLANTA',
    loc: [ -84.31685, 33.749788 ],
    pop: 16395,
    state: 'GA'
  },
  {
    _id: '30318',
    city: 'ATLANTA',
    loc: [ -84.445432, 33.786454 ],
    pop: 53894,
    state: 'GA'
  },
  {
    _id: '30319',
    city: 'ATLANTA',
    loc: [ -84.335091, 33.868728 ],
    pop: 32138,
    state: 'GA'
  },
  {
    _id: '30324',
    city: 'ATLANTA',
    loc: [ -84.354867, 33.820609 ],
    pop: 15044,
    state: 'GA'
  },
  {
    _id: '30326',
    city: 'ATLANTA',
    loc: [ -84.358232, 33.848168 ],
    pop: 125,
    state: 'GA'
  },
  {
    _id: '30327',
    city: 'ATLANTA',
    loc: [ -84.419966, 33.862723 ],
    pop: 18467,
    state: 'GA'
  },
  {
    _id: '30329',
    city: 'ATLANTA',
    loc: [ -84.321402, 33.823555 ],
    pop: 17013,
    state: 'GA'
  }
]
Type "it" for more
Atlas atlas-147xil-shard-0 [primary] population> it
[
  {
    _id: '30330',
    city: 'ATLANTA',
    loc: [ -84.434735, 33.70645 ],
    pop: 643,
    state: 'GA'
  },
  {
    _id: '30331',
    city: 'ATLANTA',
    loc: [ -84.520468, 33.72241 ],
    pop: 38185,
    state: 'GA'
  },
  {
    _id: '30334',
    city: 'ATLANTA',
    loc: [ -84.388188, 33.74715 ],
    pop: 0,
    state: 'GA'
  },
  {
    _id: '30336',
    city: 'ATLANTA',
    loc: [ -84.510028, 33.78534 ],
    pop: 1228,
    state: 'GA'
  },
  {
    _id: '30339',
    city: 'ATLANTA',
    loc: [ -84.462879, 33.87125 ],
    pop: 11158,
    state: 'GA'
  },
  {
    _id: '30342',
    city: 'ATLANTA',
    loc: [ -84.376091, 33.884245 ],
    pop: 19057,
    state: 'GA'
  },
  {
    _id: '30345',
    city: 'ATLANTA',
    loc: [ -84.286961, 33.851347 ],
    pop: 19825,
    state: 'GA'
  },
  {
    _id: '30346',
    city: 'ATLANTA',
    loc: [ -84.333354, 33.926717 ],
    pop: 18,
    state: 'GA'
  },
  {
    _id: '30349',
    city: 'ATLANTA',
    loc: [ -84.481258, 33.605331 ],
    pop: 48116,
    state: 'GA'
  },
  {
    _id: '30350',
    city: 'ATLANTA',
    loc: [ -84.341146, 33.979471 ],
    pop: 24573,
    state: 'GA'
  },
  {
    _id: '30360',
    city: 'ATLANTA',
    loc: [ -84.271645, 33.937772 ],
    pop: 16023,
    state: 'GA'
  }
]

2.
Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.aggregate([{
... $match:{$and:[{city:'ATLANTA'},{state:'GA'}]}}])
[
  {
    _id: '30303',
    city: 'ATLANTA',
    loc: [ -84.388846, 33.752504 ],
    pop: 1845,
    state: 'GA'
  },
  {
    _id: '30305',
    city: 'ATLANTA',
    loc: [ -84.385145, 33.831963 ],
    pop: 19122,
    state: 'GA'
  },
  {
    _id: '30306',
    city: 'ATLANTA',
    loc: [ -84.351418, 33.786027 ],
    pop: 20081,
    state: 'GA'
  },
  {
    _id: '30307',
    city: 'ATLANTA',
    loc: [ -84.335957, 33.769138 ],
    pop: 16330,
    state: 'GA'
  },
  {
    _id: '30308',
    city: 'ATLANTA',
    loc: [ -84.375744, 33.771839 ],
    pop: 8549,
    state: 'GA'
  },
  {
    _id: '30309',
    city: 'ATLANTA',
    loc: [ -84.388338, 33.798407 ],
    pop: 14766,
    state: 'GA'
  },
  {
    _id: '30310',
    city: 'ATLANTA',
    loc: [ -84.423173, 33.727849 ],
    pop: 34017,
    state: 'GA'
  },
  {
    _id: '30311',
    city: 'ATLANTA',
    loc: [ -84.470219, 33.722957 ],
    pop: 34880,
    state: 'GA'
  },
  {
    _id: '30312',
    city: 'ATLANTA',
    loc: [ -84.378125, 33.746749 ],
    pop: 17683,
    state: 'GA'
  },
  {
    _id: '30313',
    city: 'ATLANTA',
    loc: [ -84.39352, 33.76825 ],
    pop: 8038,
    state: 'GA'
  },
  {
    _id: '30314',
    city: 'ATLANTA',
    loc: [ -84.425546, 33.756103 ],
    pop: 26649,
    state: 'GA'
  },
  {
    _id: '30315',
    city: 'ATLANTA',
    loc: [ -84.380771, 33.705062 ],
    pop: 41061,
    state: 'GA'
  },
  {
    _id: '30316',
    city: 'ATLANTA',
    loc: [ -84.333913, 33.721686 ],
    pop: 34668,
    state: 'GA'
  },
  {
    _id: '30317',
    city: 'ATLANTA',
    loc: [ -84.31685, 33.749788 ],
    pop: 16395,
    state: 'GA'
  },
  {
    _id: '30318',
    city: 'ATLANTA',
    loc: [ -84.445432, 33.786454 ],
    pop: 53894,
    state: 'GA'
  },
  {
    _id: '30319',
    city: 'ATLANTA',
    loc: [ -84.335091, 33.868728 ],
    pop: 32138,
    state: 'GA'
  },
  {
    _id: '30324',
    city: 'ATLANTA',
    loc: [ -84.354867, 33.820609 ],
    pop: 15044,
    state: 'GA'
  },
  {
    _id: '30326',
    city: 'ATLANTA',
    loc: [ -84.358232, 33.848168 ],
    pop: 125,
    state: 'GA'
  },
  {
    _id: '30327',
    city: 'ATLANTA',
    loc: [ -84.419966, 33.862723 ],
    pop: 18467,
    state: 'GA'
  },
  {
    _id: '30329',
    city: 'ATLANTA',
    loc: [ -84.321402, 33.823555 ],
    pop: 17013,
    state: 'GA'
  }
]
Type "it" for more
Atlas atlas-147xil-shard-0 [primary] population> it
[
  {
    _id: '30330',
    city: 'ATLANTA',
    loc: [ -84.434735, 33.70645 ],
    pop: 643,
    state: 'GA'
  },
  {
    _id: '30331',
    city: 'ATLANTA',
    loc: [ -84.520468, 33.72241 ],
    pop: 38185,
    state: 'GA'
  },
  {
    _id: '30334',
    city: 'ATLANTA',
    loc: [ -84.388188, 33.74715 ],
    pop: 0,
    state: 'GA'
  },
  {
    _id: '30336',
    city: 'ATLANTA',
    loc: [ -84.510028, 33.78534 ],
    pop: 1228,
    state: 'GA'
  },
  {
    _id: '30339',
    city: 'ATLANTA',
    loc: [ -84.462879, 33.87125 ],
    pop: 11158,
    state: 'GA'
  },
  {
    _id: '30342',
    city: 'ATLANTA',
    loc: [ -84.376091, 33.884245 ],
    pop: 19057,
    state: 'GA'
  },
  {
    _id: '30345',
    city: 'ATLANTA',
    loc: [ -84.286961, 33.851347 ],
    pop: 19825,
    state: 'GA'
  },
  {
    _id: '30346',
    city: 'ATLANTA',
    loc: [ -84.333354, 33.926717 ],
    pop: 18,
    state: 'GA'
  },
  {
    _id: '30349',
    city: 'ATLANTA',
    loc: [ -84.481258, 33.605331 ],
    pop: 48116,
    state: 'GA'
  },
  {
    _id: '30350',
    city: 'ATLANTA',
    loc: [ -84.341146, 33.979471 ],
    pop: 24573,
    state: 'GA'
  },
  {
    _id: '30360',
    city: 'ATLANTA',
    loc: [ -84.271645, 33.937772 ],
    pop: 16023,
    state: 'GA'
  }
]
3.
Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.aggregate([{$match:{city:'ATLANTA'}},{$group:{_id:"$state"}},{$count:"Number of zipcodes"}])
[ { 'Number of zipcodes': 11 } ]

4.
Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.aggregate([{$match:{city:'ATLANTA'}},{$group:{_id:"$city",totalpop:{$sum:"$pop"}}}])
[ { _id: 'ATLANTA', totalpop: 630046 } ]
