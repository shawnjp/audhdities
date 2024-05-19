import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = 'yourDatabaseName';

async function connectToDatabase() {
  await client.connect();
  console.log("Connected successfully to MongoDB");
  return client.db(dbName);
}

export async function insertDocument(collectionName, document) {
  const db = await connectToDatabase();
  const collection = db.collection(collectionName);
  const result = await collection.insertOne(document);
  return result;
}