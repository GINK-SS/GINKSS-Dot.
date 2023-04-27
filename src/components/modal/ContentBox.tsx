import { ReactNode } from 'react';
import styled from 'styled-components';

interface ContentBoxProps {
  children: ReactNode;
}

const ContentBox = ({ children }: ContentBoxProps) => {
  return <Container>{children}</Container>;
};

export default ContentBox;

const Container = styled.div`
  padding: 0 50px 50px;
`;
