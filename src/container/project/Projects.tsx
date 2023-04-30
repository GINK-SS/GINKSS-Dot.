import SummaryWrapper from '../../components/project/SummaryWrapper';
import Thumbnail from '../../components/project/Thumbnail';
import Wrapper from '../../components/project/Wrapper';
import data from '../../lib/data';

const Projects = () => {
  const projectList = data.project.summary.map((data, index) => {
    const isRight = index % 2 !== 0;

    return (
      <SummaryWrapper key={index} isRight={isRight}>
        <Thumbnail file={data.file} />
      </SummaryWrapper>
    );
  });

  return <Wrapper>{projectList}</Wrapper>;
};

export default Projects;
