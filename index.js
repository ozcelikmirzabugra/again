const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://ozcelikmirzabugra:QVtiSlvWAnPHM8tq@my-db.qwydh.mongodb.net/?retryWrites=true&w=majority&appName=my-db";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
  tlsAllowInvalidCertificates: true,
});
``;
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Successfully connected to the database!");
    const db = client.db("my-db");
    const collection = db.collection("datas");

    const document = await collection.findOne({});
    console.log("Sample data:", document);
  } catch (error) {
    console.error("Database connection error:", error);
  } finally {
    await client.close();
  }
}

connectToDatabase();
