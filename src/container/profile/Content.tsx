import { useRecoilValue } from 'recoil';
import ContentBox from '../../components/profile/ContentBox';
import InfoBox from '../../components/profile/InfoBox';
import InfoItem from '../../components/profile/InfoItem';
import Introduce from '../../components/profile/Introduce';
import data from '../../lib/data';
import { themeState } from '../../store/theme';

const Content = () => {
  const isDark = useRecoilValue(themeState);

  const introduceList = data.profile.introduce.map((data, index) => (
    <Introduce key={index} content={data} />
  ));

  return (
    <>
      <ContentBox hasQuotes isDark={isDark}>
        {introduceList}
      </ContentBox>

      <InfoBox>
        <InfoItem icon={isDark ? 'darkEmail' : 'email'} text="gink.ss00@gmail.com" />
        <a href="https://github.com/GINK-SS" target="_blank" rel="noreferrer">
          <InfoItem icon="IoLogoGithub" text="GINK-SS" />
        </a>
      </InfoBox>
    </>
  );
};

export default Content;
