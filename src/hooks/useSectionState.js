import { useState, useEffect } from 'react';

const STORAGE_KEY = 'section_states';

export const useSectionState = (sectionId) => {
  // Загружаем начальное состояние из localStorage
  const getInitialState = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const states = JSON.parse(stored);
        return states[sectionId] || false;
      }
    } catch (error) {
      console.error('Error loading section state:', error);
    }
    return false;
  };

  const [isOpen, setIsOpen] = useState(getInitialState);

  // Сохраняем состояние в localStorage при изменении
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const states = stored ? JSON.parse(stored) : {};
      states[sectionId] = isOpen;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
    } catch (error) {
      console.error('Error saving section state:', error);
    }
  }, [isOpen, sectionId]);

  return [isOpen, setIsOpen];
}; 