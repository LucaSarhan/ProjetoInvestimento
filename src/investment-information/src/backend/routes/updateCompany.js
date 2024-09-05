import express from 'express';
const router = express.Router();

// Updating a company's information
router.put('/api/companies/:id', async (req, res) => {
    const { id } = req.params;
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
        UPDATE company 
        SET 
          company_name = $1, 
          intrinsic_value = $2, 
          price_earnings_ratio = $3, 
          dividend_yield = $4, 
          dividend_history = $5, 
          profit = $6, 
          total_revenue = $7, 
          total_assets = $8, 
          total_liabilities = $9 
        WHERE id = $10 
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
        id, // This is the ID from the request URL
      ];
  
      const result = await pool.query(query, values);
      res.status(200).json(result.rows[0]); // Return the updated company
    } catch (error) {
      console.error('Error updating company:', error);
      res.status(500).json({ error: 'Failed to update company' });
    }
});
export default router;