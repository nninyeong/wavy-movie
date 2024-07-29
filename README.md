# wavy-movie

개인 프로젝트로 제작한 영화 검색 사이트입니다.
HTML, CSS, JavaScript를 사용했습니다.

![wm_out](https://github.com/user-attachments/assets/82395c07-01ac-49c7-b7fd-922206558580)
![영화 정보](https://github.com/user-attachments/assets/03d12a94-a50b-4768-b7b9-58c9bc075f68)
![24년 개봉작 필터링, 기본이미지](https://github.com/user-attachments/assets/183e902f-71ea-4099-9628-9afdf4917eb4)


# 필수 구현 사항
- jQuery 라이브러리 사용 없이 바닐라 자바스크립트 사용
- TMDB 이용해 인기 영화 데이터 가져오기
- 영화정보 카드 리스트 UI 구현
- 영화 검색 UI 구현
- const, let만 이용한 변수 선언
- 화살표 함수 사용
- 배열 메소드 2개 이상 사용 (forEach, filter 사용)
- DOM 제어하기 (createElement, classList, preventDefault 등 사용)



# 선택 구현 사항
- flex 사용
- 검색창에서 enter키 입력해도 검색버튼 클릭한 것과 동일한 검색 실행
- 검색 결과에서 24년 개봉작만 필터링



# 트러블 슈팅
✔︎ 아무것도 입력하지 않고 검색버튼을 눌렀을 때 결과가 조회됨
- 쿼리파라미터 확인시 전달되는 값이 표시되는 공간이 비어있고, "null"을 검색했을 때와 같은 결과를 보인다는 것을 발견
- 전달된 키워드를 조회하여 데이터를 DOM 요소로 추가해주는 함수에서 전달된 키워드가 null일 때(+조회된 결과의 길이가 0일 때) return하도록 변경함

✔︎ 검색 버튼 클릭시 검색 결과 html 경로로 넘어가지 않음
- 이벤트 발생 여부를 확인하기위해 console.log를 사용했고, 콘솔에 테스트 문구가 찍히지만 바로 사라지는 것을 발견하여 바로 새로고침 되고있음을 추측함
- button 태그가 아닌 input type='button' 사용으로 변경

✔︎ API에서 제공하는 포스터 이미지가 없는 경우
- 포스터 이미지가 없는 경우 출력할 기본 이미지를 설정



# 해결하지 못한 부분
- chrome과 safari에서 폰트 사이즈, 물결 위치가 다른 것을 발견



# 프로젝트 일지
https://nninyeong.tistory.com/52
https://nninyeong.tistory.com/53
