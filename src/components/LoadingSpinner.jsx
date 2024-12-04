import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.fullScreen ? '100vh' : 'auto'};
`;

const Spinner = styled.div`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  border: 3px solid rgba(100, 108, 255, 0.2);
  border-radius: 50%;
  border-top-color: #646cff;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = ({ size, fullScreen }) => {
  return (
    <SpinnerContainer fullScreen={fullScreen}>
      <Spinner size={size} />
    </SpinnerContainer>
  );
};

export default LoadingSpinner; 