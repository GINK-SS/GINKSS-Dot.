import { ProjectInfo } from '../types/project';

const introduce = [
  '안녕하세요,',
  '최선을 다해 최고가 되고자 하는 개발자 이상민입니다.',
  '주로 웹 프론트엔드 개발을 하고 있으며, 사용자가 즐거운 경험을 하게 도와주는 것을 좋아합니다.',
  '더 나은 결과를 위해 배우고 노력하는 것을 마다하지 않습니다.',
  '잘 부탁드립니다 - !',
];

const education = [
  {
    name: '세종대학교',
    date: '2016.03 ~ 2023.02',
    content: ['전자정보공학대학 컴퓨터공학과 전공'],
    file: 'graduate.jpg',
  },
];

const prizes = [
  {
    name: '컴퓨터공학과 창의설계경진대회',
    date: '2022.12.22',
    prize: '최우수상',
    where: '세종대학교',
    file: '14th_CD_contest.jpg',
  },
  {
    name: '교내 제 4회 SW경시대회 (세종코딩챌린지위크)',
    date: '2017.10.27',
    prize: '4등',
    where: '세종대학교',
    file: '4th_SW_Contest.png',
  },
];

const skills = [
  {
    name: 'Frontend',
    content: ['Typescript, React', 'React-Native'],
  },
  {
    name: 'Backend',
    content: ['Flask', 'MySQL'],
  },
  {
    name: 'DevOps',
    content: ['AWS (S3)'],
  },
  {
    name: 'Language',
    content: ['Javascript', 'C', 'Python'],
  },
  {
    name: 'Etc',
    content: ['Notion, Slack, Figma', 'After Effects, Premiere Pro'],
  },
];

const submit = [
  '정상적으로 전송되었습니다.',
  '빠른 시일 내에 확인하여 연락 드리겠습니다.',
  '감사합니다 :- )',
];

const summary = [
  {
    name: 'SEGORANG',
    file: 'segorang.png',
    month: 'FEBRUARY',
    year: 2023,
    summary: '세종대학교 커뮤니티 사이트',
    role: 'Front-end / Designer',
    people: ['GINK-SS', 'Scof'],
    url: 'segorang',
  },
  {
    name: 'SE.SCO',
    file: 'sesco.png',
    month: 'SEPTEMBER',
    year: 2022,
    summary: 'AI 병해충 진단 플랫폼',
    role: 'Front-end / Designer',
    people: ['GINK-SS', 'Scof', '837477', 'hongseong0314'],
    url: 'sesco',
  },
  {
    name: 'LooKlendar',
    file: 'looklendar.png',
    month: 'MARCH',
    year: 2020,
    summary: '룩북 캘린더 형식의 공유 서비스',
    role: 'Back-end',
    people: ['GINK-SS', 'HUI'],
    url: 'looklendar',
  },
];

const info: { [key: string]: ProjectInfo } = {
  segorang: {
    name: 'SEGORANG',
    role: 'Front-end / Designer',
    people: ['GINK-SS', 'Scof'],
    github: 'https://github.com/GINK-SS/SEGORANG_FRONTEND',
    contents: [
      { type: 'img', content: 'segorang1.png' },

      { type: 'subject', content: '접속 링크' },
      {
        type: 'text',
        content: ['추후 오픈'],
      },
      {
        type: 'text',
        content: [
          '체험 - ID: guest / 비밀번호: guest1234',
          '(게시물 확인 등 일부분만 이용 가능합니다.)',
        ],
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
      { type: 'img', content: 'sesco1.png' },

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

      { type: 'img', content: 'sesco2.png' },
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
      { type: 'img', content: 'looklendar1.png' },

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

      { type: 'img', content: 'looklendar2.png' },
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
        content: [
          '어떤 흐름으로 프로젝트를 진행하는지와 DB 쿼리 짜는 법, API 연결 등을 위주로 진행하였습니다.',
        ],
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
