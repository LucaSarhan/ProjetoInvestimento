// index.js

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// POST route to handle company data
app.post('/api/company', async (req, res) => {
    const {
        companyName,
        intrinsicValue,
        priceEarningsRatio,
        dividendYield,
        dividendHistory,
        profit,
        totalRevenue,
        totalAssets,
        totalLiabilities,
    } = req.body;

    try {
        const query = `
            INSERT INTO company (
                company_name,
                intrinsic_value,
                price_earnings_ratio,
                dividend_yield,
                dividend_history,
                profit,
                total_revenue,
                total_assets,
                total_liabilities
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *;
        `;
        
        const values = [
            companyName,
            intrinsicValue,
            priceEarningsRatio,
            dividendYield,
            dividendHistory,
            profit,
            totalRevenue,
            totalAssets,
            totalLiabilities,
        ];

        const result = await pool.query(query, values);
        res.status(201).json({ message: 'Company data saved successfully!', company: result.rows[0] });
    } catch (error) {
        console.error('Error saving company data:', error);
        res.status(500).json({ error: 'Failed to save company data' });
    }
});

// Get all companies
app.get('/api/companies', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM company');
        res.status(200).json(result.rows);  // Send all rows as JSON
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ error: 'Failed to fetch companies' });
    }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
