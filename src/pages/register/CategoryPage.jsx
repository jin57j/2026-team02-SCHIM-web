import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bookDefault from "../../assets/book_default.svg";
import bookDim from "../../assets/book_dim.svg";
import bookSelect from "../../assets/book_select.svg";
import movieDefault from "../../assets/movie_default.svg";
import movieDim from "../../assets/movie_dim.svg";
import movieSelect from "../../assets/movie_select.svg";
import musicDefault from "../../assets/music_default.svg";
import musicDim from "../../assets/music_dim.svg";
import musicSelect from "../../assets/music_select.svg";
import otherDefault from "../../assets/other_default.svg";
import otherDim from "../../assets/other_dim.svg";
import otherSelect from "../../assets/other_select.svg";
import placeDefault from "../../assets/place_default.svg";
import placeDim from "../../assets/place_dim.svg";
import placeSelect from "../../assets/place_select.svg";
import showDefault from "../../assets/show_default.svg";
import showDim from "../../assets/show_dim.svg";
import showSelect from "../../assets/show_select.svg";
import Button from "../../components/common/Button.jsx";
import useRegisterDraft from "../../features/register/context/useRegisterDraft.js";

const categories = [
  {
    value: "PLACE",
    label: "장소",
    assets: { default: placeDefault, dim: placeDim, select: placeSelect },
  },
  {
    value: "MUSIC",
    label: "음악",
    assets: { default: musicDefault, dim: musicDim, select: musicSelect },
  },
  {
    value: "BOOK",
    label: "도서",
    assets: { default: bookDefault, dim: bookDim, select: bookSelect },
  },
  {
    value: "MOVIE",
    label: "영화",
    assets: { default: movieDefault, dim: movieDim, select: movieSelect },
  },
  {
    value: "SHOW",
    label: "공연",
    assets: { default: showDefault, dim: showDim, select: showSelect },
  },
  {
    value: "ETC",
    label: "기타",
    assets: { default: otherDefault, dim: otherDim, select: otherSelect },
  },
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

  return (
    <section className="flex h-full flex-col">
      <h1 className="heading-26-sb h-10 mb-4 text-text-cream text-center">
        무엇에 대한 감상인가요?
      </h1>
      <p className="body-15-r text-text-muted-warm text-center mb-5 whitespace-nowrap">
        콘텐츠는 나중에 열어본 사람에게만 공개돼요
      </p>

      <div
        role="group"
        aria-label="카테고리 선택"
        className="grid grid-cols-2 gap-3"
      >
        {categories.map(({ value, label, assets }) => {
          const assetState =
            selectedCategory === value
              ? "select"
              : selectedCategory
                ? "dim"
                : "default";

          return (
            <button
              key={value}
              type="button"
              aria-label={label}
              aria-pressed={selectedCategory === value}
              onClick={() => setSelectedCategory(value)}
            >
              <img
                src={assets[assetState]}
                alt=""
                aria-hidden="true"
                className="w-full"
              />
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-12">
        <Button onClick={handleNext}>다음</Button>
      </div>
    </section>
  );
}

export default CategoryPage;
