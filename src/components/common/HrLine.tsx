import styled from 'styled-components';
import chevron from '../../assets/chevron.svg';
import line from '../../assets/line.svg';

interface HrLineProps {
  hasLine?: boolean;
  marginTB?: number;
  marginLR?: number;
  middleWidth?: number;
}

/**
 * @params hasLine?: 양쪽 직선 유무 (default true),
 * marginTB?: 상하 margin (default 100px),
 * marginLR?: 좌우 margin (default 0px),
 * middleWidth?: 가운데 지그재그 너비 (default 110px)
 */
const HrLine = ({
  hasLine = true,
  marginTB = 100,
  marginLR = 0,
  middleWidth = 110,
}: HrLineProps) => {
  return (
    <>
      <Wrapper marginTB={marginTB} marginLR={marginLR}>
        {hasLine ? <Line /> : null}
        <Chevron width={middleWidth} />
        {hasLine ? <Line /> : null}
      </Wrapper>
    </>
  );
};

export default HrLine;

const Wrapper = styled.div<{ marginTB: number; marginLR: number }>`
  display: flex;
  justify-content: center;
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
