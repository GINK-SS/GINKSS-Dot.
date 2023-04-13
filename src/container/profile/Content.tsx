import Introduce from '../../components/profile/Introduce';
import Wrapper from '../../components/profile/Wrapper';
import data from '../../lib/data';

const Content = () => {
  const introduceList = data.profile.introduce.map((data, index) => (
    <Introduce key={index} content={data} />
  ));

  return <Wrapper>{introduceList}</Wrapper>;
};

export default Content;
