import styled from 'styled-components';
import { media } from '../../utils/mediaQuery';

interface InputProps {
  title: string;
  name?: string;
  isdisabled?: boolean;
}

const Input = ({ title, name, isdisabled = false }: InputProps) => {
  return (
    <Wrapper isdisabled={isdisabled}>
      <Title>{title}</Title>
      <UserInput
        name={name}
        disabled={isdisabled}
        placeholder={isdisabled ? 'gink.ss00@gmail.com' : ''}
        maxLength={65}
        autoComplete="off"
      />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div<{ isdisabled: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: ${({ isdisabled }) => (isdisabled ? '30px' : '8px')};
  opacity: ${({ isdisabled }) => (isdisabled ? '0.7' : '1')};
`;

const Title = styled.label`
  position: absolute;
  top: 5px;
  left: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.subTextColor};

  ${media.small} {
    font-size: 12px;
  }
`;

const UserInput = styled.input`
  flex: 1;
  height: 40px;
  padding: 5px 8px 5px 100px;
  border: 1px solid ${({ theme }) => theme.textColor};
  box-sizing: border-box;
  font-size: 16px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.bgColor};
  outline: 0;

  ${media.small} {
    padding: 5px 8px 5px 70px;
    font-size: 14px;
  }

  &:focus {
    padding: 4px 7px 4px 99px;
    border: 2px solid ${({ theme }) => theme.pointLighterColor};

    ${media.small} {
      padding: 4px 7px 4px 69px;
    }
  }

  &:not(:focus) {
    transition: border 0.7s;
  }

  &::placeholder {
    color: ${({ theme }) => theme.textColor};
  }
`;
