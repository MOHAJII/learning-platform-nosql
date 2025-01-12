const { ObjectId } = require("mongodb");
const db = require("../config/db");

async function findOneById(collectionName, id) {
  try {
    const database = db.getDb();
    return await database.collection(collectionName).findOne({
      _id: new ObjectId(id),
    });
  } catch (error) {
    console.error("MongoDB find error: ", error);
    throw error;
  }
}

async function insertOne(collectionName, data) {
  try {
    const database = db.getDb();
    return await database.collection(collectionName).insertOne(data);
  } catch (error) {
    console.error("MongdoDB insert error: ", error);
    throw error;
  }
}

async function findMany(collectionName, query = {}, options = {}) {
  try {
    const database = db.getDb();
    return await database.collection(collectionName).find(query, options).toArray();
  } catch (error) {
    console.error("MongoDB find error: ", error);
    throw error;
  }
}

// Export des services
module.exports = {
  findOneById, 
  insertOne, 
  findMany
};
