const { MongoClient, ObjectId } = require('mongodb');

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID
const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';



MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').deleteMany({ 
    //     age:27 
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })

    db.collection('description').deleteOne({
        description: "Repair car"
    }).then((success) =>{
        console.log(success)
    }).catch((error) => {
        console.log(error)
    })

  })

