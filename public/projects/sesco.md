# 병해충 AI 진단 플랫폼

![image](/images/project/sesco/main.webp)

## :pushpin: Topic

해가 갈수록 식물 병해충으로 인한 농업 피해는 커지고 있고, 특히 이에 대응할 수 있는 전문가가 턱없이 부족하여 해결하기가 쉽지 않습니다.

따라서, 본 프로젝트는 기존의 전문가 부족에 대한 문제점을 기술적으로 해결하고 빠르게 대응할 수 있는 <span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">AI 기반의 병해충 탐지 시스템 솔루션</span>을 제시하려 합니다.

&nbsp;

## :bulb: Main Features

- 로그인 페이지
  - 서비스 미리보기 (노션)
  - 카카오 로그인
- 마이페이지
  - 사용자 정보 표시 및 변경 기능
- 병해충 탐지
  - AI 병해충 시각화 사진 표시 기능
  - 결과 및 대처 방안 표시 기능
- 지도
  - 지도 상의 병해충 정보 확인
- 알림 기능
- 탐지 히스토리 기능
- 북마크 기능
- 검색 기능

&nbsp;

## :hammer_and_pick: Tech Stack

![Static Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black)
![Static Badge](https://img.shields.io/badge/React--Native-61DAFB?style=flat-square&logo=React&logoColor=black)
![Static Badge](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)

&nbsp;

## :two_men_holding_hands: Team

- <span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">프론트엔드 개발자 1명</span>
- 백엔드 개발자 2명
- AI 개발자 1명

&nbsp;

## :raised_hand: Role

- 공통 파트 (기획 및 설계)
- 프론트엔드 개발
- 디자인 구현

&nbsp;

## :key: Key Point

- Apple•Google Map 및 Kakao Map API를 활용하여 사용자의 위치와 주변에 발생한 병해 충 정보를 지도에 표시함 
- git 관리 및 커밋 컨벤션 설정으로 변경 이력 관리 및 커밋 가독성을 개선

&nbsp;

## :clapper: Video

[![video](https://img.youtube.com/vi/uGhjUrU8ukk/0.jpg)](https://youtu.be/uGhjUrU8ukk)

SE. SCO 기능 설명 영상입니다. 기능 설명과 더불어 디자인 등을 보실 수 있습니다.

<span style="font-style: italic; opacity: 0.6">클릭 시, 유튜브 화면으로 이동합니다</span>

&nbsp;

## :page_facing_up: Review

처음 프론트엔드 개발자로써 진행한 프로젝트입니다.

주제 특성 상, 웹보다는 모바일에서 사용하는 것이 접근성 부분에서 훨씬 이점이 있다고 생각하였습니다.

또한, 조그맣게 식물을 키우는 젊은 세대가 주로 사용하는 `iOS`와 농업 활동의 주가 되는 중장년층이 주로 사용하는 `안드로이드` 모두에서 사용 가능하도록 개발을 할 필요성을 느꼈기 때문에 `React Native`를 사용하여 진행하였습니다.

&nbsp;

### 시스템 아키텍처

![image](/images/project/sesco/architecture.png)

&nbsp;

### 대표 색상

![image](/images/project/sesco/colors.png)

작물, 더 나아가 자연과 관련되었기 때문에 좀 더 자연친화적인 색을 중점으로 컨셉을 잡으려고 했습니다.

진한 초록을 사용하여 포인트를 줄 곳에, 기본 바탕색은 약간의 초록빛이 도는 흰색으로 적용하였습니다.

&nbsp;

### 로고 디자인

![image](/images/project/sesco/logo.png)

서비스 로고는 서비스가 작물, 자연과 관련된 것이기 때문에 자연을 잘 표현해주는 `나무`를 이용해 제작하였습니다.

또한, 컴포넌트들을 각지지 않게 구성하였기 때문에, 로고 또한 둥글둥글한 이미지가 잘 표현되도록 하였습니다.

&nbsp;

### UX 설계

`힉스의 법칙, 피츠의 법칙, 제이콥의 법칙, 밀러의 법칙, 파킨슨의 법칙`을 고려하여 설계하려고 하였고, 다음 사항을 중시하여 구현하였습니다.

- 앱을 사용하는 시점이나 편리성을 생각하여 데스크톱 유저보다 모바일 유저를 대상으로 경험을 높인다.
- 한 페이지에서는 최대한 적은 내용의 주제만 다룬다.
- 페이지의 depth를 최대한 줄여서 사용자에게 복잡성을 최소로 준다.
- 직관적인 배치와 다른 앱들과 전혀 다른 UX의 사용을 지양하여, 사용자로 하여금 빠르게 앱 사용법을 알도록 한다.

또한, 기기 조작에 서투른 중장년층을 위해 최대한 직관적이고 버튼 등을 크게 구현하였습니다.

&nbsp;

### 공통 컴포넌트

![image](/images/project/sesco/components.png)

&nbsp;

### Git 관리

아무렇게나 커밋을 작성했던 과거를 생각하면 혼자 개발을 했어도 시간이 지나고 난 후 어떤 식으로 커밋이 흘러갔는지 확인하기가 어려웠습니다. 이번 프로젝트에서는 커밋의 흐름을 훨씬 쉽게 파악하기 위해서 커밋 컨벤션을 활용하였습니다.

자주 사용되는 Udacity Style 이라고 불리는 `type: subject`의 포맷을 두어 설정하였습니다.

- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서 수정
- design: css 설정
- style: 세미콜론 누락 등 단순 코드 수정 (기능 변경 X)
- chore: 기타 나머지

위의 사항을 중심으로 커밋 메세지를 관리하였습니다.

또한, develop, main 브랜치를 분리하여 develop 브랜치에서 작업 후에 main 브랜치로 머지하는 방식을 통해 개발과 배포 브랜치를 분리하였습니다.

&nbsp;

### 마치며

학습했던 js로만 개발을 하는 게 아닌, 어떤 상황에서는 다른 언어로 작성된 코드를 수정해야 하는 일도 존재하였고, `android studio`와 `xCode`에서 작업을 해야할 때도 있어서 오류가 발생하는 일이 많았습니다.

![image](/images/project/sesco/fix_android.png)
> 겪었던 오류 중 일부

그럴 때마다 관련 블로그나 문서를 참고하면서 해결하려고 노력하였습니다.

이러한 노력 덕분인지, 첫 프론트엔드의 프로젝트로 세종대학교에서 주관하는 창의설계경진대회에서 `최우수상`을 받게 되었습니다.

이번 프로젝트를 통하여 자바스크립트 언어와 git 관리 및 커밋 컨벤션, 팀원들간의 소통 등 여러 부분에서 많이 배우고 성장할 수 있었고, 프론트엔드에 대한 흥미와 자신감과 더불어 사용자 경험 개선에 대한 중요성을 깨닿게 되는 계기가 되었습니다.
