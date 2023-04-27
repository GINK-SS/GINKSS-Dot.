import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useState } from 'react';
import HrLine from '../../components/common/HrLine';
import Photo from '../../components/common/Photo';
import ContentBox from '../../components/profile/ContentBox';
import Education from '../../components/profile/Education';
import InfoBox from '../../components/profile/InfoBox';
import InfoItem from '../../components/profile/InfoItem';
import Introduce from '../../components/profile/Introduce';
import Prizes from '../../components/profile/Prizes';
import Skills from '../../components/profile/Skills';
import Title from '../../components/profile/Title';
import data from '../../lib/data';
import { contactState } from '../../store/modal';
import { themeState } from '../../store/theme';

const Content = () => {
  const isDark = useRecoilValue(themeState);
  const [photoName, setPhotoName] = useState('');
  const setContact = useSetRecoilState(contactState);

  const onEmail = () => setContact(true);

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) setPhotoName('');
  };

  const introduceList = data.profile.introduce.map((data, index) => (
    <Introduce key={index} content={data} />
  ));

  const prizeList = data.profile.prizes.map((data, index) => (
    <Prizes
      key={index}
      name={data.name}
      date={data.date}
      prize={data.prize}
      where={data.where}
      onClick={() => setPhotoName(data.file)}
    />
  ));

  const educationList = data.profile.education.map((data, index) => (
    <Education
      key={index}
      name={data.name}
      date={data.date}
      content={data.content}
      onClick={() => data.file && setPhotoName(data.file)}
    />
  const skillList = data.profile.skills.map((data, index) => (
    <Skills key={index} name={data.name} content={data.content} />
  ));

  return (
    <>
      <ContentBox hasQuotes>{introduceList}</ContentBox>

      <InfoBox>
        <InfoItem icon="IoLogoGithub" text="GINK-SS" href="https://github.com/GINK-SS" />
        <InfoItem icon="IoMailOutline" text="gink.ss00@gmail.com" handleClick={onEmail} />
      </InfoBox>

      <HrLine />

      {photoName && <Photo file={photoName} onOutClick={handleOuterClick} />}

      <ContentBox marginTB={100}>
      </ContentBox>

      <ContentBox marginTB={100}>
        <Title text="PRIZES" />
        {prizeList}
      </ContentBox>

      <ContentBox marginTB={100}>
        <Title text="SKILLS" />
        {skillList}
      </ContentBox>
    </>
  );
};

export default Content;
