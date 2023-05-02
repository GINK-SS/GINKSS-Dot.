import styled from 'styled-components';

interface TitleProps {
  text: string;
  isRight: boolean;
}

const Title = ({ text, isRight }: TitleProps) => {
  return <Text isRight={isRight}>{text}</Text>;
};

export default Title;

const Text = styled.p<{ isRight: boolean }>`
  position: relative;
  margin-top: 10px;
  font-size: 45px;
  font-weight: 600;

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
      isRight ? 'translate(-10px, 10px)' : 'translate(-30px, 10px)'};
    transition-property: left, right;
    transition-duration: 0.3s;
  }

  &::after {
    content: '♦♦♦';
    position: absolute;
    top: -15px;
    ${({ isRight }) => (isRight ? 'right: 3px;' : 'left: 0;')};
    font-size: 10px;
    color: ${({ theme }) => theme.pointColor};
  }
`;