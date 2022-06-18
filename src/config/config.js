import dotenv from 'dotenv';
dotenv.config();

const environment = process.env.NODE_ENV || 'development';
console.log(`Server environment is ${environment}.`);

const SERVER = {
  HOST: process.env.HOST || '0.0.0.0',
  PORT: process.env.PORT || '8080',
  HOST_SECURE: process.env.HOST_SECURE || '0.0.0.0',
  PORT_SECURE: process.env.PORT_SECURE || '8433',
};

const DATABASE = {
  USER: process.env.DATABASE_USER,
  PASS: process.env.DATABASE_PASS,
  CLUSTER_SHARD: process.env.DATABASE_CLUSTER_SHARD
};

const FILES = {
  MAX_SIZE: 15 * 1024 * 1024
};

export {
  SERVER,
  DATABASE,
  FILES
};
