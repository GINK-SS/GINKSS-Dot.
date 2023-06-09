import Content from '../container/profile/Content';
import Wrapper from '../components/profile/Wrapper';
import Name from '../container/profile/Name';
import { Helmet } from 'react-helmet-async';

const ProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>PROFILE - GINK-SS</title>
      </Helmet>

      <Wrapper>
        <Name
          words={[
            '이상민',
            'SANGMIN LEE',
            'GINK-SS',
            'FRONTEND-DEVELOPER',
            'sang_min_king',
          ]}
          delay={150}
          stayDelay={2000}
        />
        <Content />
      </Wrapper>
    </>
  );
};

export default ProfilePage;
