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
  },
  {
    name: 'SE.SCO',
    file: 'sesco.png',
    month: 'SEPTEMBER',
    year: 2022,
    summary: 'AI 병해충 진단 플랫폼',
    role: 'Front-end / Designer',
    people: ['GINK-SS', 'Scof', '837477', 'hongseong0314'],
  },
  {
    name: 'LooKlendar',
    file: 'looklendar.png',
    month: 'MARCH',
    year: 2020,
    summary: '룩북 캘린더 형식의 공유 서비스',
    role: 'Back-end',
    people: ['GINK-SS', 'HUI'],
  },
];

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
  },
};

export default data;
