import ReactTextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface TextAreaProps {
  name: string;
}

const TextArea = ({ name }: TextAreaProps) => {
  return (
    <Wrapper>
      <Text name={name} maxLength={2000} maxRows={15} />
    </Wrapper>
  );
};

export default TextArea;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 30px;
`;
const Text = styled(ReactTextareaAutosize)`
  flex: 1;
  min-height: 200px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.textColor};
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Noto KR', sans-serif;
  line-height: 1.5;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bgColor};
  resize: none;
  outline: 0;

  ${media.small} {
    font-size: 14px;
  }

  &:focus {
    padding: 7px;
    border: 2.5px solid ${({ theme }) => theme.pointLighterColor};
  }

  &:not(:focus) {
    transition: border 0.7s;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textColor};
  }
`;
