import { ReactNode } from 'react';
import styled from 'styled-components';

interface ContentBoxProps {
  children: ReactNode;
  hasQuotes?: boolean;
}

const ContentBox = ({ children, hasQuotes = false }: ContentBoxProps) => {
  return (
    <Container hasQuotes={hasQuotes}>
      <Quotes hasQuotes={hasQuotes}>"</Quotes>
      {children}
      <Quotes hasQuotes={hasQuotes}>"</Quotes>
    </Container>
  );
};

export default ContentBox;

const Container = styled.div<{ hasQuotes: boolean }>`
  position: relative;
  max-width: 1000px;
  margin: 150px auto;
  text-align: ${({ hasQuotes }) => (hasQuotes ? 'center' : 'start')};
`;

const Quotes = styled.p<{ hasQuotes: boolean }>`
  display: ${({ hasQuotes }) => (hasQuotes ? 'block' : 'none')};
  position: absolute;
  font-size: 100px;
  color: ${({ theme }) => theme.pointDarkerColor};

  &:first-child {
    top: -20px;
  }

  &:last-child {
    bottom: -80px;
    right: 0;
  }
`;
