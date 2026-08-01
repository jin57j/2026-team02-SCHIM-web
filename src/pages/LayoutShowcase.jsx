import { useState } from "react";

// --- Components Imports ---
import AppHeader from "../components/common/header/AppHeader";
import RegisterHeader from "../components/common/header/RegisterHeader";
import FloatingButton from "../components/common/button/FloatingButton";
import MenuList from "../components/common/menu/MenuList";
import MenuOverlay from "../components/common/menu/MenuOverlay";

// --- Layouts Imports ---
import AppHeaderLayout from "../layouts/AppHeaderLayout";
import AppShell from "../layouts/AppShell";
import PlainLayout from "../layouts/PlainLayout";
import RegisterLayout from "../layouts/RegisterLayout";

export default function LayoutShowcase() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-bg-base)] flex flex-col items-center py-16 gap-16 overflow-y-auto">
      {/* 헤더 타이틀 */}
      <div className="text-center">
        <h1 className="heading-30-sb text-[var(--color-text-light)] mb-2">
          레이아웃 & 공통 컴포넌트 쇼케이스
        </h1>
        <p className="body-15-r text-[var(--color-text-muted-grey)]">
          헤더, 플로팅 버튼, 메뉴, 그리고 각 레이아웃을 테스트합니다.
        </p>
      </div>

      {/* =========================================
          1. 헤더 & 플로팅 버튼 테스트
          ========================================= */}
      <section className="flex flex-col items-center gap-6 w-full px-4">
        <h2 className="heading-24-b text-[var(--color-text-light)] border-b border-[var(--color-border-dark)] pb-2 w-full max-w-4xl text-center">
          1. 독립 컴포넌트 (Headers & Button)
        </h2>

        <div className="flex flex-wrap gap-8 justify-center w-full max-w-4xl">
          {/* AppHeader */}
          <div className="flex flex-col gap-2 items-center w-[360px]">
            <span className="caption-12-sb text-[var(--color-text-muted-warm)]">
              AppHeader
            </span>
            <div className="w-full border border-[var(--color-border-dark)] rounded-lg overflow-hidden bg-[var(--color-bg-raised)]">
              <AppHeader />
            </div>
          </div>

          {/* RegisterHeader */}
          <div className="flex flex-col gap-2 items-center w-[360px]">
            <span className="caption-12-sb text-[var(--color-text-muted-warm)]">
              RegisterHeader
            </span>
            <div className="w-full border border-[var(--color-border-dark)] rounded-lg overflow-hidden bg-[var(--color-bg-raised)]">
              <RegisterHeader />
            </div>
          </div>

          {/* Floating Button */}
          <div className="flex flex-col gap-2 items-center w-[360px]">
            <span className="caption-12-sb text-[var(--color-text-muted-warm)]">
              FloatingButton
            </span>
            <div className="w-full h-[100px] border border-[var(--color-border-dark)] rounded-lg relative bg-[var(--color-bg-raised)] flex items-center justify-center">
              <FloatingButton onClick={() => alert("플로팅 버튼 클릭됨!")} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. 메뉴 테스트 (MenuList & MenuOverlay)
          ========================================= */}
      <section className="flex flex-col items-center gap-6 w-full px-4">
        <h2 className="heading-24-b text-[var(--color-text-light)] border-b border-[var(--color-border-dark)] pb-2 w-full max-w-4xl text-center">
          2. 메뉴 시스템
        </h2>

        <div className="flex flex-col gap-8 items-center w-full max-w-4xl">
          {/* MenuList Preview */}
          <div className="flex flex-col gap-2 items-center w-[360px]">
            <span className="caption-12-sb text-[var(--color-text-muted-warm)]">
              MenuList (단독 렌더링)
            </span>
            <div className="w-full border border-[var(--color-border-dark)] rounded-lg overflow-hidden bg-[var(--color-bg-raised)] p-4">
              <MenuList />
            </div>
          </div>

          {/* MenuOverlay Toggle Button */}
          <div className="flex flex-col gap-2 items-center">
            <span className="caption-12-sb text-[var(--color-text-muted-warm)]">
              MenuOverlay 테스트
            </span>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="px-6 py-3 bg-[var(--color-key-place-500)] text-[var(--color-ink-base)] rounded-full heading-16-b"
            >
              전체 화면 메뉴 열기
            </button>
            {isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} />}
          </div>
        </div>
      </section>

      {/* =========================================
          3. 레이아웃 테스트 (모바일 목업 뷰)
          ========================================= */}
      <section className="flex flex-col items-center gap-6 w-full px-4">
        <h2 className="heading-24-b text-[var(--color-text-light)] border-b border-[var(--color-border-dark)] pb-2 w-full max-w-4xl text-center">
          3. 레이아웃 구조 (미니 뷰포트)
        </h2>
        <p className="body-15-r text-[var(--color-text-muted-grey)] mb-4">
          레이아웃 컴포넌트들이 컨텐츠를 어떻게 감싸는지 확인합니다.
        </p>

        <div className="flex flex-wrap gap-8 justify-center w-full max-w-6xl">
          {/* AppHeaderLayout */}
          <div className="flex flex-col gap-2 items-center">
            <span className="caption-12-sb text-[var(--color-text-muted-warm)]">
              AppHeaderLayout
            </span>
            <div className="w-[320px] h-[500px] border border-[var(--color-border-dark)] rounded-xl overflow-hidden relative shadow-lg transform scale-90 origin-top">
              <AppHeaderLayout>
                <div className="p-4 body-15-r text-[var(--color-text-light)] opacity-50">
                  콘텐츠 영역 (AppHeaderLayout 내부에 렌더링됨)
                </div>
              </AppHeaderLayout>
            </div>
          </div>

          {/* AppShell */}
          <div className="flex flex-col gap-2 items-center">
            <span className="caption-12-sb text-[var(--color-text-muted-warm)]">
              AppShell
            </span>
            <div className="w-[320px] h-[500px] border border-[var(--color-border-dark)] rounded-xl overflow-hidden relative shadow-lg transform scale-90 origin-top">
              <AppShell>
                <div className="p-4 body-15-r text-[var(--color-text-light)] opacity-50">
                  콘텐츠 영역 (AppShell 내부에 렌더링됨)
                </div>
              </AppShell>
            </div>
          </div>

          {/* RegisterLayout */}
          <div className="flex flex-col gap-2 items-center">
            <span className="caption-12-sb text-[var(--color-text-muted-warm)]">
              RegisterLayout
            </span>
            <div className="w-[320px] h-[500px] border border-[var(--color-border-dark)] rounded-xl overflow-hidden relative shadow-lg transform scale-90 origin-top">
              <RegisterLayout>
                <div className="p-4 body-15-r text-[var(--color-text-light)] opacity-50">
                  회원가입/등록 콘텐츠 영역
                </div>
              </RegisterLayout>
            </div>
          </div>

          {/* PlainLayout */}
          <div className="flex flex-col gap-2 items-center">
            <span className="caption-12-sb text-[var(--color-text-muted-warm)]">
              PlainLayout
            </span>
            <div className="w-[320px] h-[500px] border border-[var(--color-border-dark)] rounded-xl overflow-hidden relative shadow-lg transform scale-90 origin-top">
              <PlainLayout>
                <div className="flex items-center justify-center h-full p-4 body-15-r text-[var(--color-text-light)] opacity-50">
                  헤더/푸터가 없는 기본 레이아웃 영역
                </div>
              </PlainLayout>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
