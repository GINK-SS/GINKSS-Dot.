import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactIcon from '../../../container/common/ReactIcon';
import { media } from '../../../utils/mediaQuery';
import ShadowText from '../../common/ShadowText';

interface GithubShortCutProps {
  url: string;
}

const GithubShortCut = ({ url }: GithubShortCutProps) => {
  return (
    <Wrapper>
      <ReactIcon icon="IoLogoGithub" size={25} />
      <Link to={url} target="_blank">
        <Title>
          <ShadowText text="Github" isItalic />
        </Title>
      </Link>
    </Wrapper>
  );
};

export default GithubShortCut;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  margin-left: 3px;

  ${media.small} {
    margin-right: 5px;
  }
`;
