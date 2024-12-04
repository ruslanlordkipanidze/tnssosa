-- Добавляем новые категории в перечисление
ALTER TYPE card_category ADD VALUE IF NOT EXISTS 'Welcome to TON';
ALTER TYPE card_category ADD VALUE IF NOT EXISTS 'Postmarks: The Jaegers';

-- Добавляем индексы для оптимизации запросов
CREATE INDEX IF NOT EXISTS idx_info_cards_category ON info_cards(category);
CREATE INDEX IF NOT EXISTS idx_nft_cards_category ON nft_cards(category); 