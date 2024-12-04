import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #ff4646;
  border-radius: 8px;
  background: rgba(255, 70, 70, 0.1);
`;

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Section error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <h3>Что-то пошло не так</h3>
          <p>Попробуйте обновить страницу</p>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
} 