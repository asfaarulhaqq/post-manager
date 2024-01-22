import pgPromise from 'pg-promise';

const pgp = pgPromise();
const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const db = pgp(connectionString);

export default db;
