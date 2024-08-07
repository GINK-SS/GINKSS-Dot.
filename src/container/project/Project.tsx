import { useNavigate, useParams } from 'react-router-dom';
import Wrapper from '../../components/project/info/Wrapper';
import data from '../../lib/data';
import InfoContent from './InfoContent';
import InfoHeader from './InfoHeader';

const Project = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const info = data.project.info[projectName as string] ?? {
    name: '',
    role: '',
    people: [],
    github: '',
  };

  const onProjects = () => navigate('/project');

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) onProjects();
  };

  return (
    <Wrapper onClick={handleOuterClick}>
      <InfoHeader
        title={info.name}
        onBtnClick={onProjects}
        role={info.role}
        people={info.people}
        github={info.github}
      />

      <InfoContent />
    </Wrapper>
  );
};

export default Project;
