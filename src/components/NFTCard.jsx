import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getImagePath } from '../utils/imageUtils';
import { PlaceholderImage } from './PlaceholderImage';
import { preloadImage } from '../utils/imageUtils';

const Card = styled.div`
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 520px;
  position: relative;
  border: 2.5px solid #000;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background: #2a2a2a;
`;

const NFTImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LoadingPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #2a2a2a 25%, #3a3a3a 50%, #2a2a2a 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
`;

const Title = styled.h3`
  color: #000;
  margin: 0;
  font-size: 1.2em;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  font-weight: 800;
`;

const Description = styled.p`
  color: #000;
  margin: 0;
  font-size: 0.9em;
  line-height: 1.5;
  font-weight: 600;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const ViewButton = styled.a`
  display: inline-block;
  background: rgba(0, 0, 0, 0.3);
  color: #000;
  padding: 0.8em 1.5em;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  width: 100%;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(0, 0, 0, 0.4);
    border-color: #000;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }
`;

const NFTCard = ({ image, title, description, link }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  
  useEffect(() => {
    // Предзагрузка изображения
    preloadImage(image)
      .then(() => {
        setIsLoading(false);
        setImageError(false);
      })
      .catch((error) => {
        console.error('Error preloading image:', error);
        setImageError(true);
        setIsLoading(false);
      });
  }, [image]);

  return (
    <Card>
      <ContentWrapper>
        <ImageContainer>
          {isLoading && <LoadingPlaceholder />}
          {imageError ? (
            <PlaceholderImage>
              <span>Изображение недоступно</span>
              <small>{getImagePath(image)}</small>
            </PlaceholderImage>
          ) : (
            <NFTImage 
              src={getImagePath(image)}
              alt={title}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                console.error(`Failed to load image: ${image}`);
                setImageError(true);
                setIsLoading(false);
              }}
              loading="lazy"
              style={{ display: isLoading ? 'none' : 'block' }}
            />
          )}
        </ImageContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
      <ButtonWrapper>
        <ViewButton href={link} target="_blank" rel="noopener noreferrer">
          Смотреть на Getgems
        </ViewButton>
      </ButtonWrapper>
    </Card>
  );
};

export default NFTCard;