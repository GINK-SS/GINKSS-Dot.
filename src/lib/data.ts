import { ProjectInfo } from '../types/project';

const introduce = [
  '프론트엔드 개발자 이상민입니다.',
  '사용자가 즐거운 경험을 할 수 있도록 하는 것이 개발자로서의 목표입니다.',
  '더 나은 결과를 위해 항상 배우고 노력하겠습니다.',
];

const education = [
  {
    name: '세종대학교',
    date: '2016.03 ~ 2023.02',
    content: [
      '전자정보공학대학 컴퓨터공학과 전공 (졸업)',
      '전공 평점 - 3.81 / 4.5',
      '대학 방송국 영상부장 (2016. 03 ~ 2017. 12)',
    ],
    file: 'graduate.webp',
  },
];

const prizes = [
  {
    name: '컴퓨터공학과 창의설계경진대회',
    date: '2022.12.22',
    prize: '최우수상',
    where: '세종대학교',
    file: '14th_CD_contest.webp',
  },
  {
    name: '교내 제 4회 SW경시대회 (세종코딩챌린지위크)',
    date: '2017.10.27',
    prize: '4등',
    where: '세종대학교',
    file: '4th_SW_Contest.webp',
  },
];

const skills = [
  {
    name: '',
    content: [
      'JavaScript / Typescript',
      'React / Next.js',
      'React-Native',
      'MySQL',
      'AWS (S3, CloudFront) / Vercel',
      'Github Actions (CI / CD)',
    ],
  },
];

const submit = ['정상적으로 전송되었습니다.', '빠른 시일 내에 확인하여 연락 드리겠습니다.', '감사합니다 :- )'];

const summary = [
  {
    name: 'CPM_ARENA',
    file: 'cpm_arena.png',
    month: 'MAY',
    year: 2024,
    summary: '컴프매 아레나 도우미',
    role: '개인 프로젝트',
    people: [],
    url: 'cpm_arena',
  },
  {
    name: 'BAB-Friend',
    file: 'bab_friend.webp',
    month: 'DECEMBER',
    year: 2023,
    summary: '함께 식사 약속을 쉽게 잡도록 도와주는 플랫폼',
    role: 'Leader / Front-end / Designer',
    people: ['GINK-SS', 'jutrong', 'hun-cloud'],
    url: 'bab_friend',
  },
  {
    name: 'Mandalart',
    file: 'mandalart.png',
    month: 'NOVEMBER',
    year: 2023,
    summary: '만다라트를 제작할 수 있게 도와주는 사이트',
    role: '개인 프로젝트',
    people: [],
    url: 'mandalart',
  },
  {
    name: 'GINK-SS Dot.',
    file: 'ginkss_dot.webp',
    month: 'APRIL',
    year: 2023,
    summary: '포트폴리오 사이트',
    role: '개인 프로젝트',
    people: [],
    url: 'ginkss_dot',
  },
  {
    name: 'SEGORANG',
    file: 'segorang.webp',
    month: 'FEBRUARY',
    year: 2023,
    summary: '세종대학교 커뮤니티 사이트',
    role: 'Front-end / Designer',
    people: ['GINK-SS', 'Scof'],
    url: 'segorang',
  },
  {
    name: 'SE.SCO',
    file: 'sesco.webp',
    month: 'SEPTEMBER',
    year: 2022,
    summary: 'AI 병해충 진단 플랫폼',
    role: 'Front-end / Designer',
    people: ['GINK-SS', 'Scof', '837477', 'hongseong0314'],
    url: 'sesco',
  },
  {
    name: 'LooKlendar',
    file: 'looklendar.webp',
    month: 'MARCH',
    year: 2020,
    summary: '룩북 캘린더 형식의 공유 서비스',
    role: 'Back-end',
    people: ['GINK-SS', 'HUI'],
    url: 'looklendar',
  },
];

