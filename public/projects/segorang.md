# 세종대학교 커뮤니티 플랫폼

![image](/images/project/segorang/main.webp)

## :pushpin: Topic

요즘 많은 대학교에서는 거의 대부분 에브리타임을 주 커뮤니티로, 학생들의 소통이 이루어지고 있습니다.

그러나 서울대학교에는 스누라이프, 건국대학교에는 쿵, 고려대학교에는 고파스 같은 커뮤니티 또한 굉장히 활성화되어 있습니다.

따라서 본 프로젝트는 <span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">세종대학교의 자체 커뮤니티</span>를 만들어,

세종대학교 학생들의 결집력을 높이고, 활발하게 소통하며, 더 나은 활성화 공간을 만드는 것을 기대합니다.

&nbsp;

## :bulb: Main Features

- 세종대학교 인증 및 자체 로그인
  - 아이디 저장 및 자동 로그인 기능
- 게시물 작성
  - 에디터를 활용하여 글 효과 적용 가능
- 북마크
- 검색

&nbsp;

## :hammer_and_pick: Tech Stack

### Frontend

![Static Badge](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)
![Static Badge](https://img.shields.io/badge/ReactJS-61DAFB?style=flat-square&logo=React&logoColor=black)
![Static Badge](https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white)
![Static Badge](https://img.shields.io/badge/React_Hook_Form-EC5990?style=flat-square&logo=ReactHookForm&logoColor=white)
![Static Badge](https://img.shields.io/badge/MSW-FD6A33?style=flat-square&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIycHgiIGhlaWdodD0iMTIycHgiIHZpZXdCb3g9IjAgMCAxMjIgMTIyIiB2ZXJzaW9uPSIxLjEiPg0KICAgIDx0aXRsZT5tc3ctbG9nbzwvdGl0bGU+DQogICAgPGcgaWQ9Im1zdy1sb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2My4wMDAwMDAsIDYwLjUwMDAwMCkgcm90YXRlKC00Mi4wMDAwMDApIHRyYW5zbGF0ZSgtNjMuMDAwMDAwLCAtNjAuNTAwMDAwKSB0cmFuc2xhdGUoLTguMDAwMDAwLCAtMjEuMDAwMDAwKSIgc3Ryb2tlLXdpZHRoPSIyMSI+DQogICAgICAgICAgICA8cGF0aCBkPSJNNzUuMTM5NjY2Niw0Ni42NjgzMjUgQzc4LjYwMjQ5MTksNDYuNjY4MzI1IDgxLjczNzQ5MTksNDguMDcxOTEyNCA4NC4wMDY3ODU2LDUwLjM0MTIwNiBDODYuMjc2MDc5Myw1Mi42MTA0OTk3IDg3LjY3OTY2NjYsNTUuNzQ1NDk5NyA4Ny42Nzk2NjY2LDU5LjIwODMyNSBDODcuNjc5NjY2Niw2Mi4zMDM2NzE2IDg2LjUzNDg1Miw2NS4yODk2NTA1IDg0LjQ2NTUzNTYsNjcuNTkxNjI3OSBMODQuNDY1NTM1Niw2Ny41OTE2Mjc5IEw0OC4yMzIwNjQ4LDEwNy44OTg5NjMgQzQ3LjUxMjA5MzQsMTA4LjY5OTg4NCA0Ni41MzU2NDQ0LDEwOS4xMzMxNTUgNDUuNTM4OTU4MSwxMDkuMTg2MjA0IEM0NC41NDIyNzE4LDEwOS4yMzkyNTIgNDMuNTI1MzQ4MiwxMDguOTEyMDc3IDQyLjcyNDQyNzYsMTA4LjE5MjEwNiBMNDIuNzI0NDI3NiwxMDguMTkyMTA2IEw2LjE5NzgxNDM1LDY3LjU5MTYyNzkgQzMuODgyODI5MTgsNjUuMDE2MzYwMyAyLjgzMDgzNjksNjEuNzQ2NTU5OSAzLjAwMTQwNzgxLDU4LjU0MTgzMDIgQzMuMTcxOTc4NzMsNTUuMzM3MTAwNCA0LjU2NTExMjg0LDUyLjE5NzQ0MTIgNy4xNDAzODA0Niw0OS44ODI0NTYgQzkuNDQyMzU3ODcsNDcuODEzMTM5NiAxMi40MjgzMzY4LDQ2LjY2ODMyNSAxNS41MjM2ODMzLDQ2LjY2ODMyNSBMMTUuNTIzNjgzMyw0Ni42NjgzMjUgWiIgaWQ9ImJhY2siIHN0cm9rZT0iI0ZGRiIgb3BhY2l0eT0iMC40OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDUuMzMxNjc1LCA4MS41MDAwMDApIHJvdGF0ZSg5MC4wMDAwMDApIHRyYW5zbGF0ZSgtNDUuMzMxNjc1LCAtODEuNTAwMDAwKSAiLz4NCiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDUuODYwODIsNDYuNjY4MzI1IEMxNDYuOTM3Nzc1LDQ2LjY2ODMyNSAxNDcuOTEyNzc1LDQ3LjEwNDg0NzQgMTQ4LjYxODUzNiw0Ny44MTA2MDg2IEMxNDkuMzI0Mjk3LDQ4LjUxNjM2OTggMTQ5Ljc2MDgyLDQ5LjQ5MTM2OTggMTQ5Ljc2MDgyLDUwLjU2ODMyNSBDMTQ5Ljc2MDgyLDUxLjUzMDk5MjYgMTQ5LjQwNDc3Nyw1Mi40NTk2NDY0IDE0OC43NjEyMSw1My4xNzU1NzI0IEwxNDguNzYxMjEsNTMuMTc1NTcyNCBMOTkuNTY4NzE0OSwxMDcuODk4OTYzIEM5OC44NDg3NDM1LDEwOC42OTk4ODQgOTcuODcyMjk0NCwxMDkuMTMzMTU1IDk2Ljg3NTYwODEsMTA5LjE4NjIwNCBDOTUuODc4OTIxOCwxMDkuMjM5MjUyIDk0Ljg2MTk5ODMsMTA4LjkxMjA3NyA5NC4wNjEwNzc3LDEwOC4xOTIxMDYgTDk0LjA2MTA3NzcsMTA4LjE5MjEwNiBMNDQuNTc1NDQwNCw1My4xNzU1NzI0IEM0My44NTU0Njg5LDUyLjM3NDY1MTggNDMuNTI4Mjk0Myw1MS4zNTc3MjgyIDQzLjU4MTM0MjcsNTAuMzYxMDQxOSBDNDMuNjM0MzkxLDQ5LjM2NDM1NTYgNDQuMDY3NjYyNCw0OC4zODc5MDY2IDQ0Ljg2ODU4Myw0Ny42Njc5MzUyIEM0NS41ODQ1MDksNDcuMDI0MzY3OSA0Ni41MTMxNjI3LDQ2LjY2ODMyNSA0Ny40NzU4MzAzLDQ2LjY2ODMyNSBMNDcuNDc1ODMwMyw0Ni42NjgzMjUgWiIgaWQ9ImZyb250IiBzdHJva2U9IiNGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk2LjY2ODMyNSwgODEuNTAwMDAwKSByb3RhdGUoLTkwLjAwMDAwMCkgdHJhbnNsYXRlKC05Ni42NjgzMjUsIC04MS41MDAwMDApICIvPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+)
![Static Badge](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)

### 배포

![Static Badge](https://img.shields.io/badge/Amazon_S3-569A31?style=flat-square&logo=amazons3&logoColor=white)
![Static Badge](https://img.shields.io/badge/Amazon_CloudFront-7E4BDA.svg?style=flat-square&logo=data:image/webp;base64,UklGRioFAABXRUJQVlA4WAoAAAAgAAAAHwAAHwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggPAMAAPAQAJ0BKiAAIAA+MRKHQqIhDAMAEAGCWwAnTKEfjeq00t2A3AG8V+gB5VHsOfuh6U93E/XOSw9lcnW9VzH2OR/t2kV/1L8tOaS6582/9p/J33iP7fya/NH+b+2b7AP4t/Of7f+ZP+E///0zes30Ef03GCcbnsXmZu5JmTR5FNzwVIVGR5TSi/VRSzOBSueEAAD+7pnY/d4BjLD/+gQWtKjwYIIjg73ORF+Ij6aWFl1QQCwyMABQjyJjJcUJMFhUlOlwC09Os+x5MirnRWqUqAPyf4s662fB3kJp0o9EaxKf9Ai/u0h4+zWKXiQm/89CbUrddFmTgl2ET6p//ElsFz1TlNvh6xd5POttBH6XrgSKjQm63uxof/drPY/Idg7+0uZE4XvZf+hgeeouNca6z/zi2lwe7T7HglGCUmPRGc+32wQolATJg2fplE8vgWDgUyOK5LBS9aAG2RhHz+v+mK/2S//+rQ3y7Xjc6Tq53/0MS8FXNEuht9YrFptqmZAdOnmmJRCf5xiY5z9FVEArL+qI/DUKy1XTCH0zRtS6xG0n+RIH///sRcCnmOanU+RCOxTFVBNR8QhF87/sv9Nh3QP/eTdpWIEmA8Urj4X86fzhXa11A+NhSPx7m+5Rwxt+jt3tmwgQR3YfcAlDpDIEBTmSEtf/5X+hjezncriAT9MGK59nXgImXBtGBDplCVjU/9OUYPDL3YN5oBQloajVK+cAHKRBC48RkRA8QsD8YYhAS2u/AcRPDihsHxdQmUNxsNMqwtefeDThQngvpJBP1/FNHrl2/2qyQxerCJsicnx5jrl6NYbo2f1cUie/aq9Trkn6SM2Vu9//rXaVoW+aQ9YDYY3NiMwttW/f/L/zfSan6h+FKj6cABrB4f+VWNevSGxuQ6qW97hHzLn/LyUcM9OAygFHOxk6vhCLqSw2PlC5CyEDwoVFWaHA7GYNZlAH+XX9/TnwzHB9VajzaIoya5vFKB+cNdL4A9MF6Eo9O040EMzk/+i9nbJ5SM8CfIofrurfmOrQYmUS0atOs+//mLLXiiWdZA78luHBZUBiVJV84Go0qHkqKOmpQYV22SN/3Dh0jAiVnuU5EO4AAA==)

&nbsp;

## :two_men_holding_hands: Team

- <span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">프론트엔드 개발자 1명</span>
- 백엔드 개발자 1명

&nbsp;


## :key: Key Point

- 백엔드 API 개발 지연으로 인한 불필요한 대기 시간을 최소화하기 위해 MSW를 활용하여 개발 환경을 구축
- react-hook-form 라이브러리를 통해 불필요한 렌더링을 막고, 상태 관리를 단순화하여 코드 가독성 개선
- react-draft-wysiwyg 텍스트 에디터 라이브러리를 활용 및 커스텀 하여 에디터의 사용자 경험 향상

&nbsp;

## :page_facing_up: Review

자체 회원가입으로 진행하고자 하였고, 사용자가 세종대학교 구성원인지 확인한 후에 설정한 아이디, 비밀번호 등 사용자 정보를 입력받았습니다.

이 과정에서 각 input마다의 state를 관리하고 이 state 마다의 이벤트 핸들러 같은 여러 함수 등이 필요했고, 이는 코드 길이 증가 및 가독성이 떨어지는 결과로 이어졌습니다.

코드 개선을 위해 관련 라이브러리를 찾아보던 중 `react-hook-form`을 알게 되었고, 비제어 컴포넌트 방식으로 동작하여 불필요한 리렌더링을 방지한다는 점이 마음에 들었습니다.

친절하게 잘 작성되어 있는 공식 문서를 참조하면서 라이브러리를 도입하였고, 훨씬 적은 코드로 더 나은 성능을 보여주어 간편하게 form 관리를 할 수 있었습니다.

&nbsp;

기존에는 작성된 글을 줄바꿈 기준으로 나눠 배열로 관리하였습니다. 하지만, 이렇게 관리하게 되면 모든 문장이 동일한 스타일로 표시되어 사용자가 원하는 스타일로 작성할 수 없다는 단점이 존재하였습니다.

이러한 단점들을 개선하기 위해 텍스트 에디터 라이브러리를 찾아보게 되었습니다.

처음에는 가장 유명하고 여러 기능이 존재하는 `TinyMCE`를 도입하였지만, 러닝 커브와 툴바 커스터마이징이 의도대로 되지 않던 문제 등의 이유로 `react-draft-wysiwyg` 라이브러리를 최종적으로 도입하여 사용자가 더 직관적이고 생산성 있는 글을 작성할 수 있도록 개선하였습니다.

&nbsp;

혼자 하는 프로젝트가 아닌 팀 프로젝트이고, 팀원간의 프로젝트 진행 속도 등이 다르기 때문에 개발을 진행한 코드가 있음에도 불구하고 백엔드의 개발 속도에 의존하는 부분이 필연적으로 존재하였습니다.

이와 같은 이유로 다른 기능을 개발하다 백엔드 개발에 맞춰 다시 돌아와서 테스트를 진행하고, 그제서야 오류 부분을 발견하고 수정하는 일이 잦았습니다.

따라서 불필요한 대기 상황을 줄이기 위해 모킹 시스템을 적용하게 되었습니다.

`MSW` 라이브러리를 활용하여 API 명세에 따라 목업 데이터들을 구성하고, 이 데이터를 활용하여 코드를 수정하고 백엔드 개발의 의존성을 덜어 `개발 생산성을 증가`시켰습니다.
