import styled from 'styled-components';

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
  margin-bottom: 50px;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
