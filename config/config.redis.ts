export const redisConfig = {
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT) || 6379,
  url: process.env.REDIS_URL || 'redis://localhost:6379'
};
