import SummaryWrapper from '../../components/project/SummaryWrapper';
import Thumbnail from '../../components/project/Thumbnail';
import Wrapper from '../../components/project/Wrapper';
import data from '../../lib/data';

const Projects = () => {
  const projectList = data.project.summary.map((data, index) => (
    <SummaryWrapper index={index}>
      <Thumbnail key={index} file={data.file} />
    </SummaryWrapper>
  ));

  return <Wrapper>{projectList}</Wrapper>;
};

export default Projects;
