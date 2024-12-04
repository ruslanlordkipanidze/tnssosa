import styled from 'styled-components';
import FeatureBlock from './FeatureBlock';

const Card = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 2.5px solid #000;
`;

const CardTitle = styled.h2`
  color: #000;
  font-size: 2em;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  font-weight: 800;
`;

const CardDescription = styled.p`
  color: #000;
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  font-weight: 600;
`;

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const ActionButton = styled.a`
  background: rgba(0, 0, 0, 0.3);
  color: #000;
  padding: 1em 2em;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  min-width: 200px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-2px);
    background: rgba(0, 0, 0, 0.4);
    border-color: #000;
  }
`;

const InfoCard = ({ title, description, features, isDex, isTelegram }) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      
      <FeaturesContainer>
        {features.map((feature, index) => (
          <FeatureBlock
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </FeaturesContainer>

      {isDex && (
        <ButtonsContainer>
          <ActionButton href="https://dedust.io" target="_blank">
            DeDust.io
          </ActionButton>
          <ActionButton href="https://ston.fi" target="_blank">
            Ston.Fi
          </ActionButton>
        </ButtonsContainer>
      )}

      {isTelegram && (
        <ButtonsContainer>
          <ActionButton variant="telegram" href="https://t.me/tbook_incentive_bot" target="_blank">
            @tbook_incentive_bot
          </ActionButton>
          <ActionButton variant="telegram" href="https://t.me/BroContestsBot" target="_blank">
            @BroContestsBot
          </ActionButton>
          <ActionButton variant="telegram" href="https://t.me/theontonbot" target="_blank">
            @theontonbot
          </ActionButton>
        </ButtonsContainer>
      )}
    </Card>
  );
};

export default InfoCard;