import styled from 'styled-components';

const StyledSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section; 