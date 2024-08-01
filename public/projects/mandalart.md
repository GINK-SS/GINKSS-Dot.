![image](/images/project/mandalart/main.png)

## :link: Link

> Production : https://mandalart.gink-ss.com

&nbsp;

## :pushpin: Topic

미래를 위해 계획을 세워보세요!

인생의 목표를 한가운데에, 그 주위로 8개의 큰 목표를 잡아보세요!

그리고 각각의 큰 목표를 이루기 위한 나의 작은 실천 과제를 정해보세요!

당신의 미래를 설정하고 이뤄내기 위한, 여기는 <span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">만다라트</span> 입니다.

&nbsp;

## :bulb: Main Features

- 만다라트 작성
- 자동 저장 기능
- 이미지 출력 기능

&nbsp;

## :hammer_and_pick: Tech Stack

### Frontend

![Static Badge](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)
![Static Badge](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white)
![Static Badge](https://img.shields.io/badge/Redux--Toolkit-764ABC?style=flat-square&logo=Redux&logoColor=white)
![Static Badge](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

### CI / CD

![Static Badge](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Static Badge](https://img.shields.io/badge/Github_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

&nbsp;

## :key: Key Point

- 초기 로딩속도 및 검색엔진 최적화를 위해 Next.js 및 Vercel로 개발 및 배포
- html-to-image 라이브러리를 활용해 내용을 이미지로 출력하여 더 나은 시각적 경험 제공

&nbsp;

## :page_facing_up: Review

만다라트는 현재 메이저리그에서 뛰고 있는 `오타니 쇼헤이`가 어렸을 적 작성했던 것으로 유명합니다.

저를 포함해서 주변 지인들도 만다라트를 작성하고 싶어하여, 간편하게 웹 상에서 제작할 수 있도록 프로젝트를 진행하게 되었습니다.

페이지 이동이 거의 없다는 특징과 함께 검색엔진 최적화 등을 위해 SSG로 구현하려고 생각하였고, `Next.js`를 사용하여 개발하였습니다.

또한 디자인 관련해서 늘 써왔던 styled-components가 아닌 `tailwindCSS`를 사용하였습니다.

이를 통해, 초기 로딩 속도 대기 시간을 최소화할 수 있었고, 디자인 개발에서는 러닝커브가 낮은 `tailwindCSS`를 사용함으로써 생산성을 높일 수 있었습니다.

또한, 사용자가 작성한 내용은 로컬 스토리지에 저장을 하여 사용자로 하여금 접속할 때 기존에 작성한 내용이 유지되도록 하여 사용자 경험을 높이려고 하였습니다.

![image](/images/project/mandalart/otani.png)

### 이미지 출력

매번 페이지 방문을 통해 만다라트를 보는 것이 아닌, 실제 이미지 출력을 통해 좀 더 간편하게 확인할 수 있기를 희망하였습니다.

이미지 출력을 위한 다양한 라이브러리가 존재하였고, 처음에는 `html2canvas` 라이브러리를 사용하였습니다.

html2canvas가 html을 canvas로 전환하는 과정에서 뭔가 문제가 생기는 걸 느꼈고, 또 input 데이터와 관련해서 스타일이 제대로 반영이 되지 않는 문제가 있었습니다.

사용자가 직접 만다라트를 작성해야하기 때문에 input 혹은 textarea를 없앨 수는 없었고, `html-to-image` 라이브러리로 변경하게 되었습니다.

canvas 전환 없이 img로 바로 전환 시켜주었기 때문에, input 데이터와 적용한 CSS가 정상적으로 출력되는 것을 확인할 수 있었습니다.

또한, 이미지의 해상도와 품질을 조절하여 더 나은 시각적 경험을 제공하려고 하였습니다.

&nbsp;
