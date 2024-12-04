import { memo } from 'react';
import { useSectionState } from '../../hooks/useSectionState';
import { ErrorBoundary } from '../ErrorBoundary';
import styled from 'styled-components';
import Accordion from '../common/Accordion';

const SectionContainer = styled.div`
  padding: 2rem;
  background: #1a1a1a;
  border-radius: 15px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  color: #646cff;
  font-size: 1.8em;
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const SectionDescription = styled.p`
  color: #888;
  text-align: center;
  margin-bottom: 2rem;
`;

const SectionContent = memo(({ title, description, items }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      
      <ErrorBoundary fallback={<ErrorMessage />}>
        {items.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
          />
        ))}
      </ErrorBoundary>
    </SectionContainer>
  );
});

const AccordionItem = memo(({ item }) => {
  const [isOpen, setIsOpen] = useSectionState(item.id);

  return (
    <Accordion
      title={item.title}
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <ContentRenderer content={item.content} />
    </Accordion>
  );
});

const ContentRenderer = memo(({ content }) => {
  if (typeof content === 'string') {
    return <FormattedText content={content} />;
  }
  return content;
});

export default SectionContent; 