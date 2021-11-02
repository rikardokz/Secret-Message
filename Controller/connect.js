const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://<user>:<pass>@cluster0.yy9fl.mongodb.net/Cluster0?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = "messagesDB";
/*
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
/*
Replace <password> with the password for the usertestes user. 
Replace myFirstDatabase with the name of the database that connections will use by default. 
Ensure any option params are URL encoded.
*/

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);

        const col = db.collection("messages");
        const find = await col.findOne({});
        
        console.log(find.hardMessages[0]);

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);
