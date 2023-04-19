import ContentBox from '../../components/profile/ContentBox';
import Introduce from '../../components/profile/Introduce';
import data from '../../lib/data';

const Content = () => {
  const introduceList = data.profile.introduce.map((data, index) => (
    <Introduce key={index} content={data} />
  ));

  return <ContentBox hasQuotes>{introduceList}</ContentBox>;
};

export default Content;
