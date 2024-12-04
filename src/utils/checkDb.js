import { query } from './db';

const checkConnection = async () => {
  try {
    await query('SELECT NOW()');
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};

export default checkConnection; 