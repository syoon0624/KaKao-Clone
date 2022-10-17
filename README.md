# 📌 자신이 원하는 사이트 레이아웃 클론

- [카카오 원본 웹사이트](https://www.kakaocorp.com/page/)
- [클론 웹사이트](https://joyful-salmiakki-0e43c0.netlify.app/)

## 🧷 사용 기술
- HTML/CSS
- Vanilla JavaScript

## 주요 구현 사항
___ 
### 스크롤 시 부분 화면 고정
- JavaScript `getBoundingClientRect()` 와 `window.scroll`활용
- 작성 스크립트: scrollhandle.js
![ezgif com-gif-maker](https://user-images.githubusercontent.com/77139957/196116893-908871d7-f1fa-44c4-a10a-6066be9fdcf5.gif)

### 일자별로 변하는 메인 타이틀 부분 구현
- JavaScript `Date` 활용
- 작성 스크립트: today.js

<img width="591" alt="스크린샷 2022-10-17 오후 4 39 24" src="https://user-images.githubusercontent.com/77139957/196117206-5e37f050-84ff-4b6c-9345-4f49ca514446.png">

### 검색 화면 구현
- CSS transition, opacity 활용
- 해당 화면을 초기 상태시, 숨김 및 공간을 차지하지 않는 부분으로 나타내고 싶어 `display: none`을 사용하였으나, CSS 애니메이션이 작동하지 않는 문제가 발생. 이에 opacity 및 max-height를 조정하여 이를 해결하였다.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/77139957/196119690-a6d1e760-17ed-4cb7-9397-47ad87ea8603.gif)

## 폴더 구조
___

```
.root
├── index.html
├── js
│   ├── main.js
│   ├── scrollhandle.js
│   ├── search.js
│   └── today.js
├── styles
│   ├── reset.css
│   ├── main.css
│   ├── header.css
│   ├── contents1.css
│   ├── contents2.css
│   ├── contents3.css
│   ├── contents4.css
│   ├── footer.css
│   └── search.css
└──README.md
```

## 주요 구현 사항 & 어려웠던 점
___
### 시멘틱 태그
- header, main, footer로 나누어서 작업
- 더 잘게 나누어도 되지 않았을까 하는 아쉬움이 남았다.

### 스크롤 시 일부 컨테이너 화면 고정
- 화면 고정 시, 스크롤의 위치에 따라 / 고정을 풀어야 하는 주변 아이템의 위치에 따라 임의로 좌표를 찾아낸 후, 동작하는 방식으로 제작되었다. 그렇기 때문에 반응형 / 스크롤시 화면 고정 및 해제에 대한 효과가 자연스럽지 못하였다.
- 윈도우 화면상으로 좌표값을 구하려다 보니, 초기 스크롤의 위치에 따라 좌표값이 매우 변하는 것을 확인할 수 있었다. 화면 고정 시 다른 방법이 있다면 적용하는것이 좋을 것 같다.
- 처음 왼쪽 아이템에 대한 화면 고정은 자동정렬이 되어 좋았으나, contents3에 위치한 오른쪽 아이템에 대한 화면 고정은 불가피하게 PX을 통한 마진으로 위치를 미리 잡아줘야 했다. 이로 인해 잠깐의 깜빡임이 발생하게 되었으며, 웹 반응형에 따른 자유로운 아이템 화면 조정도 불가능하게 되었다.
- 반응형 웹 작업을 기존 카카오 웹사이트와 같은 형태로 제작하려 하였으나, 화면 고정에 대한 이슈로 인해 단 두가지 타입으로 밖에 작업하지 못하였다.

### 반응형 웹 작업
- flex-wrap을 활용하여 자동적으로 아이템이 브라우저의 화면에 따라 적절하게 담아 낼 수 있도록 하였다.

### 검색 콘텐츠 구현
- 검색 버튼을 누를 시, CSS 애니메이션을 활용하여 자연스럽게 브라우저상 위에서 아래로 내려갈 수 있도록 작업하였으며, vw단위를 사용하여 다양한 브라우저 화면 크기에도 조정 가능하도록 작업하였다.

### 모든 이미지와 아이콘 불러오기
- 로컬상으로 저장하지 않고, URI링크참조를 통해 불러낼 수 있도록 하였다. 이를 통해 과도한 불러내기 사용 시, 페이지 초기 렌더시에 로딩 시간이 길어지진 않을까 하는 우려가 생기기도 하였다.