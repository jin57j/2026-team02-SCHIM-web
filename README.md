# 2026-team02-SCHIM-web

# 커밋 규칙 

feat :새로운기능추가

fix : 버그수정

style :코드 포맷팅

refactor : 코드 리펙토링

chore : 빌드 업무 수정, 패키지 매니저 수정

design : 디자인 수정 

# 폴더 구조 

src/  
├── assets/          # 이미지, 아이콘, 폰트 등 정적 리소스  
├── components/      # 전역에서 공통으로 쓰이는 UI 컴포넌트 (버튼, 모달, 헤더 등)  
├── features/        # 핵심 도메인(기능)별로 분리된 모듈 ⭐️ (가장 중요)  
│   ├── guestbook/   # [방명록 읽기 관련]  
│   │   ├── api/         # 방명록 데이터 fetching 함수  
│   │   ├── components/  # 방명록 카드, 디테일 뷰 등  
│   │   └── hooks/       # useGuestbook 등  
│   ├── register/    # [방명록 등록 관련]   
│   │   ├── components/  # 카테고리 선택, 검색 뷰, 캔버스 에디터, 팔레트 등  
│   │   └── hooks/       # useCanvas, useStep 등 (등록 단계 관리)  
│   ├── archive/     # [아카이브/마이페이지 관련]   
│   │   └── components/  # 책장 UI, 남긴 방명록 리스트 등  
│   └── onboarding/  # [온보딩 관련]  
│       └── components/  # 온보딩 슬라이더, 툴팁 등  
├── hooks/           # 전역적으로 사용되는 커스텀 훅 (예: useAuth, useTheme)  
├── pages/           # 라우팅과 1:1로 매칭되는 페이지 컴포넌트  
│   ├── Home.tsx         # 홈 (방명록 읽기)  
│   ├── Register.tsx     # 등록 플로우 진입점  
│   ├── Archive.tsx      # 아카이브 페이지  
│   └── Onboarding.tsx   # 온보딩 페이지  
├── store/           # 전역 상태 관리 (등록 중인 방명록 데이터 임시 저장 등)  
├── styles/          # 글로벌 스타일 (Tailwind 설정이나 CSS 파일)  
└── utils/           # 공통 유틸 함수 (날짜 포맷 변환, 캔버스 이미지 변환 등)  
