const db = require('../config/db')

async function cacheData(key, data, ttl = 3600) {
  try {
    const redisClient = db.getRedisClient();
    await redisClient.setEx(
      key, 
      ttl, 
      typeof data == 'string' ? data : JSON.stringify(data)
    );
  } catch (error) {
    console.error("Redis cache error ", error);
    throw error;
    
  }
}

async function getCacheData(key) {
  try {
    const redisClient = db.getRedisClient();
    const data = redisClient.get(key);
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.error('Redis get error:', error);
    throw error;
  }
  
}

module.exports = {
  cacheData,
  getCacheData
};
