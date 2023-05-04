import styled from 'styled-components';
import { media } from '../../../utils/mediaQuery';

interface VideoProps {
  url: string;
}

const Video = ({ url }: VideoProps) => {
  return (
    <Container>
      <VideoIframe title="Youtube Video" src={`https://www.youtube.com/embed/${url}`} />
    </Container>
  );
};

export default Video;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56.25%;
  margin-bottom: 20px;

  ${media.medium} {
    margin-bottom: 15px;
  }

  ${media.small} {
    margin-bottom: 5vw;
  }
`;

const VideoIframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
