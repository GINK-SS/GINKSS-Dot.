import { ReactNode } from 'react';
import styled from 'styled-components';

interface ContentBoxProps {
  children: ReactNode;
  hasQuotes?: boolean;
  isDark: boolean;
}

const ContentBox = ({ children, hasQuotes = false, isDark }: ContentBoxProps) => {
  return (
    <Container hasQuotes={hasQuotes}>
      <Quotes hasQuotes={hasQuotes} isDark={isDark}>
        "
      </Quotes>
      {children}
      <Quotes hasQuotes={hasQuotes} isDark={isDark}>
        "
      </Quotes>
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

const Quotes = styled.p<{ hasQuotes: boolean; isDark: boolean }>`
  display: ${({ hasQuotes }) => (hasQuotes ? 'block' : 'none')};
  position: absolute;
  font-size: 100px;
  color: ${({ isDark }) => (isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)')};

  &:first-child {
    top: -20px;
  }

  &:last-child {
    bottom: -80px;
    right: 0;
  }
`;
