import styled from 'styled-components';

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return <Btn onClick={onClick}>{text}</Btn>;
};

export default Button;

const Btn = styled.button`
  width: 100%;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.boxBorderColor};
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.boxBgColor};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => theme.boxHoverBorderColor};
    background-color: ${({ theme }) => theme.boxHoverBgColor};
  }
`;
