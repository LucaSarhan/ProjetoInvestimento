import express from 'express';
const router = express.Router();

// Get all companies
router.get('/api/companies', async (res) => {
    try {
        const result = await pool.query('SELECT * FROM company');
        res.status(200).json(result.rows);  // Send all rows as JSON
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ error: 'Failed to fetch companies' });
    }
});
export default router;