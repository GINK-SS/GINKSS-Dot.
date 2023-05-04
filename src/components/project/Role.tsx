import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface RoleProps {
  role: string;
  isRight: boolean;
}

const Role = ({ role, isRight }: RoleProps) => {
  return <Text isRight={isRight}>{role}</Text>;
};

export default Role;

const Text = styled.p<{ isRight: boolean }>`
  font-size: 12px;
  font-weight: 200;
  margin-top: 5px;
  margin-right: ${({ isRight }) => (isRight ? '3px' : '0')};

  ${media.medium} {
    margin-right: 0;
  }

  ${media.small} {
    margin-top: 0.2vw;
    font-size: 2.5vw;
  }
`;
