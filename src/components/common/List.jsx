// --- Assets Imports ---
// 이미지 파일명 및 경로 구조에 맞춰 불러옵니다.
import placeDefault from "../../assets/place_default.svg";
import placeDim from "../../assets/place_dim.svg";
import placeSelect from "../../assets/place_select.svg";

import musicDefault from "../../assets/music_default.svg";
import musicDim from "../../assets/music_dim.svg";
import musicSelect from "../../assets/music_select.svg";

import bookDefault from "../../assets/book_default.svg";
import bookDim from "../../assets/book_dim.svg";
import bookSelect from "../../assets/book_select.svg";

import movieDefault from "../../assets/movie_default.svg";
import movieDim from "../../assets/movie_dim.svg";
import movieSelect from "../../assets/movie_select.svg";

// 공연(SHOW) 이미지 (파일명이 다를 경우 show_ 부분을 실제 에셋명에 맞게 수정해 주세요)
import showDefault from "../../assets/show_default.svg";
import showDim from "../../assets/show_dim.svg";
import showSelect from "../../assets/show_select.svg";

// 기타(ETC/OTHER) 이미지
import otherDefault from "../../assets/other_default.svg";
import otherDim from "../../assets/other_dim.svg";
import otherSelect from "../../assets/other_select.svg";

// --- Base Button Component ---
function BaseCategoryButton({
  isActive,
  isDimmed,
  onClick,
  label,
  defaultImg,
  selectImg,
  dimImg,
}) {
  // 상태에 따라 렌더링할 이미지를 결정합니다.
  let currentImg = defaultImg;
  if (isActive) currentImg = selectImg;
  else if (isDimmed) currentImg = dimImg;

  return (
    <button
      onClick={onClick}
      className="relative outline-none cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
      aria-label={`${label} 카테고리 선택`}
    >
      <img
        src={currentImg}
        alt={`${label} 카테고리`}
        className="w-[167px] h-[120px] object-contain"
      />
    </button>
  );
}

// --- Exported Components ---

export default function PlaceCategoryButton({
  isActive = false,
  isDimmed = false,
  onClick,
}) {
  return (
    <BaseCategoryButton
      isActive={isActive}
      isDimmed={isDimmed}
      onClick={onClick}
      label="장소"
      defaultImg={placeDefault}
      selectImg={placeSelect}
      dimImg={placeDim}
    />
  );
}

export function MusicCategoryButton({
  isActive = false,
  isDimmed = false,
  onClick,
}) {
  return (
    <BaseCategoryButton
      isActive={isActive}
      isDimmed={isDimmed}
      onClick={onClick}
      label="음악"
      defaultImg={musicDefault}
      selectImg={musicSelect}
      dimImg={musicDim}
    />
  );
}

export function BookCategoryButton({
  isActive = false,
  isDimmed = false,
  onClick,
}) {
  return (
    <BaseCategoryButton
      isActive={isActive}
      isDimmed={isDimmed}
      onClick={onClick}
      label="도서"
      defaultImg={bookDefault}
      selectImg={bookSelect}
      dimImg={bookDim}
    />
  );
}

export function MovieCategoryButton({
  isActive = false,
  isDimmed = false,
  onClick,
}) {
  return (
    <BaseCategoryButton
      isActive={isActive}
      isDimmed={isDimmed}
      onClick={onClick}
      label="영화"
      defaultImg={movieDefault}
      selectImg={movieSelect}
      dimImg={movieDim}
    />
  );
}

export function PerformanceCategoryButton({
  isActive = false,
  isDimmed = false,
  onClick,
}) {
  return (
    <BaseCategoryButton
      isActive={isActive}
      isDimmed={isDimmed}
      onClick={onClick}
      label="공연"
      defaultImg={showDefault}
      selectImg={showSelect}
      dimImg={showDim}
    />
  );
}

export function EtcCategoryButton({
  isActive = false,
  isDimmed = false,
  onClick,
}) {
  return (
    <BaseCategoryButton
      isActive={isActive}
      isDimmed={isDimmed}
      onClick={onClick}
      label="기타"
      defaultImg={otherDefault}
      selectImg={otherSelect}
      dimImg={otherDim}
    />
  );
}
