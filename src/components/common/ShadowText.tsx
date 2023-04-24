import styled from 'styled-components';

interface ShadowTextProps {
  text: string;
  isItalic?: boolean;
  size?: number;
  weight?: number;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
}

/**
 * @params 기본 size: 25, weight: 600
 */

const ShadowText = ({
  text,
  isItalic = false,
  size = 25,
  weight = 600,
  color,
  onClick,
}: ShadowTextProps) => {
  return (
    <Text onClick={onClick} isItalic={isItalic} size={size} weight={weight} color={color}>
      {text}
    </Text>
  );
};

export default ShadowText;

interface TextProps {
  isItalic?: boolean;
  size?: number;
  weight?: number;
  color?: string;
}

const Text = styled.p<TextProps>`
  color: ${({ color, theme }) => color ?? theme.textColor};
  font-size: ${({ size }) => `${size}px`};
  font-weight: ${({ weight }) => weight};
  font-style: ${({ isItalic }) => (isItalic ? 'italic' : 'normal')};
  text-shadow: 8px 8px 0 transparent;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.textColor};
    text-shadow: 3px 3px #5ead21;
    cursor: pointer;
  }

  &:not(:hover) {
    transition: text-shadow 0.5s;
    transition-timing-function: cubic-bezier(0.15, 0.87, 0, 0.99);
  }
`;
