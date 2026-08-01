import { useState } from "react";
import { motion } from "framer-motion";

// --- Mock API Service ---
const openGuestbookAPI = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === "deleted-id") return reject({ status: 404 });

      resolve({
        title: "코인세탁방 24시",
        subtitle: "서울 마포구 연남동",
        thumbnail: null,
        guestbookCount: 12,
      });
    }, 600);
  });
};

// --- Component ---
export default function GuestbookCard({
  id,
  category,
  initialDate,
  onRefresh,
  onFlip,
  compact = false,
  disabled = false,
  content,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleCardTap = async () => {
    if (disabled || isFlipped || isLoading) return;

    setIsLoading(true);
    try {
      const response = content ?? (await openGuestbookAPI(id));
      setData(response);
      setIsFlipped(true);

      if (onFlip) onFlip(id);
    } catch (error) {
      if (error.status === 404) {
        alert("사라진 방명록이에요.");
        onRefresh();
      } else {
        alert("오류가 발생했습니다. 다시 시도해주세요.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 카테고리 한글명 매핑
  const categoryLabel =
    {
      PLACE: "장소",
      BOOK: "도서",
      MUSIC: "음악",
      MOVIE: "영화",
      SHOW: "공연",
    }[category] || "콘텐츠";

  // 디자인 시스템 기반: 카테고리별 뒷면(Flip) 배경색 확실하게 매핑 (수정됨: --color- 접두사 추가)
  const categoryBgColor =
    {
      PLACE: "var(--color-key-place-500)",
      BOOK: "var(--color-key-book-500)",
      MUSIC: "var(--color-key-music-500)",
      MOVIE: "var(--color-key-movie-500)",
      SHOW: "var(--color-key-show-500)",
    }[category] || "var(--color-key-place-500)";

  return (
    // 피그마 스펙: width 320px, height 470px
    <div
      className={`relative [perspective:1000px] ${disabled ? "cursor-default" : "cursor-pointer"} ${
        compact ? "w-full aspect-[126/184]" : "w-[320px] h-[470px]"
      }`}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
        onClick={disabled ? undefined : handleCardTap}
      >
        {/* ==========================================
            FRONT: 블라인드 카드 
            ========================================== */}
        <div className={`absolute inset-0 [backface-visibility:hidden] card-blind w-full h-full rounded-[4.14px] flex flex-col items-center ${compact ? "gap-2 p-2.5" : "gap-[16.57px] pt-[28px] px-[24px] pb-[20px]"}`}>
          <div className="w-full flex-1 border-2 border-dashed border-[#b0a89f]/40 rounded flex items-center justify-center">
            {/* 수정됨: --ink-soft -> --color-ink-soft */}
            <span className={`${compact ? "caption-12-r" : "heading-20-b"} text-[var(--color-ink-soft)] opacity-60`}>
              콘텐츠 영역
            </span>
          </div>

          {/* 수정됨: --ink-soft -> --color-ink-soft */}
          <div className="body-13-r text-[var(--color-ink-soft)]">
            <span className="body-13-r text-[var(--color-ink-soft)]">
              {initialDate}
            </span>
          </div>
        </div>

        {/* ==========================================
            BACK: 리빌 카드 (색상 동적 적용)
            ========================================== */}
        <div
          // 수정됨: --ink-base -> --color-ink-base
          className={`absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] w-full h-full rounded-[4.14px] flex flex-col items-center text-[var(--color-ink-base)] shadow-xl ${compact ? "gap-2 p-2.5" : "gap-[16.57px] pt-[28px] px-[24px] pb-[20px]"}`}
          style={{ backgroundColor: categoryBgColor }} // CSS 변수 직접 주입
        >
          {/* 카테고리 뱃지 */}
          {/* 수정됨: --ink-base -> --color-ink-base */}
          <div className={`${compact ? "px-2 py-0.5" : "px-4 py-1"} rounded-full border border-[var(--color-ink-base)]/20 flex items-center justify-center shrink-0`}>
            <span className={compact ? "caption-12-r" : "caption-12-sb"}>{categoryLabel}</span>
          </div>

          {/* 썸네일 */}
          <div className={`${compact ? "w-full min-h-0 flex-1 rounded-md" : "w-[200px] h-[200px] rounded-xl shrink-0"} bg-[#d9d9d9] flex items-center justify-center overflow-hidden shadow-inner bg-black/5`}>
            {data?.thumbnail && (
              <img
                src={data.thumbnail}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* 콘텐츠 정보 */}
          <div className="flex flex-col items-center shrink-0">
            <h2 className={`${compact ? "body-13-sb leading-tight" : "heading-26-b mb-1"} text-center`}>{data?.title}</h2>
            <p className={`${compact ? "caption-12-r leading-tight" : "body-15-m"} opacity-75 text-center`}>{data?.subtitle}</p>
          </div>

          {/* 하단 메타 정보 */}
          <div className={`${compact ? "hidden" : "w-full flex"} flex-col items-center mt-auto shrink-0`}>
            {/* JSX 조건부 렌더링 문법 오류 수정 (&& 추가) */}
            {category === "MOVIE" && (
              <p className="caption-12-r opacity-60 mb-1">
                Data provided by TMDB
              </p>
            )}
            <p className="body-15-sb">
              이 콘텐츠에 남겨진 방명록 {data?.guestbookCount}개
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
