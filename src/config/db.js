const { MongoClient } = require("mongodb");
const redis = require("redis");
const config = require("./env");

let mongoClient, redisClient, db;

async function connectMongo() {
  try {
    mongoClient = new MongoClient(config.mongodb.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10
    });

    await mongoClient.connect();
    db = mongoClient.db(config.mongodb.dbName);
    console.log("Connected to MongdDB");
    return db;
  }catch(error) {
    console.error('MongoDB connection error:', error);

    // Retry
    await new Promise(resolve => setTimeout(resolve, 5000));
    return connectMongo();    
  }
}

async function connectRedis() {
  try {
    redisClient = redis.createClient({
      url: config.redis.uri
    });

    await redisClient.connect();
    console.log("Connected to redis");
    return redisClient;    
  } catch (error) {
    console.error('Redis connection error:', error);
    // Retry
    await new Promise(resolve => setTimeout(resolve, 5000));
    return connectRedis();
  }
}

module.exports = {
  connectMongo,
  connectRedis,
  closeConnections,
  getDb: () => db,
  getRedisClient: () => redisClient
};


