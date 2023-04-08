import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import darkBackground from '../../assets/darkMainBackground.png';
import background from '../../assets/mainBackground.png';
import { themeState } from '../../store/theme';

interface BackgroundProps {
  children: ReactNode;
}

/** 메인 배경화면 */
const Background = ({ children }: BackgroundProps) => {
  const isDark = useRecoilValue(themeState);

  return <Container isDark={isDark}>{children}</Container>;
};

export default Background;

const Container = styled.div<{ isDark: boolean }>`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: url(${({ isDark }) => (isDark ? darkBackground : background)});
`;
