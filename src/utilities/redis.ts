import { redisConfig } from 'config/config.redis';
import { default as Redis } from 'ioredis';

export const redis = new Redis({ ...redisConfig });
