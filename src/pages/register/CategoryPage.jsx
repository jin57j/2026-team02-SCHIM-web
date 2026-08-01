import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button.jsx";
import useRegisterDraft from "../../features/register/context/useRegisterDraft.js";

// List.jsx 컴포넌트 임포트
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
    // 부모 레이아웃(AppShell 등)에 자연스럽게 녹아들도록 h-screen 대신 flex-1과 여백(pb)을 사용합니다.
    <section className="flex flex-col h-full pt-4 pb-16">
      {/* --- 타이틀 영역 --- */}
      <h1 className="heading-26-b text-[var(--text-light)] mb-3 text-center">
        무엇에 대한 감상인가요?
      </h1>
      <p className="body-15-r text-[var(--text-muted-grey)] text-center mb-10">
        카테고리는 나중에 열어본 사람에게만 공개돼요
      </p>

      {/* --- 카테고리 그리드 선택 영역 --- */}
      {/* mb-auto를 주어 남는 공간을 차지하게 하고 하단 버튼을 아래로 밀어냅니다 */}
      <div
        className="grid grid-cols-2 gap-[8px] place-content-center max-w-[342px] mx-auto mb-auto"
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

      {/* --- 하단 버튼 영역 --- */}
      {/* mt-12 로 그리드와의 간격을 띄우고, 최상위 section의 pb-16 을 통해 화면 맨 밑에서 버튼을 확 끌어올렸습니다. */}
      <div className="mt-12 flex justify-center">
        <Button
          variant={selectedCategory ? "primary-light" : "primary-dark"}
          size="full"
          onClick={handleNext}
        >
          다음
        </Button>
      </div>
    </section>
  );
}

export default CategoryPage;
