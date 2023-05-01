import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Project from '../container/project/Project';
import Projects from '../container/project/Projects';

const ProjectPage = () => {
  const { projectName } = useParams();

  return (
    <>
      <Helmet>
        <title>PROJECT - GINK-SS</title>
      </Helmet>

      <Projects />

      {projectName && <Project />}
    </>
  );
};

export default ProjectPage;
