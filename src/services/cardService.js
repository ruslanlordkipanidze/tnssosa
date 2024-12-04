import { query } from '../utils/db';

export const getInfoCards = async (category = null) => {
  try {
    const query = `
      SELECT 
        c.*,
        array_remove(array_agg(f.feature_text), NULL) as features
      FROM info_cards c
      LEFT JOIN card_features f ON f.card_id = c.id
      ${category ? 'WHERE c.category = $1' : ''}
      GROUP BY c.id
    `;
    
    const params = category ? [category] : [];
    return await query(query, params);
  } catch (error) {
    console.error('Error fetching info cards:', error);
    throw new Error('Failed to fetch info cards');
  }
};

export const getNftCards = async (category = null) => {
  try {
    const query = 'SELECT * FROM nft_cards WHERE ($1::text IS NULL OR category = $1)';
    return await query(query, [category]);
  } catch (error) {
    console.error('Error fetching NFT cards:', error);
    throw new Error('Failed to fetch NFT cards');
  }
}; 