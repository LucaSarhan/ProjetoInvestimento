import express from 'express';
const router = express.Router();
import pkg from 'pg';

const { Pool } = pkg; // Destructure Pool from the default import

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Deleting a company
router.delete('/companies/:id', async (req, res) => {
    try {
      await Company.findByIdAndDelete(req.params.id); // Delete the company by ID
      res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting company' });
    }
});
export default router;