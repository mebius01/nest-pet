export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  prefix: process.env.PREFIX || 'api',
  database: {
    postgres: {
      type: process.env.DB_TYPE || 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      database: process.env.DB_NAME || 'talker_local',
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASSWORD || '1234',
    },
  },
});
