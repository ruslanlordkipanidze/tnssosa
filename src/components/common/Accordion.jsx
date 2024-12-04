const AccordionContainer = styled.div`
  margin: 0.5rem 0;
  border-radius: 8px;
  overflow: hidden;
  background: #1e1e1e;
  
  @media (max-width: 768px) {
    margin: 0.3rem 0;
  }
`;

const AccordionHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: ${props => props.$isOpen ? 'rgba(100, 108, 255, 0.1)' : 'transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 108, 255, 0.1);
  }
`;

const AccordionContent = styled.div`
  padding: ${props => props.$isOpen ? '1rem' : '0'};
  max-height: ${props => props.$isOpen ? '1000px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
  transition: all 0.3s ease;
  background: #1a1a1a;
`;

const Accordion = ({ title, children, isOpen, onToggle }) => {
  return (
    <AccordionContainer>
      <AccordionHeader onClick={onToggle} $isOpen={isOpen}>
        <span>{title}</span>
        <span style={{transform: `rotate(${isOpen ? '180deg' : '0deg'})`}}>▼</span>
      </AccordionHeader>
      <AccordionContent $isOpen={isOpen}>
        {children}
      </AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion; 