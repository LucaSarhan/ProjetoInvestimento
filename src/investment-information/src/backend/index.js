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
app.get('/api/companies', async (res) => {
    try {
        const result = await pool.query('SELECT * FROM company');
        res.status(200).json(result.rows);  // Send all rows as JSON
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ error: 'Failed to fetch companies' });
    }
});

// Updating company information
app.put('/api/companies/:id', async (req, res) => {
    try {
      const updatedCompany = await Company.findByIdAndUpdate(
        req.params.id,
        { $set: req.body }, // Update the fields sent in the request body
        { new: true }
      );
      res.status(200).json(updatedCompany); // Send updated data as response
    } catch (error) {
      res.status(500).json({ message: 'Error updating company' });
    }
  });

// Deleting a company
app.delete('/api/companies/:id', async (req, res) => {
    try {
      await Company.findByIdAndDelete(req.params.id); // Delete the company by ID
      res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting company' });
    }
  });
  

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
