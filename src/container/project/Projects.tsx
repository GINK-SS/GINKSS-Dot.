import Content from '../../components/project/Content';
import Partner from '../../components/project/Partner';
import SubTitle from '../../components/project/SubTitle';
import SummaryWrapper from '../../components/project/SummaryWrapper';
import Thumbnail from '../../components/project/Thumbnail';
import Title from '../../components/project/Title';
import TopWrapper from '../../components/project/TopWrapper';
import Wrapper from '../../components/project/Wrapper';
import data from '../../lib/data';

const Projects = () => {
  const projectList = data.project.summary.map((data, index) => {
    const isRight = index % 2 !== 0;

    return (
      <SummaryWrapper key={index} isRight={isRight}>
        <Thumbnail file={data.file} month={data.month} year={data.year} />
        <Content isRight={isRight}>
          <TopWrapper isRight={isRight}>
            <Title text={data.name} isRight={isRight} />
            <SubTitle text={data.summary} isRight={isRight} />
          </TopWrapper>
          <Partner people={data.people} isRight={isRight} />
        </Content>
      </SummaryWrapper>
    );
  });

  return <Wrapper>{projectList}</Wrapper>;
};

export default Projects;
