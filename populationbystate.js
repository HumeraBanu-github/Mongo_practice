                                      Population By State

1.
Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:"$city",totalpop:{$sum:"$pop"}}}])
[
  { _id: 'GRAMMER', totalpop: 412 },
  { _id: 'JENKINSVILLE', totalpop: 809 },
  { _id: 'NARROWSBURG', totalpop: 1576 },
  { _id: 'RENFREW', totalpop: 3180 },
  { _id: 'EAST GRANBY', totalpop: 4301 },
  { _id: 'MEAD VALLEY', totalpop: 31870 },
  { _id: 'OIL CENTER', totalpop: 0 },
  { _id: 'ELLENVILLE', totalpop: 6902 },
  { _id: 'VICCO', totalpop: 3072 },
  { _id: 'WINFRED', totalpop: 424 },
  { _id: 'MARSTONS MILLS', totalpop: 5777 },
  { _id: 'WYNNEWOOD', totalpop: 12047 },
  { _id: 'HANSVILLE', totalpop: 1256 },
  { _id: 'PENN VALLEY', totalpop: 7603 },
  { _id: 'AGENDA', totalpop: 198 },
  { _id: 'DEMOREST', totalpop: 3521 },
  { _id: 'CARMI', totalpop: 8234 },
  { _id: 'JULIAETTA', totalpop: 1014 },
  { _id: 'LEW BEACH', totalpop: 126 },
  { _id: 'SPENCER', totalpop: 68126 }
]
Type "it" for more
Atlas atlas-147xil-shard-0 [primary] population> it
[
  { _id: 'NEWMAN GROVE', totalpop: 1482 },
  { _id: 'BROOMES ISLAND', totalpop: 404 },
  { _id: 'STURBRIDGE', totalpop: 7001 },
  { _id: 'RICHTON', totalpop: 7378 },
  { _id: 'MELVINDALE', totalpop: 11226 },
  { _id: 'BULLFROG', totalpop: 125 },
  { _id: 'BROOMALL', totalpop: 20432 },
  { _id: 'OAKBORO', totalpop: 6336 },
  { _id: 'DUNNELL', totalpop: 452 },
  { _id: 'EAST HAMPSTEAD', totalpop: 1880 },
  { _id: 'BOLES', totalpop: 687 },
  { _id: 'MELROSE', totalpop: 56336 },
  { _id: 'SHRUB OAK', totalpop: 2103 },
  { _id: 'WILLOWS', totalpop: 8034 },
  { _id: 'HUDSON', totalpop: 159587 },
  { _id: 'RICH SQUARE', totalpop: 2621 },
  { _id: 'NORTH SYRACUSE', totalpop: 22829 },
  { _id: 'RUSSIAVILLE', totalpop: 1724 },
  { _id: 'FACTORYVILLE', totalpop: 4402 },
  { _id: 'CALLAWAY', totalpop: 12925 }
]
Type "it" for more
Atlas atlas-147xil-shard-0 [primary] population>

2.
Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.aggregate([{$sort:{pop:-1}}])
[
  {
    _id: '60623',
    city: 'CHICAGO',
    loc: [ -87.7157, 41.849015 ],
    pop: 112047,
    state: 'IL'
  },
  {
    _id: '11226',
    city: 'BROOKLYN',
    loc: [ -73.956985, 40.646694 ],
    pop: 111396,
    state: 'NY'
  },
  {
    _id: '10021',
    city: 'NEW YORK',
    loc: [ -73.958805, 40.768476 ],
    pop: 106564,
    state: 'NY'
  },
  {
    _id: '10025',
    city: 'NEW YORK',
    loc: [ -73.968312, 40.797466 ],
    pop: 100027,
    state: 'NY'
  },
  {
    _id: '90201',
    city: 'BELL GARDENS',
    loc: [ -118.17205, 33.969177 ],
    pop: 99568,
    state: 'CA'
  },
  {
    _id: '60617',
    city: 'CHICAGO',
    loc: [ -87.556012, 41.725743 ],
    pop: 98612,
    state: 'IL'
  },
  {
    _id: '90011',
    city: 'LOS ANGELES',
    loc: [ -118.258189, 34.007856 ],
    pop: 96074,
    state: 'CA'
  },
  {
    _id: '60647',
    city: 'CHICAGO',
    loc: [ -87.704322, 41.920903 ],
    pop: 95971,
    state: 'IL'
  },
  {
    _id: '60628',
    city: 'CHICAGO',
    loc: [ -87.624277, 41.693443 ],
    pop: 94317,
    state: 'IL'
  },
  {
    _id: '90650',
    city: 'NORWALK',
    loc: [ -118.081767, 33.90564 ],
    pop: 94188,
    state: 'CA'
  },
  {
    _id: '60620',
    city: 'CHICAGO',
    loc: [ -87.654251, 41.741119 ],
    pop: 92005,
    state: 'IL'
  },
  {
    _id: '60629',
    city: 'CHICAGO',
    loc: [ -87.706936, 41.778149 ],
    pop: 91814,
    state: 'IL'
  },
  {
    _id: '60609',
    city: 'CHICAGO',
    loc: [ -87.653279, 41.809721 ],
    pop: 89762,
    state: 'IL'
  },
  {
    _id: '60618',
    city: 'CHICAGO',
    loc: [ -87.704214, 41.946401 ],
    pop: 88377,
    state: 'IL'
  },
  {
    _id: '11373',
    city: 'JACKSON HEIGHTS',
    loc: [ -73.878551, 40.740388 ],
    pop: 88241,
    state: 'NY'
  },
  {
    _id: '91331',
    city: 'ARLETA',
    loc: [ -118.420692, 34.258081 ],
    pop: 88114,
    state: 'CA'
  },
  {
    _id: '11212',
    city: 'BROOKLYN',
    loc: [ -73.914483, 40.662474 ],
    pop: 87079,
    state: 'NY'
  },
  {
    _id: '90280',
    city: 'SOUTH GATE',
    loc: [ -118.201349, 33.94617 ],
    pop: 87026,
    state: 'CA'
  },
  {
    _id: '11385',
    city: 'RIDGEWOOD',
    loc: [ -73.896122, 40.703613 ],
    pop: 85732,
    state: 'NY'
  },
  {
    _id: '10467',
    city: 'BRONX',
    loc: [ -73.871242, 40.873671 ],
    pop: 85710,
    state: 'NY'
  }
]
Type "it" for more
Atlas atlas-147xil-shard-0 [primary] population>

3.
Atlas atlas-147xil-shard-0 [primary] population> db.zipcodes.aggregate([{$group:{_id:'$state',totalpop:{$sum:'$pop'}}},{$sort:{totalpop:-1}},{$limit:3}])
[
  { _id: 'CA', totalpop: 29754890 },
  { _id: 'NY', totalpop: 17990402 },
  { _id: 'TX', totalpop: 16984601 }
]