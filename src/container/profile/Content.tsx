import { useRecoilValue, useSetRecoilState } from 'recoil';
import ContentBox from '../../components/profile/ContentBox';
import InfoBox from '../../components/profile/InfoBox';
import InfoItem from '../../components/profile/InfoItem';
import Introduce from '../../components/profile/Introduce';
import data from '../../lib/data';
import { contactState } from '../../store/modal';
import { themeState } from '../../store/theme';

const Content = () => {
  const isDark = useRecoilValue(themeState);
  const setContact = useSetRecoilState(contactState);

  const onEmail = () => setContact(true);

  const introduceList = data.profile.introduce.map((data, index) => (
    <Introduce key={index} content={data} />
  ));

  return (
    <>
      <ContentBox hasQuotes isDark={isDark}>
        {introduceList}
      </ContentBox>

      <InfoBox>
        <a href="https://github.com/GINK-SS" target="_blank" rel="noreferrer">
          <InfoItem icon="IoLogoGithub" text="GINK-SS" />
        </a>
        <InfoItem handleClick={onEmail} icon="IoMailOutline" text="gink.ss00@gmail.com" />
      </InfoBox>
    </>
  );
};

export default Content;
