import { useState, useEffect } from 'react';
import { infoCards, nftCards } from '../data/cards';

export const useCards = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState({ infoCards: [], nftCards: [] });

  useEffect(() => {
    const fetchCards = async () => {
      try {
        // Имитация загрузки данных
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setCards({
          infoCards,
          nftCards
        });
        setLoading(false);
      } catch (err) {
        setError('Ошибка при загрузке данных');
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  return {
    ...cards,
    loading,
    error
  };
}; 