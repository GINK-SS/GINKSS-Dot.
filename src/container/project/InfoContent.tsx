import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import emoji from 'remark-emoji';
import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

const InfoContent = () => {
  const { projectName } = useParams();
  const [markdown, setMarkdown] = useState('');

  const getMarkDown = async () => {
    const response = await fetch(`/projects/${projectName}.md`);

    setMarkdown(await response.text());
  };

  useEffect(() => {
    getMarkDown();
  }, []);

  return <MDContent source={markdown} wrapperElement={{ 'data-color-mode': 'dark' }} remarkPlugins={[emoji]} />;
};

export default InfoContent;

const MDContent = styled(MarkdownPreview)`
  padding: 0 50px 50px;

  ${media.large} {
    padding: 0 30px 30px;
  }

  ${media.medium} {
    padding: 0 20px 10px;
  }

  ${media.small} {
    padding: 0 3vw 4vw;
  }
`;