const info: { [key: string]: ProjectInfo } = {
  cpm_arena: {
    name: 'CPM_ARENA',
    role: '개인 프로젝트',
    people: [],
    github: 'https://github.com/GINK-SS/CPM_ARENA',
    contents: [
      { type: 'img', content: 'cpm_arena1.png' },

      { type: 'subject', content: '접속 링크' },
      {
        type: 'link',
        content: 'https://cpm-arena.com',
      },
      { type: 'divide', content: '' },

      { type: 'subject', content: '프로젝트 소개' },
      {
        type: 'text',
        content: ["'컴투스 프로야구 for 매니저'의 컨텐츠 중 하나인 아레나 관련 정보를 제공해주는 사이트"],
      },
      { type: 'divide', content: '' },

      { type: 'subject', content: '기술 스택' },
      {
        type: 'techStack',
        content: ['!Typescript', '!Next.js', '!Zustand', '!Styled-components', '!Vercel'],
      },
      { type: 'divide', content: '' },
      { type: 'img', content: 'cpm_arena2.png' },
      {
        type: 'text',
        content: ['현재 일일 접속자 수는 약 100명 정도 입니다. (2024. 05 기준)'],
      },
    ],
  },
  bab_friend: {
    name: 'BAB-friend',
    role: 'Leader / Front-end / Designer',
    people: ['GINK-SS', 'jutrong', 'hun-cloud'],
    github: 'https://github.com/GINK-SS/bab-friend',
    contents: [
      { type: 'img', content: 'bab_friend1.png' },
      { type: 'subject', content: '프로젝트 소개' },
      {
        type: 'text',
        content: ['새로운 사람들과 함께하는 식사 약속을 쉽게 잡도록 도와주는 플랫폼'],
      },
      { type: 'divide', content: '' },

      { type: 'subject', content: '기술 스택' },
      {
        type: 'techStack',
        content: [
          '!Typescript',
          '!React',
          '!Recoil',
          '!Tanstack-Query',
          '!Styled-components',
          '!Axios',
          '!MSW',
          '!AWS (S3 CloudFront)',
          '!Github Actions (CI / CD)',
          '!Figma',
        ],
      },
      { type: 'divide', content: '' },
      { type: 'subject', content: '팀 구성' },
      { type: 'text', content: ['프론트엔드 개발자 2명', '백엔드 개발자 1명'] },
      { type: 'divide', content: '' },
      { type: 'subject', content: '맡은 역할' },
      { type: 'text', content: ['팀 리더', '공통 파트 (기획 및 설계)', '프론트엔드 개발', '디자인 개발', '배포'] },
      { type: 'divide', content: '' },
      {
        type: 'text',
        content: [
          '- 카카오 OAuth 로그인 구현 및 Auth 접근 권한 관리',
          '‘글 작성’ 및 ‘내 정보’ 같은 핵심 페이지는 로그인한 사용자에게만 허용되도록 설계 및 사용자에 따라 접근 권한의 차이를 둠',
          '각각의 페이지마다 사용자 권한에 따른 속성을 props로 넘겨주는 방식 대신, HOC를 이용하여 중복 코드를 최소화',
        ],
      },
      { type: 'img', content: 'bab_friend2.png' },
      {
        type: 'text',
        content: [
          '- 사용자 경험 최적화',
          '초기 API 설계가 데이터를 한번에 넘겨주는 방식으로 되어 있어 속도 저하 등의 이유로 개선할 필요를 느끼고, Scroll Event와 대비하여 가지는 장점들의 이유로 IntersectionObserver API를 통해 무한 스크롤을 구현',
          'accessToken이 만료되기 전에 자동 재발급을 통한 사용자 인증 상태 유지 구현',
        ],
      },
      {
        type: 'text',
        content: [
          '- 협업을 위한 코드 형상 관리 및 코드 리뷰 진행',
          '원활한 협업을 위한 코드 형상 관리에 중점을 두고 잘 알려진 git-flow 방식을 채택하되, 진행하는 프로젝트의 성격 등을 고려하여 일부분을 변경하여 프로젝트에 적용함',
          '개발한 코드를 merge 하기 전에 코드 리뷰를 통해 작성한 코드와 아키텍처에 대해 고민하고 개선하고자 함',
          '다른 방식으로 설계하고 구현하는 팀원의 코드를 보며 학습효과를 경험함으로써, 코드 리뷰가 가지는 긍정적 효과를 느낌',
        ],
      },
    ],
  },
  mandalart: {
    name: 'Mandalart',
    role: '개인 프로젝트',
    people: [],
    github: 'https://github.com/GINK-SS/mandalart',
    contents: [
      { type: 'img', content: 'segorang1.webp' },

      { type: 'subject', content: '접속 링크' },
      {
        type: 'link',
        content: 'https://mandalart.gink-ss.com',
      },
      {
        type: 'text',
        content: ['체험 - ID: guest / 비밀번호: guest1234', '(게시물 확인 등 일부분만 이용 가능합니다.)'],
      },
      { type: 'divide', content: '' },

      { type: 'subject', content: '프로젝트 소개' },
      {
        type: 'text',
        content: [
          '요즘 많은 대학교에서는 거의 대부분 에브리타임을 주 커뮤니티로, 학생들의 소통이 이루어지고 있습니다.',
          '그러나 서울대에는 `스누라이프`, 건국대에는 `쿵`, 고려대에는 `고파스` 같은 커뮤니티 또한 굉장히 활성화되어 있습니다.',
        ],
      },
      {
        type: 'text',
        content: [
          '따라서 본 프로젝트는 세종대학교의 자체 커뮤니티를 만들어,',
          '세종대학교 학생들의 결집력을 높이고, 활발하게 소통하며, 더 나은 활성화 공간을 만드는 것을 기대합니다.',
          '정보 공유를 주 목적으로 하며, 재학생 및 졸업생 모두 이용할 수 있습니다.',
        ],
      },
      { type: 'divide', content: '' },

      { type: 'subject', content: '기술 스택' },
      {
        type: 'techStack',
        content: ['!React', '!Typescript', '!styled-components'],
      },
      { type: 'divide', content: '' },

      {
        type: 'text',
        content: [
          '세종대 구성원 인증을 받은 사람만이 접속 가능합니다.',
          '로그인 이후, 메인 페이지에 접속할 수 있으며, 글 작성 ˑ 수정 ˑ 삭제 ˑ 확인이 가능하며 댓글 기능도 구현하였습니다.',
          '또한, 북마크 기능을 통한 관심 있는 게시물 모아보기와 좋아요 기능을 이용할 수도 있습니다.',
        ],
      },
      {
        type: 'text',
        content: [
          '전체적인 UI/UX 디자인을 하였고, React와 Typescript를 사용하여 체계적으로 컴포넌트를 관리할 수 있도록 하였습니다.',
          '사용자의 입맛에 맞게 다크/라이트 모드를 구현하고, 백엔드의 개발이 늦어질 때 진행에 차질이 생기지 않도록 모킹을 사용하였습니다.',
          '또한, 단순 개발에만 그치지 않고, 배포까지 진행하여 좀 더 완성도 있는 프로젝트가 되도록 하였습니다.',
        ],
      },
    ],
  },
  ginkss_dot: {
    name: 'GINK-SS Dot.',
    role: '개인 프로젝트',
    people: [],
    github: 'https://github.com/GINK-SS/GINKSS-Dot.',
    contents: [
      { type: 'img', content: 'segorang1.webp' },

      { type: 'subject', content: '접속 링크' },
      {
        type: 'link',
        content: 'https://www.gink-ss.com',
      },
      { type: 'divide', content: '' },

      { type: 'subject', content: '프로젝트 소개' },
      {
        type: 'text',
        content: ['현재 보고 계시는 사이트가 이 프로젝트입니다.'],
      },
      { type: 'divide', content: '' },

      { type: 'subject', content: '기술 스택' },
      {
        type: 'techStack',
        content: ['!React', '!Typescript', '!styled-components'],
      },
      { type: 'divide', content: '' },

      {
        type: 'text',
        content: [
          '세종대 구성원 인증을 받은 사람만이 접속 가능합니다.',
          '로그인 이후, 메인 페이지에 접속할 수 있으며, 글 작성 ˑ 수정 ˑ 삭제 ˑ 확인이 가능하며 댓글 기능도 구현하였습니다.',
          '또한, 북마크 기능을 통한 관심 있는 게시물 모아보기와 좋아요 기능을 이용할 수도 있습니다.',
        ],
      },
      {
        type: 'text',
        content: [
          '전체적인 UI/UX 디자인을 하였고, React와 Typescript를 사용하여 체계적으로 컴포넌트를 관리할 수 있도록 하였습니다.',
          '사용자의 입맛에 맞게 다크/라이트 모드를 구현하고, 백엔드의 개발이 늦어질 때 진행에 차질이 생기지 않도록 모킹을 사용하였습니다.',
          '또한, 단순 개발에만 그치지 않고, 배포까지 진행하여 좀 더 완성도 있는 프로젝트가 되도록 하였습니다.',
        ],
      },
    ],
  },
  segorang: {
    name: 'SEGORANG',
    role: 'Front-end / Designer',
    people: ['GINK-SS', 'Scof'],
    github: 'https://github.com/GINK-SS/SEGORANG_FRONTEND',
    contents: [
      { type: 'img', content: 'segorang1.webp' },

      { type: 'subject', content: '접속 링크' },
      {
        type: 'text',
        content: ['추후 오픈'],
      },
      {
        type: 'text',
        content: ['체험 - ID: guest / 비밀번호: guest1234', '(게시물 확인 등 일부분만 이용 가능합니다.)'],
      },
      { type: 'divide', content: '' },

      { type: 'subject', content: '프로젝트 소개' },
      {
        type: 'text',
        content: [
          '요즘 많은 대학교에서는 거의 대부분 에브리타임을 주 커뮤니티로, 학생들의 소통이 이루어지고 있습니다.',
          '그러나 서울대에는 `스누라이프`, 건국대에는 `쿵`, 고려대에는 `고파스` 같은 커뮤니티 또한 굉장히 활성화되어 있습니다.',
        ],
      },
      {
        type: 'text',
        content: [
          '따라서 본 프로젝트는 세종대학교의 자체 커뮤니티를 만들어,',
          '세종대학교 학생들의 결집력을 높이고, 활발하게 소통하며, 더 나은 활성화 공간을 만드는 것을 기대합니다.',
          '정보 공유를 주 목적으로 하며, 재학생 및 졸업생 모두 이용할 수 있습니다.',
        ],
      },
      { type: 'divide', content: '' },

      { type: 'subject', content: '기술 스택' },
      {
        type: 'techStack',
        content: ['!React', '!Typescript', '!styled-components'],
      },
      { type: 'divide', content: '' },

      {
        type: 'text',
        content: [
          '세종대 구성원 인증을 받은 사람만이 접속 가능합니다.',
          '로그인 이후, 메인 페이지에 접속할 수 있으며, 글 작성 ˑ 수정 ˑ 삭제 ˑ 확인이 가능하며 댓글 기능도 구현하였습니다.',
          '또한, 북마크 기능을 통한 관심 있는 게시물 모아보기와 좋아요 기능을 이용할 수도 있습니다.',
        ],
      },
      {
        type: 'text',
        content: [
          '전체적인 UI/UX 디자인을 하였고, React와 Typescript를 사용하여 체계적으로 컴포넌트를 관리할 수 있도록 하였습니다.',
          '사용자의 입맛에 맞게 다크/라이트 모드를 구현하고, 백엔드의 개발이 늦어질 때 진행에 차질이 생기지 않도록 모킹을 사용하였습니다.',
          '또한, 단순 개발에만 그치지 않고, 배포까지 진행하여 좀 더 완성도 있는 프로젝트가 되도록 하였습니다.',
        ],
      },
    ],
  },
  sesco: {
    name: 'SE.SCO',
    role: 'Front-end / Designer',
    people: ['GINK-SS', 'Scof', '837477', 'hongseong0314'],
    github: 'https://github.com/team-sesco/sesco-app',
    contents: [
      { type: 'img', content: 'sesco1.webp' },

      { type: 'subject', content: '프로젝트 소개' },
      {
        type: 'text',
        content: [
          '해가 갈수록 식물 병해충으로 인한 농업 피해는 커지고 있지만, 발생 현황조차 집계되지 않은 병해충이 상당수인 것으로 나타났습니다.',
          '특히, 전문가가 턱없이 부족한 것이 하나의 큰 요인 중에 하나입니다.',
        ],
      },
      {
        type: 'text',
        content: [
          '따라서, 기존의 전문가 부족에 대한 문제점을 기숙적으로 해결하고 빠르게 대응할 수 있는 병해충 AI 진단 플랫폼으로써,',
          'AI를 이용하여 사용자가 병해충 의심 사진을 업로드하면, 어떤 질병인지와 증상 및 대처 방안 등을 알려주고, AI가 분석한 시각화 사진(병해충 피해 부분)을 보여줍니다.',
        ],
      },
      { type: 'divide', content: '' },

      { type: 'subject', content: '기술 스택' },
      {
        type: 'techStack',
        content: [
          '!React-Native',
          '!styled-components',
          'Flask + Gunicorn + NginX',
          'PyTorch',
          'Scikit-learn',
          'MongoDB',
          'Ubuntu Server (자체 서버)',
        ],
      },
      { type: 'divide', content: '' },

      { type: 'img', content: 'sesco2.webp' },
      {
        type: 'text',
        content: [
          '사용자가 앱을 통해, 피해 의심 사진과 해당 지역, 작물 종류를 입력하면, AI가 판단 후에 상단의 사진과 같은 결과를 보여줍니다.',
          '구성은 결과 탭과 시각자료 탭으로 이루어져 있습니다.',
        ],
      },
      {
        type: 'text',
        content: [
          '결과 탭의 상단에는 사용자가 찍은 사진이 보이고, 하단에는 채팅 형식으로 UI를 구성하였습니다.',
          '최하단의 버튼을 눌러 버튼의 결과를 확인할 수 있습니다.',
          '증상 및 대처 방안, 결과 다시보기, 글자 키우기의 기능이 있습니다.',
        ],
      },
      {
        type: 'text',
        content: [
          '시각 자료 탭의 상단에는 AI가 분석한 시각화 사진이 존재하고, 하단에서는 병해충 정확도, 근처 병해충 정보를 확인할 수 있습니다.',
          '병해충 정확도에는 작물에 존재하는 병 중 어떤 병을 가장 높게 탐지했는지를 알 수 있습니다.',
          '근처 병해충 정보에서는, 지도에서 근처에 다른 사용자가 탐지한 병해충 정보가 보이고 결과 또한 확인할 수 있습니다.',
        ],
      },
      { type: 'divide', content: '' },

      { type: 'subject', content: '시연 영상' },
      { type: 'video', content: 'uGhjUrU8ukk' },
      { type: 'divide', content: '' },

      {
        type: 'text',
        content: ['본격적으로 프론트엔드를 공부하면서 진행했던 프로젝트입니다.'],
      },
      {
        type: 'text',
        content: [
          '웹 쪽으로 학습하였지만, 주제 특성 상 앱으로 개발하는 것이 훨씬 나을 것이라는 판단 하에, React-Native를 사용하여 진행하였습니다.',
          'UI/UX 디자인을 수행하고, 전반적인 FE 개발을 하였습니다.',
          'git을 활용하면서 브랜치 사용 및 PR을 보내고, 정해진 일정에 따라 프로젝트를 진행하였습니다.',
          '또한 앱 개발 경험을 얻고, OAuth의 개념 및 동작 원리, 써드 파티 사용, 카카오 지도 같은 외부 API를 접하는 등 다양한 경험을 할 수 있었습니다.',
        ],
      },
    ],
  },
  looklendar: {
    name: 'LooKlendar',
    role: 'Back-end',
    people: ['GINK-SS', 'HUI'],
    github: 'https://github.com/GINK-SS/LooKlendar_',
    contents: [
      { type: 'img', content: 'looklendar1.webp' },

      { type: 'subject', content: '프로젝트 소개' },
      {
        type: 'text',
        content: ['"내일 여자친구와 데이트인데 저번에 무슨 옷을 입었더라?!"'],
      },
      {
        type: 'text',
        content: [
          '매일 어떤 옷을 입었는지 한 눈에 알아볼 수 있도록 룩북 캘린더 형식으로 기록이 가능하고,',
          '게시판을 통해 다른 사람들과 공유할 수 있는 서비스입니다.',
        ],
      },
      { type: 'divide', content: '' },

      { type: 'subject', content: '기술 스택' },
      { type: 'techStack', content: ['!Python', '!Flask', 'Javascript', '!MySQL'] },
      { type: 'divide', content: '' },

      { type: 'img', content: 'looklendar2.webp' },
      {
        type: 'text',
        content: ['데이터베이스 수업을 들으면서 처음으로 진행한 프로젝트입니다.'],
      },
      {
        type: 'text',
        content: [
          '시스템 구성도를 짜고, 요구사항분석 명세서를 작성하였습니다.',
          '또한, 데이터베이스 프로젝트에 맞게 DB 정규화 과정도 진행하였습니다.',
        ],
      },
      {
        type: 'text',
        content: [
          '로그인 및 로그아웃을 할 수 있고, 본인의 캘린더에서 사진과 착용한 옷 등을 작성할 수 있게 제작하였습니다.',
          '캘린더의 기능을 살려, 옷 이외에도 실제 일정 등도 적을 수 있게 구현하였습니다.',
          '본인의 OOTD를 자랑 혹은 공유하거나, 다른 사람들의 OOTD를 확인할 수 있도록 커뮤니티 기능을 이용할 수 있도록 하였습니다.',
        ],
      },
      {
        type: 'text',
        content: ['어떤 흐름으로 프로젝트를 진행하는지와 DB 쿼리 짜는 법, API 연결 등을 위주로 진행하였습니다.'],
      },
    ],
  },
};

const data = {
  profile: {
    introduce,
    prizes,
    education,
    skills,
  },
  contact: {
    submit,
  },
  project: {
    summary,
    info,
  },
};

export default data;
