import styled from 'styled-components';

const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-size: 0.9em;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
`;

export const PlaceholderImage = ({ children }) => (
  <PlaceholderContainer>{children}</PlaceholderContainer>
); 