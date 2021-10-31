                                      RelationShip
                                    
                                    USERS COLLECTION
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.users.insertMany([{username:'GoodGuyGrey',first_name:'Good Guy' ,last_name:'Grey'},{username:'ScumbagSteve' , Full_name :[{first:'Scumbag'},{last:'Steve'}]}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("617e8bd7c3d240a5d7d8a843"),
    '1': ObjectId("617e8bd7c3d240a5d7d8a844")
  }
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.users.find().pretty()
[
  {
    _id: ObjectId("617e8bd7c3d240a5d7d8a843"),
    username: 'GoodGuyGrey',
    first_name: 'Good Guy',
    last_name: 'Grey'
  },
  {
    _id: ObjectId("617e8bd7c3d240a5d7d8a844"),
    username: 'ScumbagSteve',
    Full_name: [ { first: 'Scumbag' }, { last: 'Steve' } ]
  }
] 

                                       POSTS COLLECTION

Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.posts.insertOne({username: ObjectId("617e8bd7c3d240a5d7d8a843"),title: 'Passes out at party',body:'wakes up early and cleans house'})
{
  acknowledged: true,
  insertedId: ObjectId("617e93e5c3d240a5d7d8a845")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.posts.insertOne({username: ObjectId("617e8bd7c3d240a5d7d8a843"),title: 'Steals your identity',body:'Raises your credit score'})
{
  acknowledged: true,
  insertedId: ObjectId("617e96c6c3d240a5d7d8a846")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.posts.insertOne({username: ObjectId("617e8bd7c3d240a5d7d8a843"),title: 'Reports a bug in your code',body:'Sends you a Pull request'})
{
  acknowledged: true,
  insertedId: ObjectId("617e9704c3d240a5d7d8a847")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.posts.insertOne({username: 'ScumbagSteve',title:'Borrows something', body:'sells it'})
{
  acknowledged: true,
  insertedId: ObjectId("617e9755c3d240a5d7d8a848")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.posts.insertOne({username: 'ScumbagSteve',title:'Borrows everything', body:'The end'})
{
  acknowledged: true,
  insertedId: ObjectId("617e977ac3d240a5d7d8a849")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.posts.insertOne({username: 'ScumbagSteve',title:'Forks your repo on github', body:'Set to private'})
{
  acknowledged: true,
  insertedId: ObjectId("617e97afc3d240a5d7d8a84a")
}
   
                                   COMMENTS COLLECTION
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.comments.insertOne({username:'GoodGuyGrey',comment:'Hope you got a good deal!', post:ObjectId("617e977ac3d240a5d7d8a849")})
{
  acknowledged: true,
  insertedId: ObjectId("617e9b17c3d240a5d7d8a84c")
}

Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.comments.insertOne({username:'GoodGuyGrey',comment:'Hope you got a good deal!', post:ObjectId("617e977ac3d240a5d7d8a849")})
{
  acknowledged: true,
  insertedId: ObjectId("617e9b17c3d240a5d7d8a84c")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.comments.update({_id:ObjectId("617e9b17c3d240a5d7d8a84c")},{$set$set:{comment:"what's mine is yours"}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.comments.insertOne({username:'GoodGuyGrey',comment:"Don't violate the licensing agreement!",post: ObjectId("617e97afc3d240a5d7d8a84a")})
{
  acknowledged: true,
  insertedId: ObjectId("617e9e87c3d240a5d7d8a84d")
}
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.comments.insertOne({username:'ScumbagSteve',comment:'Denied your PR cause Ifound a hack',post: ObjectId("617e9704c3d240a5d7d8a847")})
{
  acknowledged: true,
  insertedId: ObjectId("617e9f49c3d240a5d7d8a84e")
}

     Queries on Realtionship
1. Find all users
     Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.users.find()
[
  {
    _id: ObjectId("617e8bd7c3d240a5d7d8a843"),
    username: 'GoodGuyGrey',
    first_name: 'Good Guy',
    last_name: 'Grey'
  },
  {
    _id: ObjectId("617e8bd7c3d240a5d7d8a844"),
    username: 'ScumbagSteve',
    Full_name: [ { first: 'Scumbag' }, { last: 'Steve' } ]
  }
]
 
2. Find all posts
    Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.posts.find()
[
  {
    _id: ObjectId("617e93e5c3d240a5d7d8a845"),
    username: ObjectId("617e8bd7c3d240a5d7d8a843"),
    title: 'Passes out at party',
    body: 'wakes up early and cleans house'
  },
  {
    _id: ObjectId("617e96c6c3d240a5d7d8a846"),
    username: ObjectId("617e8bd7c3d240a5d7d8a843"),
    title: 'Steals your identity',
    body: 'Raises your credit score'
  },
  {
    _id: ObjectId("617e9704c3d240a5d7d8a847"),
    username: ObjectId("617e8bd7c3d240a5d7d8a843"),
    title: 'Reports a bug in your code',
    body: 'Sends you a Pull request'
  },
  {
    _id: ObjectId("617e9755c3d240a5d7d8a848"),
    username: 'ScumbagSteve',
    title: 'Borrows something',
    body: 'sells it'
  },
  {
    _id: ObjectId("617e977ac3d240a5d7d8a849"),
    username: 'ScumbagSteve',
    title: 'Borrows everything',
    body: 'The end'
  },
  {
    _id: ObjectId("617e97afc3d240a5d7d8a84a"),
    username: 'ScumbagSteve',
    title: 'Forks your repo on github',
    body: 'Set to private'
  }
]

3.find all posts that was authored by "GoodGuyGrey"
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.posts.find( {username: ObjectId("617e8bd7c3d240a5d7d8a843")})
[
  {
    _id: ObjectId("617e93e5c3d240a5d7d8a845"),
    username: ObjectId("617e8bd7c3d240a5d7d8a843"),
    title: 'Passes out at party',
    body: 'wakes up early and cleans house'
  },
  {
    _id: ObjectId("617e96c6c3d240a5d7d8a846"),
    username: ObjectId("617e8bd7c3d240a5d7d8a843"),
    title: 'Steals your identity',
    body: 'Raises your credit score'
  },
  {
    _id: ObjectId("617e9704c3d240a5d7d8a847"),
    username: ObjectId("617e8bd7c3d240a5d7d8a843"),
    title: 'Reports a bug in your code',
    body: 'Sends you a Pull request'
  }
]

4. find all the posts authored by Scumbag steve
  Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.posts.find({username: 'ScumbagSteve'})
[
  {
    _id: ObjectId("617e9755c3d240a5d7d8a848"),
    username: 'ScumbagSteve',
    title: 'Borrows something',
    body: 'sells it'
  },
  {
    _id: ObjectId("617e977ac3d240a5d7d8a849"),
    username: 'ScumbagSteve',
    title: 'Borrows everything',
    body: 'The end'
  },
  {
    _id: ObjectId("617e97afc3d240a5d7d8a84a"),
    username: 'ScumbagSteve',
    title: 'Forks your repo on github',
    body: 'Set to private'
  }
]
 5. find all comments
    Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.comments.find()
[
  {
    _id: ObjectId("617e99bbc3d240a5d7d8a84b"),
    username: 'GoodGuyGrey',
    comment: 'Hope you got a good deal!',
    post: ObjectId("617e9755c3d240a5d7d8a848")
  },
  {
    _id: ObjectId("617e9b17c3d240a5d7d8a84c"),
    username: 'GoodGuyGrey',
    comment: "what's mine is yours",
    post: ObjectId("617e977ac3d240a5d7d8a849")
  },
  {
    _id: ObjectId("617e9e87c3d240a5d7d8a84d"),
    username: 'GoodGuyGrey',
    comment: "Don't violate the licensing agreement!",
    post: ObjectId("617e97afc3d240a5d7d8a84a")
  },
  {
    _id: ObjectId("617e9f49c3d240a5d7d8a84e"),
    username: 'ScumbagSteve',
    comment: 'Denied your PR cause Ifound a hack',
    post: ObjectId("617e9704c3d240a5d7d8a847")
  }
]
 
6. find all comments that was authored by goodGuyGrey
    Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.comments.find({username: 'GoodGuyGrey'})
[
  {
    _id: ObjectId("617e99bbc3d240a5d7d8a84b"),
    username: 'GoodGuyGrey',
    comment: 'Hope you got a good deal!',
    post: ObjectId("617e9755c3d240a5d7d8a848")
  },
  {
    _id: ObjectId("617e9b17c3d240a5d7d8a84c"),
    username: 'GoodGuyGrey',
    comment: "what's mine is yours",
    post: ObjectId("617e977ac3d240a5d7d8a849")
  },
  {
    _id: ObjectId("617e9e87c3d240a5d7d8a84d"),
    username: 'GoodGuyGrey',
    comment: "Don't violate the licensing agreement!",
    post: ObjectId("617e97afc3d240a5d7d8a84a")
  }
]
 7.find all the comments that was authored by ScumbagSteve
   Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.comments.find({username: 'ScumbagSteve'})
[
  {
    _id: ObjectId("617e9f49c3d240a5d7d8a84e"),
    username: 'ScumbagSteve',
    comment: 'Denied your PR cause Ifound a hack',
    post: ObjectId("617e9704c3d240a5d7d8a847")
  }
]

8.Find all comments belonging to the posts "report a bug in your code"
  
Atlas atlas-147xil-shard-0 [primary] mongo_practice> db.comments.find({post:ObjectId("617e9704c3d240a5d7d8a847")})
[
  {
    _id: ObjectId("617e9f49c3d240a5d7d8a84e"),
    username: 'ScumbagSteve',
    comment: 'Denied your PR cause Ifound a hack',
    post: ObjectId("617e9704c3d240a5d7d8a847")
  }
]