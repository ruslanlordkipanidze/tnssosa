import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem 2rem;
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
  }
`;

const Header = ({ children }) => {
  return (
    <HeaderContainer>
      {children}
    </HeaderContainer>
  );
};

export default Header; 