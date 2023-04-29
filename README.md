## Public Studio 📷

#### 1. 프로젝트 Description

- Public Studio, 감성이 공유되는 공간

##### 로그인 페이지

<!-- ## <img src="./static/img/login.jpg" /> -->

##### 메인 페이지

#### 2. 프로젝트 기간

2023.04.30 ~ 2023.05.04

## 🕹️ Stack

##### 패키지 설치

```
yarn add styled-components
yarn add redux react-redux
yarn add react-router-dom
yarn add @reduxjs/toolkit
yarn add axios
yarn add json-server
yarn json-server --watch db.json --port 4000
```

## 💡 요구사항

##### 기능

(1) 공통 - UI 구현하기 - API 명세서 작성하기

(2) CRUD 구현 - 본문 리스트 조회 하기 - 본문 조회 하기 - 본문 추가 하기 - 본문 삭제 하기 - 본문 수정 하기

(3) 배포 - json-server 서버 배포 (heroku 사용) - 리액트 프로젝트 배포 (S3, vercel 등 자유)

##### 요구사항

- **동적 라우팅을 사용**하세요.
- 1개 이상의 `Custom Hook`을 구현하세요.
- **Form에 유효성 검증 기능을 적용**하세요. _유효성 검증이란, 아래의 예시들을 의미합니다._
  - ex: 제목을 10글자 이상 기입하지 않으면, 글을 추가할 수 없도록 제한 → `Alert` 으로 안내
  - ex: Form에서 모든 input에 값을 입력하지 않으면, 버튼이 비활성화
- 버튼 **컴포넌트 1개로 모든 버튼을 구현**하세요. 모든 스타일과 기능을 버튼을 구현할 수 있는 **만능 버튼**을 만들어보는 것 입니다.
- `development` 환경에서만 `redux devtool`이 활성화 되도록 처리합니다.
- 배포된 결과물에서는 `console.log()` 가 보이지 않도록 처리합니다.
- `.env` 를 이용해서 API 서버의 URL 코드상에서 숨기도록 처리합니다.
- API 명세서 (프로젝트 완료 후 작성)
