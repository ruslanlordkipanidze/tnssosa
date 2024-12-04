import { useState, useMemo } from 'react';
import styled from 'styled-components';
import { useCards } from '../hooks/useCards';
import Header from '../components/Header';
import Section from '../components/Section';
import FilterBar from '../components/FilterBar';
import InfoCard from '../components/InfoCard';
import NFTCard from '../components/NFTCard';
import ConnectWallet from '../components/ConnectWallet';

const LoadingText = styled.p`
  text-align: center;
  color: #646cff;
  font-size: 1.2em;
  margin-top: 2rem;
`;

const ErrorText = styled.p`
  text-align: center;
  color: #ff4646;
  font-size: 1.2em;
  margin-top: 2rem;
`;

const Title = styled.h1`
  font-family: 'Ubuntu Mono', monospace;
  font-size: 3.5em;
  text-align: center;
  color: #000;
  margin: 2rem 0;
  font-weight: 900;
  text-shadow: 
    0 0 10px rgba(255, 255, 255, 0.7),
    0 0 20px rgba(0, 255, 255, 0.5),
    0 0 30px rgba(0, 255, 255, 0.3);
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (max-width: 1199px) and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 767px) and (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 80px;
`;

const Home = () => {
  const { infoCards, nftCards, loading, error } = useCards();
  const [activeCategory, setActiveCategory] = useState('main');
  const [showNftSubCategories, setShowNftSubCategories] = useState(false);
  const [activeNftSubCategory, setActiveNftSubCategory] = useState('');

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'NFTMarkets') {
      setShowNftSubCategories(true);
    } else {
      setShowNftSubCategories(false);
      setActiveNftSubCategory('');
    }
  };

  const handleNftSubCategoryChange = (subCategory) => {
    setActiveNftSubCategory(subCategory);
  };

  const filteredContent = useMemo(() => {
    const allContent = [
      ...infoCards.map(card => ({ ...card, type: 'info' })),
      ...nftCards.map(card => ({ ...card, type: 'nft' }))
    ];

    if (activeCategory === 'NFTMarkets') {
      if (activeNftSubCategory) {
        return allContent.filter(item => 
          item.type === 'nft' && item.category === activeNftSubCategory
        );
      }
      return allContent.filter(item => item.type === 'nft');
    }

    return allContent.filter(item => item.category === activeCategory);
  }, [activeCategory, activeNftSubCategory, infoCards, nftCards]);

  if (loading) return <LoadingText>Загрузка...</LoadingText>;
  if (error) return <ErrorText>{error}</ErrorText>;

  return (
    <>
      <Header>
        <ConnectWallet />
      </Header>
      <Section>
        <Title>TONomicon</Title>
        
        <FilterBar 
          categories={['main', 'DeFi Projects', 'DeepDive', 'SBTcampaign', 'NFTMarkets', 'Social']}
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          showNftSubCategories={showNftSubCategories}
          onNftSubCategoryChange={handleNftSubCategoryChange}
          activeNftSubCategory={activeNftSubCategory}
        />

        <ContentSection>
          {filteredContent
            .filter(item => item.type === 'info')
            .map((item, index) => (
              <InfoCard 
                key={`info-${index}`}
                {...item}
              />
            ))}
          
          {filteredContent.filter(item => item.type === 'nft').length > 0 && (
            <CardGrid>
              {filteredContent
                .filter(item => item.type === 'nft')
                .map((item, index) => (
                  <NFTCard 
                    key={`nft-${index}`}
                    {...item}
                  />
                ))}
            </CardGrid>
          )}
        </ContentSection>
      </Section>
    </>
  );
};

export default Home;