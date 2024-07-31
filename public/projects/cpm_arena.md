# 컴프매 아레나 도우미

![image](/images/project/cpm_arena/logo.png)

## :link: Link

> Production : https://cpm-arena.com

&nbsp;

## :pushpin: Topic

컴투스프로야구for매니저(이하 컴프매) 의 컨텐츠 중
<span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">아레나</span>라는 컨텐츠가 존재합니다.

10승을 목표로 매일 주어지는 특정 연도와 5개의 팀을 활용하여 최고의 라인업을 꾸려 진행하는, 가장 인기있는 컨텐츠입니다.

게임 내에서 각 팀을 클릭하여 선수 정보를 볼 수 있지만, 선수 간의 시너지 및 선수 플 등을 한눈에 확인하기 어렵다는 단점이 존재합니다.

이러한 어려움을 겪는 사용자들을 위해 상술한 단점들을 보완하고자 하였고,

`컴프매 아레나 도우미`를 통해 
<span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">주어진 연도와 팀을 선택하여 오늘의 아레나의 선수들을 한눈에 보기 쉽게 제작</span>하였습니다.

또한 선수들을 선택하여 시너지와 전력 등을 확인할 수 있고, 선수의 개인 상세 정보도 확인할 수 있습니다.

&nbsp;

## :bulb: Main Features

- 연도 및 팀 선택에 따른 선수 엔트리 확인
  - 오버롤에 따른 필터 기능 (전체 / 60 이상 / 65 이상 / 69 이상)
- 선수 간략 및 상세 정보 확인
- 선수 라인업 설정
- 라인업 시너지 및 총 전력 확인
- 업데이트 내역 및 FAQ

&nbsp;

## :hammer_and_pick: Tech Stack

### Frontend

