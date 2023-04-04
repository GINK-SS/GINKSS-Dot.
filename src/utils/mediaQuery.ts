/**
 * @param 최대 가로 넓이
 */
const customMediaQuery = (maxWidth: number): string => {
  return `@media (max-width: ${maxWidth}px)`;
};

export const media = {
  custom: customMediaQuery,
  large: customMediaQuery(1024),
  medium: customMediaQuery(768),
  small: customMediaQuery(320),
};
