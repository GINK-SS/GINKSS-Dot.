import Header from '../../components/project/info/Header';
import SubTitle from '../../components/project/info/SubTitle';
import Title from '../../components/project/info/Title';

interface InfoHeaderProps {
  title: string;
  role: string;
  people: string[];
  github: string;
  onBtnClick: React.MouseEventHandler<HTMLDivElement>;
}

const InfoHeader = ({ title, role, people, github, onBtnClick }: InfoHeaderProps) => {
  return (
    <Header>
      <Title text={title} onBtnClick={onBtnClick} />
      <SubTitle role={role} people={people} github={github} />
    </Header>
  );
};

export default InfoHeader;
