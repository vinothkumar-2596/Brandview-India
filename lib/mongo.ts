import { MongoClient } from "mongodb";

const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;

if (!mongoUrl) {
  throw new Error("MONGO_URL is not set");
}

if (!dbName) {
  throw new Error("DB_NAME is not set");
}

const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

let clientPromise: Promise<MongoClient>;

if (!globalForMongo._mongoClientPromise) {
  const client = new MongoClient(mongoUrl);
  globalForMongo._mongoClientPromise = client.connect();
}

clientPromise = globalForMongo._mongoClientPromise;

export async function getDb() {
  const client = await clientPromise;
  return client.db(dbName);
}
