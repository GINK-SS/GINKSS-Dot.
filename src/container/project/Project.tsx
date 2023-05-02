import { useNavigate, useParams } from 'react-router-dom';
import Content from '../../components/project/info/Content';
import ContentBox from '../../components/project/info/ContentBox';
import Subject from '../../components/project/info/Subject';
import Wrapper from '../../components/project/info/Wrapper';
import data from '../../lib/data';
import InfoHeader from './InfoHeader';

const Project = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const info = data.project.info[projectName as string] ?? {
    name: '',
    role: '',
    people: [],
    github: '',
    introduce: '',
    techStack: [],
  };

  const onProjects = () => navigate('/project');

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) onProjects();
  };

  return (
    <Wrapper onClick={handleOuterClick}>
      <ContentBox>
        <Subject text="프로젝트 소개" />
        <Content content={info.introduce} />
      </ContentBox>
      <InfoHeader
        title={info.name}
        role={info.role}
        people={info.people}
        github={info.github}
      />
    </Wrapper>
  );
};

export default Project;
