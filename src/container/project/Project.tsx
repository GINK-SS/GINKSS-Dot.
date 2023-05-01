import { useNavigate, useParams } from 'react-router-dom';
import ContentBox from '../../components/project/info/ContentBox';
import Header from '../../components/project/info/Header';
import SubTitle from '../../components/project/info/SubTitle';
import Title from '../../components/project/info/Title';
import Wrapper from '../../components/project/info/Wrapper';
import data from '../../lib/data';

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
      <Header>
        <Title text={info.name} />
        <SubTitle role={info.role} people={info.people} github={info.github} />
      </Header>
    </Wrapper>
  );
};

export default Project;
