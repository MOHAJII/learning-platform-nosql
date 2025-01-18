const db = require('../config/db')

async function cacheData(key, data, ttl = 3600) {
  try {
    const redisClient = await db.connectRedis();
    await redisClient.setEx(
      key, 
      ttl, 
      JSON.stringify(data)
    );
  } catch (error) {
    console.error("Redis cache error ", error);
    throw error;
  }
}

async function getCacheData(key) {
  try {
    const redisClient = await db.connectRedis();
    const data = await redisClient.get(key);

    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error('Redis get error:', error);
    throw error;
  }
  
}

const deleteKey = async (key) => {
  try {
    const redisClient = await db.getRedisClient();
    await redisClient.del(key);
  } catch (error) {
    
  } 
}

module.exports = {
  cacheData,
  getCacheData,
  deleteKey
};
