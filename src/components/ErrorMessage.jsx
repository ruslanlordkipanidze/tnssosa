import styled from 'styled-components';

const ErrorContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 8px;
  text-align: center;
`;

const ErrorTitle = styled.h2`
  color: #ff4444;
  margin-bottom: 1rem;
`;

const ErrorMessage = ({ error }) => {
  return (
    <ErrorContainer>
      <ErrorTitle>Ошибка</ErrorTitle>
      <p>{error.message || 'Произошла ошибка при загрузке данных'}</p>
    </ErrorContainer>
  );
};

export default ErrorMessage; 