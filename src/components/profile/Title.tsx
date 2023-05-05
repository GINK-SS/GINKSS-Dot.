import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  margin-bottom: 70px;

  ${media.small} {
    margin-bottom: 10vw;
  }
`;
const Text = styled.p`
  position: relative;
  display: inline;
  font-size: 30px;
  font-weight: 800;
  font-style: italic;
  letter-spacing: 10px;
  color: ${({ theme }) => theme.pointColor};

  ${media.medium} {
    /* font-size: 25px; */
  }

  ${media.small} {
    font-size: min(25px, 8vw);
    letter-spacing: 8px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    width: 110%;
    transform: translate(0px, 10px);
    background: ${({ theme }) =>
      `repeating-linear-gradient(-45deg, 
        ${theme.subPointColor}AA, ${theme.subPointColor}AA 2px, 
        transparent 0, transparent 4px)
      `};
  }
`;
