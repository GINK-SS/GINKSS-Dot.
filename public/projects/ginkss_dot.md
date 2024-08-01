# GINK-SS Dot.

## :pushpin: Topic

노션이나 기타 다른 플랫폼을 이용해서 본인의 포트폴리오를 정리하는 사람들이 많습니다.

프론트엔드 개발자로서 언젠가는 저만의 포트폴리오 사이트를 만들어 배포하고 싶었습니다.

이러한 마음으로 이번 프로젝트를 시작하였으며, 현재 보고 계시는 사이트가 이번 프로젝트로 탄생하였습니다.

&nbsp;

## :hammer_and_pick: Tech Stack

### Frontend

![Static Badge](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white)
![Static Badge](https://img.shields.io/badge/ReactJS-61DAFB?style=flat-square&logo=React&logoColor=black)
![Static Badge](https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white)
![Static Badge](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white)

### CI / CD

![Static Badge](https://img.shields.io/badge/Amazon_S3-569A31?style=flat-square&logo=amazons3&logoColor=white)
![Static Badge](https://img.shields.io/badge/Amazon_CloudFront-7E4BDA.svg?style=flat-square&logo=data:image/webp;base64,UklGRgQDAABXRUJQVlA4WAoAAAAgAAAADwAADwAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggFgEAABAFAJ0BKhAAEAAAwBIlsAJ0ugB+AB7gKZ3yAvlL2AP4Z/If8ZwCn6qn21VUjqHcmEAA/sK6+tv7E9Y5tgi4bNk+j71WMzPCR999LoBO0zcvnAOcjWlnPUiYECVET5YCH19yrnt7h/7QSaFZHa6ceMp3H+Bi0EagQvmF77k0339tOirJDcGe3NLH6cvOa8u/yL+Ffd2Oc4crL78Q/pAdrTQ0H7VC3r8Aj8YWrhVUNwD679KJnoDDza7vEoRZP+o0m8v/vUTJp6I/gu24PV34Lf+B4nUfehjTm3/MNCI/wTYMxwll/HwmXqWuLnEMYTzcf/4VU9DhBy5tP/wP4HI9+ob/4FBUT+fJ7/8KpJ0jCg/bZg1LMAAA)
![Static Badge](https://img.shields.io/badge/Github_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)

&nbsp;

## :key: Key Point

- UI/UX 디자인 및 반응형 디자인 구현하여 사용자 경험을 높임
- AWS의 S3와 CloudFront를 통해 웹 페이지를 배포하고, Github Actions를 활용해 CI/CD 파이프라인 구축

&nbsp;

## :page_facing_up: Review

### 디자인

형광 초록색을 포인트 컬러로 삼고 전체적인 스타일이 유지되도록 설계하였고, 모든 디바이스에서 원활하게 확인할 수 있도록 반응형 디자인을 구현하였습니다.

메인 페이지는 제 사진을 넣어 누가봐도 저의 포트폴리오임을 각인시키고, 매력 포인트가 될 수 있도록 하였습니다.

각 포트폴리오의 내용은 마크다운으로 작성하여 깃허브 디자인을 입혀서 화면에 나타날 수 있도록 하였고, 자주 사용하는 텍스트 버튼은 컴포넌트화하여 재사용할 수 있도록 하였습니다.

&nbsp;

### Contact

a 태그를 활용하여 href에 mailto를 넣어 기본 메일 앱을 통해 연락할 수 있는 방법이 존재하지만, 그렇지 않고 페이지 내에서 바로 연락을 취할 수 있도록 구현하고자 하였습니다.

모달을 활용하여 메일 form을 구현한 후, emailJS 라이브러리를 활용하여 구현하였습니다.

&nbsp;

### 배포

정적 페이지이기 때문에 AWS의 S3와 CloudFront를 활용하여 배포하였습니다.

하지만, 페이지에 변경 사항이 생기는 등 재배포를 해야할 때, 다시 빌드하고 빌드된 파일들을 다시 S3에 업로드하는 과정이 반복되는 것이 번거롭고 비효율적이라고 판단하였습니다.

따라서, Github Actions를 활용해 github에 commit push 시, 자동으로 재배포 하는 CI / CD 파이프라인을 구축하여 프로세스를 개선하였습니다.