![Static Badge](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)
![Static Badge](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white)
![Static Badge](https://img.shields.io/badge/Zustand-E9B240?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAe1BMVEVHcEwdGhYdGhcODAuabFoAAAAREg8PDQrEfGgiHhrSiXUGBQSLXEokIh+wc18dGBR8XlJbVktURTtdWlFEPjhCPDY5NS89OTMtKiVJQTpxYlczMCt1ZlokIBxPRj9hVUtZT0UTExFoXFJ9UUCSg3N/dWqeYEbOVyqlPB4jT27bAAAAFHRSTlMAqIox/gk+cvrp+lj+zPoe4Oa0gtfDlpAAAAGJSURBVCiRlZLXcuMwDEXVbBU7tpMFUdglueT/v3BJKbGc2bws+KABz6DwXhXFf8ZHiPVLWu9eEsEZ37b0oqXK3/O+PhcVdcORn+xPYKa2evcxChk3d12zwXdz6tBEUeIViBi8H7e26IehQyUCIOABwPBhg3HojgogVQIQKQXUPmFJ3T3dKA/KhNvNenRm/w17mhHACwhdb1prO7Hgbr88r/JEsIS56knfQ6bmOlwyXQmNooLV8fEIqVbFrjslmQ5rlTJA6VpP0Vqtg+uGS15nLUz1OGlrbQhutNqZj9z1LTNsGgIzWTfyOI5sJ7e+ps89Q3M6GoraJTR6rSPjBudT0xgiO8lnuFptDeIi0tKWmqOA4mjDY07LeofmnGH7XAjIxekz2MywX/TZmfUtWXRiTs44RjRf6pYqG5VYmk1o0lGI7kvaHSe6hleSDFAK3VP4AyefIDsp2RkhdJtlRetQKBtJiiDNe2Xp7+sZ0zxIB4H7ffEzKueY2TC7/lD8G3VblWXZ1r+gX+MvRD0sQ1ZcHdsAAAAASUVORK5CYII=&logoColor=white)
![Static Badge](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

### 배포

![Static Badge](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

&nbsp;

## :key: Key Point

- 서버 컴포넌트로의 마이그레이션으로 번들 사이즈 및 초기 로딩 시간 최소화
- @next/font를 통해 네트워크 페이로드를 줄이고, swap 설정을 통해 FOIT 최소화 
- Next/image를 활용하여 LCP, CLS 등을 개선하여 Lighthouse 기준. 60% 향상 
- 컴포넌트 분리 및 React.memo 등의 사용으로 리렌더링 최적화
- SEO 최적화를 통해 검색 시 상위권에 노출되어 사용자 접근을 향상시킴

&nbsp;

## :page_facing_up: Review

Topic에 상술했듯이, 컴프매 앱 안에서의 선수 확인은 조금 번거럽고 보기 어렵다는 단점이 있었습니다.

이러한 불편한 점들로 인해 컴프매 커뮤니티에서 엑셀로 정리하여 매일 표로 올려주시는 분들이 계셨지만, 늦게 올라오거나 아예 올리지 않는 날도 존재하였고 아레나와 관련한 여러 정보를 확인하지 못한다는 단점도 있었습니다.

따라서 저를 포함하여 모두가 확인하기 쉽고, 언제 어디서나 원할 때 확인할 수 있는 사이트를 목표로 진행하게 되었습니다.

실 서비스를 위한 빠른 배포를 바탕으로 빠르게 기능 및 디자인을 구현하는 방향으로 첫 걸음을 시작하였습니다.

쉽고 러닝 커브가 낮은 `zustand`를 사용하여 상태 관리를 하였고, 배포와 개발 브랜치를 별도로 두어 릴리즈 관리도 병행하였습니다.

또한 `구글 애널리틱스·서치 콘솔`, `네이버 서치 어드바이저`, `Vercel Analytics·Speed Insights`를 활용하여 실 사용자가 어떤 식으로 이용하고 있는지, 얼마나 사용하고 있는지 등을 파악하고 SEO 관리도 하였습니다.

### 실제 검색 결과 및 방문자

<div align="center" style="display: flex; gap: 5px; align-items: flex-start">
  <img width='50%' src='/images/project/cpm_arena/naver.png' />
  <img width='50%' src='/images/project/cpm_arena/google.png' />
</div>

&nbsp;

<img src='/images/project/cpm_arena/visitor.png' />

<span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">현재 DAU는 150명 정도이고, 커뮤니티에서 컴프매 아레나 도우미를 활용하여 사용하고 있습니다.</span>

&nbsp;

### 최적화

어느 정도 실 사용자가 생기면서 웬만한 기능들은 거의 추가를 했기 때문에 처음 목표로 잡았던 기능 및 디자인 구현에서 최적화로 방향을 돌리게 되었습니다.

이 생각을 가진 시점에서는 줄곧 사용했던 `styled-components`를 이용해서 디자인을 구현해놓았지만 런타임에 스타일을 생성하기 때문에, `서버 컴포넌트`로 활용 가능한 부분들도 모두 `클라이언트 컴포넌트`를 사용해야 했습니다.

이와 같은 이유 때문에 서버 컴포넌트 활용을 위해 예전 프로젝트에서 사용해보았던 `tailwindCSS`로의 마이그레이션을 진행하였습니다.

추가로 서버 컴포넌트의 장점을 살려 `data fetching`을 서버 컴포넌트에서 진행하도록 변경하였으며, 컴포넌트 분리 및 `useMemo`, `React.memo` 등을 활용하여 불필요한 리렌더링을 최소화하였습니다.

&nbsp;

다음으로는 폰트와 이미지 최적화에 초점을 맞췄습니다.

우선, 폰트 성능을 개선하기 위해 `@next/font`로 불러온 폰트에 swap 속성을 추가로 해줌으로써, 화면이 비어있는 시간을 줄여 First Paint 시간을 단축시켰고, 이미지 최적화를 위해 next.js에서 제공하는 `next/image`를 적극 활용하였습니다.

&nbsp;

```js showLineNumbers {3}
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    imageSizes: [16, 32, 48, 64, 96, 128],
  },
  compiler: {},
};
```

`next/image`를 통해서 자동으로 `webp` 형식으로 변환해주었고, `webp`보다 더 높은 압축률을 보여주는 `avif` 형식을 사용하고자 추가 설정을 해주었습니다.

다음 설정을 통해 `avif` 형식으로 먼저 변환을 하고, 지원하지 않는 경우에는 `webp` 형식으로 변경해주는 방식을 사용하였습니다.

&nbsp;

또, `placeholder`라는 속성을 활용해 이미지가 로드되기 전 `blur` 이미지를 화면에 출력하여, `CLS` 성능과 사용자 경험을 높였습니다.

LCP(Largest Content Paint) 개선을 위해 이에 해당하는 이미지에 priority 속성을 주어 우선적으로 로드할 수 있게 하였습니다.

### 최적화 결과

<div align="center" style="display: flex; gap: 5px">
  <img width='50%' src='/images/project/cpm_arena/main-prev.png' />
  <img width='50%' src='/images/project/cpm_arena/main-curr.png' />
</div>

<hr />

<div align="center" style="display: flex; gap: 5px">
  <img width='50%' src='/images/project/cpm_arena/entry-prev.png' />
  <img width='50%' src='/images/project/cpm_arena/entry-curr.png' />
</div>

> 최적화 이전 (좌) / 최적화 이후 (우)

이와 같은 최적화를 통해 lighthouse 기준으로 기존의 많이 떨어졌던 성능을 <span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">최대 60% 정도 향상</span>시켰습니다.

Vercel 기준으로도 86점에서 99점으로 향상시켰습니다.

&nbsp;

### 마치며

처음은 불편함을 해결하려고 시작했지만, 지금은 저에게 있어 가장 큰 의미를 만들어준 프로젝트가 되었습니다.

단순 개발에서 끝맺음을 하는 것이 아닌, 실 사용자가 있는 서비스를 운영하면서 서비스 개선에 더욱 욕심이 나게 되었습니다.

사용자들에게 오류나 개선 사항을 접수 받아 이를 해결하고, 더 쾌적하고 원활한 이용을 위해 최적화를 하며 많은 지식 습득과 좋은 경험을 하게 되었습니다. 또한, 제 사이트를 참조해서 각 커뮤니티 등에서 활용하는 것도 개발자로서 보람을 느꼈습니다.

이와 같은 경험을 통해 앞으로의 과정에서도 포기하지 않고 발전해 나아가는 좋은 원동력을 얻었다고 생각하고, 더 나은 개발자가 되도록 노력하겠습니다.
