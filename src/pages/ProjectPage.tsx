import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import Project from '../container/project/Project';
import Projects from '../container/project/Projects';

const ProjectPage = () => {
  const { projectName } = useParams();

  useEffect(() => {
    projectName
      ? (document.documentElement.style.overflow = 'hidden')
      : (document.documentElement.style.overflow = 'auto');

    return () => {
      document.documentElement.style.overflow = 'auto';
    };
  }, [projectName]);

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
