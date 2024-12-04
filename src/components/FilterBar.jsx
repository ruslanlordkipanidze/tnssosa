import styled from 'styled-components';

const FilterContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CategoryButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  padding: 0.5rem;
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  color: #000;
  padding: 0.8em 1.5em;
  border-radius: 8px;
  border: 2.5px solid #000;
  font-weight: 800;
  font-family: 'Ubuntu Mono', monospace;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1em;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SubCategories = styled.div`
  display: ${props => props.$show ? 'flex' : 'none'};
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
  padding: 1rem;
`;

const categoryNames = {
  'main': 'Главная',
  'DeFi Projects': 'DeFi Проекты',
  'DeepDive': 'Глубокое погружение',
  'SBTcampaign': 'SBT Кампании',
  'NFTMarkets': 'NFT Маркеты',
  'Social': 'Социальное',
  'Postmarks: The Jaegers': 'Postmarks: The Jaegers',
  'Welcome to TON': 'Welcome to TON'
};

const FilterBar = ({ 
  categories, 
  activeCategory, 
  onCategoryChange,
  showNftSubCategories,
  onNftSubCategoryChange,
  activeNftSubCategory 
}) => {
  const nftSubCategories = ['Postmarks: The Jaegers', 'Welcome to TON'];

  return (
    <FilterContainer>
      <CategoryButtons>
        {categories.map(category => (
          <Button
            key={category}
            $active={activeCategory === category}
            onClick={() => onCategoryChange(category)}
          >
            {categoryNames[category]}
          </Button>
        ))}
      </CategoryButtons>

      <SubCategories $show={showNftSubCategories}>
        {nftSubCategories.map(subCategory => (
          <Button
            key={subCategory}
            $active={activeNftSubCategory === subCategory}
            onClick={() => onNftSubCategoryChange(subCategory)}
          >
            {categoryNames[subCategory]}
          </Button>
        ))}
      </SubCategories>
    </FilterContainer>
  );
};

export default FilterBar;