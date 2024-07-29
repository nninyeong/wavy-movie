# wavy-movie

개인 프로젝트로 제작한 영화 검색 사이트입니다.
HTML, CSS, JavaScript를 사용했습니다.

![wm_out](https://github.com/user-attachments/assets/82395c07-01ac-49c7-b7fd-922206558580)

첫 접속화면입니다. CSS animation을 이용해 물결치는 효과를 주었고, 제목으로 영화 검색/타이틀 로고를 눌러 메인화면으로 이동이 가능합니다.

<img src="https://github.com/user-attachments/assets/929a9601-e0ec-4192-b3dc-3d220bb654d1" width="300px" height="" />

영화마다 overview의 길이가 다른 것을 대비해 flex-shrink를 활용해 차지할 비율을 맞춰주었고 overview가 그 이상을 넘어가는 경우 숨겨주었습니다. (overflow: hidden)

![24년 개봉작 필터링, 기본이미지](https://github.com/user-attachments/assets/183e902f-71ea-4099-9628-9afdf4917eb4)

검색 결과에서 체크박스를 눌러 2024년 개봉작만 필터링이 가능합니다. HTML 요소를 지우고 다시 추가하는 대신 2024년 개봉 영화의 카드에 클래스를 toggle하여 display:none이 적용되도록 했습니다.

API에서 영화 포스터 이미지를 제공하지 않는 경우 기본 검정색 이미지가 대체하도록 했습니다.

<br>
<br>

# 필수 구현 사항
- jQuery 라이브러리 사용 없이 바닐라 자바스크립트 사용
- TMDB 이용해 인기 영화 데이터 가져오기
- 영화정보 카드 리스트 UI 구현
- 영화 검색 UI 구현
- const, let만 이용한 변수 선언
- 화살표 함수 사용
- 배열 메소드 2개 이상 사용 (forEach, filter 사용)
- DOM 제어하기 (createElement, classList, preventDefault 등 사용)

<br>
<br>

# 선택 구현 사항
- flex 사용
- 검색창에서 enter키 입력해도 검색버튼 클릭한 것과 동일한 검색 실행
- 검색 결과에서 24년 개봉작만 필터링

<br>
<br>

# 트러블 슈팅
✔︎ 아무것도 입력하지 않고 검색버튼을 눌렀을 때 결과가 조회됨
- 쿼리파라미터 확인시 전달되는 값이 표시되는 공간이 비어있고, "null"을 검색했을 때와 같은 결과를 보인다는 것을 발견
- 전달된 키워드를 조회하여 데이터를 DOM 요소로 추가해주는 함수에서 전달된 키워드가 null일 때(+조회된 결과의 길이가 0일 때) return하도록 변경함

✔︎ 검색 버튼 클릭시 검색 결과 html 경로로 넘어가지 않음
- 이벤트 발생 여부를 확인하기위해 console.log를 사용했고, 콘솔에 테스트 문구가 찍히지만 바로 사라지는 것을 발견하여 바로 새로고침 되고있음을 추측함
- button 태그가 아닌 input type='button' 사용으로 변경

✔︎ API에서 제공하는 포스터 이미지가 없는 경우
- 포스터 이미지가 없는 경우 출력할 기본 이미지를 설정

<br>
<br>

# 해결하지 못한 부분
- chrome과 safari에서 폰트 사이즈, 물결 위치, z-index가 다른 것을 발견

<br>
<br>

# 프로젝트 일지
https://nninyeong.tistory.com/52
https://nninyeong.tistory.com/53
https://nninyeong.tistory.com/54
