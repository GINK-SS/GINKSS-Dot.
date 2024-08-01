![image](/images/project/bab_friends/main.png)

## :link: Link

> Demo : https://bab-friend.gink-ss.com (비용 문제로 배포 중단)

&nbsp;

## :pushpin: Topic

타지에 방문했거나, 혼자서는 식사하고 싶지 않는 당신이라면?

**밥-프렌즈**는 <span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">새로운 사람들과 함께 밥 약속을 쉽게 잡도록 도와주는 플랫폼</span> 입니다.

게시물을 작성하거나 작성된 게시물을 확인하여 작성자가 등록한 링크(오픈채팅방)를 통해 참여할 수 있도록 도와줍니다.

지역, 가격, 음주 여부, 나이·성별 제한 등을 활용하여 설정할 수 있으며, 댓글을 통해 작성자와 상호작용 또한 가능합니다.

참여한 게시물에 한하여 후기를 작성할 수 있으며 본인에게 작성된 후기도 확인할 수 있습니다.

&nbsp;

## :bulb: Main Features

- 카카오 로그인
- 게시물 목록 확인 (무한 스크롤)
- 게시물 필터 기능
  - `참여 가능만 보기 O`
    - `로그인 O` - '확정 완료 · 나이 제한 · 성별 제한' 제외한 나머지 게시물 확인
    - `로그인 X` - '확정 완료' 제외한 나머지 게시물 확인
  - `참여 가능만 보기 X` - 모든 게시물 확인
- 게시물 작성 (지도에서 장소 검색 후 선택 기능)
- 참여한 게시물 확인
- 검색 기능
- 후기 작성 및 후기 목록 확인

<br />

## :hammer_and_pick: Tech Stack

### Frontend

