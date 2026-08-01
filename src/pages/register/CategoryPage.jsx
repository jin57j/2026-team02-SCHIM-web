import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button.jsx";
import useRegisterDraft from "../../features/register/context/useRegisterDraft.js";

// List.jsx 컴포넌트 임포트 (경로 확인)
import PlaceCategoryButton, {
  MusicCategoryButton,
  BookCategoryButton,
  MovieCategoryButton,
  PerformanceCategoryButton,
  EtcCategoryButton,
} from "../../components/common/List.jsx";

const categories = [
  { value: "MUSIC", label: "음악", Component: MusicCategoryButton },
  { value: "PLACE", label: "장소", Component: PlaceCategoryButton },
  { value: "MOVIE", label: "영화", Component: MovieCategoryButton },
  { value: "BOOK", label: "도서", Component: BookCategoryButton },
  { value: "SHOW", label: "공연", Component: PerformanceCategoryButton },
  { value: "ETC", label: "기타", Component: EtcCategoryButton },
];

function CategoryPage() {
  const navigate = useNavigate();
  const { draft, dispatch } = useRegisterDraft();
  const [selectedCategory, setSelectedCategory] = useState(draft.category);

  const handleNext = () => {
    if (!selectedCategory) {
      return;
    }

    if (selectedCategory !== draft.category) {
      dispatch({ type: "SET_CATEGORY", payload: selectedCategory });
    }

    navigate("/register/content");
  };

  // 하나라도 선택된 항목이 있는지 확인 (나머지 항목 에셋 Dim 처리용)
  const hasSelection =
    selectedCategory !== null &&
    selectedCategory !== undefined &&
    selectedCategory !== "";

  return (
    <div className="flex flex-col h-screen bg-[var(--bg-base)] px-6 pt-14 pb-10">
      {/* --- 상단 네비게이션 영역 --- */}
      <header className="flex justify-between items-center text-[var(--text-muted-grey)]">
        <button
          onClick={() => navigate(-1)}
          aria-label="닫기"
          className="p-2 -ml-2"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        <span className="body-15-m tracking-[0.1em]">1 / 3</span>
      </header>

      {/* --- 타이틀 영역 --- */}
      <section className="flex flex-col items-center mt-[40px]">
        <h1 className="heading-26-b text-[var(--text-light)] mb-3 text-center">
          무엇에 대한 감상인가요?
        </h1>
        <p className="body-15-r text-[var(--text-muted-grey)] text-center">
          카테고리는 나중에 열어본 사람에게만 공개돼요
        </p>
      </section>

      {/* --- 카테고리 그리드 선택 영역 --- */}
      <div className="flex-1 mt-[48px] overflow-y-auto">
        {/* 너비 342px(167*2 + gap 8)에 맞춘 정확한 그리드 */}
        <div
          className="grid grid-cols-2 gap-[8px] place-content-center max-w-[342px] mx-auto"
          role="group"
          aria-label="카테고리 선택"
        >
          {categories.map(({ value, Component }) => {
            const isSelected = selectedCategory === value;
            const isDimmed = hasSelection && !isSelected;

            return (
              <Component
                key={value}
                isActive={isSelected}
                isDimmed={isDimmed}
                onClick={() => setSelectedCategory(value)}
              />
            );
          })}
        </div>
      </div>

      {/* --- 하단 버튼 영역 --- */}
      {/* pb-8 을 추가하여 하단에서 조금 더 띄워주었습니다. 필요시 수치를 조절해보세요! */}
      <div className="mt-auto pt-6 pb-8 flex justify-center">
        <Button
          variant={selectedCategory ? "primary-light" : "primary-dark"}
          size="full"
          onClick={handleNext}
        >
          다음
        </Button>
      </div>
    </div>
  );
}

export default CategoryPage;
