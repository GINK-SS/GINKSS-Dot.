![image](/images/project/looklendar/main.webp)

## :pushpin: Topic

"내일 여자친구와 데이트 하는데 저번에 무슨 옷을 입었더라?!"

매번 같은 모습을 보여줄 수 없어서 항상 다른 옷을 입는 당신!

하지만, 누구를 만날 때 어떤 옷을 입었는지 항상 헷갈리기 마련입니다.

이러한 당신을 위해, <span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">LooKlendar (룩-클린더)</span>를 통해 매번 당신의 착장을 기록해보세요.

일정을 메모할 때도! 착장을 기록할 때도!

커뮤니티를 통해 다른 사람과의 데일리룩도 공유해보세요!

&nbsp;

## :bulb: Main Function

- 자체 회원가입
- 캘린더
  - 일반 캘린더 및 착장 캘린더 스위치 기능
  - 착장 정보 기입 가능
- 마이페이지
  - 사용자 정보 표시 및 변경 기능
- 게시판
  - 글 작성 및 댓글 작성
  - 검색 기능
  - 추천 기능

&nbsp;

## :hammer_and_pick: Tech Stack

![Static Badge](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white)
![Static Badge](https://img.shields.io/badge/Flask-000000?style=flat-square&logo=Flask&logoColor=white)
![Static Badge](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white)

&nbsp;

## :two_men_holding_hands: Team

- 프론트엔드 개발자 1명
- <span style="color: #FF5722; font-weight: 700; text-shadow: 1px 1px 1px black">백엔드 개발자 1명</span>

&nbsp;

## :raised_hand: Role

- 공통 파트 (기획 및 설계)
- 백엔드 개발

<br />

## :key: Key Point

- **시스템 기획 및 설계 구현**
- **DB 스키마 설계 및 정규화 진행**
- **REST API 구축**

&nbsp;

## :page_facing_up: Review

### 시스템 구성도

![image](/images/project/looklendar/system.png)

룩-클린더는 `데이터베이스` 수업을 들으면서 처음으로 진행하게 된 프로젝트입니다.

최근 들어 남녀노소를 불문하고 패션에 관심이 높아지는 추세이고, 또한 TV 프로그램들이나 여러 매체들, 영상 및 SNS 등에서 패션 관련 이슈들이 많이 소개되고 있습니다.

그로 인해 매일 입은 옷을 기록하고 추가로 한눈에 확인할 수 있는 기능을 제공하는 플랫폼을 생각해보았고, 자신의 일정을 기록할 수 있는 캘린더 형태의 애플리케이션 및 페이지들은 많이 존재하는 반면, 자신이 입은 옷을 매일 기록하고 한눈에 확인할 수 있는 플랫폼은 존재하지 않았습니다.

따라서, 매일 입은 옷을 기록할 수 있는 플랫폼을 기획하게 되었습니다.

&nbsp;

### ER 다이어그램

![image](/images/project/looklendar/diagram.png)

개발에 앞서, `요구사항분석 명세서` 및 `용어 사전`, `도메인 기술서`를 비롯하여 여러 사항들을 팀원과 함께 의견을 조율하여 기획하였습니다.

기획된 내용을 바탕으로 개발을 진행하였으며, `데이터베이스` 수업의 프로젝트이므로 다른 것보다도 DB 중심으로 진행하였습니다.

DB 스키마를 설계하고 정규화를 진행하면서 2단 조인 등 여러 복합적인 쿼리문을 작성하였습니다.

보안적인 측면에서 비밀번호를 DB에 저장할 때 암호화하여 해쉬값으로 저장하였고, 사용자의 정보를 제공할 때는 비밀번호를 제외한 나머지 부분만 볼 수 있는 `뷰`를 활용하였습니다.

&nbsp;

```python showLineNumbers
def file_name_encode(file_name):
    if secure_filename(file_name).split('.')[-1].lower() in IMG_EXTENSIONS and len(file_name) < 240:

        # 원본 파일
        path_name = str(datetime.today().strftime("%Y%m%d%H%M%S%f")) + '_' + file_name
        
        if file_name == "user_image1.jpg":
            path_name = "user_image1.jpg"
        elif file_name == "look_default.png":
            path_name = "look_default.png"
        
        # 미리보기 파일
        s_path_name = 'S-' + path_name

        return {"original": path_name, "resize": s_path_name}

    else:
        return None
```

파일(사진)을 저장하기 전 파일의 확장자 및 길이를 확인한 후 이상이 없으면 파일명의 이름을 `등록한 시간 + 기존 파일 이름`으로 하여 파일 간의 중복을 피해서 DB의 안정성을 높이고 오류를 최소화하려고 하였습니다.

추가로 원본 이미지를 리사이즈한 `미리보기 이미지`를 생성하여, 좀 더 빠르게 이미지를 불러와 사용자 경험을 높이려고 하였습니다.
