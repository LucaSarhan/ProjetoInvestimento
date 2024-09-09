import express from 'express';
import pkg from 'pg';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import createCompanyRoute from './routes/createCompany.js';
import getCompaniesRoute from './routes/getCompany.js';
import updateCompanyRoute from './routes/updateCompany.js';
import deleteCompanyRoute from './routes/deleteCompany.js';

dotenv.config();

const { Pool } = pkg; // Destructure Pool from the default import

const app = express();

// PostgreSQL connection pool
export const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api', createCompanyRoute);
app.use('/api', getCompaniesRoute);
app.use('/api', updateCompanyRoute);
app.use('/api', deleteCompanyRoute);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});