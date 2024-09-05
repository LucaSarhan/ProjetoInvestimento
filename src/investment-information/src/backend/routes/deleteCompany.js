import express from 'express';
const router = express.Router();

// Deleting a company
router.delete('/api/companies/:id', async (req, res) => {
    try {
      await Company.findByIdAndDelete(req.params.id); // Delete the company by ID
      res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting company' });
    }
});
export default router;