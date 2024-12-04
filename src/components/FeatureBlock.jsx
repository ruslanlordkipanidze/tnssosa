import { useState } from 'react';
import styled from 'styled-components';

const FeatureContainer = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin: 0.5rem 0;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;

const FeatureHeader = styled.div`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const FeatureTitle = styled.span`
  font-size: 1.1em;
`;

const ExpandIcon = styled.span`
  font-size: 1.2em;
  transition: transform 0.3s ease;
  transform: rotate(${props => props.$isOpen ? '180deg' : '0deg'});
`;

const FeatureContent = styled.div`
  padding: ${props => props.$isOpen ? '1rem' : '0'};
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.2);
  color: #000;
  line-height: 1.6;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const FeatureBlock = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FeatureContainer>
      <FeatureHeader onClick={() => setIsOpen(!isOpen)}>
        <FeatureTitle>{title}</FeatureTitle>
        <ExpandIcon $isOpen={isOpen}>▼</ExpandIcon>
      </FeatureHeader>
      <FeatureContent $isOpen={isOpen}>
        {description}
      </FeatureContent>
    </FeatureContainer>
  );
};

export default FeatureBlock; 