import styled from 'styled-components';
import chevron from '../../assets/chevron.svg';
import line from '../../assets/line.svg';

interface HrLineProps {
  marginTB?: number;
  marginLR?: number;
  middleWidth?: number;
}
const HrLine = ({ marginTB = 100, marginLR = 0, middleWidth = 110 }: HrLineProps) => {
  return (
    <>
      <Wrapper marginTB={marginTB} marginLR={marginLR}>
        <Line />
        <Chevron width={middleWidth} />
        <Line />
      </Wrapper>
    </>
  );
};

export default HrLine;

const Wrapper = styled.div<{ marginTB: number; marginLR: number }>`
  display: flex;
  margin-top: ${({ marginTB }) => marginTB}px;
  margin-bottom: ${({ marginTB }) => marginTB}px;
  margin-left: ${({ marginLR }) => marginLR}px;
  margin-right: ${({ marginLR }) => marginLR}px;
`;

const Chevron = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 20px;
  background-image: url(${chevron});
  background-repeat: repeat-x;
`;

const Line = styled.div`
  flex: 1;
  height: 20px;
  background-image: url(${line});
  background-repeat: repeat-x;
`;
