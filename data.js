import { MongoClient } from 'mongodb';

const url = 'mongodb://0.0.0.0:27017'; 
const client = new MongoClient(url); 
const DbName = 'Students';

const DBConnection = async () => {

    let result = await client.connect(); let db = result.db(DbName);
    return db.collection('infos');

}

export default DBConnection;
