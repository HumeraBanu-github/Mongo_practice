Query.11
Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{cuisine:{$ne:'American '},"grades.score":{$gt:70},"address.coord.0":{$lt:-65.754168}}},{$project:{name:1,cuisine:1,"address.coord":1}}])

query.12
Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{cuisine:{$ne:'American '},"grades.score":{$gt:70},"address.coord.1":{$lt:-65.754168}}},{$project:{name:1,cuisine:1,"address.coord":1}}])
 
query.13

Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{cuisine:{$ne:'American '},"grades.grade":"A",borough:{$ne:'Brooklyn'}}},{$project:{name:1,cuisine:1,"grades.grade":1,borough:1}}])

query14
filter={
    'name': re.compile(r"^Wil")
}
sort=list({
    'restaurant_id': 1, 
    'name': 1, 
    'borough': 1, 
    'cuisine': 1
}.items())

query 15
{name:/ces$/}

query 16
filter={
    'name': re.compile(r".*Reg.*")
}
sort=list({
    'restaurant_id': 1, 
    'name': 1, 
    'borough': 1, 
    'cuisine': 1
}.items())

query17
Atlas atlas-147xil-shard-0 [primary] restaurants> db.getCollection('addresses').find({$and:[{borough:'Bronx'},{cuisine:{'$in':['American ','Chinese']}}]})



query 18

filter={
    'borough': {
        '$in': [
            'Staten Island', 'Queens', 'Bronxor Brooklyn'
        ]
    }
}
project={
    'restaurant_id': 1, 
    'name': 1, 
    'borough': 1, 
    'cuisine': 1
}

result = client['restaurants']['addresses'].find(
  filter=filter,
  projection=project
)

query 19

filter={
    'borough': {
        '$nin': [
            'Staten Island', 'Queens', 'Bronxor Brooklyn'
        ]
    }
}
project={
    'restaurant_id': 1, 
    'name': 1, 
    'borough': 1, 
    'cuisine': 1
}

result = client['restaurants']['addresses'].find(
  filter=filter,
  projection=project
)

query20
Atlas atlas-147xil-shard-0 [primary] restaurants> db.addresses.aggregate([{$match:{"grades.score":{$not:{$gt:10}}}},
{$project:{retaurant_id:1,name:1,borough:1,cuisine:1}}])

query21
{$or:[{cuisine:{'$nin':['American ','Chinese']}},{name:/^Wil/}]}
project={
    'restaurant_id': 1, 
    'name': 1, 
    'borough': 1, 
    'cuisine': 1
}
query 22
{$and:[{"grades.grade":'A'},{"grades.score":11},{"grades.date":'2014-02-25T00:00:00.000+00:00'}]}
project={
    'restaurant_id': 1, 
    'name': 1, 
    'grades': 1
}
query 23
{$and:[{"grades.grade":'A'},{"grades.score":9},{"grades.date":'2014-02-25T00:00:00.000+00:00'}]}
project={
    'restaurant_id': 1, 
    'name': 1, 
    'grades': 1
}
query 24
filter={
    'address.coord.1': {
        '$gt': 42, 
        '$lte': 52
    }
}
sort=list({
    'restaurant_id': 1, 
    'name': 1, 
    'address.coord': 1
}.items())

query25
filter={}
sort=list({
    'name': 1
}.items())


query 26
filter={}
sort=list({
    'name': -1
}.items())

query27
filter={}
sort=list({
    'cuisine': 1, 
    'borough': -1
}.items())

query 28
{"address.street":{$exists:false}}
this will give no result as all address field have street

query29
{"address.coord":{$type:1}}

query30
{"grades.score":{$mod:[7,0]}}

query 31
filter={
    'name':"/.*mon.*/"}
sort=list({
    'address.coord.1': 1, 
    'address.coord.0': 1, 
    'name': 1, 
    'borough': 1, 
    'cuisine': 1
}.items())
query 32
filter={
    'name': "/^Mad/"
}
sort=list({
    'address.coord.1': 1, 
    'address.coord.0': 1, 
    'name': 1, 
    'borough': 1, 
    'cuisine': 1
}.items())