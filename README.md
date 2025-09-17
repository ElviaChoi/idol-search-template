# 아이돌 검색 서비스 템플릿 (Idol Search Template)

## 🚀 Live Demo

(https://idol-search-template.vercel.app/)

이 프로젝트는 아이돌 정보를 검색하고 즐겨찾기에 추가할 수 있는 기능을 제공하는 웹 애플리케이션 템플릿입니다. React와 TypeScript를 기반으로 하며, 모던 웹 개발을 위한 다양한 기술 스택을 포함하고 있습니다.

## 📸 스크린샷

### 찜하기

![찜하기](https://github.com/user-attachments/assets/7a5c9a97-b4e3-4ec9-a5dc-d46d9ff6607d)


### 무한 스크롤

![무한스크롤](https://github.com/user-attachments/assets/b8583911-01f9-4a82-9501-606c3d686568)


### 가상 스크롤

![가상스크롤](https://github.com/user-attachments/assets/4bbf33da-5e64-465b-8d7f-c995eda41c9a)


## ✨ 주요 기능

- **아이돌 검색**: 이름 또는 그룹명으로 아이돌을 실시간으로 검색할 수 있습니다.
- **무한 스크롤**: 검색 결과가 많을 경우, 스크롤을 내리면 다음 데이터를 동적으로 불러옵니다.
- **즐겨찾기**: 마음에 드는 아이돌을 즐겨찾기에 추가하거나 삭제할 수 있습니다.
- **디바운싱**: 검색어 입력 시, 불필요한 API 요청을 최소화하기 위해 디바운싱(Debouncing) 기술을 적용했습니다.
- **Mock API**: `msw` (Mock Service Worker)를 사용하여 실제 백엔드 없이도 개발 및 테스트가 가능하도록 API를 모킹했습니다.

## 🛠️ 기술 스택

- **프레임워크/라이브러리**
  - React
  - TypeScript
  - Vite
- **상태 관리**
  - Zustand
- **데이터 페칭**
  - TanStack Query (React Query)
- **스타일링**
  - Tailwind CSS
- **가상 리스트**
  - React Virtuoso
- **API 모킹**
  - Mock Service Worker (msw)

## 🚀 시작하기

프로젝트를 로컬 환경에서 실행하려면 다음 단계를 따르세요.

### 사전 준비

- Node.js (v18 이상 권장)
- npm, yarn, 또는 pnpm

### 설치

1. 프로젝트를 클론합니다.
   ```bash
   git clone https://github.com/ElviaChoi/idol-search-template.git
   ```
2. 프로젝트 디렉터리로 이동합니다.
   ```bash
   cd idol-search-template
   ```
3. 의존성을 설치합니다.
   ```bash
   npm install
   ```

### 실행

개발 서버를 시작하려면 다음 명령어를 실행하세요.

```bash
npm run dev
```

애플리케이션이 `http://localhost:5173` (또는 다른 포트)에서 실행됩니다.

## 📜 사용 가능한 스크립트

- `npm run dev`: 개발 서버를 시작합니다.
- `npm run build`: 프로덕션용으로 프로젝트를 빌드합니다.
- `npm run lint`: ESLint를 사용하여 코드 스타일을 검사합니다.
- `npm run format`: Prettier를 사용하여 코드를 포맷팅합니다.
- `npm run preview`: 프로덕션 빌드를 미리 봅니다.
