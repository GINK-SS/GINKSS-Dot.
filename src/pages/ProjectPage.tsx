import { Helmet } from 'react-helmet-async';
import Projects from '../container/project/Projects';

const ProjectPage = () => {
  return (
    <>
      <Helmet>
        <title>PROJECT - GINK-SS</title>
      </Helmet>

      <Projects />
    </>
  );
};

export default ProjectPage;
