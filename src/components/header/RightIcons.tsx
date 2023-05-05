import { ReactNode } from 'react';
import styled from 'styled-components';

interface RightIconsProps {
  children: ReactNode;
}

const RightIcons = ({ children }: RightIconsProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default RightIcons;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 30px;

    &:first-child {
      margin-left: 0;
    }
  }
`;
