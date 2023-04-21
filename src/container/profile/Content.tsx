import { useRecoilValue } from 'recoil';
import ContentBox from '../../components/profile/ContentBox';
import Introduce from '../../components/profile/Introduce';
import data from '../../lib/data';
import { themeState } from '../../store/theme';

const Content = () => {
  const isDark = useRecoilValue(themeState);

  const introduceList = data.profile.introduce.map((data, index) => (
    <Introduce key={index} content={data} />
  ));

  return (
      <ContentBox hasQuotes isDark={isDark}>
        {introduceList}
      </ContentBox>
  );
};

export default Content;
