import Wrapper from '../components/profile/Wrapper';
import Name from '../container/profile/Name';

const ProfilePage = () => {
  return (
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
    </Wrapper>
  );
};

export default ProfilePage;
