# 플렉스(정렬)


container요소와 items요소으로 나뉨! 

![flex model](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox/flex_terms.png)

## container

### display
* container 설정해주기.
- display: flex; 
  - 블록 요소와 같이 Flex Container 정의

- display: inline-flex; 
  - 인라인 요소와 같이 Flex Container 정의
  


### flex-direction
* flex-direction 수평 정렬
- flex-direction : row;
  - 행이 축 (좌->우)
- flex-direction: row-reverse; 
  - 행이 축 (우 -> 좌 ) 
- 수직 정렬 관련된 cloumn, cloumn-reverse가 있지만 원래 block 요소는 수직으로 정렬 되기 때문에 잘 안씀.
  
* 행은 수평/ 열은 수직
* 시작점과 끝점, 주축(main-axis)과 교차 축(cross-axis)은 상대적인 개념이라는거 기억하기! 

### flex-wrap
* Flex Items 묶음(줄 바꿈) 여부
- flex-wrap : nowrap
  - 묶음(줄 바꿈) 없음 : 공간이 모자라면 어거지로 끼워 넣으려고 시도해서 모양이 변할 수 있음.
- flex-wrap : wrap
  - 여러 줄로 묶음 : 공간이 모자라면 자연스럽게 줄 바꿈됨! 

### justify-content 
* 주 축의 정렬 방법 (수평정렬방법)
- justify-content : flex-start
  - Flex Items를 시작점으로 정렬, (수평정렬) 왼쪽 정렬
- justify-content : flex-end
  - Flex Items를 끝점으로 정렬, (수평정렬)오른쪽 정렬, 아이템의 순서는 바뀌지 않음! 오르쪽으로 밀어버리는 느낌!
- justify-content : center
  - Flex Items를 가운데 정렬 , (수평정렬)가운데 정렬


### align-content
* **교차 축**의 **여러 줄** 정렬 방법(수직정렬 개념!)
* flex-wrap : wrap으로 설정되어 있고, 2줄 이상,  여백이 있어야지만 동작함. 조건이 까다로워서 활용도가 높지는 않음. align-items를 더 많이 사용. 
- align-content : stretch
  - Flex Items를 시작점으로 정렬
- align-content : flex-start
  - Flex Items를 시작점으로 정렬
- align-content : flex-end
  - Flex Items를 끝점으로 정렬
- align-content : center
  - Flex Items를 가운데 정렬


### align-items
* 교차 축의 **한 줄** 정렬 방법 (한 줄 단위라서 수직정렬시 자주 사용할 것임!! )
- align-items : stretch
  - Flex Items를 교차 축으로 늘림
- align-items : flex-start
  - Flex Items를 각 줄의 시작점으로 정렬
- align-items : flex-end
  - Flex Items를 각 줄의 끝점으로 정렬
- align-items : center
  - Flex Items를 각 줄의 가운데 정렬


 justify-content를 사용해서 수평정렬하고 align-items를 사용해서 수직정렬할 것임.

 ## Items

 ### order
 * Flex Item의 순서 : html 구조를 바꾸지 않고도 화면에 출력되는 순서를 그때그때 바꿔 줄 수 있다! 
- order : 0
  - 순서 없음
- order : 숫자
  - 숫자가 작을 수록 먼저

### flex-grow
* Flex Item의 증가 너비 비율 : 만약 container에 남는 영역이 있다면 설정한 비율 만큼 채워주는 것임

- flex-grow : 0
  - 증가 비율 없음
- flex-grow : 숫자
  - 증가 비율 


### flex-shrink
* Flex Item의 감소 너비 비율 : container에 공간이 모자랄 때 flex-shrink : 1이라는  기본값이 있기 때문에 container의 크기 만큼 줄어들게 된다. 0을 입력하면 줄어 들지 안고 자신의 크기를 유지한다.
  
- flex-shrink : 1
  - Flex Container 너비에 따라 감소 비율 적용
- flex-shrink : 숫자
  - 감소 비율


### flex-basis
* Flex Item의 공간 배분 전 기본 너비

- flex-basis : auto
  - 요소의 Content 너비 
- flex-basis : 단위 
  - px, em, rem 등 단위로 지정


>참고용 mdn :  https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox