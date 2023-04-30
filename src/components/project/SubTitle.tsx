import styled from 'styled-components';

interface SubTitleProps {
  text: string;
  isRight: boolean;
}

const SubTitle = ({ text, isRight }: SubTitleProps) => {
  return <Text isRight={isRight}>{text}</Text>;
};

export default SubTitle;

const Text = styled.p<{ isRight: boolean }>`
  position: relative;
  margin-top: 10px;
  margin-right: ${({ isRight }) => (isRight ? '2px' : '0')};
  font-size: 18px;
  font-weight: 200;

  &::before {
    content: '';
    width: 120%;
    height: 100%;
    position: absolute;
    ${({ isRight }) => (isRight ? 'right: -150%;' : 'left: -120%;')};
    z-index: -1;
    background: ${({ theme }) =>
      `repeating-linear-gradient(-45deg, 
        ${theme.pointDarkerColor}AA, ${theme.pointDarkerColor}AA 0.5px, 
        transparent 0, transparent 1px)`};
    transform: ${({ isRight }) =>
      isRight ? 'translate(-10px, 3px)' : 'translate(-30px, 3px)'};
    transition-property: left, right;
    transition-duration: 0.3s;
  }
`;
