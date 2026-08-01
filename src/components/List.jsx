

// --- Assets Imports ---
// 이미지 경로 구조에 맞춰 SVG 파일들을 불러옵니다.
import placeDefault from "../assets/list_place_default.svg";
import placeSelect from "../assets/list_place_select.svg";
import musicDefault from "../assets/list_music_default.svg";
import musicSelect from "../assets/list_music_select.svg";
import bookDefault from "../assets/list_book_default.svg";
import bookSelect from "../assets/list_book_select.svg";
import movieDefault from "../assets/list_movie_default.svg";
import movieSelect from "../assets/list_movie_select.svg";
import performanceDefault from "../assets/list_performance_default.svg";
import performanceSelect from "../assets/list_performance_select.svg";
import etcDefault from "../assets/list_etc_default.svg";
import etcSelect from "../assets/list_etc_select.svg";

// --- Base Button Component ---
// 중복 코드를 방지하기 위한 내부 공통 템플릿입니다.
function BaseCategoryButton({ isActive, onClick, label, defaultImg, selectImg }) {
  return (
    <button
      onClick={onClick}
      className="relative outline-none cursor-pointer transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
      aria-label={`${label} 카테고리 선택`}
    >
      <img
        src={isActive ? selectImg : defaultImg}
        alt={`${label} 카테고리`}
        className="w-[167px] h-[120px] object-contain"
      />
    </button>
  );
}

// --- Exported Components ---

export default function PlaceCategoryButton({ isActive = false, onClick }) {
  return (
    <BaseCategoryButton
      isActive={isActive}
      onClick={onClick}
      label="장소"
      defaultImg={placeDefault}
      selectImg={placeSelect}
    />
  );
}

export function MusicCategoryButton({ isActive = false, onClick }) {
  return (
    <BaseCategoryButton
      isActive={isActive}
      onClick={onClick}
      label="음악"
      defaultImg={musicDefault}
      selectImg={musicSelect}
    />
  );
}

export function BookCategoryButton({ isActive = false, onClick }) {
  return (
    <BaseCategoryButton
      isActive={isActive}
      onClick={onClick}
      label="도서"
      defaultImg={bookDefault}
      selectImg={bookSelect}
    />
  );
}

export function MovieCategoryButton({ isActive = false, onClick }) {
  return (
    <BaseCategoryButton
      isActive={isActive}
      onClick={onClick}
      label="영화"
      defaultImg={movieDefault}
      selectImg={movieSelect}
    />
  );
}


export function PerformanceCategoryButton({ isActive = false, onClick }) {
  return (
    <BaseCategoryButton
      isActive={isActive}
      onClick={onClick}
      label="공연"
      defaultImg={performanceDefault}
      selectImg={performanceSelect}
    />
  );
}


export function EtcCategoryButton({ isActive = false, onClick }) {
  return (
    <BaseCategoryButton
      isActive={isActive}
      onClick={onClick}
      label="기타"
      defaultImg={etcDefault}
      selectImg={etcSelect}
    />
  );
}