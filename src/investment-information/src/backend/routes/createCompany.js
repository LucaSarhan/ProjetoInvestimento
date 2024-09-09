import express from 'express';
const router = express.Router();
import pkg from 'pg';

const { Pool } = pkg; // Destructure Pool from the default import

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// POST route to handle company data
router.post('/company', async (req, res) => {
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
export default router;