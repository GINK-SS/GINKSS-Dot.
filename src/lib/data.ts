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
      { type: 'subject', content: '프로젝트 소개' },
      {
        type: 'text',
        content: [
          '세종대학교 커뮤니티로, 세종대 구성원 인증을 받아야만 사용이 가능합니다.',
          '정보 공유를 주 목적으로 하며, 재학생 및 졸업생 모두 이용할 수 있습니다.',
          '세종대학교 학생들의 결집력을 높이고, 활발하게 소통하며, 더 나은 활성화 공간을 만드는 것을 기대합니다.',
        ],
      },
      { type: 'divide', content: '' },
      { type: 'subject', content: '기술 스택' },
      { type: 'techStack', content: ['!React', '!Typescript', '!styled-components'] },
      { type: 'divide', content: '' },
      {
        type: 'text',
        content: ['내용1', '내용2', '내용3'],
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
          '병해충 AI 진단 플랫폼으로써,',
          '전문가의 부재로 인한 병해충 피해를 줄이고자 인공지능을 이용하여 사용자가 병해충 의심 사진을 올리면, 어떤 질병인지와 증상 및 대처 방안 등을 알려주고, AI가 분석한 시각화 사진을 보여줍니다.',
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
        content: ['내용1', '내용2', '내용3'],
      },
      { type: 'divide', content: '' },
      { type: 'video', content: 'uGhjUrU8ukk' },
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
        content: [
          '매일 어떤 옷을 입었는지 한 눈에 알아볼 수 있도록 룩북 캘린더 형식으로 저장이 가능하고,',
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
        content: ['내용1', '내용2', '내용3'],
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
