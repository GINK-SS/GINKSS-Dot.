import styled from 'styled-components';

interface NameProps {
  text: string;
  cursor: string;
}

const Name = ({ text, cursor }: NameProps) => {
  return (
    <Content>
      {text}
      {cursor}
    </Content>
  );
};

export default Name;

const Content = styled.p`
  height: 50px;
  font-size: 50px;
  font-weight: 500;
`;
