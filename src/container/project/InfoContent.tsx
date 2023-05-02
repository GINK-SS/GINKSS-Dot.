import HrLine from '../../components/common/HrLine';
import ContentBox from '../../components/project/info/ContentBox';
import Picture from '../../components/project/info/Picture';
import Subject from '../../components/project/info/Subject';
import TechStack from '../../components/project/info/TechStack';
import Text from '../../components/project/info/Text';
import Video from '../../components/project/info/Video';

interface InfoContentProps {
  contents: {
    type: string;
    content: string[] | string;
  }[];
}

const InfoContent = ({ contents }: InfoContentProps) => {
  const contentList = contents.map(({ type, content }, index) => {
    if (type === 'img') return <Picture key={index} url={content as string} />;
    else if (type === 'video') return <Video key={index} url={content as string} />;
    else if (type === 'subject') return <Subject key={index} text={content as string} />;
    else if (type === 'text') return <Text key={index} texts={content as string[]} />;
    else if (type === 'divide')
      return <HrLine key={index} hasLine={false} marginTB={50} middleWidth={90} />;
    else if (type === 'techStack')
      return <TechStack key={index} techStack={content as string[]} />;

    return null;
  });
  return <ContentBox>{contentList}</ContentBox>;
};

export default InfoContent;
