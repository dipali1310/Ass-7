import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
    user: "postgres",
    database: "demo_db",
    password: "dipali123",
    host: "localhost",
    port: 5432,
});