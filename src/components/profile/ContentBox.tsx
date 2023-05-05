import { ReactNode } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface ContentBoxProps {
  children: ReactNode;
  hasQuotes?: boolean;
  marginTB?: number;
}

/**
 * @params hasQuotes?: 따옴표 포인트 주기 여부 (default false) - true면 가운데 정렬도 포함
 */
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
  margin: 150px 20px;
  text-align: ${({ hasQuotes }) => (hasQuotes ? 'center' : 'start')};

  ${media.medium} {
    margin: 100px 20px;
  }
`;

const Quotes = styled.p<{ hasQuotes: boolean }>`
  display: ${({ hasQuotes }) => (hasQuotes ? 'block' : 'none')};
  position: absolute;
  font-size: 100px;
  color: ${({ theme }) => theme.pointDarkerColor};

  ${media.medium} {
    font-size: 70px;
  }

  ${media.small} {
    font-size: 55px;
  }

  &:first-child {
    top: -20px;
  }

  &:last-child {
    bottom: -80px;
    right: 0;
  }
`;
