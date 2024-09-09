import express from 'express';
import { pool } from '../index.js';  // Import the pool directly

const router = express.Router();

// Get all companies
router.get('/companies', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM company');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
});

export default router;