![Static Badge](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)
![Static Badge](https://img.shields.io/badge/ReactJS-61DAFB?style=flat-square&logo=React&logoColor=black)
![Static Badge](https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white)
![Static Badge](https://img.shields.io/badge/React_Query-FF4154?style=flat-square&logo=ReactQuery&logoColor=white)
![Static Badge](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square&logo=ReactHookForm&logoColor=white)
![Static Badge](https://img.shields.io/badge/MSW-FD6A33?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIycHgiIGhlaWdodD0iMTIycHgiIHZpZXdCb3g9IjAgMCAxMjIgMTIyIiB2ZXJzaW9uPSIxLjEiPg0KICAgIDx0aXRsZT5tc3ctbG9nbzwvdGl0bGU+DQogICAgPGcgaWQ9Im1zdy1sb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2My4wMDAwMDAsIDYwLjUwMDAwMCkgcm90YXRlKC00Mi4wMDAwMDApIHRyYW5zbGF0ZSgtNjMuMDAwMDAwLCAtNjAuNTAwMDAwKSB0cmFuc2xhdGUoLTguMDAwMDAwLCAtMjEuMDAwMDAwKSIgc3Ryb2tlLXdpZHRoPSIyMSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNNzUuMTM5NjY2Niw0Ni42NjgzMjUgQzc4LjYwMjQ5MTksNDYuNjY4MzI1IDgxLjczNzQ5MTksNDguMDcxOTEyNCA4NC4wMDY3ODU2LDUwLjM0MTIwNiBDODYuMjc2MDc5Myw1Mi42MTA0OTk3IDg3LjY3OTY2NjYsNTUuNzQ1NDk5NyA4Ny42Nzk2NjY2LDU5LjIwODMyNSBDODcuNjc5NjY2Niw2Mi4zMDM2NzE2IDg2LjUzNDg1Miw2NS4yODk2NTA1IDg0LjQ2NTUzNTYsNjcuNTkxNjI3OSBMODQuNDY1NTM1Niw2Ny41OTE2Mjc5IEw0OC4yMzIwNjQ4LDEwNy44OTg5NjMgQzQ3LjUxMjA5MzQsMTA4LjY5OTg4NCA0Ni41MzU2NDQ0LDEwOS4xMzMxNTUgNDUuNTM4OTU4MSwxMDkuMTg2MjA0IEM0NC41NDIyNzE4LDEwOS4yMzkyNTIgNDMuNTI1MzQ4MiwxMDguOTEyMDc3IDQyLjcyNDQyNzYsMTA4LjE5MjEwNiBMNDIuNzI0NDI3NiwxMDguMTkyMTA2IEw2LjE5NzgxNDM1LDY3LjU5MTYyNzkgQzMuODgyODI5MTgsNjUuMDE2MzYwMyAyLjgzMDgzNjksNjEuNzQ2NTU5OSAzLjAwMTQwNzgxLDU4LjU0MTgzMDIgQzMuMTcxOTc4NzMsNTUuMzM3MTAwNCA0LjU2NTExMjg0LDUyLjE5NzQ0MTIgNy4xNDAzODA0Niw0OS44ODI0NTYgQzkuNDQyMzU3ODcsNDcuODEzMTM5NiAxMi40MjgzMzY4LDQ2LjY2ODMyNSAxNS41MjM2ODMzLDQ2LjY2ODMyNSBMMTUuNTIzNjgzMyw0Ni42NjgzMjUgWiIgaWQ9ImJhY2siIHN0cm9rZT0iI0ZGRiIgb3BhY2l0eT0iMC40OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUuMzMxNjc1LCA4MS41MDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtNDUuMzMxNjc1LCAtODEuNTAwMDAwKSAiLz4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDUuODYwODIsNDYuNjY4MzI1IEMxNDYuOTM3Nzc1LDQ2LjY2ODMyNSAxNDcuOTEyNzc1LDQ3LjEwNDg0NzQgMTQ4LjYxODUzNiw0Ny44MTA2MDg2IEMxNDkuMzI0Mjk3LDQ4LjUxNjM2OTggMTQ5Ljc2MDgyLDQ5LjQ5MTM2OTggMTQ5Ljc2MDgyLDUwLjU2ODMyNSBDMTQ5Ljc2MDgyLDUxLjUzMDk5MjYgMTQ5LjQwNDc3Nyw1Mi40NTk2NDY0IDE0OC43NjEyMSw1My4xNzU1NzI0IEwxNDguNzYxMjEsNTMuMTc1NTcyNCBMOTkuNTY4NzE0OSwxMDcuODk4OTYzIEM5OC44NDg3NDM1LDEwOC42OTk4ODQgOTcuODcyMjk0NCwxMDkuMTMzMTU1IDk2Ljg3NTYwODEsMTA5LjE4NjIwNCBDOTUuODc4OTIxOCwxMDkuMjM5MjUyIDk0Ljg2MTk5ODMsMTA4LjkxMjA3NyA5NC4wNjEwNzc3LDEwOC4xOTIxMDYgTDk0LjA2MTA3NzcsMTA4LjE5MjEwNiBMNDQuNTc1NDQwNCw1My4xNzU1NzI0IEM0My44NTU0Njg5LDUyLjM3NDY1MTggNDMuNTI4Mjk0Myw1MS4zNTc3MjgyIDQzLjU4MTM0MjcsNTAuMzYxMDQxOSBDNDMuNjM0MzkxLDQ5LjM2NDM1NTYgNDQuMDY3NjYyNCw0OC4zODc5MDY2IDQ0Ljg2ODU4Myw0Ny42Njc5MzUyIEM0NS41ODQ1MDksNDcuMDI0MzY3OSA0Ni41MTMxNjI3LDQ2LjY2ODMyNSA0Ny40NzU4MzAzLDQ2LjY2ODMyNSBMNDcuNDc1ODMwMyw0Ni42NjgzMjUgWiIgaWQ9ImZyb250IiBzdHJva2U9IiNGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk2LjY2ODMyNSwgODEuNTAwMDAwKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC05Ni42NjgzMjUsIC04MS41MDAwMDApICIvPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+)
![Static Badge](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)

### CI / CD

![Static Badge](https://img.shields.io/badge/Amazon_S3-569A31?style=flat-square&logo=amazons3&logoColor=white)
![Static Badge](https://img.shields.io/badge/Amazon_CloudFront-7E4BDA.svg?style=flat-square&logo=data:image/webp;base64,UklGRgQDAABXRUJQVlA4WAoAAAAgAAAADwAADwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggFgEAABAFAJ0BKhAAEAAAwBIlsAJ0ugB+AB7gKZ3yAvlL2AP4Z/If8ZwCn6qn21VUjqHcmEAA/sK6+tv7E9Y5tgi4bNk+j71WMzPCR999LoBO0zcvnAOcjWlnPUiYECVET5YCH19yrnt7h/7QSaFZHa6ceMp3H+Bi0EagQvmF77k0339tOirJDcGe3NLH6cvOa8u/yL+Ffd2Oc4crL78Q/pAdrTQ0H7VC3r8Aj8YWrhVUNwD679KJnoDDza7vEoRZP+o0m8v/vUTJp6I/gu24PV34Lf+B4nUfehjTm3/MNCI/wTYMxwll/HwmXqWuLnEMYTzcf/4VU9DhBy5tP/wP4HI9+ob/4FBUT+fJ7/8KpJ0jCg/bZg1LMAAA)
![Static Badge](https://img.shields.io/badge/Github_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

<br />

## :two_men_holding_hands: Team

- <span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">프론트엔드 개발자 2명</span>
- 백엔드 개발자 1명

&nbsp;

## :raised_hand: Role

- 팀 리더
- 공통 파트 (기획 및 설계)
- 프론트엔드 개발
- 디자인 개발
- 배포

<br />

## :key: Key Point

- 카카오 OAuth 로그인 구현 및 Route 컴포넌트를 Wrapping 하여 반복적인 사용자 인증 및 접근 권한 관리를 효율적으로 처리
- IntersectionObserver API를 활용한 무한 스크롤을 통해 초기 로딩 시간을 단축 시키고, 페이지 로드 속도를 개선함
- 원활한 협업을 위한 코드 형상 관리를 위해 git-flow와 같은 방식을 통해 프로젝트에 적용하고, 코드 리뷰를 통해 작성한 코드와 아키텍처에 대해 고민하고 개선하고자 함

&nbsp;

## :page_facing_up: Review

다음은 사용자 인증 관련 전반적인 흐름도입니다.

<div align="center">
  <img src='/images/project/bab_friends/auth.png' />
</div>

&nbsp;

처음 개발과정에서는 accessToken과 같은 사용자 정보를 로컬 스토리지에 저장하고 사용하였지만, 이는 보안적인 측면 등 여러 문제를 야기할 수 있기 때문에 반드시 수정해야 했습니다.

사용자 인증 및 구별을 위해 필요한 accessToken은 메모리 상에서만 보유하고 있고, 

새로고침(리로드) 시에는 accessToken을 포함한 정보가 사라지기 때문에, refreshToken을 이용해 accessToken을 재발급 합니다.

토큰은 만료 시간이 존재하기 때문에, accessToken을 전달 받은 후에는 만료 시간을 카운트 다운합니다.

만료 직전에는 `silent refresh` 를 통해 사용자 모르게 refreshToken을 이용해 accessToken을 재발급 받아 계속 사용자 인증을 유지합니다.

로그아웃 시에는 클라이언트에서 사용자 정보를 삭제함으로써 사용자 인증 유지를 끊고, 서버로 쿠키에 저장된 refreshToken 삭제를 요청합니다.

&nbsp;

다음은 위의 설명과 관련된 코드 일부 입니다.

```js showLineNumbers
const refresh = async () => {
  const {
    data: {
      data: { accessToken },
    },
  } = await request.post<TokenResponse>('/auth/refresh');

  if (!accessToken) {
    setRecoil(authState, {
      authStatus: AuthStatus.unauthorized,
    });

    return;
  }

  setAccessToken(accessToken);

  return accessToken;
};
```

> 페이지 로드 혹은 새로고침 시, 실행되는 코드
>
> accessToken를 정상적으로 불러온다면 Axios 인스턴스 헤더에 넣고, 그렇지 않다면 사용자를 비인증 상태로 변경

&nbsp;

```js showLineNumbers
const silentRefresh = () => {
  refreshTimer = setTimeout(
    async () => {
      try {
        const accessToken = await refresh();

        if (!accessToken) return;

        silentRefresh();
      } catch (e) {
        setTimeout(() => silentRefresh(), 10000);
      }
    },
    1000 * 60 * 29
  );
};
```

> accessToken 만료 직전 실행되는 코드
>
> accessToken 만료 주기가 30분이기 때문에 만료 1분 전에 실행되고, 오류가 발생한 경우엔 10초 후에 재실행

&nbsp;

```js showLineNumbers {10-18, 20-33}
const AuthChecker = ({ children }: { children: ReactNode }) => {
  const [authInfo, setAuthInfo] = useRecoilState(authState);
  const queryClient = useQueryClient();
  const { refetch: refetchUserInfo, data: userInfo } = useQuery({
    queryKey: ['userInfo'],
    queryFn: authApi.requestUserInfo,
    enabled: false,
  });

  useEffect(() => {
    if (authInfo.authStatus === AuthStatus.authorized) {
      refetchUserInfo();
    }

    if (authInfo.authStatus === AuthStatus.unauthorized) {
      queryClient.removeQueries({ queryKey: ['userInfo'], exact: true });
    }
  }, [authInfo, queryClient, refetchUserInfo]);

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await authApi.refresh();

        if (!accessToken) return;

        setAuthInfo({ authStatus: AuthStatus.authorized });
        authApi.silentRefresh();
      } catch (e) {
        setAuthInfo({ authStatus: AuthStatus.unauthorized });
      }
    })();
  }, [setAuthInfo]);

  if (authInfo.authStatus === AuthStatus.pending) return null;

  if (authInfo.authStatus === AuthStatus.authorized && !userInfo) return null;

  return (
    <>{children}</>
  );
};
```

> 처음 사용자 상태는 pending이고, accessToken의 유무에 따라 authorized 혹은 unauthorized 상태로 변함
>
> accessToken이 존재한다면 사용자의 정보를 불러옴

&nbsp;

### 절대경로 설정

```js
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@_apis/*": ["apis/*"],
      "@_assets/*": ["assets/*"],
      "@_components/*": ["components/*"],
      "@_hoc/*": ["hoc/*"],
      "@_libs/*": ["libs/*"],
      "@_mocks/*": ["mocks/*"],
      "@_pages/*": ["pages/*"],
      "@_recoil/*": ["recoil/*"],
      "@_style/*": ["style/*"],
      "@_types/*": ["types/*"],
      "@_utils/*": ["utils/*"]
    }
  }
}
```

다른 폴더에서 필요한 함수나 컴포넌트 등을 불러 올 때, 상대 경로로 불러오게 되어 파일의 디렉터리를 변경할 때 추가로 변경해줘야한다는 점과 코드가 지저분해진다는 단점이 있었습니다.

이를 개선하기 위해 `craco`를 활용하여 위의 코드처럼 절대 경로로 맞춰주었습니다.

&nbsp;

### 무한 스크롤

초기 API 설계가 한번에 전체 데이터를 넘겨주는 방식으로 되어 있어 속도 저하 등의 이유로 개선할 필요가 있었습니다.

처음에는 Scroll Event를 통해 무한 스크롤을 구현하려고 했으나, 여러 기술 블로그 등을 접하여 IntersectionObserver API가 Scroll Event와 대비하여 가지는 장점들을 배워 IntersectionObserver API를 통해 무한 스크롤을 구현하였습니다.

따라서 데이터를 한 번에 렌더링 하지 않고, 가장 하단에 위치한 Target 컴포넌트가 Viewport와 교차하면 추가로 데이터를 불러오는 식으로 구현하여 성능을 개선하였습니다.

&nbsp;

### 팀 프로젝트를 하면서

같은 포지션의 팀원과 작업했기 때문에 다른 프로젝트보다 git 관리가 중요하였습니다. 따라서 원활한 협업을 위한 코드 형상 관리에 중점을 두었습니다. 잘 알려진 git-flow 방식의 일부를 수용하고 약간의 변형을 하여 프로젝트에 적용하였습니다.

또한, 개발한 코드를 merge 하기 전에 코드 리뷰를 통해 작성한 코드와 아키텍처에 대해 고민하고 개선하고자 하였습니다. 다른 방식으로 설계하고 구현하는 팀원의 코드를 보며 학습효과를 경험할 수 있었고, 코드 리뷰가 가지는 긍정적 효과를 느꼈습니다.
