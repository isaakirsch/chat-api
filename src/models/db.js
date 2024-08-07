const {MongoClient} = require("mongodb"); 

let singleton;

async function connect(){
    if (singleton) return singleton;

    const client = new MongoClient(process.env.DB_HOST);
    await client.connect();

    singleton = client.db(process.env.DB);
    return singleton;
}

let findAll = async (collection)=>{
    console.log(collection);
    const db = await connect();
    return await db.collection(collection).find().toArray();
}

module.exports = {findAll}