import styled from 'styled-components';

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
`;
